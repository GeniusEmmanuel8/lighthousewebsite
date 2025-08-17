import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Create transporter for Gmail SMTP
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER || 'your-email@gmail.com',
        pass: process.env.GMAIL_PASS || 'your-app-password'
      }
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER || 'your-email@gmail.com',
      to: process.env.GMAIL_USER || 'your-email@gmail.com', // Send to church email
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a; border-bottom: 3px solid #fbbf24; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #fbbf24;">
              ${message.replace(/\n/g, '<br>')}
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
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Log the contact form submission
    console.log('Contact Form Submission:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    });

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message! We will get back to you soon.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    // Check if it's an authentication error
    if (error.code === 'EAUTH') {
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