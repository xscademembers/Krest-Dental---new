# Google Ads Landing Pages — Implementation Plan

**Status:** Phase 1 (Invisalign) — BUILT. Phase 2 (Dental Implants) — not started.
**Created:** 2026-07-01
**Owner:** Krest Dental
**Purpose:** Build high-converting, standalone Google Ads landing pages (NOT service/marketing pages).

---

## Guiding Principles

These principles are the foundation for every decision on this project:

- Do not modify the existing website or service pages.
- Build standalone, Google Ads-focused landing pages.
- Prioritize conversions over information density.
- Reuse components and shared logic wherever possible.
- Separate content from presentation.
- Keep pages fast, accessible, and mobile-first.
- Track every meaningful user interaction.
- Make the architecture scalable for future dental services.

---

## Overview

These pages are **completely standalone Google Ads landing pages**, not service pages. They are **conversion-first, not information-first**.

Recommended approach: build **one landing page at a time** with a clear implementation plan, using Cursor.

### Phases

| Phase | Page | Route |
|-------|------|-------|
| Phase 1 | Invisalign Landing Page | `/invisalign-treatment-vizag` |
| Phase 2 | Dental Implants Landing Page | `/dental-implants-vizag` |

Each phase must be a **complete, production-ready page** with SEO, conversion optimization, analytics, and responsive design.

---

## Development Recommendation (Build Order)

Both landing pages share **~75–80% of their structure**. Therefore:

1. **First**, build a **reusable landing page component library**:
   - Hero
   - Trust Bar
   - Timeline
   - Benefits Grid
   - Doctor Section
   - Testimonials
   - FAQ
   - Lead Form
   - Sticky CTA
   - Map
2. **Then**, build the **Invisalign page (Phase 1)** using those components.
3. **Then**, build the **Dental Implants page (Phase 2)** reusing the same components with implants-specific content.

Benefits: cleaner codebase, reduced duplication, faster future service landing pages.

---

# PHASE 1 — Invisalign Landing Page

## Goal

Build a high-converting Google Ads landing page targeting users searching for **Invisalign treatment in Visakhapatnam**.

**Route:** `/invisalign-treatment-vizag`

## Objective

The page should answer these questions within the first few seconds:

- Why Invisalign?
- Why Krest Dental?
- Why Dr. Suneeta?
- Why should I book today?

The page should be **conversion-first, not information-first**.

## SEO

- **Title:** `Invisalign Treatment in Visakhapatnam | Invisible Braces | Krest Dental`
- **Meta Description:** `Looking for Invisalign treatment in Vizag? Get expert invisible braces treatment from experienced cosmetic dentists at Krest Dental. Book your consultation today.`
- **Canonical:** `https://www.krest.dental/invisalign-treatment-vizag`

### Target Keywords

- Invisalign Vizag
- Invisible Braces Vizag
- Best Invisalign Dentist Visakhapatnam
- Clear Aligners Vizag
- Invisalign Cost Vizag
- Invisible Teeth Braces

## Page Structure

### Section 1 — Hero
- Large hero image
- **Headline:** `Transform Your Smile with Invisalign®` / `Invisible Braces That Fit Your Lifestyle`
- **Subheading:** `Get a confident smile without metal braces. Trusted Invisalign treatment by experienced cosmetic dentists in Visakhapatnam.`
- **Primary CTA:** Book Free Consultation
- **Secondary CTA:** Call Now
- **Trust Badges:**
  - 20+ Years Experience
  - 5000+ Happy Patients
  - Advanced Digital Dentistry
  - Google Rated Clinic

### Section 2 — Why Invisalign
Cards:
- Nearly Invisible
- Comfortable
- Removable
- Eat Anything
- Easy Cleaning
- Fewer Clinic Visits

Short explanation below.

### Section 3 — Is Invisalign Right For You?
Conditions:
- Crowded Teeth
- Spacing
- Overbite
- Crossbite
- Open Bite
- Mild to Moderate Misalignment

### Section 4 — Treatment Process
Four-step timeline:
1. Consultation
2. 3D Digital Scan
3. Custom Aligners
4. Your New Smile

### Section 5 — Why Choose Krest Dental
- Experienced Cosmetic Dentist
- Latest Digital Technology
- Personalized Treatment Plan
- Transparent Pricing
- Comfortable Clinic
- Convenient Location

### Section 6 — Meet Dr. Suneeta
- Photo
- Small bio:
  - 20+ Years Experience
  - Thousands of Smiles Transformed
  - Cosmetic Dentist
  - Patient-Centric Care
- **CTA:** Schedule Consultation

### Section 7 — Before & After
- Large image slider
- Patient transformations

### Section 8 — Patient Testimonials
- Google Review cards
- **Minimum 6 Reviews**

### Section 9 — FAQ
Questions:
- What is Invisalign?
- How much does Invisalign cost?
- How long does treatment take?
- Is Invisalign painful?
- Can adults get Invisalign?
- How often should I wear aligners?
- How many visits are required?
- Will people notice them?

Add **FAQ Schema**.

### Section 10 — Location
- Google Map
- Clinic Address
- Parking
- Working Hours

### Section 11 — Lead Form
Fields:
- Name
- Phone
- Preferred Time

Button: **Book Consultation**

### Sticky Mobile CTA
Bottom fixed:
- Call
- WhatsApp
- Book Appointment

## Conversion Tracking
Implement:
- Google Ads Conversion
- GA4 Events
- Meta Pixel
- WhatsApp Click
- Call Click
- Form Submit
- Scroll Depth
- UTM Capture

