import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, message } = body;

    // Basic validation
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: 'Name, phone, and message are required' },
        { status: 400 }
      );
    }

    // Basic phone number validation (simple check)
    if (phone.length < 10) {
      return NextResponse.json(
        { error: 'Please enter a valid phone number' },
        { status: 400 }
      );
    }

    // Initialize Twilio client
    const client = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );

    // Format the message
    const formattedMessage = `New SMS from Lighthouse Church Contact Form:\n\nName: ${name}\nPhone: ${phone}\nMessage: ${message}\n\nSubmitted: ${new Date().toLocaleString()}`;

    // Send SMS to church phone number
    const twilioMessage = await client.messages.create({
      body: formattedMessage,
      from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio phone number
      to: process.env.CHURCH_PHONE_NUMBER || '+19432649644' // Church phone number
    });

    // Log the SMS submission
    console.log('SMS Contact Form Submission:', {
      name,
      phone,
      message,
      twilioMessageId: twilioMessage.sid,
      timestamp: new Date().toISOString()
    });

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you! We will text you back soon.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('SMS contact form error:', error);
    
    // Check if it's a Twilio authentication error
    if (error.code === 20003) {
      return NextResponse.json(
        { error: 'SMS service not configured. Please call us directly.' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later or call us directly.' },
      { status: 500 }
    );
  }
}
