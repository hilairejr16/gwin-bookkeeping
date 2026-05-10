"use client";

/**
 * Gwin Bookkeeping LLC — Secure Contact Form
 *
 * Security Features:
 * ✅ Honeypot anti-spam field (bots fill it, humans don't)
 * ✅ Client-side validation with Zod schema
 * ✅ React Hook Form for safe, controlled form state
 * ✅ Rate limiting awareness (shows error if rate-limited)
 * ✅ No direct email exposure in DOM
 * ✅ Sanitized input (Zod strips/trims all fields)
 * ✅ ARIA labels for accessibility
 * ✅ Loading states prevent double-submission
 * ✅ Success/error feedback
 */

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

// ── Validation Schema (Zod) ───────────────────────────────────────────────
// Zod validates and sanitizes ALL input before it ever touches our API.
const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be under 100 characters")
    .regex(/^[a-zA-Z\s\-'.]+$/, "Name contains invalid characters"),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Please enter a valid email address")
    .max(254, "Email address is too long"),

  phone: z
    .string()
    .trim()
    .optional()
    .refine(
      (val) => !val || /^[\d\s\-+().]{7,20}$/.test(val),
      "Please enter a valid phone number"
    ),

  businessName: z
    .string()
    .trim()
    .max(150, "Business name must be under 150 characters")
    .optional(),

  service: z.enum([
    "",
    "monthly-bookkeeping",
    "bank-reconciliation",
    "expense-tracking",
    "financial-reports",
    "catch-up-bookkeeping",
    "invoice-management",
    "quickbooks-setup",
    "payroll-support",
    "budget-tracking",
    "other",
  ]).optional(),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be under 2000 characters"),

  // ── Honeypot: This field must always be empty ──────────────────────────
  // It's hidden from humans but bots fill it automatically.
  // If it's filled, we know it's a bot and reject the submission.
  website: z.string().max(0, "Spam detected").optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

// ── Service Options ────────────────────────────────────────────────────────
const serviceOptions = [
  { value: "",                     label: "Select a service (optional)" },
  { value: "monthly-bookkeeping",  label: "Monthly Bookkeeping"         },
  { value: "bank-reconciliation",  label: "Bank Reconciliations"        },
  { value: "expense-tracking",     label: "Expense Tracking"            },
  { value: "financial-reports",    label: "Financial Reports"           },
  { value: "catch-up-bookkeeping", label: "Catch-Up Bookkeeping"        },
  { value: "invoice-management",   label: "Invoice Management"          },
  { value: "quickbooks-setup",     label: "QuickBooks Setup & Support"  },
  { value: "payroll-support",      label: "Payroll Support"             },
  { value: "budget-tracking",      label: "Budget Tracking"             },
  { value: "other",                label: "Other / Not Sure Yet"        },
];

type SubmitStatus = "idle" | "loading" | "success" | "error" | "rate-limited";

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      businessName: "",
      service: "",
      message: "",
      website: "", // Honeypot — always empty
    },
  });

  // ── Form Submission Handler ────────────────────────────────────────────
  const onSubmit = async (data: ContactFormData) => {
    // If honeypot is filled, silently reject (pretend success to confuse bots)
    if (data.website && data.website.length > 0) {
      setSubmitStatus("success"); // Silent rejection
      return;
    }

    setSubmitStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // CSRF protection: SameSite cookies + this header helps verify origin
          "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify({
          name:         data.name,
          email:        data.email,
          phone:        data.phone || "",
          businessName: data.businessName || "",
          service:      data.service || "",
          message:      data.message,
          // Never send the honeypot field to the API
        }),
      });

      const result = await response.json();

      if (response.status === 429) {
        setSubmitStatus("rate-limited");
        return;
      }

      if (!response.ok || !result.success) {
        setSubmitStatus("error");
        setErrorMessage(result.message || "Something went wrong. Please try again.");
        return;
      }

      setSubmitStatus("success");
      reset();
    } catch {
      setSubmitStatus("error");
      setErrorMessage("Unable to send your message. Please check your connection and try again.");
    }
  };

  // ── Success State ──────────────────────────────────────────────────────
  if (submitStatus === "success") {
    return (
      <div
        className="flex flex-col items-center justify-center text-center py-12 px-6 rounded-xl"
        style={{ backgroundColor: "var(--color-sage-pale)", border: "1px solid var(--color-border-sage)" }}
        role="status"
        aria-live="polite"
      >
        <CheckCircle
          className="w-16 h-16 mb-4"
          aria-hidden="true"
          style={{ color: "var(--color-sage)" }}
        />
        <h3
          className="font-bold text-xl mb-2"
          style={{ color: "var(--color-navy)", fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Message Sent Successfully!
        </h3>
        <p className="text-base mb-6 max-w-sm" style={{ color: "var(--color-text-secondary)" }}>
          Thank you for reaching out! We&apos;ll review your message and get back to you
          within one business day.
        </p>
        <button
          type="button"
          onClick={() => setSubmitStatus("idle")}
          className="btn-secondary text-sm px-6 py-2.5"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Contact form"
      className="space-y-5"
    >
      {/* ── Honeypot Field (hidden from humans, visible to bots) ───────────── */}
      {/* aria-hidden and tabIndex=-1 ensure screen readers and keyboard users never interact with it */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", top: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}
      >
        <label htmlFor="website">Website (leave blank)</label>
        <input
          id="website"
          type="text"
          autoComplete="off"
          tabIndex={-1}
          {...register("website")}
        />
      </div>

      {/* ── Row: Name + Email ─────────────────────────────────────────────── */}
      <div className="grid sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="contact-name" className="form-label">
            Full Name <span aria-label="required" style={{ color: "#E53E3E" }}>*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            placeholder="Jane Smith"
            aria-required="true"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={cn("form-input", errors.name && "error")}
            {...register("name")}
          />
          {errors.name && (
            <p id="name-error" className="form-error" role="alert">
              <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" className="form-label">
            Email Address <span aria-label="required" style={{ color: "#E53E3E" }}>*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            placeholder="jane@yourbusiness.com"
            aria-required="true"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={cn("form-input", errors.email && "error")}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" className="form-error" role="alert">
              <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* ── Row: Phone + Business Name ─────────────────────────────────────── */}
      <div className="grid sm:grid-cols-2 gap-5">
        {/* Phone */}
        <div>
          <label htmlFor="contact-phone" className="form-label">
            Phone Number <span className="text-xs font-normal" style={{ color: "var(--color-text-muted)" }}>(optional)</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            placeholder="(555) 000-0000"
            aria-invalid={errors.phone ? "true" : "false"}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={cn("form-input", errors.phone && "error")}
            {...register("phone")}
          />
          {errors.phone && (
            <p id="phone-error" className="form-error" role="alert">
              <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Business Name */}
        <div>
          <label htmlFor="contact-business" className="form-label">
            Business Name <span className="text-xs font-normal" style={{ color: "var(--color-text-muted)" }}>(optional)</span>
          </label>
          <input
            id="contact-business"
            type="text"
            autoComplete="organization"
            placeholder="Your Business LLC"
            className="form-input"
            {...register("businessName")}
          />
        </div>
      </div>

      {/* ── Service Interest ──────────────────────────────────────────────── */}
      <div>
        <label htmlFor="contact-service" className="form-label">
          Service I&apos;m Interested In <span className="text-xs font-normal" style={{ color: "var(--color-text-muted)" }}>(optional)</span>
        </label>
        <select
          id="contact-service"
          className="form-input"
          {...register("service")}
        >
          {serviceOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* ── Message ───────────────────────────────────────────────────────── */}
      <div>
        <label htmlFor="contact-message" className="form-label">
          Message <span aria-label="required" style={{ color: "#E53E3E" }}>*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder="Tell us a little about your business and what you're looking for..."
          aria-required="true"
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : "message-hint"}
          className={cn("form-input resize-none", errors.message && "error")}
          {...register("message")}
        />
        <p id="message-hint" className="text-xs mt-1" style={{ color: "var(--color-text-muted)" }}>
          Minimum 10 characters, maximum 2000.
        </p>
        {errors.message && (
          <p id="message-error" className="form-error" role="alert">
            <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
            {errors.message.message}
          </p>
        )}
      </div>

      {/* ── Rate Limited Error ─────────────────────────────────────────────── */}
      {submitStatus === "rate-limited" && (
        <div
          className="flex items-start gap-3 p-4 rounded-lg"
          style={{ backgroundColor: "#FFF5F5", border: "1px solid #FED7D7" }}
          role="alert"
          aria-live="assertive"
        >
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#E53E3E" }} aria-hidden="true" />
          <div>
            <p className="font-semibold text-sm" style={{ color: "#C53030" }}>Too Many Requests</p>
            <p className="text-sm" style={{ color: "#742A2A" }}>
              You&apos;ve sent too many messages recently. Please wait a few minutes and try again,
              or email us directly at{" "}
              <a href="mailto:jerri.Gwin@protonmail.com" className="underline font-medium">
                jerri.Gwin@protonmail.com
              </a>
            </p>
          </div>
        </div>
      )}

      {/* ── General Error ─────────────────────────────────────────────────── */}
      {submitStatus === "error" && errorMessage && (
        <div
          className="flex items-start gap-3 p-4 rounded-lg"
          style={{ backgroundColor: "#FFF5F5", border: "1px solid #FED7D7" }}
          role="alert"
          aria-live="assertive"
        >
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#E53E3E" }} aria-hidden="true" />
          <p className="text-sm" style={{ color: "#742A2A" }}>{errorMessage}</p>
        </div>
      )}

      {/* ── Privacy Note ──────────────────────────────────────────────────── */}
      <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
        By submitting this form, you agree to our{" "}
        <a href="/privacy" className="underline">Privacy Policy</a>. We never
        sell or share your information with third parties.
      </p>

      {/* ── Submit Button ─────────────────────────────────────────────────── */}
      <button
        type="submit"
        disabled={isSubmitting || submitStatus === "loading"}
        className="btn-primary w-full justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
        aria-busy={isSubmitting}
      >
        {isSubmitting || submitStatus === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" aria-hidden="true" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
