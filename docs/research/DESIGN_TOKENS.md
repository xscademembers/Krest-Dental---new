# Design Tokens — krest.dental

Extracted via `getComputedStyle()` at 1440×900 desktop viewport.

## Colors

| Token | RGB | Hex | Usage |
|---|---|---|---|
| `--krest-cream` | `rgb(244, 234, 230)` | `#F4EAE6` | Page background, default surface |
| `--krest-copper` | `rgb(159, 100, 73)` | `#9F6449` | Brand accent — buttons, section headings ("Signature Services"), borders, subtitle text |
| `--krest-taupe` | `rgb(111, 99, 86)` | `#6F6356` | Service card titles, blockquote text, secondary copy |
| `--krest-ink` | `rgb(0, 0, 0)` | `#000000` | Primary heading text, body |
| `--krest-pink` | `rgb(245, 184, 170)` | `#F5B8AA` | Light pink accent (e.g. service card backdrop circles) |
| `--krest-white` | `rgb(255, 255, 255)` | `#FFFFFF` | Selected surfaces, button on dark |

## Fonts

Primary fonts loaded by Wix (we will load via Google Fonts in `next/font/google`):

| Token | Family | Use |
|---|---|---|
| `--font-display` | **EB Garamond** (serif) | h1, h2, blockquotes, hero description, service card titles |
| `--font-accent` | **Marmelad** (sans-serif) | Subtitles, decorative accents (e.g. "Cosmetic Dentist & Implantologist") |
| `--font-heading-alt` | **Inknut Antiqua** (serif) | Alternate display headings |
| `--font-body` | system stack (`Arial, Helvetica, sans-serif`) | Nav links, button labels, footer body |

## Type scale (computed values)

| Element | Family | Size | Weight | Line-height | Letter-spacing | Color |
|---|---|---|---|---|---|---|
| `h1` (hero name) | EB Garamond | 60.12px | 400 | 54.11px | -1.804px | ink |
| Hero description `p` | EB Garamond | 22px | 400 | 28.6px | normal | ink |
| Hero subtitle `p` | Marmelad | 20px | 400 | 26px | normal | copper |
| Section `h2` ("Signature Services") | EB Garamond | 72.21px | 400 | 79.43px | -1.444px | copper |
| Service card `h2` ("Implants") | EB Garamond | 45.13px | 400 | 49.64px | -0.903px | taupe |
| Stats `h2` ("5,000+") | EB Garamond | 47.25px | 400 | 51.98px | -0.945px | ink |
| Blockquote (testimonials) | EB Garamond | 18px | 400 | 28.8px | normal | taupe |

## Buttons

| Variant | Bg | Text | Border | Radius | Padding | Size |
|---|---|---|---|---|---|---|
| Header outline pill ("Book Appointment") | transparent | ink | 1px solid copper | 999px | (Wix internal) | — |
| Hero CTA pill ("Book Appointment") | copper | ink | 0 | 50px | `0 10px 0 22px` | 227×50 |
| Service card pill ("Know More") | copper | ink | 0 | 300px | 8px | 147×38 |
| Floating phone CTA | ink (black) | n/a (icon) | 0 | 200px (= circle) | 8px | 65×65 |

## Spacing & layout

Measured at **1440×900** (2026-05-27):

| Token | Value | Usage |
|---|---|---|
| `--krest-site-max` | **1425px** | Wix site canvas — header, sections |
| `--krest-content-max` | **1069px** | Centered prose (hero intro, page titles block) |
| `--krest-card-max` | **1275px** | White service cards on `/our-services` |
| `--krest-gutter` | **25px** | All sections — `padding-inline` on `.krest-site` (live measured) |
| Content centering | **max-width** | Prose/cards centered via `.krest-prose` / `.krest-card-band`, not extra padding |

Implementation: `src/components/SiteContainer.tsx` + `.krest-site` / `.krest-prose` / `.krest-card-band` in `globals.css`.

## Our Services type (@ 1440px)

| Element | Size | Family |
|---|---|---|
| Page `h1` | **~78px** | EB Garamond |
| Intro `p` | **18px** | madefor-text → `font-body` |
| Card `h3` | **~45px** | EB Garamond |
| List items | **~24px** | EB Garamond, taupe |

- Header height: 104.17px
- Body baseline `font-size`: 10px (Wix uses `1rem = 0.1em` math)

## Iconography

- 47 inline SVGs on the homepage. Most are Wix-generated icons (chevrons, arrows, social, hamburger, close).
- Will be re-extracted into `src/components/icons.tsx` only as needed by individual sections.

## Smooth scroll

- Library: [`lenis`](https://github.com/darkroomengineering/lenis)
- Activation classes: `html.lenis.lenis-smooth`
- Implementation: install `lenis` and wrap `RootLayout` children with a client `LenisProvider`.
