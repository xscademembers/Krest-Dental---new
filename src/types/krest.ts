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
};
