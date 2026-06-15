import { NextResponse } from "next/server";

const brevoApiKey = process.env.NEXT_BREVO_API_KEY;
const fromEmail = process.env.NEXT_EMAIL_FROM;
const fromName = "Alinafe Kamwendo Portfolio";
const apiBaseUrl = "https://api.brevo.com/v3/smtp/email";

export async function POST(req) {
  try {
    const { email, subject, message, fullName } = await req.json();

    if (!email || !subject || !message || !fullName) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const escapeHtml = (str) =>
      str.replace(/[&<>"']/g, (c) =>
        ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
      );

    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);
    const safeName = escapeHtml(fullName);

    const payload = {
      sender: { name: fromName, email: fromEmail },
      to: [
        { email: fromEmail, name: fromName },
        { email, name: safeName },
      ],
      replyTo: { email, name: safeName },
      subject: `${safeSubject} - Portfolio`,
      htmlContent: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1>${safeSubject}</h1>
        <p>Thank you for contacting us!</p>
        <p><strong>From:</strong> ${safeName} (${email})</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      </div>`,
      tags: ["portfolio", fromName],
    };

    const res = await fetch(apiBaseUrl, {
      method: "POST",
      headers: {
        "api-key": brevoApiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
