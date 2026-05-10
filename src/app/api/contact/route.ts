/**
 * Gwin Bookkeeping LLC — Secure Contact Form API Route
 *
 * ⚡ Runs on Cloudflare Edge Runtime — fast, global, zero cold starts.
 *
 * Security Measures:
 * ✅ Edge Runtime (Cloudflare Workers-compatible)
 * ✅ Method restriction (POST only)
 * ✅ Rate limiting (5 requests per IP per 15 minutes)
 * ✅ Input validation with Zod (same schema as client-side)
 * ✅ Honeypot field server-side check
 * ✅ Content-Type enforcement
 * ✅ XSS-safe: input is never rendered as HTML
 * ✅ CSRF protection via X-Requested-With header check
 * ✅ Error messages never expose internal details
 * ✅ Sends via Web3Forms (free, secure, no server-side email credentials)
 * ✅ Audit logging for security review
 */

// ── Edge Runtime Declaration ──────────────────────────────────────────────
// This tells Cloudflare Pages to run this route on the Edge (Workers) runtime.
// Required for Cloudflare Pages compatibility.
export const runtime = "edge";

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// ── Rate Limiting Store (in-memory for serverless functions) ──────────────
// For production at scale, use Upstash Redis (free tier available).
// This simple store works perfectly for low-traffic business sites.
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

const RATE_LIMIT_MAX     = 5;           // Max 5 submissions
const RATE_LIMIT_WINDOW  = 15 * 60 * 1000; // Per 15 minutes

function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(identifier);

  if (!record || now > record.resetAt) {
    rateLimitStore.set(identifier, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return true; // Allowed
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false; // Blocked
  }

  record.count++;
  return true; // Allowed
}

// Note: In Edge Runtime, the store is per-isolate. Cloudflare's built-in
// rate limiting (WAF rules) provides additional protection at the network layer.

// ── Validation Schema (mirrors client-side schema) ─────────────────────────
const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2)
    .max(100)
    .regex(/^[a-zA-Z\s\-'.]+$/),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .email()
    .max(254),

  phone: z
    .string()
    .trim()
    .max(20)
    .optional()
    .or(z.literal("")),

  businessName: z
    .string()
    .trim()
    .max(150)
    .optional()
    .or(z.literal("")),

  service: z
    .string()
    .max(50)
    .optional()
    .or(z.literal("")),

  message: z
    .string()
    .trim()
    .min(10)
    .max(2000),
});

// ── Secure Log Helper ──────────────────────────────────────────────────────
// Logs security events without exposing sensitive data
function secureLog(level: "info" | "warn" | "error", event: string, meta?: Record<string, string | number>) {
  const timestamp = new Date().toISOString();
  const safeMessage = `[${timestamp}] [${level.toUpperCase()}] [contact-api] ${event}`;
  if (meta) {
    // Only log non-sensitive metadata
    console[level](safeMessage, JSON.stringify(meta));
  } else {
    console[level](safeMessage);
  }
}

