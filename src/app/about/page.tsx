/**
 * Gwin Bookkeeping LLC — About Page
 * Personal, warm, and trustworthy. Builds human connection.
 */

import type { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  Star,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  Calendar,
} from "lucide-react";
import LinkedInIcon from "@/components/ui/LinkedInIcon";
import PageLayout from "@/components/layout/PageLayout";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Jerrica Gwin | Professional Bookkeeper in New Jersey",
  description:
    "Meet Jerrica Gwin, founder of Gwin Bookkeeping LLC. Learn how her passion for organization and helping small businesses drives everything we do. Based in New Jersey, serving clients nationwide.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: Heart,       title: "Client-First",   desc: "Your success is our success. Every decision we make starts with what's best for your business." },
  { icon: CheckCircle, title: "Accuracy",        desc: "We treat your books with the same care you put into building your business — with precision and attention to detail." },
  { icon: Users,       title: "Communication",   desc: "You'll always know where your finances stand. We speak in plain English, not accounting jargon." },
  { icon: Target,      title: "Reliability",     desc: "Consistent, dependable service month after month. You can count on us to show up and get it done." },
];

const certifications = [
  "QuickBooks Online Certified",
  "Bookkeeping & Accounting Principles",
  "Financial Reporting & Analysis",
  "Small Business Financial Management",
];

