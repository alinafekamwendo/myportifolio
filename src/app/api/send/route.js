import { NextResponse } from "next/server";
import { Resend } from "resend";
import axios from "axios";

const resend = new Resend(process.env.RESEND_API_KEY);

const brevoApiKey = process.env.NEXT_BREVO_API_KEY;
const fromEmail = process.env.NEXT_EMAIL_FROM;
const fromName = "Alinafe Kamawendo Portifolio";
const apiBaseUrl = "https://api.brevo.com/v3/smtp/email";
 
export async function POST(req, res) {
  const { email, subject, message, fullName } = await req.json();
  console.log(email, subject, message);

  const payload = {
    sender: {
      name: fromName,
      email: fromEmail,
    },
    to: [
      {
        email: fromEmail,
        name: fromName,
      },
      {
        email: email,
        name: fullName,
      },
    ],
    replyTo: {
      email: email,
      name: `${fullName}`,
    },
    subject: `${subject}-Portifolio`,
    htmlContent: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1>${subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>${message}</p>
        </div>
        
      `,
    tags: ["portifolio", fromName],
  };
  
  try {
    console.log("attempting to send email t0:", fromEmail, email);

    const response = await axios.post(apiBaseUrl, payload, {
      headers: {
        "api-key": brevoApiKey,
        "Content-Type": "application/json",
      },
      timeout: 30000,
    });

  
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
