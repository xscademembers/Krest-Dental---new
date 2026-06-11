export type Service = {
  slug: "implants" | "invisalign" | "aesthetic" | "comprehensive";
  title: string;
  description: string;
  image: string;
  link: string;
  badgeBg: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type SocialLink = {
  label: "Facebook" | "Instagram" | "YouTube";
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export type GalleryImage = {
  src: string;
  alt: string;
  /** Native pixel width — used by Comfort pro-gallery for aspect-ratio slides. */
  width?: number;
  /** Native pixel height — used by Comfort pro-gallery for aspect-ratio slides. */
  height?: number;
};

export type BlogSection = {
  /** Optional H2 heading; sections without one render as plain paragraphs */
  heading?: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  cover: { src: string; alt: string };
  author: string;
  authorRole: string;
  /** Lead paragraph rendered larger at the top of the article */
  intro: string;
  sections: BlogSection[];
  /** Optional pull quote rendered between sections */
  quote?: { text: string; afterSection: number };
  takeaways?: string[];
};

export type OurServiceCategory = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  items: string[];
};
