/**
 * Shared types for standalone Google Ads landing pages.
 *
 * Content is intentionally decoupled from presentation: every landing page
 * (Invisalign, Dental Implants, and future services) is described by a single
 * `LandingContent` object and rendered by the shared components in
 * `src/components/landing/`.
 */

/** Named icon keys supported by `LandingIcon.astro`. */
export type LandingIconName =
  | "eye"
  | "smile"
  | "hand"
  | "food"
  | "sparkle"
  | "calendar"
  | "teeth"
  | "spacing"
  | "overbite"
  | "crossbite"
  | "openbite"
  | "align"
  | "dentist"
  | "tech"
  | "plan"
  | "price"
  | "clinic"
  | "location"
  | "check"
  | "star"
  | "phone"
  | "whatsapp"
  | "clock"
  | "car"
  | "eat"
  | "speech"
  | "bone"
  | "confidence"
  | "shift"
  | "face"
  | "shield"
  | "leaf";

export type TrustBadge = {
  label: string;
  icon: LandingIconName;
};

export type LandingCard = {
  title: string;
  text?: string;
  icon: LandingIconName;
};

export type ProcessStep = {
  title: string;
  text?: string;
};

export type DoctorHighlight = string;

export type BeforeAfterItem = {
  before: string;
  after: string;
  alt: string;
  label?: string;
};

export type LandingReview = {
  quote: string;
  author: string;
  rating?: number;
};

export type LandingFaq = {
  q: string;
  a: string;
};

export type LandingCta = {
  label: string;
  /** For anchor scroll targets use "#form"; for tel/wa use full href. */
  href: string;
};

export type LandingContent = {
  /** Route slug (without leading slash), e.g. "invisalign-treatment-vizag". */
  slug: string;

  seo: {
    title: string;
    description: string;
    canonical: string;
    keywords: string[];
  };

  /** MedicalBusiness / service schema hints. */
  schema: {
    /** Service or procedure name, e.g. "Invisalign Treatment". */
    serviceName: string;
    serviceType: string;
  };

  hero: {
    eyebrow?: string;
    headline: string;
    headlineAccent?: string;
    subheading: string;
    image: string;
    imageAlt: string;
    primaryCta: LandingCta;
    secondaryCta: LandingCta;
  };

  trustBadges: TrustBadge[];

  benefits: {
    heading: string;
    intro?: string;
    cards: LandingCard[];
  };

  conditions: {
    heading: string;
    intro?: string;
    cards: LandingCard[];
  };

  process: {
    heading: string;
    intro?: string;
    steps: ProcessStep[];
  };

  whyChoose: {
    heading: string;
    intro?: string;
    cards: LandingCard[];
  };

  doctor: {
    heading: string;
    name: string;
    role: string;
    image: string;
    imageAlt: string;
    bio: string;
    highlights: DoctorHighlight[];
    cta: LandingCta;
  };

  beforeAfter: {
    heading: string;
    intro?: string;
    items: BeforeAfterItem[];
  };

  testimonials: {
    heading: string;
    intro?: string;
    reviews: LandingReview[];
  };

  faq: {
    heading: string;
    intro?: string;
    items: LandingFaq[];
  };

  leadForm: {
    heading: string;
    intro?: string;
    /** Value stored as the lead "interest" so the team knows the source. */
    interest: string;
    submitLabel: string;
  };
};
