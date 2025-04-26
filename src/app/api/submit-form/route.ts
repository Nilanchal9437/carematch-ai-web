import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'
import nodemailer from 'nodemailer'

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/carematch'
const NOTIFICATION_EMAIL = 'zlyonsny@gmail.com'

// Email transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Connect to MongoDB
    const client = await MongoClient.connect(MONGODB_URI)
    const db = client.db()
    const submissions = db.collection('submissions')

    // Store submission in database
    const result = await submissions.insertOne({
      ...data,
      createdAt: new Date(),
    })

    // Send email notification
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: NOTIFICATION_EMAIL,
      subject: 'New CareMatch AI Form Submission',
      html: `
        <h2>New Form Submission</h2>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Contact:</strong> ${data.contactInfo}</p>
        <p><strong>Care Type:</strong> ${data.careType?.join(', ')}</p>
        <p><strong>Location:</strong> ${data.preferredLocation}</p>
        <p><strong>Timeline:</strong> ${data.moveInTimeline}</p>
        <hr>
        <p>View full details in the admin dashboard</p>
      `,
    })

    await client.close()

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error processing form submission:', error)
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    )
  }
} 