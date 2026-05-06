import type {
  GalleryImage,
  NavItem,
  Service,
  SocialLink,
  Stat,
  Testimonial,
} from "@/types/krest";

export const NAV_ITEMS: NavItem[] = [
  {
    label: "About Us",
    href: "/about-us",
    children: [{ label: "Dr. Suneeta", href: "/about-us#dr-suneeta" }],
  },
  {
    label: "Our Services",
    href: "/our-services",
    children: [
      { label: "Invisalign", href: "/invisalign" },
      { label: "Implants", href: "/implants" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const SOCIALS: SocialLink[] = [
  { label: "Facebook", href: "https://www.facebook.com/krestdentalcare" },
  { label: "Instagram", href: "https://www.instagram.com/krestdental/" },
  { label: "YouTube", href: "https://www.youtube.com/@KrestDentalCare" },
];

export const PHONE_DISPLAY = "+91 95738 84525";
export const PHONE_TEL = "tel:9573884525";
export const EMAIL = "krestdental@gmail.com";

export const STATS: Stat[] = [
  { value: "5,000+", label: "Happy Patients" },
  { value: "20+", label: "Years of Experience" },
  { value: "25,000+", label: "Successful Procedures" },
  { value: "20+", label: "Expert Staff" },
];

export const SERVICES: Service[] = [
  {
    slug: "implants",
    title: "Implants",
    description:
      "At Krest, we redefine smiles through precision-crafted dental implants that seamlessly blend beauty and function. Our advanced implant solutions restore missing teeth with unmatched natural aesthetics and lasting durability, empowering you with renewed confidence. Guided by expertise, innovation, and an unwavering commitment to excellence, we don't just replace teeth — we create smiles that inspire for a lifetime.",
    image: "/images/services/implants.png",
    link: "/implants",
    badgeBg: "bg-pink/40",
  },
  {
    slug: "invisalign",
    title: "Invisalign",
    description:
      "Dr. Suneeta Veeramachaneni transforms smiles with Invisalign — a precise, comfortable, and virtually invisible alternative to metal braces. Say goodbye to bulky wires and hello to smooth, pain-free teeth straightening that fits effortlessly into your lifestyle. Designed for elegance and efficiency, our customized Invisalign treatment ensures flawless alignment with minimal disruption. Because at Krest, a perfect smile isn't just a dream — it's within your reach.",
    image: "/images/services/invisalign.png",
    link: "/invisalign",
    badgeBg: "bg-pink/40",
  },
  {
    slug: "aesthetic",
    title: "Aesthetic / Cosmetic Dentistry",
    description:
      "We combine advanced aesthetic techniques and artistic precision to create stunning, natural-looking smiles. From porcelain veneers to professional teeth whitening, each treatment is crafted to enhance your unique beauty and boost your confidence. Our bespoke smile makeovers are designed for those who seek perfection — because at Krest, a radiant smile isn't just a luxury, it's a signature statement.",
    image: "/images/services/aesthetic.png",
    link: "/contact",
    badgeBg: "bg-pink/40",
  },
  {
    slug: "comprehensive",
    title: "Comprehensive / General Dentistry",
    description:
      "At Krest Dental, we provide comprehensive dental care designed to keep your smile healthy and flawless for years to come. From preventive check-ups and thorough cleanings to advanced restorative treatments, every procedure is performed with meticulous precision and gentle care. Using cutting-edge technology and a personalized approach, we deliver seamless, pain-free experiences that prioritize your long-term oral health. Because at Krest Dental, excellence isn't an option — it's our promise.",
    image: "/images/services/comprehensive.png",
    link: "/contact",
    badgeBg: "bg-pink/40",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "verified-patient",
    quote:
      "Suneeta is a master of her craft. You won't get any better than Krest Dental in Visakhapatnam. International standards of work. A bit pricey, but well worth it. 5 star treatment. I would highly recommend Dr. Suneeta to anyone looking for specialized dentistry.",
    author: "Verified Patient",
  },
  {
    id: "seth",
    quote:
      "Most importantly staff receives you with a smile. Whenever I get stressed, the doctor gave time for me to relax and asked me to cool down. She sees the patient as her own and treats them with care. She asked to raise my left hand if there is pain, I am sure I would have raised my pain hundred times with another doctor, here it's just an information but she has done it so nicely that I don't have to raise my hand.",
    author: "Seth",
  },
  {
    id: "vasanthlaxmi",
    quote:
      "I have this phobia of dentists, like any one else. To say it truly — that was the reason I kept postponing my dentist visit, for some time… eh, years. But finally one fine day, I stepped into our family dentist clinic, Krest. Yeah, all 5 of us are taking treatment here — my hubby, my son and d.in law and younger one. I was made to feel at home, pleasant welcome, making me feel like a queen in my dentist chair, and the gentle way of counselling.",
    author: "Vasanthlaxmi",
  },
  {
    id: "raghu",
    quote:
      "My family and I have been visiting Dr. Suneetha for the past 9 years, and I can confidently say she has consistently delivered outstanding dental care. Over the years, she has treated multiple generations in our family — my mother, my two daughters, myself and my wife — with the same high level of professionalism and expertise. Each procedure has been handled with incredible precision and care, ensuring minimal discomfort and maximum effectiveness.",
    author: "Raghu N",
  },
  {
    id: "rbd-swamy",
    quote:
      "To put it straight and frank it is not given to all to have such a passion of this calibre to treat patients for their full satisfaction and appreciation and admiration. One should visit the clinic as a patient to experience Dr. Suneeta's devotion to duty in action on everyday and on every patient. Pray for her continued services to the society. Shall we say that there is nothing wanting to call it as one of the best dental clinics known.",
    author: "R.B.D. Swamy",
  },
  {
    id: "suraj",
    quote:
      "I would rather call her an artist than a doctor. I never seen a dentist who is passionate like her. As an artist she becomes calm focused and does an operation meticulously like a craft. Like a psychologist she empathizes well and listens to patient's talk patiently. She is professional and a perfectionist. I am greatly thankful for Dr. Suneeta garu — she redeemed me from all the oral health problems in a systematic way which I had been suffering for a long period of time.",
    author: "Suraj Undrala",
  },
  {
    id: "vishnu",
    quote:
      "The doctors here are very experienced. They look into very minute details. The ambience is good and the place is tidy. The staff are polite. Advanced equipments are here. I had got my implants done here. They take care of us very well — especially the follow up, before and after the procedure, right from appointments — absolutely hassle free, unlike other clinics where you have to wait for a long time. Dr Sunitha has treated me very well, with utmost patience. I would definitely recommend this clinic.",
    author: "Vishnu Anne",
  },
  {
    id: "subbarao",
    quote:
      "Treatment is very good. Doctors are very experienced. Pre and post treatment follow up is extremely good. Doctors attend the patients on time. No waiting time. This hospital is equipped with modern equipment. Doctor Suneetha has given me very good treatment. All staff are polite.",
    author: "Subbarao Marina",
  },
  {
    id: "anjani",
    quote:
      "Dr. Suneeta has been my dentist for over a year and I must say she is exceptionally professional and done an excellent job with my teeth filling and fixing alignment, cosmetic teeth procedure and many more. I would definitely recommend her to my friends and family. I never felt so comfortable with any dentist in my life earlier. I'm glad to find Krest dental.",
    author: "Anjani Danthuluri",
  },
  {
    id: "narayana",
    quote:
      "I visited Krest dental for teeth alignment. It was a great experience. The doctors and staff were so welcoming and friendly. I'm extremely satisfied with the service and highly recommend Krest dental to anyone seeking dental care.",
    author: "Narayana Patrudu",
  },
  {
    id: "aruna",
    quote:
      "Krest Dental is giving a comfy dental treatment experience through an aesthetic environment. Dr Suneeta is a very kind person who hears our problems and gives suitable treatments. Best quality and pleasant experience place in Vizag.",
    author: "Aruna Devi",
  },
];

export const GALLERY: GalleryImage[] = [
  { src: "/images/gallery/clinic-01.jpg", alt: "Krest Dental clinic interior" },
  { src: "/images/gallery/clinic-02.jpg", alt: "Krest Dental treatment room" },
  { src: "/images/gallery/clinic-03.jpg", alt: "Krest Dental waiting area" },
  { src: "/images/gallery/clinic-04.jpg", alt: "Krest Dental hallway" },
  { src: "/images/gallery/clinic-05.jpg", alt: "Krest Dental consultation area" },
  { src: "/images/gallery/clinic-06.jpg", alt: "Krest Dental detail shot" },
  { src: "/images/gallery/clinic-07.jpg", alt: "Krest Dental interior view" },
];

export const INSTAGRAM_POSTS: GalleryImage[] = [
  { src: "/images/instagram/post-01.jpg", alt: "Krest Dental Instagram post" },
  { src: "/images/instagram/post-02.jpg", alt: "Krest Dental Instagram post" },
  { src: "/images/instagram/post-03.jpg", alt: "Krest Dental Instagram post" },
  { src: "/images/instagram/post-04.jpg", alt: "Krest Dental Instagram post" },
  { src: "/images/instagram/post-05.jpg", alt: "Krest Dental Instagram post" },
  { src: "/images/instagram/post-06.jpg", alt: "Krest Dental Instagram post" },
  { src: "/images/instagram/post-07.jpg", alt: "Krest Dental Instagram post" },
  { src: "/images/instagram/post-08.jpg", alt: "Krest Dental Instagram post" },
];

export const HERO = {
  doctorPortrait: "/images/hero/dr-suneeta-portrait.jpg",
  signature: "/images/hero/dr-suneeta-signature.png",
  backdropOrnament: "/images/hero/design-02.png",
  name: "Dr. Suneeta Veramachaneni",
  title: "Cosmetic Dentist & Implantologist",
  description:
    "Visakhapatnam's premier multi-specialty dental clinic, led by internationally trained cosmetic dentist & implantologist Dr. Suneeta Veeramachaneni. At Krest, we deliver world-class smile makeovers, implants, and comprehensive dental treatments. Unlock your best smile with advanced dentistry in a calming, state-of-the-art environment.",
  quote:
    "A confident smile is a reflection of great care. At Krest Dental, we blend precision, innovation, and heartfelt compassion to create smiles that truly stand out.",
} as const;

export const ADDRESS = {
  name: "KREST DENTAL CARE",
  lines: [
    "3rd Floor, Door No 2-48-21",
    "Opposite To Latte",
    "Sector 11, MVP Colony",
    "MVP Double Road",
    "Visakhapatnam — 530017.",
  ],
} as const;

export const HOURS = [
  { day: "Monday – Friday", time: "9:00 AM – 7:30 PM" },
  { day: "Sunday", time: "Closed" },
] as const;
