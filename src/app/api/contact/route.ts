import { NextRequest, NextResponse } from "next/server";

/**
 * Backend for the contact form (src/components/contact-form.tsx). Sends a
 * real email via Resend's REST API — no SDK dependency needed — so the API
 * key never reaches the browser.
 *
 * Setup: copy .env.example to .env.local and set RESEND_API_KEY (get a free
 * one at https://resend.com after signing up — no card needed for the free
 * tier). Until your own domain (growvibe.io) is verified in Resend, emails
 * can only be sent from onboarding@resend.dev and may only deliver
 * reliably to the email address you signed up to Resend with — verify
 * your domain in the Resend dashboard (Domains -> Add Domain, then add the
 * DNS records it gives you at your domain registrar) to send from and to
 * any growvibe.io address. Until RESEND_API_KEY is set, this route returns
 * an honest error instead of pretending the message sent.
 */

const RESEND_URL = "https://api.resend.com/emails";
const DEFAULT_FROM = "GrowVibe Website <onboarding@resend.dev>";
const DEFAULT_TO = "hello@growvibe.io";

// --- Guardrails ---------------------------------------------------------
// Same best-effort, in-memory, per-IP rate limit used by /api/chat — blunts
// abuse/spam on a low-traffic marketing site without needing a shared store.
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 10; // submissions per IP per window
const hits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT_MAX) return true;
  entry.count += 1;
  return false;
}

const MAX_FIELD_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 5000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, maxLength: number): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

// Very small HTML escape so form input can't break out of the email's HTML.
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: "The contact form isn't fully connected yet — please email hello@growvibe.io directly for now." },
      { status: 200 }
    );
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many submissions in a short time. Please try again later, or email hello@growvibe.io directly." },
      { status: 200 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Simple honeypot: a hidden field real visitors never fill in. If it has
  // a value, silently pretend success without sending anything or calling
  // the email API — cheap, effective bot filtering.
  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, MAX_FIELD_LENGTH);
  const email = clean(body.email, MAX_FIELD_LENGTH);
  const phone = clean(body.phone, MAX_FIELD_LENGTH);
  const company = clean(body.company, MAX_FIELD_LENGTH);
  const city = clean(body.city, MAX_FIELD_LENGTH);
  const message = clean(body.message, MAX_MESSAGE_LENGTH);

  if (!name || !email || !phone || !message) {
    return NextResponse.json({ ok: false, error: "Please fill in your name, email, phone number, and message." }, { status: 400 });
  }
  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
  }

  const subject = `New contact form submission from ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    company && `Company: ${company}`,
    city && `City: ${city}`,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <div style="font-family: sans-serif; font-size: 14px; color: #111;">
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
      ${city ? `<p><strong>City:</strong> ${escapeHtml(city)}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
    </div>
  `;

  try {
    const response = await fetch(RESEND_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || DEFAULT_FROM,
        to: [process.env.CONTACT_TO_EMAIL || DEFAULT_TO],
        reply_to: email,
        subject,
        text,
        html,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Resend API error:", response.status, errText);
      return NextResponse.json(
        { ok: false, error: "Sorry, something went wrong sending your message. Please try again or email hello@growvibe.io directly." },
        { status: 200 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json(
      { ok: false, error: "Sorry, something went wrong sending your message. Please try again or email hello@growvibe.io directly." },
      { status: 200 }
    );
  }
}