## Performance Requirements
- Image Optimization
- Lazy Loading
- WebP
- Responsive Images
- CLS < 0.1
- LCP < 2.5s

## Cursor Deliverables (Phase 1)
- Astro page
- Reusable components
- Responsive design
- JSON-LD
- FAQ Schema
- MedicalBusiness Schema
- SEO metadata
- Analytics hooks
- Conversion tracking
- Mobile optimization

---

# PHASE 2 — Dental Implants Landing Page

**Route:** `/dental-implants-vizag`

## SEO

- **Title:** `Dental Implants in Visakhapatnam | Permanent Tooth Replacement | Krest Dental`
- **Meta Description:** `Looking for dental implants in Vizag? Replace missing teeth with permanent dental implants by experienced implant specialists at Krest Dental.`

### Keywords
- Dental Implants Vizag
- Dental Implant Clinic Vizag
- Tooth Replacement
- Single Tooth Implant
- Implant Dentist Visakhapatnam
- Permanent Teeth Replacement

## Page Structure

### Hero
- **Headline:** `Permanent Dental Implants` / `Restore Your Smile with Confidence`
- **Subheading:** `Natural-looking, durable dental implants using advanced technology and personalized care.`
- **Buttons:** Book Consultation, Call Now
- **Trust Badges:**
  - 20+ Years Experience
  - Advanced Implant Technology
  - Experienced Implantologist
  - 5000+ Happy Patients

### Missing Teeth Problems
Cards:
- Difficulty Eating
- Speech Problems
- Jaw Bone Loss
- Smile Confidence
- Teeth Shifting
- Facial Changes

### Benefits of Dental Implants
Cards:
- Permanent Solution
- Natural Appearance
- Comfortable
- Strong Bite
- Protect Jaw Bone
- Long Lasting

### Implant Process
Timeline:
1. Consultation
2. Digital Scan
3. Implant Placement
4. Healing
5. Permanent Crown

### Why Choose Krest Dental
- Modern Equipment
- Experienced Implant Team
- Premium Materials
- Digital Planning
- Comfortable Procedures
- Personalized Care

### Meet Doctor
- Reuse same doctor section.

### Before & After
- Implant transformations.

### Testimonials
- Patient reviews.

### FAQ
Questions:
- Are implants painful?
- How much do implants cost?
- How long do implants last?
- Can diabetics get implants?
- Is implant surgery safe?
- How long is recovery?
- Do implants look natural?
- How many visits are required?

Add **FAQ Schema**.

### Google Map
- Same clinic section.

### Lead Form
Fields:
- Name
- Phone
- Preferred Time

### Sticky CTA
- Book
- Call
- WhatsApp

## Cursor Deliverables (Phase 2)
- New Astro page (`/dental-implants-vizag`)
- Reusable components shared with the Invisalign landing page where possible
- Dedicated SEO metadata and JSON-LD
- FAQ schema
- Responsive layout
- Analytics and conversion tracking
- Optimized Core Web Vitals
- Fully mobile-first design

---

## Reusable Component Library (Shared Across Both Pages)

| Component | Used In | Notes |
|-----------|---------|-------|
| Hero | Both | Headline, subheading, dual CTA, hero image |
| Trust Bar | Both | Trust badges row |
| Benefits Grid | Both | Card grid (Why Invisalign / Benefits of Implants) |
| Conditions Grid | Both | "Is it right for you?" / "Missing Teeth Problems" |
| Timeline | Both | Treatment / Implant process steps |
| Why Choose Krest | Both | Clinic differentiators |
| Doctor Section | Both | Dr. Suneeta bio + CTA |
| Before & After | Both | Image slider |
| Testimonials | Both | Google review cards |
| FAQ | Both | Accordion + FAQ Schema |
| Location / Map | Both | Google Map, address, hours, parking |
| Lead Form | Both | Name, Phone, Preferred Time |
| Sticky Mobile CTA | Both | Call, WhatsApp, Book |

---

## Cross-Cutting Requirements (Both Phases)

### SEO & Schema
- Unique title, meta description, canonical per page
- JSON-LD: MedicalBusiness + FAQ schema
- Open Graph / Twitter cards

### Analytics & Conversion Tracking
- Google Ads Conversion
- GA4 Events
- Meta Pixel
- WhatsApp Click, Call Click, Form Submit
- Scroll Depth
- UTM Capture

### Performance / Core Web Vitals
- Image optimization (WebP, responsive images)
- Lazy loading
- CLS < 0.1
- LCP < 2.5s

### Responsive
- Mobile-first design
- Sticky mobile CTA on both pages

---

## Implementation Status

### Phase 1 — Invisalign (`/invisalign-treatment-vizag`) — ✅ Built
- Reusable landing component library in `src/components/landing/`
- Content decoupled in `src/lib/landing-content.ts` (`INVISALIGN_LANDING`)
- Types in `src/types/landing.ts`; analytics config in `src/lib/analytics-config.ts`
- All 11 sections + sticky mobile CTA
- SEO metadata, MedicalBusiness + FAQPage JSON-LD
- Analytics/conversion hooks (GA4, Google Ads, Meta Pixel, UTM capture, scroll depth, click + form tracking) — **vendor IDs pending** (set via `PUBLIC_*` env vars)
- Leads API extended: `email` now optional, `preferredTime` captured (contact page unaffected)
- `astro check`: 0 errors

### Phase 2 — Dental Implants (`/dental-implants-vizag`) — ⏳ Not started
- Will reuse the same component library with implants-specific content

*Phase 1 implemented on 2026-07-01.*
