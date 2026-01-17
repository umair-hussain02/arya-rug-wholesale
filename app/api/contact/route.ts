import nodemailer from "nodemailer"

type FormType = "contact" | "trial" | "catalog"

interface ContactFormData {
  formType: FormType

  name: string
  email: string

  phone?: string
  company?: string
  subject?: string
  message?: string

  // Trial
  city?: string
  date?: string

  // Catalog
  collectionTitle?: string
}

let transporter: nodemailer.Transporter | null = null

function getTransporter() {
  if (transporter) return transporter

  const gmailUser = process.env.GMAIL_USER
  const gmailPassword = process.env.GMAIL_PASSWORD

  if (!gmailUser || !gmailPassword) {
    console.warn("Email not configured")
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

function emailLayout(content: string) {
  return `
  <div style="font-family:Arial,Helvetica,sans-serif;background:#f8f8f8;padding:40px">
    <div style="max-width:620px;margin:auto;background:#ffffff;border-radius:10px;overflow:hidden">
      
      <div style="padding:24px;text-align:center;border-bottom:1px solid #eee">
        <img src="cid:logo" alt="ARYA RUGS" style="max-width:160px;margin-bottom:10px" />
      </div>

      <div style="padding:32px;color:#333;line-height:1.6">
        ${content}
      </div>

      <div style="padding:20px;background:#fafafa;text-align:center;font-size:12px;color:#777">
        © ${new Date().getFullYear()} Rug Collection · All rights reserved
      </div>
    </div>
  </div>
  `
}

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json()

    if (!data.formType || !data.name || !data.email) {
      console.log("Invalid form submission:", data)
      return Response.json({ error: "Missing required fields" }, { status: 400 })
    }

    if (data.formType === "contact" && (!data.subject || !data.message)) {
      console.log("Invalid contact form submission:", data)
      return Response.json({ error: "Contact form incomplete" }, { status: 400 })
    }

    if (data.formType === "trial" && (!data.phone || !data.city || !data.date)) {
      console.log("Invalid trial form submission:", data)
      return Response.json({ error: "Trial form incomplete" }, { status: 400 })
    }

    if (data.formType === "catalog" && !data.collectionTitle) {
      console.log("Invalid catalog form submission:", data)
      return Response.json({ error: "Catalog request incomplete" }, { status: 400 })
    }

    const transporter = getTransporter()

    if (!transporter) {
      console.log("Form received (email disabled):", data)
      return Response.json({ success: true })
    }

    /* ---------------- ADMIN EMAIL ---------------- */

    const adminContent = `
      <h2 style="margin-bottom:16px">New ${data.formType.toUpperCase()} Submission</h2>

      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ""}
      ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
      ${data.city ? `<p><strong>City:</strong> ${data.city}</p>` : ""}
      ${data.date ? `<p><strong>Preferred Date:</strong> ${data.date}</p>` : ""}
      ${data.collectionTitle ? `<p><strong>Collection:</strong> ${data.collectionTitle}</p>` : ""}
      ${data.subject ? `<p><strong>Subject:</strong> ${data.subject}</p>` : ""}

      ${data.message ? `<hr /><p>${data.message.replace(/\n/g, "<br/>")}</p>` : ""}
    `

    /* ---------------- CUSTOMER EMAIL ---------------- */

    let customerContent = ""

    if (data.formType === "contact") {
      customerContent = `
        <h2>Thank You for Contacting Us</h2>
        <p>Hi ${data.name},</p>
        <p>We’ve received your message and our team will get back to you within 24 business hours.</p>
      `
    }

    if (data.formType === "trial") {
      customerContent = `
        <h2>Your Trial Request is Received</h2>
        <p>Hi ${data.name},</p>
        <p>Thank you for scheduling an in-home trial. Our team will contact you shortly to confirm your preferred date.</p>
      `
    }

    if (data.formType === "catalog") {
      customerContent = `
        <h2>Your Catalog Request</h2>
        <p>Hi ${data.name},</p>
        <p>Thank you for requesting our catalog for the <strong>${data.collectionTitle}</strong> collection.</p>
        <p>Our team will reach out shortly with the catalog and additional details.</p>
      `
    }

    const adminMail = {
      from: process.env.GMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New ${data.formType.toUpperCase()} Form Submission`,
      html: emailLayout(adminContent),
      attachments: [
        {
          filename: "logo.png",
          path: "https://www.aryarug.com/logov4.png",
          cid: "logo",
        },
      ],
    }

    const customerMail = {
      from: process.env.GMAIL_USER,
      to: data.email,
      subject: "We’ve Received Your Request",
      html: emailLayout(customerContent),
      attachments: [
        {
          filename: "logo.png",
          path: "https://www.aryarug.com/logov4.png",
          cid: "logo",
        },
      ],
    }

    await Promise.all([
      transporter.sendMail(adminMail),
      transporter.sendMail(customerMail),
    ])

    return Response.json({ success: true })
  } catch (error) {
    console.error("Contact API Error:", error)
    return Response.json({ error: "Failed to send message" }, { status: 500 })
  }
}
