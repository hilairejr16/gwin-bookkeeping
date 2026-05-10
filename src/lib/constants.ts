/**
 * Gwin Bookkeeping LLC — Site-Wide Constants
 *
 * All business information lives here. Update ONE place, it
 * updates everywhere on the website automatically.
 */

// ─── Business Information ──────────────────────────────────────────────────
export const BUSINESS = {
  name: "Gwin Bookkeeping LLC",
  tagline: "Clear Books. Confident Business Decisions.",
  shortTagline: "Professional Bookkeeping for NJ Small Businesses",
  description:
    "Supporting businesses with bookkeeping services that improve organization, simplify financial tracking, and save valuable time.",
  founded: "2024",
  location: "New Jersey",
  serviceArea: "New Jersey & Remote Nationwide",

  // Contact
  email: "jerri.Gwin@protonmail.com",
  // phone: "+1 (XXX) XXX-XXXX",  // Add your phone number when ready

  // Social Links
  linkedin: "https://www.linkedin.com/in/jerrica-gwin-40714566?trk=contact-info",

  // Booking
  calendlyUrl: "https://calendly.com/jerri-gwin", // Update with your real Calendly link

  // Website
  url: "https://gwinhbookkeeping.com",
} as const;

// ─── Navigation Links ──────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home",     href: "/"         },
  { label: "About",    href: "/about"    },
  { label: "Services", href: "/services" },
  { label: "Pricing",  href: "/pricing"  },
  { label: "FAQ",      href: "/faq"      },
  { label: "Contact",  href: "/contact"  },
] as const;

// ─── Services ─────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    id: "monthly-bookkeeping",
    title: "Monthly Bookkeeping",
    shortDesc: "Keep your books current every month — no surprises.",
    icon: "BookOpen",
    href: "/services#monthly-bookkeeping",
    featured: true,
  },
  {
    id: "bank-reconciliation",
    title: "Bank Reconciliations",
    shortDesc: "Match every transaction. Catch errors before they cost you.",
    icon: "CheckSquare",
    href: "/services#bank-reconciliation",
    featured: true,
  },
  {
    id: "expense-tracking",
    title: "Expense Tracking",
    shortDesc: "Know exactly where your money goes, every single month.",
    icon: "Receipt",
    href: "/services#expense-tracking",
    featured: true,
  },
  {
    id: "financial-reports",
    title: "Financial Reports",
    shortDesc: "Clear, accurate reports that help you make smart decisions.",
    icon: "BarChart2",
    href: "/services#financial-reports",
    featured: false,
  },
  {
    id: "catch-up-bookkeeping",
    title: "Catch-Up Bookkeeping",
    shortDesc: "Behind on your books? We'll get you fully caught up.",
    icon: "ClockRewind",
    href: "/services#catch-up-bookkeeping",
    featured: false,
  },
  {
    id: "invoice-management",
    title: "Invoice Management",
    shortDesc: "Organized invoicing so you get paid faster.",
    icon: "FileText",
    href: "/services#invoice-management",
    featured: false,
  },
  {
    id: "quickbooks-setup",
    title: "QuickBooks Setup & Support",
    shortDesc: "Get QuickBooks working the right way from day one.",
    icon: "Settings",
    href: "/services#quickbooks-setup",
    featured: false,
  },
  {
    id: "payroll-support",
    title: "Payroll Support",
    shortDesc: "Keep your team paid accurately and on time.",
    icon: "Users",
    href: "/services#payroll-support",
    featured: false,
  },
  {
    id: "budget-tracking",
    title: "Budget Tracking",
    shortDesc: "Set realistic goals and actually hit them.",
    icon: "Target",
    href: "/services#budget-tracking",
    featured: false,
  },
] as const;

// ─── Trust Statistics ──────────────────────────────────────────────────────
export const TRUST_STATS = [
  { value: "100%",   label: "Client Satisfaction"       },
  { value: "5★",     label: "Average Client Rating"     },
  { value: "NJ",     label: "Local Business Expertise"  },
  { value: "Remote", label: "Work with You Anywhere"    },
] as const;

// ─── FAQ Items ─────────────────────────────────────────────────────────────
export const FAQ_ITEMS = [
  {
    question: "What bookkeeping software do you use?",
    answer:
      "We primarily use QuickBooks Online, which is the industry-leading bookkeeping platform trusted by millions of small businesses. We also work with QuickBooks Desktop and can adapt to other platforms if needed. QuickBooks Online is excellent because it's cloud-based — meaning your books are always accessible from anywhere, and we can collaborate with you in real time.",
  },
  {
    question: "Do you work remotely?",
    answer:
      "Yes! We work 100% remotely, which means we can serve businesses anywhere in New Jersey and across the United States. Everything is handled securely online — document sharing, communication, and reporting. Remote bookkeeping is just as effective as in-person, and you save time not having to schedule in-person meetings.",
  },
  {
    question: "How often will we communicate?",
    answer:
      "Communication is a top priority. We typically provide monthly updates when your books are completed, and we're always available by email if questions or concerns arise between check-ins. We tailor our communication style to fit your preferences — whether you prefer detailed monthly reports or quick summaries, we'll find what works best for you.",
  },
  {
    question: "Do you offer catch-up bookkeeping?",
    answer:
      "Absolutely! Catch-up bookkeeping is one of our most popular services. If your books have fallen behind — whether by a few months or a full year — we'll get everything organized, reconciled, and up to date. It's a fresh start for your business finances, and most clients feel an immediate sense of relief once it's done.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work with a wide range of small businesses and entrepreneurs, including retail, e-commerce, service businesses, freelancers, consultants, real estate professionals, health and wellness businesses, and more. If you're a small business owner who needs reliable bookkeeping, we'd love to help — regardless of your industry.",
  },
  {
    question: "How is pricing determined?",
    answer:
      "Pricing is customized based on your business size, the volume of transactions, and the specific services you need. We believe in transparent, fair pricing — no hidden fees or surprise charges. Book a free consultation and we'll discuss your needs and provide a clear quote.",
  },
  {
    question: "Is my financial information secure?",
    answer:
      "Absolutely. We take your financial privacy extremely seriously. We use encrypted file sharing, secure communication channels, and follow strict data handling protocols. All client information is treated with the highest level of confidentiality.",
  },
  {
    question: "How do I get started?",
    answer:
      "Getting started is simple! Click 'Book a Consultation' anywhere on our site. We'll schedule a free 30-minute discovery call to learn about your business, answer your questions, and see how we can help. There's no pressure and no obligation.",
  },
  {
    question: "Do I need to have accounting knowledge?",
    answer:
      "Not at all! That's exactly why we're here. Our goal is to handle the financial complexity so you can focus on running your business. We'll communicate everything in plain, easy-to-understand language — no accounting jargon unless you want it.",
  },
  {
    question: "Can you help with tax preparation?",
    answer:
      "While we don't prepare tax returns directly, we ensure your books are organized, accurate, and tax-ready so that when tax season comes, your accountant or CPA can work efficiently. Clean books can save you significant money in accounting fees and reduce the risk of errors on your return.",
  },
] as const;
