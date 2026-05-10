/**
 * Gwin Bookkeeping LLC — Pricing Page
 * Lead-generation focused. Custom pricing with consultation CTA.
 */

import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle,
  Calendar,
  ArrowRight,
  MessageSquare,
  Star,
  Shield,
} from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";

export const metadata: Metadata = {
  title: "Pricing | Custom Bookkeeping Plans for NJ Small Businesses",
  description:
    "Transparent, customized bookkeeping pricing for New Jersey small businesses. No hidden fees. Pricing based on your business size and needs. Book a free consultation to get your custom quote.",
  alternates: { canonical: "/pricing" },
};

const plans = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for freelancers and sole proprietors just getting started.",
    priceLabel: "Starting at",
    priceNote: "Custom Quote",
    highlighted: false,
    color: "var(--color-sage)",
    features: [
      { text: "Monthly bookkeeping (up to 50 transactions)", included: true  },
      { text: "Bank reconciliation (1 account)",             included: true  },
      { text: "Expense categorization",                      included: true  },
      { text: "Monthly Profit & Loss statement",             included: true  },
      { text: "Email support",                               included: true  },
      { text: "QuickBooks management",                       included: true  },
      { text: "Payroll support",                             included: false },
      { text: "Multiple entity bookkeeping",                 included: false },
      { text: "Quarterly strategy calls",                    included: false },
    ],
    cta: "Get a Quote",
  },
  {
    id: "growth",
    name: "Growth",
    description: "Ideal for growing small businesses with more complex bookkeeping needs.",
    priceLabel: "Starting at",
    priceNote: "Custom Quote",
    highlighted: true,
    color: "var(--color-navy)",
    features: [
      { text: "Monthly bookkeeping (up to 150 transactions)", included: true },
      { text: "Bank reconciliation (up to 3 accounts)",        included: true },
      { text: "Expense categorization & tracking",             included: true },
      { text: "Full financial report suite",                   included: true },
      { text: "Priority email support",                        included: true },
      { text: "QuickBooks management",                         included: true },
      { text: "Payroll support",                               included: true },
      { text: "Monthly strategy call",                         included: true },
      { text: "Multiple entity bookkeeping",                   included: false },
    ],
    cta: "Get a Quote",
  },
  {
    id: "established",
    name: "Established",
    description: "For established businesses with high transaction volume and complex needs.",
    priceLabel: "Starting at",
    priceNote: "Custom Quote",
    highlighted: false,
    color: "var(--color-gold-dark)",
    features: [
      { text: "Monthly bookkeeping (150+ transactions)",    included: true },
      { text: "Bank reconciliation (unlimited accounts)",   included: true },
      { text: "Advanced expense tracking & reporting",      included: true },
      { text: "Full financial report suite",                included: true },
      { text: "Priority phone & email support",             included: true },
      { text: "QuickBooks management",                      included: true },
      { text: "Payroll support",                            included: true },
      { text: "Quarterly strategy calls",                   included: true },
      { text: "Multiple entity bookkeeping",                included: true },
    ],
    cta: "Get a Quote",
  },
];

const faqs = [
  { q: "Why is pricing custom?",          a: "Every business is different. The cost of bookkeeping depends on your transaction volume, number of accounts, services needed, and business complexity. Custom pricing means you only pay for what you actually need." },
  { q: "Are there long-term contracts?",   a: "No. We believe in earning your business every month. All of our services are month-to-month with no long-term commitments required." },
  { q: "Are there any hidden fees?",       a: "Never. We provide complete transparency in our pricing. Before we start, you'll receive a clear proposal with all costs outlined. No surprises." },
  { q: "What's included in a consultation?", a: "Your free consultation is a no-pressure 30-minute conversation to discuss your business, your bookkeeping needs, and how we can help. You'll leave with clarity and a custom quote — no strings attached." },
];

