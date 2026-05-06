# Page Topology — krest.dental homepage

Source URL: <https://www.krest.dental/>
Captured: 2026-05-05 at 1440×900 desktop viewport.
Platform of origin: Wix (`generator: Wix.com Website Builder`).

## Page-level layout

- Page is a single vertical scroll, no scroll-snap container.
- Background color (`#F4EAE6`, soft cream) applied to the main content wrapper.
- Site uses **Lenis** smooth scroll (`html.lenis lenis-smooth`).
- Header is `position: relative` (NOT sticky/fixed) — scrolls away with the page.
- Floating circular phone CTA ("Like" with phone icon) appears as fixed/floating overlay on bottom-right (links to `tel:9573884525`).

## Sections (top → bottom)

| # | Section | Component name | Notes |
|---|---|---|---|
| 1 | Header | `SiteHeader` | Logo (left) · Nav (center: About Us▾ / Our Services▾ / Contact) · Book Appointment CTA · Social bar · phone + email row |
| 2 | Hero | `HeroSection` | Background watercolor `design-02.png` · Doctor portrait (`DSC08658.jpg` may be repurposed here) · H1 "Dr. Suneeta Veramachaneni" · subtitle "Cosmetic Dentist & Implantologist" (Marmelad, copper) · description paragraph · "Book Appointment" CTA |
| 3 | Doctor quote banner | `DoctorQuote` | Large doctor portrait left · italicized quote · `Dr Suneeta.png` signature image |
| 4 | Stats strip | `StatsBanner` | Tagline "Crafting world-class smiles with Precision and Artistry." · 4 stats (5,000+ Happy Patients · 20+ Years · 25,000+ Procedures · 20+ Staff) · "Our Story" link |
| 5 | Verified-Patient testimonial carousel | `TestimonialsCarousel` | 2-up paginated quotes (Verified Patient + Seth + others) with Previous/Next arrows |
| 6 | Signature Services intro | `ServicesIntro` | H2 "Signature Services" (large copper EB Garamond) + descriptive paragraph |
| 7 | Service cards × 4 | `ServiceCard` × 4 | Implants · Invisalign · Aesthetic/Cosmetic Dentistry · Comprehensive/General Dentistry. Each: large pastel circle (background pink/cream) + foreground PNG illustration overlay (`1.png`, `2.png`, `4.png`, `5.png`) + heading (taupe) + paragraph + "Know More" pill button |
| 8 | Comfort/Care gallery | `ComfortGallery` | "Redefining Comfort and Care — Only at Krest Dental" tagline + image carousel of clinic interior photos (Previous/Next nav) |
| 9 | Instagram strip | `InstagramStrip` | Heading "Follow Us on Instagram" + `@Krestdental` handle link + grid/carousel of 12 thumbnail images linking to Instagram |
| 10 | Reviews heading | `ReviewsHeading` | H2 "What Our Happy Customers Say" (this title appears AFTER Instagram strip in DOM order; the actual reviews carousel was rendered earlier in section 5) |
| 11 | Footer | `SiteFooter` | Logo + Social bar · Menu (Home/About/Services/Contact) · Contact (email/phone/address) · Opening Hours · "© 2025 by Krest Dental. Developed by Xscade" |
| 12 | Floating phone CTA | `FloatingCallButton` | Black 65×65 round button bottom-right, links `tel:9573884525` (always visible) |

## Section dependencies

- All sections share `bg-cream` (`#F4EAE6`) page background.
- All sections share fonts: EB Garamond (display), Marmelad (subtitle accents), Inknut Antiqua (some headings).
- Service cards reuse the same outer pill/circle shape — single `ServiceCard` component instantiated 4×.
- Testimonials carousel + Instagram strip + Comfort gallery all share carousel UX (Previous/Next arrows). One reusable `Carousel` primitive likely.

## Z-index layers

- Floating phone CTA: top (above all content).
- Header: in-flow (no fixed positioning, no z-index manipulation needed at MVP).
- Other sections: default flow.

## Interaction model summary

- **Header:** static, no scroll transformation.
- **Testimonials carousel:** click-driven (Previous/Next buttons).
- **Comfort gallery carousel:** click-driven.
- **Instagram strip:** click-driven (or possibly auto-cycling — to be confirmed).
- **Service cards:** static (no hover state animation extracted yet — investigate).
- **Smooth scroll:** Lenis-powered for the whole page.
- **Page-level scroll-trigger animations:** appear as `transition: all` defaults on most elements. Wix typically applies fade-in-on-view via inline animation libraries — we will implement minimal IntersectionObserver fade-up if needed for visual parity.
