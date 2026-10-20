import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Basic honeypot + rate limiting awareness
interface EnquiryBody {
  fullName: string;
  phone: string;
  email?: string;
  projectType: string;
  projectLocation: string;
  estimatedBudget?: string;
  projectDetails: string;
  preferredContact: string;
  // honeypot
  website?: string;
}

function validateBody(body: EnquiryBody): string | null {
  if (body.website) return "Bot detected"; // honeypot
  if (!body.fullName?.trim()) return "Full name is required";
  if (!body.phone?.trim()) return "Phone number is required";
  if (body.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email))
    return "Invalid email address";
  if (!body.projectType?.trim()) return "Project type is required";
  if (!body.projectLocation?.trim()) return "Project location is required";
  if (!body.projectDetails?.trim()) return "Project details are required";
  if (!body.preferredContact?.trim()) return "Preferred contact method is required";
  // Length limits
  if (body.fullName.length > 120) return "Name too long";
  if (body.projectDetails.length > 3000) return "Project details too long";
  return null;
}

function buildEmailHtml(data: EnquiryBody): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><style>
  body { font-family: Arial, sans-serif; color: #1C1C1E; background: #F8F6F3; margin: 0; padding: 0; }
  .container { max-width: 580px; margin: 32px auto; background: #fff; border-radius: 10px; border: 1px solid #E8E4DF; overflow: hidden; }
  .header { background: #1C1C1E; padding: 28px 32px; }
  .header h1 { color: #fff; font-size: 20px; margin: 0; font-weight: 600; }
  .header p { color: #A87C4F; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; margin: 4px 0 0; }
  .body { padding: 28px 32px; }
  .row { margin-bottom: 18px; }
  .label { font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #9E9896; margin-bottom: 4px; }
  .value { font-size: 14px; color: #1C1C1E; line-height: 1.5; }
  .details-box { background: #F8F6F3; border: 1px solid #E8E4DF; border-radius: 6px; padding: 14px; font-size: 14px; color: #4A4744; line-height: 1.6; }
  .footer { background: #F8F6F3; padding: 16px 32px; border-top: 1px solid #E8E4DF; font-size: 11px; color: #9E9896; }
  .badge { display: inline-block; padding: 3px 10px; background: #F5EDE2; color: #A87C4F; border-radius: 20px; font-size: 11px; font-weight: 600; border: 1px solid #E8D9C5; }
</style></head>
<body>
<div class="container">
  <div class="header">
    <h1>New Project Enquiry</h1>
    <p>Everwork Construction — Website Enquiry Form</p>
  </div>
  <div class="body">
    <div class="row">
      <div class="label">Full Name</div>
      <div class="value">${escHtml(data.fullName)}</div>
    </div>
    <div class="row">
      <div class="label">Phone Number</div>
      <div class="value">${escHtml(data.phone)}</div>
    </div>
    ${data.email ? `<div class="row"><div class="label">Email Address</div><div class="value">${escHtml(data.email)}</div></div>` : ""}
    <div class="row">
      <div class="label">Project Type</div>
      <div class="value"><span class="badge">${escHtml(data.projectType)}</span></div>
    </div>
    <div class="row">
      <div class="label">Project Location</div>
      <div class="value">${escHtml(data.projectLocation)}</div>
    </div>
    ${data.estimatedBudget ? `<div class="row"><div class="label">Estimated Budget</div><div class="value">${escHtml(data.estimatedBudget)}</div></div>` : ""}
    <div class="row">
      <div class="label">Preferred Contact Method</div>
      <div class="value">${escHtml(data.preferredContact)}</div>
    </div>
    <div class="row">
      <div class="label">Project Details</div>
      <div class="details-box">${escHtml(data.projectDetails).replace(/\n/g, "<br>")}</div>
    </div>
  </div>
  <div class="footer">
    Submitted via everworkconstruction.com contact form · Reply directly to this email to respond to the enquirer.
  </div>
</div>
</body>
</html>
  `.trim();
}

function escHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  let body: EnquiryBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const validationError = validateBody(body);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  // Nodemailer transporter — configure via environment variables
  // Add these to .env.local:
  //   SMTP_HOST=smtp.gmail.com
  //   SMTP_PORT=587
  //   SMTP_USER=your-gmail@gmail.com
  //   SMTP_PASS=your-app-password
  //   SMTP_FROM=your-gmail@gmail.com
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const replyTo = body.email
    ? `${body.fullName} <${body.email}>`
    : undefined;

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.ENQUIRY_RECIPIENT_EMAIL,
      replyTo,
      subject: `New Enquiry — ${body.projectType} | ${body.projectLocation} — ${body.fullName}`,
      html: buildEmailHtml(body),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
