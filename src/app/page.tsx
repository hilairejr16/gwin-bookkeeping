/**
 * Gwin Bookkeeping LLC — Home Page
 * Conversion-focused, SEO-optimized landing page.
 */

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  Star,
  MapPin,
  Shield,
  Clock,
  TrendingUp,
  HeartHandshake,
  ChevronRight,
  Calendar,
  FileCheck,
  Lightbulb,
} from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { BUSINESS, SERVICES, FAQ_ITEMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Professional Bookkeeping Services in New Jersey | Gwin Bookkeeping LLC",
  description:
    "Clear books. Confident business decisions. Expert bookkeeping services for NJ small businesses — monthly bookkeeping, bank reconciliations, QuickBooks setup & more. Book your free consultation.",
  alternates: { canonical: "/" },
};

const stats = [
  { value: "100%", label: "Remote-Friendly",     icon: MapPin      },
  { value: "5★",   label: "Client Satisfaction", icon: Star        },
  { value: "NJ",   label: "Local Expertise",     icon: Shield      },
  { value: "QB",   label: "QuickBooks Ready",    icon: CheckCircle },
];

const whyUs = [
  { icon: HeartHandshake, title: "Personal & Approachable", desc: "We take the time to understand your business. You'll never feel like just another client — we're a true partner in your financial journey." },
  { icon: Shield,         title: "Accurate & Reliable",     desc: "Precision in every transaction. We catch errors before they become costly problems and keep your books clean, current, and correct." },
  { icon: Clock,          title: "Saves You Time",          desc: "Stop spending weekends on your books. Hand off the financial complexity and reclaim your time to grow your business." },
  { icon: TrendingUp,     title: "Clarity for Growth",      desc: "Clear financial reports mean confident decisions. Know your numbers and use them to grow with intention." },
];

const process = [
  { step: "01", icon: Calendar,  title: "Book a Free Call",        desc: "Schedule a no-pressure 30-minute consultation. We learn about your business and answer all your questions." },
  { step: "02", icon: FileCheck, title: "We Organize Your Books",  desc: "We set up or clean up your bookkeeping system and get everything organized, reconciled, and accurate." },
  { step: "03", icon: Lightbulb, title: "You Gain Clarity",        desc: "Receive clear monthly reports, stay on top of your finances, and make confident business decisions." },
];

const testimonials = [
  { name: "Sarah M.",  business: "Boutique Owner, NJ",         rating: 5, text: "Jerrica completely transformed how I manage my business finances. I finally feel in control and I'm no longer dreading tax season. Absolutely worth every penny." },
  { name: "Marcus T.", business: "Freelance Consultant, NJ",    rating: 5, text: "I was months behind on my books and completely overwhelmed. Gwin Bookkeeping got me fully caught up in two weeks and now everything runs smoothly." },
  { name: "Linda R.",  business: "E-commerce Business Owner, NJ", rating: 5, text: "Professional, responsive, and incredibly thorough. Jerrica keeps my books perfectly organized and I always know exactly where my business stands." },
];

