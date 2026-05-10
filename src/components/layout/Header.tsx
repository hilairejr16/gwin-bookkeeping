"use client";

/**
 * Gwin Bookkeeping LLC — Header & Navigation
 *
 * Features:
 * ✅ Mobile-first responsive (hamburger menu on mobile)
 * ✅ Scroll-aware: adds shadow + background when scrolled
 * ✅ Active page highlighting
 * ✅ Animated mobile menu
 * ✅ Keyboard accessible (ARIA labels, focus management)
 * ✅ Skip-to-content link support
 */

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, BUSINESS } from "@/lib/constants";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen]   = useState(false);
  const [isScrolled, setIsScrolled]   = useState(false);
  const pathname                       = usePathname();

  // ── Detect scroll to add shadow/background ────────────────────────────────
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll(); // Run immediately in case page loads scrolled
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Close menu on route change is handled by onClick on each mobile link ──

  // ── Close menu on Escape key (accessibility) ──────────────────────────────
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // ── Prevent body scroll when mobile menu is open ──────────────────────────
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      role="banner"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/97 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      )}
      style={{
        backgroundColor: isScrolled ? "rgba(250, 250, 247, 0.97)" : "transparent",
        boxShadow: isScrolled ? "var(--shadow-nav)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* ── Logo ─────────────────────────────────────────────────────── */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group flex-shrink-0"
            aria-label="Gwin Bookkeeping LLC — Home"
          >
            {/* Logo Icon */}
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105"
              style={{ background: "linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-light) 100%)" }}
              aria-hidden="true"
            >
              <BookOpen className="w-5 h-5 text-white" strokeWidth={1.75} />
            </div>
            {/* Logo Text */}
            <div className="flex flex-col leading-none">
              <span
                className="font-display font-bold text-base tracking-tight"
                style={{ color: "var(--color-navy)", fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Gwin Bookkeeping
              </span>
              <span
                className="text-xs font-medium tracking-wider uppercase"
                style={{ color: "var(--color-sage)", letterSpacing: "0.06em" }}
              >
                LLC
              </span>
            </div>
          </Link>

          {/* ── Desktop Navigation ────────────────────────────────────────── */}
          <nav
            role="navigation"
            aria-label="Main navigation"
            className="hidden lg:flex items-center gap-1"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "nav-link px-3.5 py-2 rounded-md text-sm font-medium transition-all duration-150",
                  isActive(link.href)
                    ? "text-navy font-semibold"
                    : "text-slate-600 hover:text-navy"
                )}
                style={{
                  color: isActive(link.href)
                    ? "var(--color-navy)"
                    : undefined,
                }}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ── Desktop CTA ───────────────────────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href={`mailto:${BUSINESS.email}`}
              className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-150"
              style={{ color: "var(--color-text-secondary)" }}
              aria-label={`Email us at ${BUSINESS.email}`}
            >
              <Phone className="w-3.5 h-3.5" aria-hidden="true" />
              Contact
            </Link>
            <Link
              href="/contact"
              className="btn-primary text-sm px-5 py-2.5"
              aria-label="Book a free consultation"
            >
              Book a Consultation
            </Link>
          </div>

          {/* ── Mobile Menu Toggle ────────────────────────────────────────── */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="lg:hidden p-2 rounded-lg transition-colors duration-150 focus:outline-none focus-visible:ring-2"
            style={{
              color: "var(--color-navy)",
              "--tw-ring-color": "var(--color-sage)",
            } as React.CSSProperties}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isMenuOpen
              ? <X className="w-6 h-6" aria-hidden="true" />
              : <Menu className="w-6 h-6" aria-hidden="true" />
            }
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ────────────────────────────────────────────────────── */}
      {/* Overlay backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 top-16 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        className={cn(
          "absolute top-full left-0 right-0 z-50 lg:hidden transition-all duration-300 ease-in-out overflow-hidden",
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        )}
        style={{ backgroundColor: "var(--color-warm-white)" }}
      >
        <nav className="px-4 pt-4 pb-6 space-y-1 border-t border-gray-100">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "block px-4 py-3 rounded-lg text-base font-medium transition-all duration-150",
                isActive(link.href)
                  ? "font-semibold"
                  : "hover:bg-sage-pale"
              )}
              style={{
                color: isActive(link.href) ? "var(--color-navy)" : "var(--color-text-secondary)",
                backgroundColor: isActive(link.href) ? "var(--color-sage-pale)" : undefined,
              }}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile CTA Buttons */}
          <div className="pt-4 space-y-3">
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="btn-primary w-full justify-center"
              aria-label="Book a free consultation"
            >
              Book a Consultation
            </Link>
            <Link
              href={`mailto:${BUSINESS.email}`}
              onClick={() => setIsMenuOpen(false)}
              className="btn-secondary w-full justify-center text-sm"
            >
              Send Us an Email
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
