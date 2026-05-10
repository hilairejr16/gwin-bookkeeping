/**
 * Gwin Bookkeeping LLC — Contact Page
 * Secure contact form + Calendly booking integration.
 */

import type { Metadata } from "next";
import { Mail, MapPin, Clock, Calendar } from "lucide-react";
import LinkedInIcon from "@/components/ui/LinkedInIcon";
import PageLayout from "@/components/layout/PageLayout";
import { BUSINESS } from "@/lib/constants";
import ContactForm from "@/components/shared/ContactForm";

export const metadata: Metadata = {
  title: "Contact Gwin Bookkeeping LLC | Book a Free Consultation",
  description:
    "Get in touch with Gwin Bookkeeping LLC. Book a free 30-minute consultation, send a message, or connect on LinkedIn. Serving New Jersey small businesses remotely.",
  alternates: { canonical: "/contact" },
};

// ── Local Business Schema for Contact Page ────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "Gwin Bookkeeping LLC",
  url: "https://gwinhbookkeeping.com",
  email: BUSINESS.email,
  areaServed: { "@type": "State", name: "New Jersey" },
  contactPoint: {
    "@type": "ContactPoint",
    email: BUSINESS.email,
    contactType: "customer service",
    availableLanguage: "English",
  },
};

export default function ContactPage() {
  return (
    <PageLayout>
      {/* ── Local Business Schema ────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* ── PAGE HEADER ───────────────────────────────────────────────────── */}
      <section aria-label="Contact page header" className="section-padding"
        style={{ background: "linear-gradient(160deg, var(--color-navy) 0%, var(--color-navy-light) 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
            style={{ backgroundColor: "rgba(124,154,126,0.2)", color: "var(--color-sage-light)", border: "1px solid rgba(124,154,126,0.3)" }}>
            <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
            Let&apos;s Connect
          </div>
          <h1 className="font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.2 }}>
            Ready to Get Started?
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
            Book a free 30-minute consultation or send us a message. We&apos;ll respond
            within one business day.
          </p>
        </div>
      </section>

      {/* ── CONTACT CONTENT ───────────────────────────────────────────────── */}
      <section aria-labelledby="contact-heading" className="section-padding" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* ── LEFT: Contact Info ─────────────────────────────────────── */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 id="contact-heading" className="section-title mb-2" style={{ fontSize: "1.75rem" }}>
                  Get in Touch
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  We&apos;d love to hear about your business. Fill out the form or use
                  one of the options below to connect with us.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: BUSINESS.email,
                    href: `mailto:${BUSINESS.email}`,
                    desc: "We respond within 1 business day",
                  },
                  {
                    icon: LinkedInIcon,
                    label: "LinkedIn",
                    value: "Jerrica Gwin",
                    href: BUSINESS.linkedin,
                    desc: "Connect professionally",
                    external: true,
                  },
                  {
                    icon: MapPin,
                    label: "Service Area",
                    value: "New Jersey & Remote Nationwide",
                    href: null,
                    desc: "We work 100% remotely",
                  },
                  {
                    icon: Clock,
                    label: "Response Time",
                    value: "Within 1 Business Day",
                    href: null,
                    desc: "Monday – Friday",
                  },
                ].map(({ icon: Icon, label, value, href, desc, external }) => (
                  <div
                    key={label}
                    className="flex items-start gap-4 p-4 rounded-xl"
                    style={{ backgroundColor: "white", boxShadow: "var(--shadow-card)" }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "var(--color-sage-pale)" }}
                      aria-hidden="true"
                    >
                      <Icon className="w-5 h-5" style={{ color: "var(--color-sage-dark)" }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "var(--color-text-muted)", letterSpacing: "0.06em" }}>
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noopener noreferrer" : undefined}
                          className="font-semibold text-sm hover:underline"
                          style={{ color: "var(--color-navy)" }}
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="font-semibold text-sm" style={{ color: "var(--color-navy)" }}>{value}</p>
                      )}
                      <p className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)" }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Calendly Booking Widget */}
              <div
                className="card p-6"
                style={{ backgroundColor: "white" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-navy)" }}
                    aria-hidden="true"
                  >
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "var(--color-navy)" }}>Book Online</p>
                    <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>Free 30-minute consultation</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-text-secondary)" }}>
                  Prefer to schedule directly? Use our online booking calendar to pick a
                  time that works for you.
                </p>
                <a
                  href={BUSINESS.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center block"
                  aria-label="Book a consultation on Calendly (opens in new tab)"
                >
                  Open Booking Calendar
                </a>
                <p className="text-xs text-center mt-3" style={{ color: "var(--color-text-muted)" }}>
                  Powered by Calendly • No account required
                </p>
              </div>
            </div>

            {/* ── RIGHT: Contact Form ────────────────────────────────────── */}
            <div className="lg:col-span-3">
              <div
                className="card p-8"
                style={{ backgroundColor: "white" }}
              >
                <h2 className="font-bold text-xl mb-2" style={{ color: "var(--color-navy)", fontFamily: "var(--font-playfair), Georgia, serif" }}>
                  Send Us a Message
                </h2>
                <p className="text-sm mb-6" style={{ color: "var(--color-text-secondary)" }}>
                  Fill out the form below and we&apos;ll get back to you within one business day.
                  All fields marked with * are required.
                </p>

                {/* Secure Contact Form Component */}
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCAL SEO SECTION ─────────────────────────────────────────────── */}
      <section aria-label="Service area information" className="section-padding" style={{ backgroundColor: "var(--color-sage-pale)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-4">Serving New Jersey &amp; Beyond</h2>
          <p className="section-subtitle mx-auto text-center mb-8">
            Based in New Jersey, we serve small businesses across the state and nationwide
            through our fully remote bookkeeping services.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Essex County, NJ",
              "Morris County, NJ",
              "Bergen County, NJ",
              "Union County, NJ",
              "Middlesex County, NJ",
              "Monmouth County, NJ",
              "Hudson County, NJ",
              "Somerset County, NJ",
              "& Nationwide Remote",
            ].map((area) => (
              <span
                key={area}
                className="badge badge-sage"
                aria-label={`Serving ${area}`}
              >
                <MapPin className="w-3 h-3" aria-hidden="true" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
