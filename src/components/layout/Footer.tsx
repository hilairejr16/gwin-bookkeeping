/**
 * Gwin Bookkeeping LLC — Footer
 *
 * Features:
 * ✅ Local business schema reinforcement
 * ✅ SEO-friendly internal links
 * ✅ Service list for crawlability
 * ✅ Trust signals (NJ-focused)
 * ✅ Accessibility compliant
 * ✅ Privacy/legal links
 */

import Link from "next/link";
import { BookOpen, Mail, MapPin, Shield } from "lucide-react";
import LinkedInIcon from "@/components/ui/LinkedInIcon";
import { BUSINESS, NAV_LINKS, SERVICES } from "@/lib/constants";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      aria-label="Site footer"
      style={{ backgroundColor: "var(--color-navy)", color: "rgba(255,255,255,0.85)" }}
    >
      {/* ── Main Footer Content ─────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* ── Column 1: Brand ────────────────────────────────────────────── */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 mb-4 group"
              aria-label="Gwin Bookkeeping LLC — Home"
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
                aria-hidden="true"
              >
                <BookOpen className="w-5 h-5 text-white" strokeWidth={1.75} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-white text-sm"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                  Gwin Bookkeeping
                </span>
                <span className="text-xs tracking-widest uppercase"
                  style={{ color: "var(--color-sage-light)", letterSpacing: "0.1em" }}>
                  LLC
                </span>
              </div>
            </Link>

            {/* Description */}
            <p className="text-sm leading-relaxed mb-5"
              style={{ color: "rgba(255,255,255,0.65)" }}>
              Professional bookkeeping services for small businesses in New Jersey.
              Clear books. Confident decisions.
            </p>

            {/* Location Badge */}
            <div className="flex items-center gap-2 text-sm mb-5"
              style={{ color: "var(--color-sage-light)" }}>
              <MapPin className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
              <span>Serving New Jersey &amp; Remote Nationwide</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={BUSINESS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                aria-label="Jerrica Gwin on LinkedIn (opens in new tab)"
              >
                <LinkedInIcon className="w-4 h-4 text-white" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                aria-label={`Email us at ${BUSINESS.email}`}
              >
                <Mail className="w-4 h-4 text-white" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* ── Column 2: Navigation ────────────────────────────────────────── */}
          <div>
            <h3
              className="font-semibold text-white text-sm uppercase tracking-wider mb-4"
              style={{ letterSpacing: "0.08em" }}
            >
              Navigation
            </h3>
            <ul className="space-y-2.5" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-150 hover:text-white"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Services ─────────────────────────────────────────── */}
          <div>
            <h3
              className="font-semibold text-white text-sm uppercase tracking-wider mb-4"
              style={{ letterSpacing: "0.08em" }}
            >
              Services
            </h3>
            <ul className="space-y-2.5" role="list">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.href}
                    className="text-sm transition-colors duration-150 hover:text-white"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 4: Contact ──────────────────────────────────────────── */}
          <div>
            <h3
              className="font-semibold text-white text-sm uppercase tracking-wider mb-4"
              style={{ letterSpacing: "0.08em" }}
            >
              Get in Touch
            </h3>

            <div className="space-y-3 mb-6">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider mb-1"
                  style={{ color: "rgba(255,255,255,0.45)", letterSpacing: "0.07em" }}>
                  Email
                </p>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="text-sm transition-colors duration-150 hover:text-white break-all"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                >
                  {BUSINESS.email}
                </a>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider mb-1"
                  style={{ color: "rgba(255,255,255,0.45)", letterSpacing: "0.07em" }}>
                  Location
                </p>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                  New Jersey, USA
                </p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider mb-1"
                  style={{ color: "rgba(255,255,255,0.45)", letterSpacing: "0.07em" }}>
                  LinkedIn
                </p>
                <a
                  href={BUSINESS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors duration-150 hover:text-white"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                >
                  Jerrica Gwin
                </a>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-lg transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: "var(--color-sage)",
                color: "white",
              }}
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ─────────────────────────────────────────────────────── */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.1)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">

            {/* Copyright */}
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
              © {currentYear} Gwin Bookkeeping LLC. All rights reserved.
            </p>

            {/* Trust + Legal Links */}
            <div className="flex items-center gap-4">
              {/* Security Badge */}
              <div className="flex items-center gap-1.5 text-xs"
                style={{ color: "rgba(255,255,255,0.4)" }}>
                <Shield className="w-3 h-3" aria-hidden="true" />
                <span>SSL Secured</span>
              </div>

              <div className="flex items-center gap-3 text-xs"
                style={{ color: "rgba(255,255,255,0.45)" }}>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors duration-150"
                >
                  Privacy Policy
                </Link>
                <span aria-hidden="true">·</span>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors duration-150"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>

          {/* SEO Geo Text — helps with local search ranking */}
          <p className="text-xs mt-2 text-center sm:text-left"
            style={{ color: "rgba(255,255,255,0.25)" }}>
            Bookkeeping services serving small businesses in New Jersey, including Essex County,
            Morris County, Bergen County, Union County, Middlesex County, and surrounding areas.
          </p>
        </div>
      </div>
    </footer>
  );
}
