# Email Setup Guide for Contact Form

## Option 1: Gmail SMTP (Recommended for testing)

1. Install nodemailer:
```bash
npm install nodemailer
npm install @types/nodemailer --save-dev
```

2. Enable 2-factor authentication on your Gmail account
3. Generate an App Password:
   - Go to Google Account settings
   - Security > 2-Step Verification > App passwords
   - Generate password for "Mail"

4. Create environment variables in `.env.local`:
```
GMAIL_USER=your-email@gmail.com
GMAIL_PASS=your-app-password
```

## Option 2: SendGrid (Recommended for production)

1. Install SendGrid:
```bash
npm install @sendgrid/mail
```

2. Get API key from SendGrid dashboard
3. Add to `.env.local`:
```
SENDGRID_API_KEY=your-api-key
SENDGRID_FROM_EMAIL=your-verified-sender@domain.com
```

## Option 3: Resend (Modern alternative)

1. Install Resend:
```bash
npm install resend
```

2. Get API key from Resend dashboard
3. Add to `.env.local`:
```
RESEND_API_KEY=your-api-key
```

## Option 4: AWS SES

1. Install AWS SDK:
```bash
npm install @aws-sdk/client-ses
```

2. Configure AWS credentials
3. Add to `.env.local`:
```
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
```

## Current Implementation

The contact form currently logs submissions to the console. To enable actual email sending, update the API route with your preferred email service.

## Security Notes

- Never commit API keys to version control
- Use environment variables for sensitive data
- Consider rate limiting for the contact form
- Validate and sanitize all input data 