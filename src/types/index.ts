/**
 * Gwin Bookkeeping LLC — TypeScript Type Definitions
 *
 * TypeScript types make the code safer — if you pass the wrong
 * kind of data somewhere, TypeScript will catch it immediately.
 */

// ─── Contact Form ──────────────────────────────────────────────────────────
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;           // Optional field
  businessName?: string;    // Optional field
  service?: string;         // Which service they're interested in
  message: string;
  honeypot?: string;        // Anti-spam hidden field (should always be empty)
}

// ─── API Responses ─────────────────────────────────────────────────────────
export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

// ─── Navigation ────────────────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
  external?: boolean;       // Opens in new tab if true
}

// ─── Service Item ──────────────────────────────────────────────────────────
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features?: string[];
  featured?: boolean;
}

// ─── Testimonial ──────────────────────────────────────────────────────────
export interface Testimonial {
  id: string;
  name: string;
  businessName?: string;
  location?: string;
  rating: number;           // 1-5
  text: string;
  date?: string;
}

// ─── FAQ Item ─────────────────────────────────────────────────────────────
export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

// ─── Pricing Plan ─────────────────────────────────────────────────────────
export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  priceLabel: string;       // e.g., "Custom" or "$X/mo"
  features: PricingFeature[];
  cta: string;
  highlighted?: boolean;    // Shows as the "recommended" plan
}
