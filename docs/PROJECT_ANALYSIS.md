# Project Analysis — Krest Dental Website Clone

**Generated:** 2026-06-22  
**Repository:** `ai-website-cloner-template-master`  
**Live target:** [https://www.krest.dental/](https://www.krest.dental/)  
**Local dev:** `npm run dev` → typically `http://localhost:4321`

---

## 1. Executive Summary

This repository started as the **AI Website Cloner Template** — a reusable scaffold for reverse-engineering websites with AI coding agents — and has been **fully built out as a pixel-accurate clone of krest.dental**, a Wix-hosted dental clinic site in Visakhapatnam, India.

The clone is a **hybrid Astro + React** application:

- **Astro** handles routing, layouts, static pages, SEO, and server API routes.
- **React islands** (`client:load`, `client:visible`) power interactive UI (header, carousels, galleries, service pages).
- **Tailwind CSS v4** + custom design tokens reproduce Wix typography, colors, and spacing.
- **MongoDB** (with local file fallback) stores contact-form leads; an **admin dashboard** manages them.

The README and `AGENTS.md` still reference **Next.js 16** in places — that is **outdated documentation** from the upstream template. The **actual runtime stack is Astro 5 + React 19**.

---

## 2. Purpose & Origin

| Aspect | Detail |
|--------|--------|
| **Upstream template** | [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) |
| **Clone workflow** | `/clone-website <url>` skill inspects target site, extracts tokens/assets, dispatches parallel builders |
| **Current state** | Production-ready clone of krest.dental with 12+ public pages, lead capture, and admin panel |
| **Design goal** | Pixel-perfect emulation first; customization second |
| **Content source** | Real copy, images, and structure from the live Wix site — not placeholders |

---

## 3. Technology Stack (Actual)

| Layer | Technology | Version / Notes |
|-------|------------|-----------------|
| **Framework** | Astro | ^5.18 — App Router-style `src/pages/`, SSR `output: "server"` |
| **UI library** | React | 19.2 — islands only where interactivity is needed |
| **Language** | TypeScript | Strict mode |
| **Styling** | Tailwind CSS | v4 via `@tailwindcss/vite` |
| **UI primitives** | shadcn/ui | `@base-ui/react`, `class-variance-authority`, `cn()` in `src/lib/utils.ts` |
| **Icons** | Custom SVGs | `src/components/icons.tsx` — extracted Wix-style icons |
| **Smooth scroll** | Lenis | `src/components/lenis-provider.tsx` wraps all pages |
| **Database** | MongoDB | Atlas SRV URI; `mongodb` driver v7 |
| **Deployment** | Vercel | `@astrojs/vercel` adapter when `VERCEL=1` |
| **Self-host** | Node standalone | `@astrojs/node` adapter for local/non-Vercel SSR |
| **Node** | ≥ 24 | Per `package.json` engines |

---

## 4. High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│  Browser                                                     │
├─────────────────────────────────────────────────────────────┤
│  Astro pages (.astro)                                        │
│    ├── Layout.astro (SEO, fonts, Lenis, float-in animations) │
│    ├── Static HTML sections (about-us hero, contact, blogs)  │
│    └── React islands (header, carousels, galleries, etc.)    │
├─────────────────────────────────────────────────────────────┤
│  Shared layer                                                │
│    ├── krest-content.ts  (all site copy & nav)               │
│    ├── globals.css       (design tokens + mobile utilities)  │
│    └── types/krest.ts    (TypeScript interfaces)             │
├─────────────────────────────────────────────────────────────┤
│  Server (SSR / API)                                          │
│    ├── POST /api/leads        → leads-store → MongoDB/file   │
│    ├── POST /api/admin/login  → HMAC session cookie          │
│    └── GET/PATCH /api/admin/leads/[id]                       │
├─────────────────────────────────────────────────────────────┤
│  Admin UI                                                    │
│    └── /admin, /admin/dashboard (Astro + server-side auth)   │
└─────────────────────────────────────────────────────────────┘
```

### Rendering strategy

| Pattern | Used for |
|---------|----------|
| **Prerender (`export const prerender = true`)** | Most marketing pages (index, about, blogs listing, etc.) |
| **SSR (`prerender = false`)** | API routes, admin pages, dynamic lead handling |
| **`client:load`** | Header, testimonials, comfort gallery — needs hydration on first paint |
| **`client:visible`** | Instagram strip — lazy hydration when scrolled into view |
| **Pure Astro HTML** | About hero, contact page layout, blog article shells |

---

## 5. Directory Structure

```
ai-website-cloner-template-master/
├── AGENTS.md                    # AI agent instructions (source of truth)
├── CLAUDE.md                    # Imports AGENTS.md
├── README.md                    # Upstream template docs (partially outdated)
├── astro.config.mjs             # Astro + Vercel/Node adapter, Tailwind, aliases
├── package.json
├── .env.example                 # MongoDB, admin, site URL template
│
├── docs/
│   ├── PROJECT_ANALYSIS.md      # ← This file
│   ├── design-references/       # Screenshots from live site + local QA
│   └── research/
│       ├── DESIGN_TOKENS.md     # Colors, fonts, spacing from getComputedStyle
│       ├── BEHAVIORS.md         # Lenis, carousels, header, breakpoints
│       ├── PAGE_TOPOLOGY.md     # Homepage section order
│       └── INSPECTION_GUIDE.md  # How agents should inspect target sites
│
├── public/
│   ├── images/                  # Downloaded Wix assets (hero, gallery, blog, etc.)
│   └── seo/                     # Favicons, OG image
│
├── scripts/
│   ├── download-assets.mjs      # Fetch images from Wix CDN to public/
│   ├── sync-agent-rules.sh      # Regenerate platform-specific agent rules
│   ├── sync-skills.mjs          # Sync clone-website skill across platforms
│   ├── extract-hero-styles.mjs
│   ├── extract-invisilign.mjs
│   └── mosaic-ids.mjs
│
└── src/
    ├── components/              # React components (26 files)
    ├── layouts/                 # Layout.astro, ConversionScripts.astro
    ├── lib/                     # Content, MongoDB, leads, auth, utils
    ├── pages/                   # Astro routes + api/ + admin/
    ├── styles/globals.css       # Tailwind + Krest tokens + mobile utilities
    └── types/krest.ts           # Domain TypeScript types
```

---

## 6. Pages & Routes

### Public marketing pages

| Route | File | Rendering | Description |
|-------|------|-----------|-------------|
| `/` | `index.astro` | Prerender | Landing — hero, stats, testimonials, services, gallery, Instagram |
| `/about-us` | `about-us.astro` | Prerender | Established 2014 hero, bio, reception photo, vision/mission |
| `/drsuneeta` | `drsuneeta.astro` | Prerender | Dr. Suneeta dedicated page — portrait, journey timeline, stats |
| `/our-services` | `our-services.astro` | Prerender | Service categories with icons and bullet lists |
| `/invisilign` | `invisilign.astro` | Prerender | Invisalign treatment page (note: URL spelling matches Wix) |
| `/implants` | `implants.astro` | Prerender | Dental implants page |
| `/blogs` | `blogs.astro` | Prerender | Blog listing with featured post |
| `/blogs/[slug]` | `blogs/[slug].astro` | Prerender | Individual blog articles from `BLOG_POSTS` |
| `/links` | `links.astro` | Prerender | "Connect With Us" — social / quick-link cards |
| `/contact` | `contact.astro` | Prerender | Contact form, clinic info, map embed |

### Admin

| Route | File | Auth |
|-------|------|------|
| `/admin` | `admin/index.astro` | Login form |
| `/admin/dashboard` | `admin/dashboard.astro` | Session cookie required |

### API

| Method | Route | Purpose |
|--------|-------|---------|
| `POST` | `/api/leads` | Public contact form submission |
| `POST` | `/api/admin/login` | Admin authentication |
| `POST` | `/api/admin/logout` | Clear session |
| `GET/PATCH` | `/api/admin/leads/[id]` | Lead management |

---

## 7. Navigation Structure

Defined in `src/lib/krest-content.ts` → `NAV_ITEMS`:

```
About Us ▾
  ├── Dr. Suneeta        → /drsuneeta
  └── Connect With Us    → /links
Our Services ▾
  ├── Invisalign         → /invisilign
  └── Implants           → /implants
Blogs                    → /blogs
Contact                  → /contact
```

**Header (`SiteHeader.tsx`):**
- Copper top bar: social icons, phone, email
- White nav bar: logo, desktop dropdown menus, mobile hamburger drawer
- "Book Appointment" CTA → `/contact`

---

## 8. Components Inventory

### Global shell

| Component | Type | Role |
|-----------|------|------|
| `SiteHeader.tsx` | React (`client:load`) | Top bar + nav + mobile menu |
| `SiteFooter.tsx` | React (SSR) | Wix collage footer; `mobileWhiteBg` prop for per-page mobile background |
| `FloatingCallButton.tsx` | React | Fixed black phone FAB → `tel:9573884525` |
| `Logo.tsx` | React | Header logo |
| `FooterLogoIcon.tsx` | React | Footer SVG logo (extracted vector) |
| `HeaderLogoIcon.tsx` | React | Header logo variant |
| `lenis-provider.tsx` | React | Smooth scroll wrapper |
| `SiteContainer.tsx` | React | Max-width layout helper |

### Landing page sections

| Component | Interactivity | Notes |
|-----------|---------------|-------|
| `HeroSection.tsx` | Static | Separate mobile/desktop layouts; watercolor bg, portrait, CTA |
| `StatsBanner.tsx` | Static | 4 stats + "Our Story" link |
| `TestimonialsCarousel.tsx` | React | Desktop: 2 cards + arrows; Mobile: 1 card, split title |
| `ServicesSection.tsx` | Static | 4 signature service cards |
| `ComfortGallery.tsx` | React | Auto-scroll gallery; `translate3d` on mobile + desktop |
| `InstagramStrip.tsx` | React | Instagram thumbnails carousel |

### Page-specific

| Component | Page(s) |
|-----------|---------|
| `DrSuneetaPage.tsx` | `/drsuneeta` |
| `DrSuneetaDecorations.tsx` | Dr. Suneeta decorative SVGs |
| `OurServicesPage.tsx` | `/our-services` |
| `InvisilignOldMain.tsx` | `/invisilign` |
| `InvisilignHeroMosaic.tsx` | Invisalign hero mosaic |
| `InvisilignDecorations.tsx` | Invisalign decorative elements |
| `ImplantsOldMain.tsx` | `/implants` |
| `AboutLeafDecorations.tsx` | About page leaf SVG |
| `DoctorQuote.tsx` | Hero quote block |
| `CopperArrowButton.tsx` | Reusable pill CTA with arrow |

### UI primitives

| Component | Source |
|-----------|--------|
| `ui/button.tsx` | shadcn/ui |
| `icons.tsx` | Custom extracted SVG icons (social, chevrons, menu, etc.) |

---

## 9. Content & Data Layer

**Single source of truth:** `src/lib/krest-content.ts` (~700 lines)

| Export | Contents |
|--------|----------|
| `NAV_ITEMS` | Site navigation tree |
| `SOCIALS` | Facebook, Instagram, YouTube URLs |
| `PHONE_*`, `EMAIL` | Contact constants |
| `STATS` | 5,000+ patients, 20+ years, etc. |
| `SERVICES` | Landing page 4 service cards |
| `TESTIMONIALS` | ~10 patient quotes |
| `GALLERY` | Comfort gallery images + dimensions |
| `INSTAGRAM_POSTS` | 12 thumbnail images |
| `BLOG_POSTS` | Full blog articles with sections, quotes, takeaways |
| `HERO` | Landing hero portrait + copy |
| `ABOUT_HERO` | About page portraits and bio |
| `DR_SUNEETA_PAGE` | Dr. Suneeta page content + milestones |
| `ABOUT_VISION_MISSION` | Vision/mission cards |
| `OUR_SERVICES_PAGE` | Service categories for /our-services |
| `ADDRESS`, `HOURS` | Footer + contact clinic details |

**Types:** `src/types/krest.ts` — `Service`, `Testimonial`, `BlogPost`, `NavItem`, `GalleryImage`, etc.

---

## 10. Design System

### Color tokens (`globals.css`)

| Token | Approx. value | Usage |
|-------|---------------|-------|
| `--krest-cream` | `#F4EAE6` / oklch | Page background |
| `--krest-copper` | `#9F6449` | Headings, CTAs, accents |
| `--krest-taupe` | `#6F6356` | Secondary text, links |
| `--krest-ink` | `#000000` | Primary text |
| `--krest-pink` | `#F5B8AA` | Service card circle accents |

### Typography

| Token | Font | Usage |
|-------|------|-------|
| `--font-display` | EB Garamond | Headings, body prose, quotes |
| `--font-accent` | Marmelad | Subtitles ("Cosmetic Dentist & Implantologist") |
| `--font-heading` | Inknut Antiqua | Alternate headings |
| `--font-body` | Arial / Helvetica | Nav, labels, footer body (mobile) |

Loaded via Google Fonts in `Layout.astro`.

### Layout tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--krest-site-max` | 1425px | Site canvas max-width |
| `--krest-content-max` | 1069px | Prose blocks |
| `--krest-gutter` | 25px | Horizontal padding (`.krest-site`) |

### Utility classes

- `.krest-site` — centered max-width container with gutter
- `.krest-prose` — narrower content column
- `.krest-card-band` — service card band width
- `.text-krest-display-lg` — large copper display headings
- Mobile-specific: `.hero-mobile__*`, `.testimonials-mobile__*`, `.footer-mobile__*`, etc.

---

## 11. Footer — Mobile vs Desktop

### Desktop (≥1024px)
- 4-column grid: Logo + socials | Menu | Contact Us | Opening Hours
- White background
- Copyright centered below

### Mobile (<1024px) — Wix collage grid
- **Row 1:** Logo left, social icons right (min-height 103px)
- **Row 2:** Menu (36.6%) | Contact Us (63.4%), 16px column gap
- **Row 3:** Opening Hours — **full width** (not under Menu)
- **Row 4:** Copyright, 15px row gap, Xscade underlined
- Background: **cream** by default; **white** when `mobileWhiteBg` prop is set

### Pages with white mobile footer (`mobileWhiteBg`)

- `/` (landing)
- `/about-us`
- `/drsuneeta`
- `/links`
- `/blogs`, `/blogs/[slug]`
- `/contact`
- `/invisilign`

### Pages with cream mobile footer (default)

- `/our-services`
- `/implants`

---

## 12. Key Behaviors & Interactions

| Feature | Implementation | Notes |
|---------|----------------|-------|
| **Smooth scroll** | Lenis via `LenisProvider` | Matches Wix `html.lenis` behavior |
| **Header** | Static (not sticky) | Scrolls away with page — matches live site |
| **Floating call button** | Fixed bottom-right, 65×65 black circle | Always visible |
| **Testimonials** | Click + auto-advance patterns | Responsive split layouts |
| **Comfort gallery** | `requestAnimationFrame` + `translate3d` | Auto-scroll ~50px/s; pauses on hover (desktop); seamless loop via tripled slides |
| **Instagram strip** | Carousel with navigation | Lazy-loaded island |
| **Float-in animation** | `IntersectionObserver` in Layout | Elements with `[data-float-in]` |
| **Mobile breakpoint** | `lg:` = 1024px | Aligns with Wix ~1000px collapse |

See `docs/research/BEHAVIORS.md` for original inspection notes.

---

## 13. Backend — Leads & Admin

### Lead capture flow

1. User submits contact form on `/contact` (HTML `POST` or JSON)
2. `POST /api/leads` validates name, phone, email
3. `insertLead()` in `leads-store.ts`:
   - **Primary:** MongoDB Atlas (`MONGODB_URI`)
   - **Fallback:** `data/leads.json` on disk if Mongo fails (Windows SRV DNS issues)
4. Redirect to `/contact?success=1` or JSON `{ ok: true }`

### MongoDB configuration

- `MONGODB_URI`, `MONGODB_DB` (default `krest`), `MONGODB_COLLECTION_LEADS` (default `leads`)
- `MONGODB_DNS_SERVERS` — optional; dev defaults to `8.8.8.8, 1.1.1.1` on Windows for SRV lookups
- Singleton connection pool in `mongodb.ts`

### Admin panel

- Credentials: `ADMIN_USERNAME`, `ADMIN_PASSWORD`
- Session: HMAC-signed cookie (`SESSION_SECRET`, 7-day TTL)
- Dashboard lists leads; API supports status updates

### Security notes

- `security.checkOrigin: false` in Astro config — prevents 403 on Vercel preview domains during form POST
- Honeypot field `botcheck` silently accepts spam bots
- UTM + gclid/fbclid captured for attribution

---

## 14. Environment Variables

See `.env.example`:

| Variable | Scope | Purpose |
|----------|-------|---------|
| `PUBLIC_SITE_URL` | Public | Canonical site URL for SEO |
| `MONGODB_URI` | Server | Atlas connection string |
| `MONGODB_DB` | Server | Database name |
| `MONGODB_COLLECTION_LEADS` | Server | Collection name |
| `MONGODB_DNS_SERVERS` | Server | Optional DNS override for SRV |
| `ADMIN_USERNAME` | Server | Admin login |
| `ADMIN_PASSWORD` | Server | Admin login |
| `SESSION_SECRET` | Server | Cookie signing (32+ chars) |

**Never commit `.env`** — gitignored; use `.env.example` as template.

---

## 15. Deployment

### Vercel (recommended)

- `VERCEL=1` → `@astrojs/vercel` adapter, `maxDuration: 60` for cold Mongo starts
- Set all env vars in Vercel project settings
- SSR routes: `/api/*`, `/admin/*`

### Self-hosted Node

- `@astrojs/node` standalone mode
- Run built server from `dist/`

### Build commands

```bash
npm run dev        # Astro dev server (port 4321)
npm run build      # Production build
npm run preview    # Preview production build
npm run lint       # ESLint
npm run typecheck  # astro check + tsc
npm run check      # lint + typecheck + build
```

---

## 16. AI Agent & Clone Workflow

### Entry points

| File | Role |
|------|------|
| `AGENTS.md` | Single source of truth for all AI agents |
| `.claude/skills/clone-website/SKILL.md` | `/clone-website` skill definition |
| `.cursor/commands/clone-website.md` | Cursor command mirror |
| `docs/research/INSPECTION_GUIDE.md` | How to inspect target sites |

### Clone pipeline (from upstream template)

1. **Reconnaissance** — screenshots, design tokens, interaction sweep
2. **Foundation** — fonts, colors, asset downloads
3. **Component specs** — `docs/research/components/` (when used)
4. **Parallel build** — git worktrees per section
5. **Assembly & QA** — merge, visual diff

### Sync scripts

```bash
bash scripts/sync-agent-rules.sh   # After editing AGENTS.md
node scripts/sync-skills.mjs       # After editing clone-website SKILL.md
```

---

## 17. Assets

### Download pipeline

`scripts/download-assets.mjs` maps Wix CDN URLs → `public/images/...`

Categories include:
- Hero portraits
- Gallery / clinic interiors
- Instagram posts
- About / Dr. Suneeta photos
- Service illustrations
- Blog covers
- Invisalign / implants page images

### SEO assets

`public/seo/` — favicons (32, 192), apple-touch-icon, OG image

---

## 18. SEO & Metadata

Each Astro page passes props to `Layout.astro`:

- `title`, `description`, `canonical`, `keywords`
- Open Graph + Twitter cards
- JSON-LD on several pages (contact, blogs, drsuneeta, etc.)
- `og:type` — `website` or `article` for blog posts

Default site: `https://www.krest.dental`

---

## 19. Responsive Design Summary

| Breakpoint | Behavior |
|------------|----------|
| **< 768px** | Mobile typography utilities; single-column layouts |
| **< 1024px (`max-lg`)** | Mobile nav drawer; mobile footer collage; mobile hero/testimonials |
| **≥ 1024px (`lg:`)** | Desktop nav dropdowns; 4-column footer; multi-column sections |

Mobile-first Tailwind utilities throughout.

---

## 20. Known Gaps & Technical Debt

| Item | Status |
|------|--------|
| README / AGENTS.md say Next.js | **Outdated** — project is Astro |
| `/invisilign` URL spelling | Matches Wix typo; not `/invisalign` |
| Practo icon on `/links` | Placeholder noted in prior work |
| Wix scroll-reveal animations | Minimal `data-float-in` only; not full Wix parity |
| `data/leads.json` fallback | Dev convenience; migrate to Mongo in production |
| AGENTS.md Next.js agent rules block | Legacy comment block at top of AGENTS.md |
| Some pages prerender with SSR APIs | Contact form posts to SSR `/api/leads` — works on Vercel |

---

## 21. Page → Component Map (Quick Reference)

```
/                 → HeroSection, StatsBanner, TestimonialsCarousel,
                    ServicesSection, ComfortGallery, InstagramStrip
/about-us         → Astro markup + AboutLeafDecorations
/drsuneeta        → DrSuneetaPage
/our-services     → OurServicesPage
/invisilign       → InvisilignOldMain (+ HeroMosaic, Decorations)
/implants         → ImplantsOldMain
/blogs            → Astro listing from BLOG_POSTS
/blogs/[slug]     → Astro article template
/links            → Astro Connect With Us cards
/contact          → Astro form + clinic info
/admin/*          → Astro admin UI
```

**Every public page includes:** `SiteHeader`, `SiteFooter`, `FloatingCallButton`, `Layout`

---

## 22. Contact Information (Site Constants)

| Field | Value |
|-------|-------|
| Phone | +91 95738 84525 |
| Email | krestdental@gmail.com |
| Address | KREST DENTAL CARE, 3rd Floor, Door No 2-48-21, MVP Colony, Visakhapatnam |
| Hours | Monday to Saturday 9:30 AM – 7:30 PM; Sunday Closed |
| Social | Facebook, Instagram, YouTube (see `SOCIALS` in krest-content.ts) |

---

## 23. Related Documentation

| Document | Path |
|----------|------|
| Design tokens | `docs/research/DESIGN_TOKENS.md` |
| Behaviors | `docs/research/BEHAVIORS.md` |
| Page topology | `docs/research/PAGE_TOPOLOGY.md` |
| Inspection guide | `docs/research/INSPECTION_GUIDE.md` |
| Design screenshots | `docs/design-references/` |
| Env template | `.env.example` |
| Agent rules | `AGENTS.md` |

---

## 24. Summary

This project is a **fully functional Astro + React clone of krest.dental** built on top of an AI website-cloning template. It reproduces the Wix site's visual design, content, and core behaviors (smooth scroll, carousels, auto-scrolling gallery, responsive layouts), while adding **modern infrastructure**: TypeScript, componentized React islands, MongoDB lead storage, admin dashboard, and Vercel-ready SSR.

The codebase is organized around **`krest-content.ts`** for data, **`globals.css`** for design tokens, and **`src/pages/`** for routing — with interactive pieces isolated in **`src/components/`** as hydrated React islands.

For new development:
- **Content changes** → edit `krest-content.ts`
- **Styling / tokens** → edit `globals.css`
- **New pages** → add `src/pages/*.astro` + optional React component
- **Interactive UI** → React component with appropriate `client:*` directive in Astro page

---

*End of project analysis.*
