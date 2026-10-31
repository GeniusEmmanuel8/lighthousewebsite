import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';
import { cleanText, clientKey, isPhone, isRateLimited } from '@/lib/security';

const MAX_NAME = 100;
const MAX_MESSAGE = 500;

export async function POST(request: NextRequest) {
  try {
    // Stricter limit than email because every SMS costs money: 3 per 10 minutes per client
    if (isRateLimited(`sms:${clientKey(request)}`, 3, 10 * 60 * 1000)) {
      return NextResponse.json(
        { error: 'Too many messages. Please wait a few minutes and try again.' },
        { status: 429 }
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }
    const fields = (body ?? {}) as Record<string, unknown>;

    const name = cleanText(fields.name, MAX_NAME);
    const phone = cleanText(fields.phone, 25);
    const message = cleanText(fields.message, MAX_MESSAGE, true);

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: 'Name, phone, and message are required (message up to 500 characters)' },
        { status: 400 }
      );
    }

    if (!isPhone(phone)) {
      return NextResponse.json(
        { error: 'Please enter a valid phone number' },
        { status: 400 }
      );
    }

    // Everything must be configured; there are no fallback phone numbers
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const fromNumber = process.env.TWILIO_PHONE_NUMBER;
    const churchNumber = process.env.CHURCH_PHONE_NUMBER;
    if (!accountSid || !authToken || !fromNumber || !churchNumber) {
      console.error('SMS contact form: Twilio / church phone settings are not configured');
      return NextResponse.json(
        { error: 'SMS service not configured. Please contact the church directly.' },
        { status: 500 }
      );
    }

    const client = twilio(accountSid, authToken);

    const formattedMessage = `New SMS from Lighthouse Church Contact Form:\n\nName: ${name}\nPhone: ${phone}\nMessage: ${message}\n\nSubmitted: ${new Date().toLocaleString()}`;

    const twilioMessage = await client.messages.create({
      body: formattedMessage,
      from: fromNumber,
      to: churchNumber,
    });

    // Log only the message id, not names, phone numbers or message text
    console.log('SMS contact form submission sent', {
      twilioMessageId: twilioMessage.sid,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! We will text you back soon.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('SMS contact form error:', error);

    if ((error as { code?: number }).code === 20003) {
      return NextResponse.json(
        { error: 'SMS service not configured. Please contact the church directly.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Something went wrong. Please try again later or contact the church directly.' },
      { status: 500 }
    );
  }
}