export default function PricingPage() {
  return (
    <PageLayout>

      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <section aria-label="Pricing header" className="section-padding"
        style={{ background: "linear-gradient(160deg, var(--color-navy) 0%, var(--color-navy-light) 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
            style={{ backgroundColor: "rgba(124,154,126,0.2)", color: "var(--color-sage-light)", border: "1px solid rgba(124,154,126,0.3)" }}>
            Transparent Pricing
          </div>
          <h1 className="font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.2 }}>
            Pricing Customized for Your Business
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-2" style={{ color: "rgba(255,255,255,0.8)" }}>
            We don&apos;t believe in one-size-fits-all pricing. Every plan is tailored to your
            specific business size and needs — so you only pay for what you actually use.
          </p>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.6)" }}>
            Book a free consultation to get your personalized quote.
          </p>
        </div>
      </section>

      {/* ── PRICING CARDS ──────────────────────────────────────────────────── */}
      <section aria-labelledby="plans-heading" className="section-padding" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="plans-heading" className="sr-only">Pricing Plans</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "white",
                  boxShadow: plan.highlighted
                    ? "0 20px 60px -12px rgba(27, 42, 74, 0.22), 0 0 0 2px var(--color-navy)"
                    : "var(--shadow-card)",
                }}
              >
                {/* Most Popular Badge */}
                {plan.highlighted && (
                  <div
                    className="absolute top-0 left-0 right-0 text-center py-2 text-xs font-bold uppercase tracking-wider text-white"
                    style={{ backgroundColor: "var(--color-navy)", letterSpacing: "0.08em" }}
                    role="note"
                  >
                    ✦ Most Popular
                  </div>
                )}

                <div className={`p-8 ${plan.highlighted ? "pt-12" : ""}`}>
                  {/* Plan Name */}
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
                    style={{ backgroundColor: `${plan.color}18`, color: plan.color }}
                  >
                    {plan.name}
                  </div>

                  {/* Price */}
                  <div className="mb-2">
                    <p className="text-xs font-medium uppercase tracking-wide mb-1" style={{ color: "var(--color-text-muted)" }}>
                      {plan.priceLabel}
                    </p>
                    <p className="text-3xl font-bold" style={{ color: "var(--color-navy)", fontFamily: "var(--font-playfair), Georgia, serif" }}>
                      {plan.priceNote}
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
                    {plan.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8" role="list">
                    {plan.features.map((f) => (
                      <li key={f.text} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle
                          className="w-4 h-4 flex-shrink-0 mt-0.5"
                          aria-hidden="true"
                          style={{ color: f.included ? "var(--color-sage)" : "var(--color-border)" }}
                        />
                        <span style={{ color: f.included ? "var(--color-text-secondary)" : "var(--color-text-muted)" }}
                          className={f.included ? "" : "line-through"}>
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`w-full text-center block py-3 px-6 rounded-lg font-semibold text-sm transition-all duration-200 hover:scale-105 ${plan.highlighted ? "btn-primary" : "btn-secondary"}`}
                    style={plan.highlighted ? { backgroundColor: "var(--color-navy)" } : undefined}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Trust signals below pricing */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: Shield,       text: "No hidden fees — ever"   },
              { icon: Star,         text: "No long-term contracts"   },
              { icon: MessageSquare, text: "Free 30-min consultation" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm" style={{ color: "var(--color-text-secondary)" }}>
                <Icon className="w-4 h-4" aria-hidden="true" style={{ color: "var(--color-sage)" }} />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUSTOM QUOTE CTA ────────────────────────────────────────────────── */}
      <section aria-labelledby="quote-heading" className="section-padding" style={{ backgroundColor: "var(--color-sage-pale)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge badge-sage inline-flex mb-4"><MessageSquare className="w-3.5 h-3.5" aria-hidden="true" /> Get Your Quote</div>
              <h2 id="quote-heading" className="section-title mb-4">Let&apos;s Find the Right Fit for Your Business</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
                Book a free 30-minute consultation. We&apos;ll learn about your business, understand
                your bookkeeping needs, and provide you with a clear, custom quote — no pressure,
                no obligation, no strings attached.
              </p>
              <ul className="space-y-3 mb-8" role="list">
                {["Learn about your current financial situation", "Identify exactly which services you need", "Receive a transparent, custom quote", "Ask any questions you have"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "var(--color-text-secondary)" }}>
                    <CheckCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" style={{ color: "var(--color-sage)" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                <Calendar className="w-4 h-4" aria-hidden="true" />
                Book Your Free Consultation
              </Link>
            </div>
            <div className="card p-8" style={{ backgroundColor: "white" }}>
              <h3 className="font-semibold text-lg mb-6" style={{ color: "var(--color-navy)", fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Factors That Affect Your Pricing
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Transaction Volume",    desc: "How many transactions does your business process monthly?"       },
                  { label: "Number of Accounts",    desc: "Bank accounts, credit cards, and payment platforms we manage"     },
                  { label: "Services Needed",       desc: "Monthly bookkeeping, reconciliation, reports, payroll, etc."      },
                  { label: "Catch-Up Required",     desc: "Are your books current, or do we need to catch up first?"         },
                  { label: "Business Complexity",   desc: "Business structure, industry, and reporting requirements"          },
                ].map(({ label, desc }) => (
                  <div key={label} className="border-b pb-4 last:border-0 last:pb-0" style={{ borderColor: "var(--color-border)" }}>
                    <p className="font-semibold text-sm mb-1" style={{ color: "var(--color-navy)" }}>{label}</p>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING FAQs ─────────────────────────────────────────────────────── */}
      <section aria-labelledby="pricing-faq-heading" className="section-padding" style={{ backgroundColor: "white" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="pricing-faq-heading" className="section-title mb-4">Pricing Questions Answered</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="card p-6" style={{ backgroundColor: "var(--color-cream)" }}>
                <h3 className="font-semibold text-sm mb-2" style={{ color: "var(--color-navy)" }}>{faq.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-sm mb-4" style={{ color: "var(--color-text-secondary)" }}>Still have questions about pricing?</p>
            <Link href="/contact" className="btn-secondary inline-flex items-center gap-2">
              Contact Us <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
