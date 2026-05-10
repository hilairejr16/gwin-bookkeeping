/**
 * Gwin Bookkeeping LLC — Services Page
 * Persuasive service descriptions with clear value propositions.
 */

import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  CheckSquare,
  Receipt,
  BarChart2,
  Clock,
  FileText,
  Settings,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
  Calendar,
} from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";

export const metadata: Metadata = {
  title: "Bookkeeping Services | Monthly Bookkeeping, QuickBooks & More | New Jersey",
  description:
    "Comprehensive bookkeeping services for NJ small businesses. Monthly bookkeeping, bank reconciliations, expense tracking, QuickBooks setup, catch-up bookkeeping, payroll support & financial reports.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    id: "monthly-bookkeeping",
    icon: BookOpen,
    title: "Monthly Bookkeeping",
    tagline: "Stay current. Stay confident.",
    description:
      "Consistent, accurate monthly bookkeeping is the foundation of a financially healthy business. We categorize every transaction, reconcile your accounts, and deliver organized, up-to-date records every single month — so you always know exactly where your business stands.",
    features: [
      "Full transaction categorization",
      "Monthly income and expense summary",
      "Accounts organized by category",
      "Seamless QuickBooks integration",
      "Monthly check-in and review",
    ],
    whyItMatters: "Without clean monthly books, you're flying blind. Tax season becomes a nightmare, cash flow surprises catch you off guard, and growth decisions become guesses.",
    color: "var(--color-sage)",
    bgColor: "var(--color-sage-pale)",
  },
  {
    id: "bank-reconciliation",
    icon: CheckSquare,
    title: "Bank Reconciliations",
    tagline: "Every transaction accounted for.",
    description:
      "Bank reconciliation is the process of matching your bookkeeping records to your bank statements to ensure they match perfectly. This critical step catches errors, identifies fraud early, and ensures your financial picture is 100% accurate.",
    features: [
      "Monthly account reconciliation",
      "Transaction discrepancy identification",
      "Error correction and documentation",
      "Credit card reconciliation",
      "Fraud and duplicate detection",
    ],
    whyItMatters: "Unreconciled books lead to costly errors, missed tax deductions, and inaccurate financial reports. Regular reconciliation keeps your finances tight and trustworthy.",
    color: "var(--color-navy)",
    bgColor: "#EEF1F7",
  },
  {
    id: "expense-tracking",
    icon: Receipt,
    title: "Expense Tracking",
    tagline: "Know exactly where every dollar goes.",
    description:
      "We track, categorize, and organize all of your business expenses in real time. Properly tracked expenses mean accurate profit reports, maximum tax deductions, and the ability to identify cost-saving opportunities before they slip by.",
    features: [
      "Real-time expense categorization",
      "Receipt documentation and organization",
      "Business vs. personal expense separation",
      "Vendor payment tracking",
      "Monthly expense trend reporting",
    ],
    whyItMatters: "Most small business owners overpay on taxes simply because their expenses aren't properly documented. Good expense tracking puts money back in your pocket.",
    color: "var(--color-gold-dark)",
    bgColor: "#FDF8EF",
  },
  {
    id: "financial-reports",
    icon: BarChart2,
    title: "Financial Reports",
    tagline: "Data that drives decisions.",
    description:
      "We prepare clear, easy-to-read financial reports including Profit & Loss statements, Balance Sheets, and Cash Flow reports. These reports give you a real-time picture of your business health and the confidence to make smart, data-driven decisions.",
    features: [
      "Monthly Profit & Loss statements",
      "Balance sheet preparation",
      "Cash flow summary",
      "Year-to-date comparisons",
      "Plain-English financial summaries",
    ],
    whyItMatters: "Without accurate financial reports, business owners make decisions based on gut feelings instead of facts. Clear reports mean better strategy, better growth, better outcomes.",
    color: "var(--color-dusty-blue)",
    bgColor: "#EEF3F8",
  },
  {
    id: "catch-up-bookkeeping",
    icon: Clock,
    title: "Catch-Up Bookkeeping",
    tagline: "Get fully caught up — fast.",
    description:
      "Behind on your books? Don't panic. Whether you're a few months or a full year behind, we'll organize, categorize, and reconcile everything to get your financial records completely up to date. Then we'll set you up with a clean system going forward.",
    features: [
      "Historical transaction organization",
      "Back-period reconciliation",
      "Tax-ready records preparation",
      "Personalized catch-up plan",
      "Smooth transition to monthly service",
    ],
    whyItMatters: "Falling behind on books creates compounding stress — especially at tax time. A catch-up service gives you a clean slate and the peace of mind to move forward confidently.",
    color: "var(--color-sage-dark)",
    bgColor: "var(--color-sage-pale)",
  },
  {
    id: "invoice-management",
    icon: FileText,
    title: "Invoice Management",
    tagline: "Get paid faster. Stay organized.",
    description:
      "We help you create, send, track, and manage invoices so nothing falls through the cracks. Proper invoice management improves cash flow, reduces late payments, and keeps your accounts receivable organized and current.",
    features: [
      "Invoice creation and formatting",
      "Accounts receivable tracking",
      "Payment status monitoring",
      "Overdue invoice follow-up",
      "Client payment history records",
    ],
    whyItMatters: "Disorganized invoicing directly hurts your cash flow. When invoices are tracked properly, you get paid faster and have fewer awkward follow-up conversations.",
    color: "var(--color-navy-light)",
    bgColor: "#EEF1F7",
  },
  {
    id: "quickbooks-setup",
    icon: Settings,
    title: "QuickBooks Setup & Support",
    tagline: "Set up right from day one.",
    description:
      "QuickBooks is the industry standard for small business accounting, but setting it up correctly matters. We'll configure your QuickBooks account properly, import your data, set up your chart of accounts, and make sure everything is running smoothly from the start.",
    features: [
      "QuickBooks Online account setup",
      "Chart of accounts configuration",
      "Historical data import",
      "Bank and credit card connection",
      "Ongoing QuickBooks support",
    ],
    whyItMatters: "A poorly configured QuickBooks account creates inaccurate reports and painful fixes later. Starting right saves time, money, and frustration for years to come.",
    color: "var(--color-sage)",
    bgColor: "var(--color-sage-pale)",
  },
  {
    id: "payroll-support",
    icon: Users,
    title: "Payroll Support",
    tagline: "Your team, paid accurately and on time.",
    description:
      "We help ensure your payroll records are accurate, organized, and reconciled. Proper payroll bookkeeping is critical for tax compliance and employee trust. We work alongside your payroll provider to ensure your books always reflect accurate payroll data.",
    features: [
      "Payroll expense recording",
      "Payroll account reconciliation",
      "Payroll tax expense tracking",
      "Employee benefit tracking",
      "Payroll report organization",
    ],
    whyItMatters: "Payroll errors are one of the most common and costly bookkeeping mistakes. Proper payroll records protect you from penalties and keep your employees confident.",
    color: "var(--color-gold-dark)",
    bgColor: "#FDF8EF",
  },
  {
    id: "budget-tracking",
    icon: Target,
    title: "Budget Tracking",
    tagline: "Set goals. Hit targets. Grow intentionally.",
    description:
      "We help you create realistic budgets based on your actual financial data, then track your progress every month. Budget tracking keeps your spending intentional, your goals measurable, and your growth on track.",
    features: [
      "Monthly budget creation",
      "Actual vs. budget comparison",
      "Overspend identification and alerts",
      "Quarterly financial goal review",
      "Cash flow forecasting support",
    ],
    whyItMatters: "Without a budget, spending tends to expand with income. Budget tracking is the difference between a business that stays afloat and one that intentionally builds wealth.",
    color: "var(--color-dusty-blue)",
    bgColor: "#EEF3F8",
  },
];

