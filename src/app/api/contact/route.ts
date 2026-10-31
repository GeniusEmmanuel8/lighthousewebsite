import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { cleanText, clientKey, escapeHtml, isEmail, isRateLimited } from '@/lib/security';

const MAX_NAME = 100;
const MAX_MESSAGE = 5000;

export async function POST(request: NextRequest) {
  try {
    // Rate limit: 5 submissions per 10 minutes per client
    if (isRateLimited(`email:${clientKey(request)}`, 5, 10 * 60 * 1000)) {
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
    const email = cleanText(fields.email, 254);
    const message = cleanText(fields.message, MAX_MESSAGE, true);

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required (message up to 5000 characters)' },
        { status: 400 }
      );
    }

    if (!isEmail(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Credentials must be configured; there are no fallback values
    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_PASS;
    if (!gmailUser || !gmailPass) {
      console.error('Contact form: GMAIL_USER / GMAIL_PASS are not configured');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact the church directly.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: gmailUser, pass: gmailPass },
    });

    // All user-supplied values are escaped before being placed in HTML
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\r?\n/g, '<br>');

    await transporter.sendMail({
      from: gmailUser,
      to: process.env.CONTACT_TO_EMAIL || gmailUser,
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a; border-bottom: 3px solid #fbbf24; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #fbbf24;">
              ${safeMessage}
            </div>
          </div>

          <div style="background: #dbeafe; padding: 15px; border-radius: 5px; border-left: 4px solid #1e3a8a;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              <strong>Submitted:</strong> ${new Date().toLocaleString()}
            </p>
          </div>

          <div style="margin-top: 30px; padding: 20px; background: #fef3c7; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #92400e; font-size: 14px;">
              This message was sent from the Lighthouse Atlanta Church contact form.
            </p>
          </div>
        </div>
      `,
    });

    // Do not log names, emails or message text (personal data)
    console.log('Contact form submission sent', { timestamp: new Date().toISOString() });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message! We will get back to you soon.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    if ((error as { code?: string }).code === 'EAUTH') {
      return NextResponse.json(
        { error: 'Email service not configured. Please contact the church directly.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Something went wrong. Please try again later or email us at info@lighthouseatlanta.com' },
      { status: 500 }
    );
  }
}