export default function HomePage() {
  return (
    <PageLayout withTopPadding={false}>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        aria-label="Hero section"
        className="relative min-h-screen flex items-center overflow-hidden pt-20 lg:pt-24"
        style={{ background: "linear-gradient(160deg, #1B2A4A 0%, #2D4170 55%, #1B3A2A 100%)" }}
      >
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ backgroundColor: "var(--color-sage)" }} />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full blur-3xl opacity-15" style={{ backgroundColor: "var(--color-gold)" }} />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
              style={{ backgroundColor: "rgba(124,154,126,0.2)", color: "var(--color-sage-light)", border: "1px solid rgba(124,154,126,0.3)" }}>
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              New Jersey &amp; Remote Nationwide
            </div>

            <h1 className="font-bold leading-tight mb-6 text-white"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Clear Books.<br />
              <span style={{ color: "var(--color-sage-light)" }}>Confident Business</span><br />
              Decisions.
            </h1>

            <p className="text-lg sm:text-xl mb-4 leading-relaxed max-w-xl" style={{ color: "rgba(255,255,255,0.8)" }}>
              {BUSINESS.description}
            </p>
            <p className="text-base sm:text-lg mb-10 leading-relaxed max-w-2xl" style={{ color: "rgba(255,255,255,0.65)" }}>
              We help entrepreneurs simplify their finances through organized and consistent
              bookkeeping services — so you can spend more time growing your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/contact" className="btn-sage text-base px-8 py-4 shadow-xl inline-flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" aria-hidden="true" />
                Book a Free Consultation
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-base text-white transition-all duration-200 hover:bg-white/10" style={{ border: "2px solid rgba(255,255,255,0.3)" }}>
                View Our Services
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {["Free consultation", "No long-term contracts", "100% remote-friendly", "New Jersey-based"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                  <CheckCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" style={{ color: "var(--color-sage-light)" }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────────── */}
      <section aria-label="Trust statistics" style={{ backgroundColor: "white", borderBottom: "1px solid var(--color-border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x" style={{ borderColor: "var(--color-border)" }}>
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center justify-center text-center py-4 px-6">
                <Icon className="w-5 h-5 mb-2" aria-hidden="true" style={{ color: "var(--color-sage)" }} />
                <span className="font-bold text-2xl" style={{ color: "var(--color-navy)", fontFamily: "var(--font-playfair), Georgia, serif" }}>{value}</span>
                <span className="text-xs font-medium mt-0.5 uppercase tracking-wide" style={{ color: "var(--color-text-muted)" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ────────────────────────────────────────────── */}
      <section id="services-overview" aria-labelledby="services-heading" className="section-padding" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="badge badge-sage inline-flex mb-4"><BookOpen className="w-3.5 h-3.5" aria-hidden="true" /> Our Services</div>
            <h2 id="services-heading" className="section-title mb-4 text-balance">Everything Your Business Books Need</h2>
            <p className="section-subtitle mx-auto text-center">From monthly bookkeeping to QuickBooks setup, we handle the financial details so you can stay focused on your business.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {SERVICES.slice(0, 6).map((service) => (
              <article key={service.id} className="card p-6 group">
                <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-110" style={{ backgroundColor: "var(--color-sage-pale)" }} aria-hidden="true">
                  <BookOpen className="w-5 h-5" style={{ color: "var(--color-sage-dark)" }} />
                </div>
                <h3 className="font-semibold text-base mb-2" style={{ color: "var(--color-navy)", fontFamily: "var(--font-playfair), Georgia, serif" }}>{service.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{service.shortDesc}</p>
              </article>
            ))}
          </div>
          <div className="text-center">
            <Link href="/services" className="btn-secondary inline-flex items-center gap-2">View All Services <ChevronRight className="w-4 h-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────────────────── */}
      <section id="why-us" aria-labelledby="why-us-heading" className="section-padding" style={{ backgroundColor: "var(--color-sage-pale)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="badge badge-sage inline-flex mb-4"><HeartHandshake className="w-3.5 h-3.5" aria-hidden="true" /> Why Gwin Bookkeeping</div>
              <h2 id="why-us-heading" className="section-title mb-4">Bookkeeping That Actually Works For You</h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "var(--color-text-secondary)" }}>
                We understand how busy business owners can be. Our goal isn&apos;t just to organize your numbers — it&apos;s to give you the confidence and clarity to make smart decisions for your business every single day.
              </p>
              <ul className="space-y-4 mb-8" role="list">
                {["Monthly financial reports in plain English", "Catch errors before they become expensive problems", "Always-available support when questions arise", "Tax-ready books every single year", "Personalized service — not a one-size-fits-all approach"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" style={{ color: "var(--color-sage)" }} />
                    <span className="text-sm font-medium" style={{ color: "var(--color-text-secondary)" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about" className="btn-primary inline-flex items-center gap-2">Meet Jerrica <ArrowRight className="w-4 h-4" aria-hidden="true" /></Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyUs.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="card p-6" style={{ backgroundColor: "white" }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: "linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-light) 100%)" }} aria-hidden="true">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-sm mb-2" style={{ color: "var(--color-navy)" }}>{title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section id="how-it-works" aria-labelledby="process-heading" className="section-padding" style={{ backgroundColor: "white" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="badge badge-navy inline-flex mb-4">Getting Started Is Easy</div>
            <h2 id="process-heading" className="section-title mb-4">How It Works</h2>
            <p className="section-subtitle mx-auto text-center">Three simple steps to organized, stress-free finances.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {process.map(({ step, icon: Icon, title, desc }) => (
              <div key={step} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg relative" style={{ background: "linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-light) 100%)" }} aria-hidden="true">
                  <Icon className="w-8 h-8 text-white" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: "var(--color-gold)" }}>{step}</span>
                </div>
                <h3 className="font-semibold text-lg mb-3" style={{ color: "var(--color-navy)", fontFamily: "var(--font-playfair), Georgia, serif" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4">
              <Calendar className="w-5 h-5" aria-hidden="true" /> Book My Free Consultation
            </Link>
            <p className="text-xs mt-3" style={{ color: "var(--color-text-muted)" }}>No obligation. No pressure. Just a conversation.</p>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section id="testimonials" aria-labelledby="testimonials-heading" className="section-padding" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="badge badge-gold inline-flex mb-4"><Star className="w-3.5 h-3.5" aria-hidden="true" /> Client Stories</div>
            <h2 id="testimonials-heading" className="section-title mb-4">What Our Clients Say</h2>
            <p className="section-subtitle mx-auto text-center">Real results from real New Jersey small business owners.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="card p-7" style={{ backgroundColor: "white" }}>
                <div className="flex items-center gap-0.5 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" aria-hidden="true" style={{ color: "var(--color-gold)" }} />)}
                </div>
                <p className="text-sm leading-relaxed mb-5 italic" style={{ color: "var(--color-text-secondary)" }}>&ldquo;{t.text}&rdquo;</p>
                <footer className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0" style={{ backgroundColor: "var(--color-sage-pale)", color: "var(--color-sage-dark)" }} aria-hidden="true">{t.name.charAt(0)}</div>
                  <div>
                    <cite className="font-semibold text-sm not-italic" style={{ color: "var(--color-navy)" }}>{t.name}</cite>
                    <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>{t.business}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ PREVIEW ──────────────────────────────────────────────────── */}
      <section id="faq-preview" aria-labelledby="faq-heading" className="section-padding" style={{ backgroundColor: "var(--color-sage-pale)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="faq-heading" className="section-title mb-4">Common Questions</h2>
            <p className="section-subtitle mx-auto text-center">Get quick answers to the questions we hear most often.</p>
          </div>
          <div className="space-y-4 mb-10">
            {FAQ_ITEMS.slice(0, 4).map((faq) => (
              <div key={faq.question} className="card p-6" style={{ backgroundColor: "white" }}>
                <h3 className="font-semibold text-sm mb-2" style={{ color: "var(--color-navy)" }}>{faq.question}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  {faq.answer.length > 200 ? `${faq.answer.substring(0, 200)}...` : faq.answer}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/faq" className="btn-secondary inline-flex items-center gap-2">View All FAQs <ChevronRight className="w-4 h-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section aria-label="Call to action" className="section-padding relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-light) 100%)" }}>
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-15" style={{ backgroundColor: "var(--color-sage)" }} />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full blur-3xl opacity-10" style={{ backgroundColor: "var(--color-gold)" }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-0.5 rounded-full mx-auto mb-6" style={{ backgroundColor: "var(--color-gold)" }} aria-hidden="true" />
          <h2 className="font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", lineHeight: 1.2 }}>
            Ready for Books You Can Trust?
          </h2>
          <p className="text-base mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
            Book a free 30-minute consultation today. We&apos;ll talk about your business, your challenges, and how we can help — with zero pressure and zero obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-sage text-base px-8 py-4 inline-flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" aria-hidden="true" /> Book Free Consultation
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-base text-white transition-all duration-200 hover:bg-white/10" style={{ border: "2px solid rgba(255,255,255,0.3)" }}>
              Explore Services
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
            <span>✓ Free consultation</span>
            <span>✓ No contracts required</span>
            <span>✓ Quick response time</span>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