export default function ServicesPage() {
  return (
    <PageLayout>

      {/* ── PAGE HEADER ────────────────────────────────────────────────────── */}
      <section aria-label="Services page header" className="section-padding"
        style={{ background: "linear-gradient(160deg, var(--color-navy) 0%, var(--color-navy-light) 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
            style={{ backgroundColor: "rgba(124,154,126,0.2)", color: "var(--color-sage-light)", border: "1px solid rgba(124,154,126,0.3)" }}>
            What We Offer
          </div>
          <h1 className="font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.2 }}>
            Complete Bookkeeping Services for Small Businesses
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
            From getting started to staying organized, we offer everything your business needs to
            maintain clean, accurate, and tax-ready financial records.
          </p>
          <Link href="/contact" className="btn-sage inline-flex items-center gap-2 text-base px-8 py-4">
            <Calendar className="w-5 h-5" aria-hidden="true" />
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* ── SERVICES LIST ─────────────────────────────────────────────────── */}
      <section aria-label="Services list" className="section-padding" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.id}
                id={service.id}
                className="card overflow-hidden"
                style={{ backgroundColor: "white" }}
              >
                <div className={`grid lg:grid-cols-5 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                  {/* Accent sidebar */}
                  <div
                    className="lg:col-span-1 p-8 flex flex-col items-center justify-center text-center gap-4"
                    style={{ backgroundColor: service.bgColor }}
                  >
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm"
                      style={{ backgroundColor: service.color }}
                      aria-hidden="true"
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: service.color, letterSpacing: "0.07em" }}>
                      {service.tagline}
                    </p>
                  </div>

                  {/* Main content */}
                  <div className="lg:col-span-4 p-8">
                    <h2
                      className="font-bold text-2xl mb-3"
                      style={{ color: "var(--color-navy)", fontFamily: "var(--font-playfair), Georgia, serif" }}
                    >
                      {service.title}
                    </h2>
                    <p className="text-base leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
                      {service.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Features */}
                      <div>
                        <h3 className="font-semibold text-xs uppercase tracking-wider mb-3" style={{ color: "var(--color-navy)", letterSpacing: "0.07em" }}>
                          What&apos;s Included
                        </h3>
                        <ul className="space-y-2" role="list">
                          {service.features.map((f) => (
                            <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "var(--color-text-secondary)" }}>
                              <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" style={{ color: "var(--color-sage)" }} />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Why It Matters */}
                      <div
                        className="rounded-xl p-4"
                        style={{ backgroundColor: service.bgColor, border: `1px solid ${service.color}22` }}
                      >
                        <h3 className="font-semibold text-xs uppercase tracking-wider mb-2" style={{ color: service.color, letterSpacing: "0.07em" }}>
                          Why It Matters
                        </h3>
                        <p className="text-sm leading-relaxed italic" style={{ color: "var(--color-text-secondary)" }}>
                          {service.whyItMatters}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <section aria-label="Get started" className="section-padding"
        style={{ background: "linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-light) 100%)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", lineHeight: 1.2 }}>
            Not Sure Which Services You Need?
          </h2>
          <p className="text-base mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
            That&apos;s completely okay. Book a free consultation and we&apos;ll help you figure out
            exactly what your business needs — with no pressure and no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-sage text-base px-8 py-4 inline-flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" aria-hidden="true" />
              Book Free Consultation
            </Link>
            <Link href="/pricing" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-base text-white hover:bg-white/10 transition-all duration-200"
              style={{ border: "2px solid rgba(255,255,255,0.3)" }}>
              View Pricing <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
