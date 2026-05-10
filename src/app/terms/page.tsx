import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Mail, ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";

export const metadata: Metadata = {
  title: "Terms of Service | Gwin Bookkeeping LLC",
  description:
    "Review the Terms of Service for Gwin Bookkeeping LLC. Understand the agreement that governs our professional bookkeeping services.",
  alternates: { canonical: "/terms" },
};

const EFFECTIVE_DATE = "May 10, 2025";
const BUSINESS_EMAIL = "jerri.Gwin@protonmail.com";
const BUSINESS_WEBSITE = "gwinhbookkeeping.com";

const sections = [
  {
    id: "services",
    heading: "Services",
    body: [
      "Gwin Bookkeeping LLC provides bookkeeping and financial management services to small businesses and sole proprietors, as described on our website and in any individual service agreement or engagement letter we enter into with you.",
      "The specific scope of services, pricing, and deliverables will be outlined in your service agreement. These Terms govern the overall relationship; your service agreement governs the specifics of each engagement.",
      "We reserve the right to decline or discontinue services if a project falls outside our area of expertise, or if continuing would compromise our professional standards.",
    ],
  },
  {
    id: "client-responsibilities",
    heading: "Client Responsibilities",
    body: [
      "To enable us to perform our services accurately, you agree to provide complete, accurate, and timely financial records, documents, and information as reasonably requested. We rely on the information you provide; we are not responsible for errors resulting from incomplete or inaccurate data.",
      "You are responsible for the accuracy of underlying business transactions and for maintaining source documents (invoices, receipts, bank statements) required by law. Our bookkeeping does not constitute a substitute for an audit, legal advice, or tax filing preparation unless explicitly agreed in writing.",
      "You agree to respond to communications in a reasonable timeframe so we can meet agreed-upon deadlines.",
    ],
  },
  {
    id: "payment",
    heading: "Payment Terms",
    body: [
      "Fees for our services are outlined on our Pricing page and/or in your individual service agreement. Invoices are issued monthly unless otherwise agreed. Payment is due within 15 days of the invoice date.",
      "We reserve the right to pause or suspend services on accounts with overdue balances. A late fee of 1.5% per month may be applied to invoices unpaid after 30 days.",
      "Pricing is subject to change with 30 days' written notice. Changes will not affect fees already locked in an active service agreement.",
    ],
  },
  {
    id: "confidentiality",
    heading: "Confidentiality",
    body: [
      "We treat all client financial information as strictly confidential. We will not disclose your business or personal financial data to any third party without your written consent, except as required by law or to provide the services (e.g., sharing with QuickBooks Online).",
      "This obligation of confidentiality continues after our engagement ends.",
    ],
  },
  {
    id: "intellectual-property",
    heading: "Intellectual Property",
    body: [
      "Financial records, reports, and other deliverables we produce for you using your data are yours. You retain full ownership of your financial data at all times.",
      "Any proprietary tools, templates, or workflows we use to deliver services remain our property. These Terms do not transfer any intellectual property rights in our internal methods or systems.",
    ],
  },
  {
    id: "limitation-of-liability",
    heading: "Limitation of Liability",
    body: [
      "Our services are performed in good faith based on the information you provide. Gwin Bookkeeping LLC is not liable for errors, penalties, or losses arising from inaccurate, incomplete, or untimely information supplied by you.",
      "To the fullest extent permitted by applicable law, our total liability for any claim arising from our services is limited to the fees paid by you in the three months preceding the claim.",
      "We are not liable for indirect, incidental, or consequential damages of any kind. Nothing in these Terms limits liability for gross negligence or willful misconduct.",
    ],
  },
  {
    id: "termination",
    heading: "Termination",
    body: [
      "Either party may terminate our engagement with 30 days' written notice. You remain responsible for fees owed for services performed up to the termination date.",
      "We reserve the right to terminate immediately if you breach these Terms, provide fraudulent information, or create a situation that puts us in conflict with professional or legal obligations.",
      "Upon termination, we will provide you with a final copy of your records in a standard format and promptly return any original documents you have provided.",
    ],
  },
  {
    id: "governing-law",
    heading: "Governing Law",
    body: [
      "These Terms are governed by the laws of the State of New Jersey, without regard to conflict-of-law principles. Any disputes will be resolved in the appropriate courts of New Jersey.",
      "If any provision of these Terms is found unenforceable, the remaining provisions remain in full effect.",
    ],
  },
  {
    id: "changes",
    heading: "Changes to These Terms",
    body: [
      "We may update these Terms from time to time. When we do, we will update the effective date above and, where material changes are made, notify active clients via email.",
      "Continued use of our services after any changes constitutes acceptance of the updated Terms.",
    ],
  },
];

