// app/api/contact/route.ts

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const {
    name,
    email,
    phone,
    services,
    projectDetails,
    inspiration,
    budget,
    timeline,
    source,
    notes,
  } = await req.json();

  if (!name || !email || !services || !projectDetails) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
    },
  });

  console.log("GMAIL_USER:", process.env.GMAIL_USER); // should print your email

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER, // Sends to your own email
    subject: `New Client Inquiry from ${name}`,
    html: `
      <h2>Client Inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Services Interested In:</strong> ${services}</p>
      <p><strong>Project Details:</strong><br/>${projectDetails}</p>
      <p><strong>Inspiration/References:</strong><br/>${inspiration || 'None'}</p>
      <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
      <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
      <p><strong>Heard About Us From:</strong> ${source || 'Not specified'}</p>
      <p><strong>Additional Notes:</strong><br/>${notes || 'None'}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
