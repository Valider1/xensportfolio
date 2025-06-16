// app/api/contact/route.ts
import { NextResponse } from "next/server"
import sgMail from "@sendgrid/mail"

// Destructure & assert these env vars exist
const { SENDGRID_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env

if (!SENDGRID_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
  throw new Error(
    "Missing one of SENDGRID_API_KEY, CONTACT_TO_EMAIL, or CONTACT_FROM_EMAIL"
  )
}

sgMail.setApiKey(SENDGRID_API_KEY)

export async function POST(request: Request) {
  const { name, email, message } = await request.json()

  // Validate payload
  if (
    !name ||
    typeof name !== "string" ||
    !email ||
    typeof email !== "string" ||
    !message ||
    typeof message !== "string"
  ) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 })
  }

  try {
    // Build the email, asserting non-null env vars
    const msg = {
      to: CONTACT_TO_EMAIL!,
      from: CONTACT_FROM_EMAIL!,
      replyTo: email,
      subject: `New message from ${name}`,
      text: message,
      html: `<p><strong>From:</strong> ${email}</p><p>${message.replace(
        /\n/g,
        "<br/>"
      )}</p>`,
    }

    await sgMail.send(msg)
    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error("SendGrid error:", err)
    return NextResponse.json({ error: "Error sending email" }, { status: 500 })
  }
}
