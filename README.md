# Gwin Bookkeeping LLC — Website

> **Professional bookkeeping services for small businesses in New Jersey**
> Built with Next.js 16, Tailwind CSS v4, TypeScript — deployed on Cloudflare Pages.

---

## Quick Start

```bash
npm install
cp .env.example .env.local
# Fill in your Web3Forms key in .env.local
npm run dev
```

Open **http://localhost:3000** to see the site.

---

## Pages

| Page | URL | Purpose |
|------|-----|---------|
| Home | `/` | Landing page, all CTAs |
| About | `/about` | Jerrica's story |
| Services | `/services` | All 9 services |
| Pricing | `/pricing` | Custom pricing + lead gen |
| FAQ | `/faq` | 10 high-converting FAQs |
| Contact | `/contact` | Secure form + Calendly |

---

## Key Files to Update

| File | What to Update |
|------|---------------|
| `src/lib/constants.ts` | All business info, Calendly URL, LinkedIn |
| `src/app/layout.tsx` | SEO metadata, site URL |
| `src/app/globals.css` | Brand colors and design tokens |
| `.env.local` | Web3Forms key, Google Analytics ID |

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Forms:** React Hook Form + Zod validation
- **Email:** Web3Forms (free, secure)
- **Hosting:** Cloudflare Pages (free)
- **CI/CD:** GitHub Actions (free)
- **Domain:** Cloudflare Registrar (~$10/year)

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```env
WEB3FORMS_ACCESS_KEY=your_key_from_web3forms.com
NEXT_PUBLIC_SITE_URL=https://gwinhbookkeeping.com
```

**Web3Forms Setup:**
1. Go to https://web3forms.com
2. Sign up with jerri.Gwin@protonmail.com
3. Create an Access Key
4. Paste it in your .env.local

---

## Deploy to Cloudflare Pages

1. Push to GitHub: `git push origin main`
2. Go to Cloudflare Dashboard → Pages → Connect to Git
3. Select your repository
4. Build command: `npm run build`
5. Output directory: `.next`
6. Add environment variables in Cloudflare settings
7. Connect your domain

---

## Security Features

- Content Security Policy (CSP) headers
- HSTS (forces HTTPS)
- Clickjacking protection
- Rate limiting on contact form (5 req/15 min)
- Honeypot anti-spam field
- Input validation (Zod, client + server)
- CSRF protection
- Secrets via environment variables only

---

## Cost: ~$10/year

| Item | Cost |
|------|------|
| Domain (.com) | ~$10/year |
| Cloudflare Pages | FREE |
| SSL Certificate | FREE |
| GitHub | FREE |
| Web3Forms | FREE |

---

## Brand Colors

| Color | Hex | Use |
|-------|-----|-----|
| Navy | `#1B2A4A` | Primary text, CTAs |
| Sage Green | `#7C9A7E` | Accents, trust signals |
| Cream | `#F7F4EF` | Background |
| Muted Gold | `#C4A76B` | Premium accents |
| Dusty Blue | `#6B8CAE` | Secondary accents |

---

## Fonts

- **Headings:** Playfair Display (Google Fonts — elegant, trustworthy)
- **Body:** Inter (Google Fonts — clean, readable)

---

## Launch Checklist

- [ ] Fill in `.env.local` (Web3Forms key)
- [ ] Update Calendly URL in `src/lib/constants.ts`
- [ ] Add real testimonials (replace placeholders)
- [ ] Add professional photo to About page
- [ ] Create `public/og-image.png` (1200×630px) in Canva
- [ ] Run `npm run build` with zero errors
- [ ] Purchase domain via Cloudflare Registrar
- [ ] Deploy to Cloudflare Pages
- [ ] Connect domain
- [ ] Submit sitemap to Google Search Console
- [ ] Create Google Business Profile
- [ ] Test contact form end-to-end

---

*Built for Gwin Bookkeeping LLC — New Jersey's trusted bookkeeping partner.*