export default function TermsPage() {
  return (
    <PageLayout>

      {/* ── PAGE HEADER ─────────────────────────────────────────────────────── */}
      <section
        aria-label="Terms of Service header"
        className="section-padding"
        style={{
          background: "linear-gradient(160deg, var(--color-navy) 0%, var(--color-navy-light) 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
            style={{
              backgroundColor: "rgba(124,154,126,0.2)",
              color: "var(--color-sage-light)",
              border: "1px solid rgba(124,154,126,0.3)",
            }}
          >
            <FileText className="w-3.5 h-3.5" aria-hidden="true" />
            Legal
          </div>
          <h1
            className="font-bold text-white mb-4"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1.2,
            }}
          >
            Terms of Service
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            Effective date: {EFFECTIVE_DATE} &nbsp;·&nbsp; {BUSINESS_WEBSITE}
          </p>
        </div>
      </section>

      {/* ── INTRO ───────────────────────────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
            These Terms of Service (&ldquo;Terms&rdquo;) describe the agreement between you and Gwin Bookkeeping LLC
            when you use our website or engage our bookkeeping services. Please read them carefully. By working
            with us, you agree to these Terms. If you have any questions, don&apos;t hesitate to{" "}
            <Link
              href="/contact"
              className="font-medium underline underline-offset-2"
              style={{ color: "var(--color-navy)" }}
            >
              contact us
            </Link>{" "}
            before engaging our services.
          </p>
        </div>
      </section>

      {/* ── TERMS SECTIONS ──────────────────────────────────────────────────── */}
      <section aria-label="Terms of service details" className="pb-16" style={{ backgroundColor: "white" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map(({ id, heading, body }, index) => (
              <div
                key={id}
                id={id}
                className="pb-12 border-b"
                style={{ borderColor: index < sections.length - 1 ? "var(--color-border)" : "transparent" }}
              >
                <h2
                  className="font-bold text-xl mb-5"
                  style={{
                    color: "var(--color-navy)",
                    fontFamily: "var(--font-playfair), Georgia, serif",
                  }}
                >
                  {index + 1}. {heading}
                </h2>
                <div className="space-y-4">
                  {body.map((paragraph, i) => (
                    <p key={i} className="text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ─────────────────────────────────────────────────────── */}
      <section
        aria-label="Contact for terms questions"
        className="section-padding"
        style={{ backgroundColor: "var(--color-sage-pale)" }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-5"
            style={{ backgroundColor: "var(--color-sage)", color: "white" }}
            aria-hidden="true"
          >
            <Mail className="w-6 h-6" />
          </div>
          <h2
            className="font-bold text-2xl mb-3"
            style={{ color: "var(--color-navy)", fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Questions About These Terms?
          </h2>
          <p className="text-base mb-8" style={{ color: "var(--color-text-secondary)" }}>
            We&apos;re happy to clarify anything here. Reach out at{" "}
            <a
              href={`mailto:${BUSINESS_EMAIL}`}
              className="font-medium underline underline-offset-2"
              style={{ color: "var(--color-navy)" }}
            >
              {BUSINESS_EMAIL}
            </a>{" "}
            or use our contact page.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
            Contact Us
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

    </PageLayout>
  );
}
