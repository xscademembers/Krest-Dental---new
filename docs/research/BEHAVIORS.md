# Behaviors — krest.dental homepage

Captured at 1440×900 viewport. Behavior probes via `getComputedStyle()` and Playwright MCP.

## Global behaviors

### Smooth scroll — Lenis
- `html.lenis.lenis-smooth` is present on document root.
- All scrolling on the page is mediated by Lenis. Default browser scrolling feels noticeably different — must implement.
- Implementation in clone: install `lenis` package and initialize at the `RootLayout` level (or in a top-level `LenisProvider` client component).

### Header
- `position: relative`, **NOT sticky or fixed**.
- `backgroundColor: rgba(0, 0, 0, 0)` (transparent — page bg shows through).
- `boxShadow: none`, `transform: none` at all scroll positions.
- `transition: all` is set, but no scroll trigger changes properties — the header simply scrolls out of view.
- Height: 104.172px desktop.

### Floating phone CTA ("Like" button)
- Always-on, fixed positioning overlay at bottom-right.
- Black background (`rgb(0, 0, 0)`), `border-radius: 200px` (= circle since 65×65).
- Links to `tel:9573884525`.
- 65×65 px size, padding 8px.

## Section behaviors

### Testimonials carousel
- INTERACTION MODEL: **click-driven** (Previous/Next buttons present in DOM).
- Two visible quotes side-by-side on desktop.
- Cycles through ~10 reviews extracted from earlier text content.

### Comfort/Care gallery
- INTERACTION MODEL: **click-driven** (Previous/Next buttons in carousel region).
- Shows clinic interior photos (~6 images extracted at 970×647 source size).

### Instagram strip
- INTERACTION MODEL: probably **click-driven** carousel; possibly auto-cycling.
- 12 thumbnail images at 207×156 source size.
- All link to <https://www.instagram.com/krestdental/>.

### Service cards
- INTERACTION MODEL: **static**.
- "Know More" buttons link to per-service pages.
- No hover state extracted yet — to verify in Phase 5 QA.

## Element-level transitions

| Element | `transition` value |
|---|---|
| Hero "Book Appointment" CTA | `0.2s, visibility` |
| "Know More" inner span | `0.4s, visibility` |
| Most other elements | `transition: all` (Wix default) |

## Animations on scroll

Not deeply probed (no scroll-triggered keyframes detected in computed styles). The site likely uses Wix's inline animation library (`wow.js`-style fade-in-on-view), but for the clone MVP we will:
- Skip section reveal animations initially.
- Add a lightweight IntersectionObserver fade-up only if Phase 5 visual QA reveals a parity gap.

## Responsive sweep (preliminary)

Captured screenshots at:
- Desktop 1440×900 → `docs/design-references/desktop-1440-fullpage.png`
- Tablet 768×900 → `docs/design-references/tablet-768-fullpage.png`
- Mobile 390×844 → `docs/design-references/mobile-390-fullpage.png`

Layout changes:
- Header collapses to hamburger menu on mobile (Wix default `<= 1000px`).
- Hero stacks doctor image below text on mobile.
- 4-column service cards collapse to 1-column stack on mobile.
- Stats strip 4-up becomes 2x2 on tablet, 1-column on mobile.
- Footer 4-column becomes single column on mobile.

Approx breakpoint: **~1000px** (Wix default).