// ── POST Handler ───────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  try {
    // ── 1. Verify Content-Type ────────────────────────────────────────────
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      secureLog("warn", "Invalid content type", { contentType: contentType.substring(0, 50) });
      return NextResponse.json(
        { success: false, message: "Invalid request format." },
        { status: 400 }
      );
    }

    // ── 2. Verify Origin Header (CSRF Protection) ─────────────────────────
    const requestedWith = request.headers.get("x-requested-with");
    if (requestedWith !== "XMLHttpRequest") {
      secureLog("warn", "Missing X-Requested-With header (possible CSRF)");
      return NextResponse.json(
        { success: false, message: "Invalid request." },
        { status: 403 }
      );
    }

    // ── 3. Get Client IP for Rate Limiting ────────────────────────────────
    // Cloudflare sets CF-Connecting-IP; fall back to x-forwarded-for
    const clientIp =
      request.headers.get("cf-connecting-ip") ||
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      "unknown";

    // ── 4. Rate Limiting ──────────────────────────────────────────────────
    if (!checkRateLimit(clientIp)) {
      secureLog("warn", "Rate limit exceeded", { ip: clientIp.substring(0, 20) });
      return NextResponse.json(
        { success: false, message: "Too many requests. Please wait 15 minutes before trying again." },
        {
          status: 429,
          headers: {
            "Retry-After": "900",
            "X-RateLimit-Limit": String(RATE_LIMIT_MAX),
          },
        }
      );
    }

    // ── 5. Parse Request Body ─────────────────────────────────────────────
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      secureLog("warn", "Invalid JSON body");
      return NextResponse.json(
        { success: false, message: "Invalid request data." },
        { status: 400 }
      );
    }

    // ── 6. Validate and Sanitize Input ────────────────────────────────────
    const parseResult = contactSchema.safeParse(body);
    if (!parseResult.success) {
      secureLog("warn", "Validation failed", { issues: parseResult.error.issues.length });
      return NextResponse.json(
        { success: false, message: "Please check your form and try again." },
        { status: 422 }
      );
    }

    const { name, email, phone, businessName, service, message } = parseResult.data;

    // ── 7. Server-Side Honeypot Check ─────────────────────────────────────
    // If the client sent a "website" field, it's a bot
    const rawBody = body as Record<string, unknown>;
    if (rawBody.website && String(rawBody.website).length > 0) {
      secureLog("warn", "Honeypot triggered — bot detected");
      // Return success to confuse bots (don't tell them they were caught)
      return NextResponse.json({ success: true, message: "Message received." });
    }

    // ── 8. Send via Web3Forms ─────────────────────────────────────────────
    // Web3Forms is a secure, free form service. No email credentials stored here.
    // Sign up at web3forms.com and add your access key to .env.local
    const web3FormsKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!web3FormsKey) {
      secureLog("error", "WEB3FORMS_ACCESS_KEY environment variable not set");
      return NextResponse.json(
        { success: false, message: "Service configuration error. Please contact us directly." },
        { status: 500 }
      );
    }

    // Format the email content
    const emailContent = [
      `New Contact Form Submission — Gwin Bookkeeping LLC`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Business: ${businessName || "Not provided"}`,
      `Service Interest: ${service || "Not specified"}`,
      ``,
      `Message:`,
      message,
      ``,
      `---`,
      `Submitted: ${new Date().toISOString()}`,
      `Source: gwinhbookkeeping.com/contact`,
    ].join("\n");

    const formData = {
      access_key:   web3FormsKey,
      subject:      `New Inquiry from ${name} — Gwin Bookkeeping LLC`,
      from_name:    "Gwin Bookkeeping Website",
      reply_to:     email,          // Reply goes directly to client's email
      name:         name,
      email:        email,
      message:      emailContent,
      // Redirect to thank you page (optional — we handle it client-side instead)
      redirect:     "false",
    };

    const web3Response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!web3Response.ok) {
      secureLog("error", "Web3Forms submission failed", { status: web3Response.status });
      return NextResponse.json(
        { success: false, message: "Failed to send message. Please try again or email us directly." },
        { status: 502 }
      );
    }

    const web3Result = await web3Response.json();
    if (!web3Result.success) {
      secureLog("error", "Web3Forms returned failure");
      return NextResponse.json(
        { success: false, message: "Failed to send message. Please email us directly." },
        { status: 502 }
      );
    }

    secureLog("info", "Contact form submission successful");

    // ── 9. Return Success ─────────────────────────────────────────────────
    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully! We'll be in touch within one business day.",
      },
      { status: 200 }
    );

  } catch {
    // Never expose error details to the client
    secureLog("error", "Unexpected error in contact route");
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}

// ── Reject all other HTTP methods ──────────────────────────────────────────
export async function GET() {
  return NextResponse.json({ success: false, message: "Method not allowed." }, { status: 405 });
}
export async function PUT() {
  return NextResponse.json({ success: false, message: "Method not allowed." }, { status: 405 });
}
export async function DELETE() {
  return NextResponse.json({ success: false, message: "Method not allowed." }, { status: 405 });
}
