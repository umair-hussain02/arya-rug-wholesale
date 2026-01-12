import nodemailer from "nodemailer"

interface ContactFormData {
  name: string
  email: string
  phone: string
  company: string
  subject: string
  message: string
}

let transporter: nodemailer.Transporter | null = null

function getTransporter() {
  if (transporter) return transporter

  const gmailUser = process.env.GMAIL_USER
  const gmailPassword = process.env.GMAIL_PASSWORD

  if (!gmailUser || !gmailPassword) {
    console.warn(
      "Gmail credentials not configured. Email sending will not work. Set GMAIL_USER and GMAIL_PASSWORD environment variables.",
    )
    return null
  }

  transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailPassword,
    },
  })

  return transporter
}

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 })
    }

    const transporter = getTransporter()

    if (!transporter) {
      // In development without email configured, still return success
      console.log("Contact form submitted (email not configured):", data)
      return Response.json({ success: true, message: "Message received. We will contact you soon." })
    }

    // Email to admin
    const adminMailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.CONTACT_EMAIL_TO || process.env.GMAIL_USER,
      subject: `New Contact Form Submission: ${data.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
        <p><strong>Company:</strong> ${data.company || "Not provided"}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <h3>Message:</h3>
        <p>${data.message.replace(/\n/g, "<br />")}</p>
      `,
    }

    // Email to customer
    const customerMailOptions = {
      from: process.env.GMAIL_USER,
      to: data.email,
      subject: "We received your message - Rug Catalog",
      html: `
        <h2>Thank You!</h2>
        <p>Hi ${data.name},</p>
        <p>We have received your message and will get back to you within 24 business hours.</p>
        <p><strong>Your message details:</strong></p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, "<br />")}</p>
        <hr />
        <p>Best regards,<br />Rug Catalog Team</p>
      `,
    }

    // Send emails
    await Promise.all([transporter.sendMail(adminMailOptions), transporter.sendMail(customerMailOptions)])

    return Response.json({ success: true, message: "Message sent successfully" })
  } catch (error) {
    console.error("Contact form error:", error)
    return Response.json({ error: "Failed to send message. Please try again later." }, { status: 500 })
  }
}
