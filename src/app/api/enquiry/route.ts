import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MIN_FORM_FILL_MS = 4000;

const requestLog = new Map<string, number[]>();

type EnquiryPayload = {
  name: string;
  phone: string;
  email: string;
  suburb: string;
  message: string;
  productName: string;
  website?: string;
  formStartedAt?: number;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function trimField(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  }

  return request.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const recentRequests =
    requestLog
      .get(ip)
      ?.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS) ?? [];

  if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestLog.set(ip, recentRequests);
    return true;
  }

  recentRequests.push(now);
  requestLog.set(ip, recentRequests);
  return false;
}

function isAllowedOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");

  if (!origin || !host) {
    return true;
  }

  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

function validatePayload(payload: EnquiryPayload) {
  if (payload.website) {
    return "Spam detected.";
  }

  if (
    typeof payload.formStartedAt !== "number" ||
    Number.isNaN(payload.formStartedAt) ||
    Date.now() - payload.formStartedAt < MIN_FORM_FILL_MS
  ) {
    return "Form submitted too quickly.";
  }

  if (!payload.name || !payload.productName || !payload.message) {
    return "Please complete the required fields.";
  }

  if (!payload.email && !payload.phone) {
    return "Please include an email address or phone number.";
  }

  if (payload.name.length > 120 || payload.suburb.length > 120) {
    return "Submitted values are too long.";
  }

  if (
    payload.email.length > 200 ||
    payload.phone.length > 40 ||
    payload.productName.length > 200 ||
    payload.message.length > 5000
  ) {
    return "Submitted values are too long.";
  }

  if (payload.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return "Please enter a valid email address.";
  }

  return null;
}

export async function POST(request: NextRequest) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json(
      { error: "Invalid request origin." },
      { status: 403 },
    );
  }

  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      {
        error:
          "Too many enquiries from this connection. Please try again later.",
      },
      { status: 429 },
    );
  }

  const body = (await request.json()) as Partial<EnquiryPayload>;

  const payload: EnquiryPayload = {
    name: trimField(body.name),
    phone: trimField(body.phone),
    email: trimField(body.email),
    suburb: trimField(body.suburb),
    message: trimField(body.message),
    productName: trimField(body.productName),
    website: trimField(body.website),
    formStartedAt:
      typeof body.formStartedAt === "number" ? body.formStartedAt : Number.NaN,
  };

  const validationError = validatePayload(payload);

  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const smtpSecure = process.env.SMTP_SECURE === "true";
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const toEmail = process.env.LEADS_TO_EMAIL;
  const fromEmail = process.env.LEADS_FROM_EMAIL;

  if (
    !smtpHost ||
    !smtpPort ||
    !smtpUser ||
    !smtpPass ||
    !toEmail ||
    !fromEmail
  ) {
    return NextResponse.json(
      { error: "Email delivery is not configured on the server." },
      { status: 500 },
    );
  }

  const subject = `New website enquiry: ${payload.productName}`;
  const replyTo = payload.email || undefined;
  const safeMessage = escapeHtml(payload.message).replaceAll("\n", "<br />");

  const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; color: #111827;">
      <h2 style="margin-bottom: 16px;">New website enquiry</h2>
      <p><strong>Product:</strong> ${escapeHtml(payload.productName)}</p>
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(payload.phone || "Not provided")}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email || "Not provided")}</p>
      <p><strong>Suburb:</strong> ${escapeHtml(payload.suburb || "Not provided")}</p>
      <p><strong>IP:</strong> ${escapeHtml(ip)}</p>
      <hr style="margin: 20px 0; border: 0; border-top: 1px solid #e5e7eb;" />
      <p><strong>Message:</strong></p>
      <p>${safeMessage}</p>
    </div>
  `;

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `Blake Smart Solutions <${fromEmail}>`,
      to: toEmail,
      subject,
      html,
      replyTo,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send enquiry email", error);

    return NextResponse.json(
      { error: "We could not send your enquiry right now. Please try again." },
      { status: 502 },
    );
  }
}