export default function AboutPage() {
  return (
    <PageLayout>

      {/* ── PAGE HEADER ───────────────────────────────────────────────────── */}
      <section
        aria-label="About page header"
        className="section-padding"
        style={{
          background: "linear-gradient(160deg, var(--color-navy) 0%, var(--color-navy-light) 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
            style={{ backgroundColor: "rgba(124,154,126,0.2)", color: "var(--color-sage-light)", border: "1px solid rgba(124,154,126,0.3)" }}
          >
            <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
            Our Story
          </div>
          <h1
            className="font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.2 }}
          >
            Built on a Passion for Organization
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
            Gwin Bookkeeping LLC was founded with one mission: to help small business owners feel
            less overwhelmed and more in control of their finances.
          </p>
        </div>
      </section>

      {/* ── FOUNDER STORY ─────────────────────────────────────────────────── */}
      <section aria-labelledby="founder-heading" className="section-padding" style={{ backgroundColor: "white" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left: Photo Placeholder + Credentials */}
            <div className="space-y-6">
              {/* Profile Photo Placeholder */}
              <div
                className="aspect-square max-w-sm mx-auto lg:mx-0 rounded-2xl flex items-center justify-center relative overflow-hidden"
                style={{ backgroundColor: "var(--color-sage-pale)", border: "3px solid var(--color-border-sage)" }}
                aria-label="Jerrica Gwin profile photo"
              >
                {/* Decorative background */}
                <div className="absolute inset-0 opacity-30" style={{ background: "linear-gradient(135deg, var(--color-sage-pale) 0%, var(--color-cream) 100%)" }} aria-hidden="true" />
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center text-4xl font-bold"
                    style={{ backgroundColor: "var(--color-sage)", color: "white", fontFamily: "var(--font-playfair), Georgia, serif" }}
                    aria-hidden="true"
                  >
                    JG
                  </div>
                  <p className="text-sm font-medium text-center px-4" style={{ color: "var(--color-text-secondary)" }}>
                    Jerrica Gwin<br />
                    <span style={{ color: "var(--color-text-muted)", fontSize: "0.75rem" }}>Add your professional photo here</span>
                  </p>
                </div>
              </div>

              {/* Quick Facts Card */}
              <div className="card p-6" style={{ backgroundColor: "var(--color-cream)" }}>
                <h3 className="font-semibold text-sm mb-4 uppercase tracking-wide" style={{ color: "var(--color-navy)", letterSpacing: "0.06em" }}>
                  Quick Facts
                </h3>
                <ul className="space-y-3" role="list">
                  {[
                    { label: "Location",      value: "New Jersey, USA"             },
                    { label: "Service Area",  value: "NJ & Remote Nationwide"      },
                    { label: "Specialty",     value: "Small Business Bookkeeping"  },
                    { label: "Software",      value: "QuickBooks Online"           },
                    { label: "Response Time", value: "Within 1 Business Day"       },
                  ].map(({ label, value }) => (
                    <li key={label} className="flex justify-between items-center text-sm border-b pb-2" style={{ borderColor: "var(--color-border)" }}>
                      <span className="font-medium" style={{ color: "var(--color-text-secondary)" }}>{label}</span>
                      <span className="font-semibold" style={{ color: "var(--color-navy)" }}>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* LinkedIn CTA */}
              <a
                href={BUSINESS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl transition-all duration-200 hover:scale-105"
                style={{ backgroundColor: "#0A66C2", color: "white" }}
                aria-label="View Jerrica Gwin on LinkedIn (opens in new tab)"
              >
                <LinkedInIcon className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-sm">Connect on LinkedIn</p>
                  <p className="text-xs opacity-80">View Jerrica&apos;s professional profile</p>
                </div>
                <ArrowRight className="w-4 h-4 ml-auto" aria-hidden="true" />
              </a>
            </div>

            {/* Right: Story Text */}
            <div>
              <div className="badge badge-sage inline-flex mb-4">
                <Heart className="w-3.5 h-3.5" aria-hidden="true" />
                Jerrica&apos;s Story
              </div>
              <h2
                id="founder-heading"
                className="section-title mb-6"
              >
                Hi, I&apos;m Jerrica — and I&apos;m Here to Make Your Books Make Sense.
              </h2>

              <div className="space-y-5 text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                <p>
                  I started my bookkeeping journey because I&apos;ve always enjoyed organization
                  and helping others feel less overwhelmed. I understand how busy business owners
                  can be, and my goal is to help simplify the financial side of running a business
                  through reliable and organized bookkeeping support.
                </p>
                <p>
                  I&apos;m passionate about helping small businesses stay on track, build strong
                  financial habits, and feel more confident in their day-to-day operations. My
                  focus is to provide dependable service, clear communication, and support that
                  allows clients to spend more time focusing on growing their business.
                </p>
                <p>
                  When you work with Gwin Bookkeeping, you&apos;re not just hiring a bookkeeper —
                  you&apos;re gaining a dedicated financial partner who genuinely cares about the
                  success of your business. Every client relationship matters deeply to me.
                </p>
              </div>

              {/* Star Rating Display */}
              <div
                className="flex items-center gap-3 my-8 p-4 rounded-xl"
                style={{ backgroundColor: "var(--color-sage-pale)", border: "1px solid var(--color-border-sage)" }}
              >
                <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" aria-hidden="true" style={{ color: "var(--color-gold)" }} />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "var(--color-navy)" }}>5.0 — Client Satisfaction</p>
                  <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>Committed to excellence in every engagement</p>
                </div>
              </div>

              {/* Certifications */}
              <div className="mb-8">
                <h3 className="font-semibold text-sm mb-3 uppercase tracking-wide" style={{ color: "var(--color-navy)", letterSpacing: "0.06em" }}>
                  Training &amp; Expertise
                </h3>
                <ul className="space-y-2" role="list">
                  {certifications.map((cert) => (
                    <li key={cert} className="flex items-center gap-2.5 text-sm" style={{ color: "var(--color-text-secondary)" }}>
                      <CheckCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" style={{ color: "var(--color-sage)" }} />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  Book a Consultation
                </Link>
                <Link href="/services" className="btn-secondary inline-flex items-center gap-2">
                  View Services
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR VALUES ────────────────────────────────────────────────────── */}
      <section aria-labelledby="values-heading" className="section-padding" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="badge badge-navy inline-flex mb-4">How We Work</div>
            <h2 id="values-heading" className="section-title mb-4">Our Core Values</h2>
            <p className="section-subtitle mx-auto text-center">
              These aren&apos;t just words — they guide every decision we make and every client relationship we build.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card p-6 text-center" style={{ backgroundColor: "white" }}>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "var(--color-sage-pale)" }}
                  aria-hidden="true"
                >
                  <Icon className="w-6 h-6" style={{ color: "var(--color-sage-dark)" }} />
                </div>
                <h3 className="font-semibold text-base mb-2" style={{ color: "var(--color-navy)", fontFamily: "var(--font-playfair), Georgia, serif" }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section aria-label="Contact call to action" className="section-padding" style={{ backgroundColor: "var(--color-sage-pale)" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-4">Let&apos;s Work Together</h2>
          <p className="section-subtitle mx-auto text-center mb-8">
            Ready to simplify your finances and get your books in order? Book a free consultation
            and let&apos;s talk about how we can help your business thrive.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4">
            <Calendar className="w-5 h-5" aria-hidden="true" />
            Book a Free Consultation
          </Link>
        </div>
      </section>

    </PageLayout>
  );
}
