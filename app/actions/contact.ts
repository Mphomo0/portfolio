'use server'

import nodemailer from 'nodemailer'
import { z } from 'zod'

const contactSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(7, 'Phone number is required'),
  subject: z.string().min(2, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  source: z.enum(['friend', 'social', 'google', 'referral'], {
    message: 'Please select how you found me',
  }),
})

export type ContactState = {
  success: boolean
  error?: string
}

export async function sendEmail(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  try {
    const data = contactSchema.parse({
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      source: formData.get('source'),
    })

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"${data.firstName} ${data.lastName}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: data.email,
      subject: data.subject,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Found via:</strong> ${data.source}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    })

    return { success: true }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.issues[0].message }
    }
    console.error('Email error:', error)
    return { success: false, error: 'Failed to send message' }
  }
}
