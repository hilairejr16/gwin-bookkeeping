import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Mail, ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Gwin Bookkeeping LLC",
  description:
    "Learn how Gwin Bookkeeping LLC collects, uses, and protects your personal and financial information. Your privacy and confidentiality are our priority.",
  alternates: { canonical: "/privacy" },
};

const EFFECTIVE_DATE = "May 10, 2025";
const BUSINESS_EMAIL = "jerri.Gwin@protonmail.com";
const BUSINESS_WEBSITE = "gwinhbookkeeping.com";

const sections = [
  {
    id: "information-we-collect",
    heading: "Information We Collect",
    body: [
      "When you contact us, request a consultation, or engage our services, we may collect personal information such as your name, email address, phone number, and business name.",
      "To perform bookkeeping services, we will also collect financial information including bank statements, transaction records, receipts, payroll data, and other business financial documents you share with us.",
      "Our website may automatically collect standard technical data such as your browser type and pages visited, solely to understand how visitors use the site. We do not sell or share this data.",
    ],
  },
  {
    id: "how-we-use-information",
    heading: "How We Use Your Information",
    body: [
      "We use your information exclusively to provide bookkeeping and financial management services, communicate with you about your account, send invoices and service-related updates, and comply with applicable legal and regulatory requirements.",
      "We do not use your information for marketing to third parties, sell your data to anyone, or share it for any purpose unrelated to delivering our services.",
    ],
  },
  {
    id: "how-we-protect-information",
    heading: "How We Protect Your Information",
    body: [
      "We take the security of your financial information seriously. Client data is stored securely using industry-standard encryption and access controls. Physical documents, where applicable, are kept in locked storage.",
      "We use QuickBooks Online (by Intuit) to manage client books. This platform maintains its own robust security standards. You can review Intuit's privacy practices at intuit.com.",
      "While we employ strong safeguards, no method of electronic transmission or storage is 100% secure. We encourage you to contact us immediately if you believe your information may have been compromised.",
    ],
  },
  {
    id: "third-party-services",
    heading: "Third-Party Services",
    body: [
      "We use a limited number of trusted third-party tools to operate our business, including QuickBooks Online for bookkeeping, and email services for communication. Each of these providers maintains their own privacy policies.",
      "We do not grant third parties access to your financial data except as required to perform services on your behalf or as required by law.",
    ],
  },
  {
    id: "data-retention",
    heading: "Data Retention",
    body: [
      "We retain your financial and personal records for as long as necessary to fulfill our service obligations and meet legal record-keeping requirements — typically seven years, in line with standard accounting practice.",
      "When our engagement ends, we will return or securely destroy your documents upon written request, subject to any mandatory retention periods.",
    ],
  },
  {
    id: "your-rights",
    heading: "Your Rights",
    body: [
      "You have the right to request access to the personal information we hold about you, ask us to correct inaccurate information, and request deletion of your data where no legal obligation requires us to keep it.",
      "To exercise any of these rights, please contact us using the information at the bottom of this page. We will respond within a reasonable timeframe.",
    ],
  },
  {
    id: "changes",
    heading: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. When we do, we will update the effective date above. We encourage you to review this page periodically.",
      "Continued use of our services after any changes constitutes your acceptance of the updated policy.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <PageLayout>

      {/* ── PAGE HEADER ─────────────────────────────────────────────────────── */}
      <section
        aria-label="Privacy Policy header"
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
            <Shield className="w-3.5 h-3.5" aria-hidden="true" />
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
            Privacy Policy
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
            At Gwin Bookkeeping LLC, your privacy matters deeply. This policy explains what information we collect,
            why we collect it, and how we keep it safe. We handle your financial data with the same care and
            discretion you&apos;d expect from a trusted financial partner.
          </p>
        </div>
      </section>

      {/* ── POLICY SECTIONS ─────────────────────────────────────────────────── */}
      <section aria-label="Privacy policy details" className="pb-16" style={{ backgroundColor: "white" }}>
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
        aria-label="Contact for privacy questions"
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
            Questions About Your Privacy?
          </h2>
          <p className="text-base mb-8" style={{ color: "var(--color-text-secondary)" }}>
            If you have any questions about this policy or how we handle your data, we&apos;re happy
            to help. You can reach us directly at{" "}
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
