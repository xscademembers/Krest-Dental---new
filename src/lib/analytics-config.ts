/**
 * Analytics / conversion-tracking configuration for landing pages.
 *
 * Fill these in when the marketing accounts are ready. Every value is optional:
 * the tracking layer degrades gracefully and simply pushes to `window.dataLayer`
 * (so a GTM container can pick everything up) when a specific vendor ID is empty.
 *
 * IMPORTANT: These are PUBLIC client-side IDs (safe to expose). Do not put any
 * secret here. You can also override at build time via PUBLIC_* env vars.
 */

const env = import.meta.env as unknown as Record<string, string | undefined>;

export const ANALYTICS = {
  /** GA4 Measurement ID, e.g. "G-XXXXXXXXXX". */
  ga4Id: env.PUBLIC_GA4_ID ?? "",
  /** Google Ads conversion ID, e.g. "AW-XXXXXXXXX". */
  googleAdsId: env.PUBLIC_GOOGLE_ADS_ID ?? "",
  /** Google Ads conversion label for the "book/lead" action, e.g. "abcDEF123". */
  googleAdsConversionLabel: env.PUBLIC_GOOGLE_ADS_CONVERSION_LABEL ?? "",
  /** Meta (Facebook) Pixel ID, e.g. "1234567890". */
  metaPixelId: env.PUBLIC_META_PIXEL_ID ?? "",
} as const;

/** Canonical GA4/dataLayer event names used across landing pages. */
export const TRACK_EVENTS = {
  callClick: "call_click",
  whatsappClick: "whatsapp_click",
  bookClick: "book_click",
  formSubmit: "generate_lead",
  scrollDepth: "scroll_depth",
} as const;

export type TrackEventName = (typeof TRACK_EVENTS)[keyof typeof TRACK_EVENTS];
