/**
 * Gwin Bookkeeping LLC — FAQ Page
 * Comprehensive FAQ with schema markup for Google rich results.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ChevronDown, MessageSquare } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { FAQ_ITEMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ | Bookkeeping Questions Answered | Gwin Bookkeeping LLC",
  description:
    "Answers to common bookkeeping questions — QuickBooks, remote work, pricing, catch-up bookkeeping, communication, industries served, and more. Gwin Bookkeeping LLC, New Jersey.",
  alternates: { canonical: "/faq" },
};

// ── FAQ Structured Data (makes Google show FAQ rich snippets in search results)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <PageLayout>
      {/* ── FAQ Schema ───────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── PAGE HEADER ───────────────────────────────────────────────────── */}
      <section aria-label="FAQ page header" className="section-padding"
        style={{ background: "linear-gradient(160deg, var(--color-navy) 0%, var(--color-navy-light) 100%)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
            style={{ backgroundColor: "rgba(124,154,126,0.2)", color: "var(--color-sage-light)", border: "1px solid rgba(124,154,126,0.3)" }}>
            <MessageSquare className="w-3.5 h-3.5" aria-hidden="true" />
            Common Questions
          </div>
          <h1 className="font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.2 }}>
            Frequently Asked Questions
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
            Get answers to the most common questions about our bookkeeping services,
            our process, and how we work with clients.
          </p>
        </div>
      </section>

      {/* ── FAQ LIST ──────────────────────────────────────────────────────── */}
      <section aria-label="FAQ list" className="section-padding" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Visual hint that items are expandable (native details/summary) */}
          <p className="text-sm text-center mb-8" style={{ color: "var(--color-text-muted)" }}>
            Click any question to read the full answer.
          </p>

          <div className="space-y-3" role="list">
            {FAQ_ITEMS.map((faq, index) => (
              <details
                key={faq.question}
                className="card overflow-hidden group"
                style={{ backgroundColor: "white" }}
                role="listitem"
              >
                <summary
                  className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none font-semibold text-base select-none hover:bg-sage-pale transition-colors duration-150"
                  style={{ color: "var(--color-navy)" }}
                  aria-expanded="false"
                >
                  <span className="flex items-center gap-3">
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{ backgroundColor: "var(--color-sage-pale)", color: "var(--color-sage-dark)" }}
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className="w-5 h-5 flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                    aria-hidden="true"
                    style={{ color: "var(--color-sage)" }}
                  />
                </summary>
                <div
                  className="px-6 pb-6 pt-0"
                  style={{ paddingLeft: "calc(1.5rem + 1.75rem + 0.75rem)" }}
                >
                  <p className="text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── STILL HAVE QUESTIONS CTA ──────────────────────────────────────── */}
      <section aria-label="Contact CTA" className="section-padding" style={{ backgroundColor: "var(--color-sage-pale)" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-0.5 rounded-full mx-auto mb-6" style={{ backgroundColor: "var(--color-gold)" }} aria-hidden="true" />
          <h2 className="section-title mb-4">Still Have Questions?</h2>
          <p className="section-subtitle mx-auto text-center mb-8">
            Don&apos;t see your question answered here? We&apos;re happy to help. Book a free
            consultation or send us a message and we&apos;ll respond within one business day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2 px-8 py-4">
              <Calendar className="w-5 h-5" aria-hidden="true" />
              Book a Free Consultation
            </Link>
            <Link href={`mailto:jerri.Gwin@protonmail.com`} className="btn-secondary inline-flex items-center gap-2 px-8 py-4">
              Send Us an Email
            </Link>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
