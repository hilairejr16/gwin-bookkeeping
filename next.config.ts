import type { NextConfig } from "next";

/**
 * Gwin Bookkeeping LLC — next.config.ts
 * ─────────────────────────────────────
 * Security-hardened Next.js configuration.
 *
 * Security measures implemented:
 *  ✅ Content-Security-Policy (CSP)  — blocks XSS attacks
 *  ✅ Strict-Transport-Security      — forces HTTPS (HSTS)
 *  ✅ X-Frame-Options                — blocks clickjacking
 *  ✅ X-Content-Type-Options         — blocks MIME sniffing
 *  ✅ Referrer-Policy                — protects user privacy
 *  ✅ Permissions-Policy             — disables unneeded browser features
 *  ✅ X-XSS-Protection               — legacy XSS protection for old browsers
 *  ✅ Image domain whitelisting      — prevents SSRF via image proxy
 */

// ─── Content Security Policy ────────────────────────────────────────────────
// This tells the browser exactly which sources are allowed to load content.
// Any script/style/image not on this list is BLOCKED — stopping XSS attacks.
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://assets.calendly.com https://www.googletagmanager.com https://challenges.cloudflare.com https://www.google-analytics.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://assets.calendly.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' data: blob: https://www.google.com https://maps.gstatic.com https://maps.googleapis.com https://lh3.googleusercontent.com https://streetviewpixels-pa.googleapis.com;
  frame-src https://calendly.com https://challenges.cloudflare.com https://www.google.com;
  connect-src 'self' https://api.web3forms.com https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`
  .replace(/\s{2,}/g, " ")
  .trim();

// ─── All Security Headers ────────────────────────────────────────────────────
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy,
  },
  // Force HTTPS for 2 years across the domain and all subdomains
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Block this site from being embedded in iframes on other sites (clickjacking)
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // Stop browsers from guessing file types (MIME sniffing attack prevention)
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Control what referrer info is sent when users click external links
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Disable browser features we don't use (camera, mic, geolocation, etc.)
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=(self), usb=()",
  },
  // Legacy XSS protection for older browsers
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  // Enable DNS prefetching for performance
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
];

const nextConfig: NextConfig = {
  // ── Apply security headers to every page and API route ────────────────────
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  // ── Image configuration ────────────────────────────────────────────────────
  // Only allow images from these specific domains (prevents SSRF attacks)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // Google profile photos for reviews
      },
      {
        protocol: "https",
        hostname: "maps.googleapis.com", // Google Maps
      },
    ],
    formats: ["image/avif", "image/webp"], // Modern formats load 40-60% faster
    minimumCacheTTL: 3600, // Cache images for 1 hour
  },

  // ── Remove console.log in production (hides internal info from attackers) ──
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },

  // ── Strict mode catches potential bugs before they become real issues ──────
  reactStrictMode: true,

  // ── Consistent URLs without trailing slashes (better for SEO) ────────────
  trailingSlash: false,
};

export default nextConfig;
