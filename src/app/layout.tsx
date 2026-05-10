import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// ─── Font Configuration ────────────────────────────────────────────────────
// Inter: Clean modern sans-serif for body text — excellent readability
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",          // Show text immediately while font loads (better UX)
  preload: true,
  weight: ["300", "400", "500", "600", "700"],
});

// Playfair Display: Elegant serif for headings — trustworthy & premium feel
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

// ─── Site-Wide Metadata ────────────────────────────────────────────────────
// This metadata appears in Google search results, social media shares, etc.
export const metadata: Metadata = {
  // ── Title Template ─────────────────────────────────────────────────────
  // Each page sets its own title; this template adds the brand name automatically
  title: {
    default: "Gwin Bookkeeping LLC | Professional Bookkeeping Services in New Jersey",
    template: "%s | Gwin Bookkeeping LLC",
  },

  // ── Meta Description ────────────────────────────────────────────────────
  // This is the text shown under your link in Google search results.
  // CRITICAL for SEO — 150-160 characters, include primary keywords.
  description:
    "Professional bookkeeping services for small businesses in New Jersey. Monthly bookkeeping, bank reconciliations, QuickBooks setup, expense tracking & more. Book a free consultation today.",

  // ── Keywords (less important for Google now, still good practice) ────────
  keywords: [
    "bookkeeping New Jersey",
    "small business bookkeeping NJ",
    "remote bookkeeping services",
    "QuickBooks help New Jersey",
    "financial organization NJ",
    "monthly bookkeeping service",
    "bank reconciliation NJ",
    "catch-up bookkeeping",
    "expense tracking service",
    "bookkeeper New Jersey",
    "Gwin Bookkeeping LLC",
    "virtual bookkeeper NJ",
  ],

  // ── Author & Publisher ───────────────────────────────────────────────────
  authors: [{ name: "Jerrica Gwin", url: "https://gwinhbookkeeping.com" }],
  creator: "Gwin Bookkeeping LLC",
  publisher: "Gwin Bookkeeping LLC",

  // ── Canonical URL (prevents duplicate content SEO penalties) ─────────────
  metadataBase: new URL("https://gwinhbookkeeping.com"),
  alternates: {
    canonical: "/",
  },

  // ── Open Graph (Facebook, LinkedIn, WhatsApp share previews) ─────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gwinhbookkeeping.com",
    siteName: "Gwin Bookkeeping LLC",
    title: "Gwin Bookkeeping LLC | Professional Bookkeeping Services in New Jersey",
    description:
      "Clear books. Confident business decisions. Professional bookkeeping for NJ small businesses. Book your free consultation.",
    images: [
      {
        url: "/og-image.png",   // Create this 1200x630px image in Canva
        width: 1200,
        height: 630,
        alt: "Gwin Bookkeeping LLC — Professional Bookkeeping Services in New Jersey",
      },
    ],
  },

  // ── Twitter/X Card ───────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Gwin Bookkeeping LLC | NJ Bookkeeping Services",
    description:
      "Professional bookkeeping for small businesses in New Jersey. Clear books, confident decisions.",
    images: ["/og-image.png"],
  },

  // ── Robots: Allow Google to index this site ──────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Favicon & App Icons ──────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },

  // ── Web App Manifest (for "Add to Home Screen" on mobile) ────────────────
  manifest: "/manifest.json",

  // ── Verification codes (add after setting up Google Search Console) ──────
  // verification: {
  //   google: "YOUR_GOOGLE_VERIFICATION_CODE",
  // },

  // ── Category ─────────────────────────────────────────────────────────────
  category: "Finance & Business Services",
};

// ─── Viewport Configuration ───────────────────────────────────────────────
// Controls how the page looks on mobile devices
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,           // Allow zooming for accessibility
  themeColor: "#1B2A4A",     // Navy — browser chrome color on mobile
};

// ─── Structured Data (JSON-LD) ─────────────────────────────────────────────
// This tells Google exactly what your business is. It powers the "knowledge
// panel" in search results and helps Google show your business hours, address,
// phone, etc. directly in search results.
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "AccountingService",          // Most specific type for bookkeeping
  "@id": "https://gwinhbookkeeping.com/#organization",
  name: "Gwin Bookkeeping LLC",
  alternateName: "Gwin Bookkeeping",
  url: "https://gwinhbookkeeping.com",
  logo: {
    "@type": "ImageObject",
    url: "https://gwinhbookkeeping.com/logo.png",
    width: 400,
    height: 120,
  },
  image: "https://gwinhbookkeeping.com/og-image.png",
  description:
    "Professional bookkeeping and financial organization services for small businesses in New Jersey. Specializing in monthly bookkeeping, bank reconciliations, QuickBooks setup, expense tracking, and catch-up bookkeeping.",
  foundingDate: "2024",
  founder: [
    {
      "@type": "Person",
      name: "Jerrica Gwin",
      jobTitle: "Owner & Lead Bookkeeper",
      sameAs: "https://www.linkedin.com/in/jerrica-gwin-40714566",
    },
    {
      "@type": "Person",
      name: "Claudis Gwin",
      jobTitle: "Owner",
    },
  ],
  areaServed: [
    {
      "@type": "State",
      name: "New Jersey",
    },
    {
      "@type": "Country",
      name: "United States",
      description: "Remote bookkeeping services available nationwide",
    },
  ],
  serviceType: [
    "Bookkeeping",
    "Bank Reconciliation",
    "Expense Tracking",
    "Financial Reporting",
    "QuickBooks Setup",
    "Payroll Support",
    "Catch-Up Bookkeeping",
    "Invoice Management",
    "Budget Tracking",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "jerri.Gwin@protonmail.com",
    contactType: "customer service",
    availableLanguage: "English",
    areaServed: "US",
  },
  sameAs: [
    "https://www.linkedin.com/in/jerrica-gwin-40714566",
  ],
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Various",
};

// ─── Root Layout Component ─────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* ── Structured Data (JSON-LD Schema) ─────────────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* ── DNS Prefetch for performance ──────────────────────────────── */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//assets.calendly.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        {/* ── Preconnect to critical third-party domains ────────────────── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {/* ── Skip Navigation Link (Accessibility — screen readers/keyboard) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-navy focus:text-white focus:rounded-md focus:font-semibold"
          style={{ backgroundColor: "var(--color-navy)", color: "white" }}
        >
          Skip to main content
        </a>

        {/* ── Page Content ──────────────────────────────────────────────── */}
        <div id="main-content" className="flex flex-col flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}
