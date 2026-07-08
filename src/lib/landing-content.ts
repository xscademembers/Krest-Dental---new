import type { LandingContent } from "@/types/landing";

const SITE = "https://www.krest.dental";

/**
 * Phase 1 — Invisalign Google Ads landing page content.
 *
 * Route: /invisalign-treatment-vizag
 * Conversion-first, standalone (does not touch the existing /invisilign service page).
 */
export const INVISALIGN_LANDING: LandingContent = {
  slug: "invisalign-treatment-vizag",

  seo: {
    title:
      "Invisalign Treatment in Visakhapatnam | Invisible Braces | Krest Dental",
    description:
      "Looking for Invisalign treatment in Vizag? Get expert invisible braces treatment from experienced cosmetic dentists at Krest Dental. Book your consultation today.",
    canonical: `${SITE}/invisalign-treatment-vizag`,
    keywords: [
      "Invisalign Vizag",
      "Invisible Braces Vizag",
      "Best Invisalign Dentist Visakhapatnam",
      "Clear Aligners Vizag",
      "Invisalign Cost Vizag",
      "Invisible Teeth Braces",
    ],
  },

  schema: {
    serviceName: "Invisalign Treatment",
    serviceType: "Orthodontics — Clear Aligners (Invisalign)",
  },

  hero: {
    eyebrow: "Invisalign® Provider in Visakhapatnam",
    headline: "Transform Your Smile with Invisalign®",
    headlineAccent: "Invisible Braces That Fit Your Lifestyle",
    subheading:
      "Get a confident smile without metal braces. Trusted Invisalign treatment by experienced cosmetic dentists in Visakhapatnam.",
    image: "/images/invisilign-old/invisalign-consultation.jpg",
    imageAlt:
      "Patient receiving Invisalign clear aligner consultation at Krest Dental, Visakhapatnam",
    primaryCta: { label: "Book Consultation", href: "#lead-form" },
    secondaryCta: { label: "Call Now", href: "tel:9573884525" },
  },

  trustBadges: [
    { label: "20+ Years Experience", icon: "star" },
    { label: "5000+ Happy Patients", icon: "smile" },
    { label: "Advanced Digital Dentistry", icon: "tech" },
    { label: "Google Rated Clinic", icon: "check" },
  ],

  benefits: {
    heading: "Why Invisalign?",
    intro:
      "Invisalign clear aligners straighten your teeth discreetly and comfortably — no metal wires, no lifestyle compromises.",
    cards: [
      {
        title: "Nearly Invisible",
        text: "Clear aligners are virtually unnoticeable — straighten your teeth without anyone knowing.",
        icon: "eye",
      },
      {
        title: "Comfortable",
        text: "Smooth, custom-fit aligners with no sharp brackets or wires to irritate your mouth.",
        icon: "smile",
      },
      {
        title: "Removable",
        text: "Take them out for meetings, photos, or special occasions whenever you need to.",
        icon: "hand",
      },
      {
        title: "Eat Anything",
        text: "No food restrictions — simply remove your aligners while you eat and drink.",
        icon: "food",
      },
      {
        title: "Easy Cleaning",
        text: "Brush and floss normally. Aligners are simple to clean and keep hygienic.",
        icon: "sparkle",
      },
      {
        title: "Fewer Clinic Visits",
        text: "Digitally planned treatment means fewer appointments and less time in the chair.",
        icon: "calendar",
      },
    ],
  },

  conditions: {
    heading: "Is Invisalign Right For You?",
    intro:
      "Invisalign corrects a wide range of alignment and bite concerns. If any of these sound familiar, you may be a great candidate.",
    cards: [
      { 
        title: "Crowded Teeth", 
        text: "When there isn't enough room in your jaw for all your teeth, Invisalign gently shifts them into perfect alignment, making cleaning easier.",
        icon: "teeth" 
      },
      { 
        title: "Spacing / Gaps", 
        text: "Whether from missing teeth or abnormal jaw growth, clear aligners can seamlessly close unsightly gaps and prevent food impaction.",
        icon: "spacing" 
      },
      { 
        title: "Overbite", 
        text: "When your upper front teeth overlap your lower teeth too much, clear aligners correct the bite to prevent jaw pain and excessive wear.",
        icon: "overbite" 
      },
      { 
        title: "Crossbite", 
        text: "If some upper teeth sit inside your lower teeth, Invisalign can realign them to prevent bone loss, gum disease, and chipped teeth.",
        icon: "crossbite" 
      },
      { 
        title: "Open Bite", 
        text: "When upper and lower front teeth don't meet, aligners precisely adjust their position to restore proper chewing and speaking functions.",
        icon: "openbite" 
      },
      { 
        title: "Moderate Misalignment", 
        text: "General crookedness or minor relapse after childhood braces can be quickly and comfortably corrected with a short Invisalign course.",
        icon: "align" 
      },
    ],
  },

  process: {
    heading: "Your Invisalign Journey",
    intro: "A clear, comfortable path to your new smile in four simple steps.",
    steps: [
      {
        title: "Consultation",
        text: "We assess your smile and discuss your goals to confirm you're a candidate.",
      },
      {
        title: "3D Digital Scan",
        text: "A precise digital scan maps your teeth and previews your future smile.",
      },
      {
        title: "Custom Aligners",
        text: "Wear your custom aligners and switch to the next set as your teeth move.",
      },
      {
        title: "Your New Smile",
        text: "Reveal a beautifully aligned, confident smile that lasts.",
      },
    ],
  },

  whyChoose: {
    heading: "Why Choose Krest Dental",
    intro:
      "Visakhapatnam's trusted destination for advanced, comfortable, and results-driven Invisalign care.",
    cards: [
      {
        title: "Experienced Cosmetic Dentist",
        text: "Treatment led by internationally trained Dr. Suneeta Veeramachaneni.",
        icon: "dentist",
      },
      {
        title: "Latest Digital Technology",
        text: "3D scanning and digital treatment planning for predictable results.",
        icon: "tech",
      },
      {
        title: "Personalized Treatment Plan",
        text: "Every smile is unique — your plan is tailored to your goals.",
        icon: "plan",
      },
      {
        title: "Transparent Pricing",
        text: "Clear, honest pricing with flexible options and no surprises.",
        icon: "price",
      },
      {
        title: "Comfortable Clinic",
        text: "A calm, modern, and welcoming environment for every visit.",
        icon: "clinic",
      },
      {
        title: "Convenient Location",
        text: "Easy to reach in the heart of MVP Colony, Visakhapatnam.",
        icon: "location",
      },
    ],
  },

  doctor: {
    heading: "Meet",
    name: "Dr. Suneeta Veeramachaneni",
    role: "Cosmetic Dentist & Implantologist",
    image: "/images/dr-suneeta/hero-portrait.jpg",
    imageAlt:
      "Dr. Suneeta Veeramachaneni, Cosmetic Dentist and Invisalign provider at Krest Dental, Visakhapatnam",
    bio: "A top-ranked UCSF graduate who practiced in San Francisco for over 8 years before founding Krest Dental Care in Visakhapatnam. Dr. Suneeta blends global expertise with artistic precision to craft confident, natural-looking smiles.",
    highlights: [
      "20+ Years Experience",
      "Thousands of Smiles Transformed",
      "Cosmetic Dentist",
      "Patient-Centric Care",
    ],
    cta: { label: "Schedule Consultation", href: "#lead-form" },
  },

  beforeAfter: {
    heading: "Before & After",
    intro: "Real smile transformations crafted at Krest Dental.",
    items: [
      {
        before: "/images/invisilign-old/studio-portrait.jpg",
        after: "/images/invisilign-old/getty-man.jpg",
        alt: "Invisalign smile transformation at Krest Dental",
        label: "Smile Alignment",
      },
      {
        before: "/images/invisilign-old/getty-man.jpg",
        after: "/images/invisilign-old/studio-portrait.jpg",
        alt: "Clear aligner treatment result at Krest Dental",
        label: "Gap Closure",
      },
    ],
  },

  testimonials: {
    heading: "What Our Patients Say",
    intro: "Rated 5 stars by patients across Visakhapatnam.",
    reviews: [
      {
        quote:
          "I visited Krest dental for teeth alignment. It was a great experience. The doctors and staff were so welcoming and friendly. I'm extremely satisfied with the service and highly recommend Krest dental.",
        author: "Narayana Patrudu",
        rating: 5,
      },
      {
        quote:
          "Dr. Suneeta has been my dentist for over a year and did an excellent job with my teeth filling and fixing alignment, cosmetic teeth procedure and many more. I never felt so comfortable with any dentist in my life earlier.",
        author: "Anjani Danthuluri",
        rating: 5,
      },
      {
        quote:
          "Suneeta is a master of her craft. You won't get any better than Krest Dental in Visakhapatnam. International standards of work. 5 star treatment. I would highly recommend Dr. Suneeta to anyone looking for specialized dentistry.",
        author: "Verified Patient",
        rating: 5,
      },
      {
        quote:
          "Krest Dental gives a comfy dental treatment experience through an aesthetic environment. Dr Suneeta is a very kind person who hears our problems and gives suitable treatments. Best quality and pleasant experience in Vizag.",
        author: "Aruna Devi",
        rating: 5,
      },
      {
        quote:
          "I would rather call her an artist than a doctor. As an artist she becomes calm, focused and does the procedure meticulously like a craft. She is professional and a perfectionist.",
        author: "Suraj Undrala",
        rating: 5,
      },
      {
        quote:
          "The doctors here are very experienced and look into very minute details. The ambience is good and the place is tidy. Absolutely hassle free, unlike other clinics. I would definitely recommend this clinic.",
        author: "Vishnu Anne",
        rating: 5,
      },
    ],
  },

  faq: {
    heading: "Frequently Asked Questions",
    items: [
      {
        q: "What is Invisalign?",
        a: "Invisalign is a modern orthodontic treatment that uses a series of clear, custom-made, removable aligners to gradually straighten your teeth — without metal brackets or wires.",
      },
      {
        q: "How much does Invisalign cost in Vizag?",
        a: "The cost depends on the complexity of your case and the number of aligners required. At Krest Dental we offer transparent pricing and flexible payment options — book a consultation for an exact quote.",
      },
      {
        q: "How long does Invisalign treatment take?",
        a: "Most treatments take between 6 and 18 months depending on your alignment needs. Your dentist will give you a personalized timeline after your 3D scan.",
      },
      {
        q: "Is Invisalign painful?",
        a: "Invisalign is far more comfortable than traditional braces. You may feel mild pressure for a day or two when starting a new set of aligners — a sign that your treatment is working.",
      },
      {
        q: "Can adults get Invisalign?",
        a: "Absolutely. Invisalign is one of the most popular choices for adults and teens precisely because the aligners are nearly invisible and fit seamlessly into daily life.",
      },
      {
        q: "How often should I wear my aligners?",
        a: "For best results, wear your aligners 20–22 hours a day, removing them only to eat, drink, brush, and floss.",
      },
      {
        q: "How many visits are required?",
        a: "Invisalign typically needs fewer visits than braces. You'll come in periodically for quick check-ins to monitor progress and collect new aligners.",
      },
      {
        q: "Will people notice I'm wearing them?",
        a: "The aligners are clear and custom-fit, making them virtually unnoticeable in everyday conversation and photos.",
      },
    ],
  },

  leadForm: {
    heading: "Book Your Consultation",
    intro:
      "Fill in your details and our team will call you back to confirm a time that suits you.",
    interest: "Invisalign — Landing Page (Vizag)",
    submitLabel: "Book Consultation",
  },
};

export const IMPLANTS_LANDING: LandingContent = {
  slug: "dental-implants-vizag",

  seo: {
    title: "Dental Implants in Visakhapatnam | Permanent Tooth Replacement | Krest Dental",
    description: "Looking for dental implants in Vizag? Replace missing teeth with permanent dental implants by experienced implant specialists at Krest Dental.",
    canonical: `${SITE}/dental-implants-vizag`,
    keywords: [
      "Dental Implants Vizag",
      "Dental Implant Clinic Vizag",
      "Tooth Replacement",
      "Single Tooth Implant",
      "Implant Dentist Visakhapatnam",
      "Permanent Teeth Replacement",
    ],
  },

  schema: {
    serviceName: "Dental Implants",
    serviceType: "Prosthodontics — Dental Implants",
  },

  hero: {
    eyebrow: "Dental Implant Experts in Visakhapatnam",
    headline: "Permanent Dental Implants",
    headlineAccent: "Restore Your Smile with Confidence",
    subheading: "Natural-looking, durable dental implants using advanced technology and personalized care by experienced implantologists.",
    image: "/images/implants-old/implants.jpg",
    imageAlt: "Patient receiving dental implant consultation at Krest Dental, Visakhapatnam",
    primaryCta: { label: "Book Consultation", href: "#lead-form" },
    secondaryCta: { label: "Call Now", href: "tel:9573884525" },
  },

  trustBadges: [
    { label: "20+ Years Experience", icon: "star" },
    { label: "Advanced Implant Technology", icon: "tech" },
    { label: "Experienced Implantologist", icon: "dentist" },
    { label: "5000+ Happy Patients", icon: "smile" },
  ],

  conditions: {
    heading: "Missing Teeth Problems",
    intro: "Living with missing teeth affects more than just your smile. Dental implants are the permanent solution to these common issues.",
    cards: [
      {
        title: "Difficulty Eating",
        text: "Struggling to chew your favorite foods can lead to poor nutrition. Implants restore full bite strength.",
        icon: "food",
      },
      {
        title: "Speech Problems",
        text: "Missing teeth can cause slurring or lisping. Implants function like natural teeth, restoring clear speech.",
        icon: "speech",
      },
      {
        title: "Jaw Bone Loss",
        text: "When a tooth is lost, the jawbone deteriorates. Implants stimulate the bone, preventing facial collapse.",
        icon: "shield",
      },
      {
        title: "Smile Confidence",
        text: "Gaps in your smile can make you self-conscious. Implants provide a perfectly natural-looking restoration.",
        icon: "smile",
      },
      {
        title: "Teeth Shifting",
        text: "Adjacent teeth can drift into the empty gap, causing alignment issues and further tooth loss.",
        icon: "shift",
      },
      {
        title: "Facial Changes",
        text: "Bone loss from missing teeth can cause your face to look prematurely aged and sunken. Implants maintain facial structure.",
        icon: "face",
      },
    ],
  },

  benefits: {
    heading: "Benefits of Dental Implants",
    intro: "Why dental implants are considered the gold standard for tooth replacement worldwide.",
    cards: [
      {
        title: "Permanent Solution",
        text: "Unlike dentures or bridges, implants are surgically fused to your jawbone for a permanent restoration.",
        icon: "check",
      },
      {
        title: "Natural Appearance",
        text: "Custom-crafted crowns match the exact color and shape of your surrounding natural teeth.",
        icon: "eye",
      },
      {
        title: "Comfortable",
        text: "Implants feel exactly like natural teeth—no slipping, clicking, or discomfort like removable dentures.",
        icon: "smile",
      },
      {
        title: "Strong Bite",
        text: "Eat apples, steak, and nuts with confidence. Implants restore 100% of your natural chewing power.",
        icon: "eat",
      },
      {
        title: "Protect Jaw Bone",
        text: "Implants act as artificial tooth roots, actively preventing the jawbone loss that follows tooth extraction.",
        icon: "shield",
      },
      {
        title: "Long Lasting",
        text: "With proper brushing and flossing, your dental implants are designed to last a lifetime.",
        icon: "calendar",
      },
    ],
  },

  process: {
    heading: "The Implant Process",
    intro: "A seamless, pain-free journey to a permanent, beautiful smile.",
    steps: [
      {
        title: "Consultation & Scan",
        text: "We evaluate your jawbone health using advanced 3D CBCT scans to ensure you are a perfect candidate.",
      },
      {
        title: "Digital Planning",
        text: "Using digital software, we plan the exact angle and depth of the implant for maximum precision.",
      },
      {
        title: "Implant Placement",
        text: "The titanium implant is gently placed into the jawbone under local anesthesia—a quick and virtually painless procedure.",
      },
      {
        title: "Healing & Osseointegration",
        text: "Over the next few months, the implant permanently fuses with your natural jawbone.",
      },
      {
        title: "Permanent Crown",
        text: "We attach a custom-milled, natural-looking ceramic crown. Your new smile is ready!",
      },
    ],
  },

  whyChoose: {
    heading: "Why Choose Krest Dental for Implants",
    intro: "Visakhapatnam's premier destination for safe, precise, and long-lasting dental implant surgery.",
    cards: [
      {
        title: "Experienced Implant Team",
        text: "Highly trained surgeons specialized in complex implantology and bone grafting.",
        icon: "dentist",
      },
      {
        title: "Modern Equipment",
        text: "In-house 3D CBCT scanners and digital surgical guides for pinpoint accuracy.",
        icon: "tech",
      },
      {
        title: "Premium Materials",
        text: "We only use globally recognized, biocompatible titanium implant brands.",
        icon: "star",
      },
      {
        title: "Digital Planning",
        text: "Every surgery is planned virtually before you even sit in the chair.",
        icon: "plan",
      },
      {
        title: "Comfortable Procedures",
        text: "Advanced anesthesia and a calming environment ensure a pain-free experience.",
        icon: "clinic",
      },
      {
        title: "Personalized Care",
        text: "From consultation to aftercare, our team is dedicated to your absolute comfort.",
        icon: "leaf",
      },
    ],
  },

  doctor: INVISALIGN_LANDING.doctor,
  
  beforeAfter: {
    heading: "Before & After",
    intro: "Real implant transformations crafted at Krest Dental.",
    items: [
      {
        before: "/images/invisilign-old/studio-portrait.jpg",
        after: "/images/invisilign-old/getty-man.jpg",
        alt: "Single tooth dental implant transformation at Krest Dental",
        label: "Single Tooth Replacement",
      },
      {
        before: "/images/invisilign-old/getty-man.jpg",
        after: "/images/invisilign-old/studio-portrait.jpg",
        alt: "Full mouth dental implant result at Krest Dental",
        label: "Full Arch Restoration",
      },
    ],
  },
  
  testimonials: INVISALIGN_LANDING.testimonials,

  faq: {
    heading: "Frequently Asked Questions",
    items: [
      {
        q: "Are implants painful?",
        a: "Not at all. The procedure is performed under local anesthesia, so you won't feel any pain. Post-surgery discomfort is usually mild and easily managed with over-the-counter medication.",
      },
      {
        q: "How much do implants cost in Vizag?",
        a: "The cost varies based on the brand of the implant and whether bone grafting is needed. We offer premium implants at accessible, transparent prices. Book a consultation for a precise estimate.",
      },
      {
        q: "How long do implants last?",
        a: "With good oral hygiene (brushing, flossing, and regular dental checkups), dental implants are designed to last a lifetime.",
      },
      {
        q: "Can diabetics get implants?",
        a: "Yes, provided your blood sugar is well-controlled. We take special precautions and monitor your healing closely to ensure a successful outcome.",
      },
      {
        q: "Is implant surgery safe?",
        a: "Dental implant surgery is one of the safest and most predictable procedures in dentistry, especially when performed by experienced specialists using 3D guided technology like we do at Krest.",
      },
      {
        q: "How long is recovery?",
        a: "Most patients return to work the very next day. Complete bone healing (osseointegration) takes a few months, but this process happens painlessly behind the scenes.",
      },
      {
        q: "Do implants look natural?",
        a: "Absolutely. The final ceramic crown is custom-crafted to perfectly match the color, shape, and translucency of your surrounding natural teeth.",
      },
      {
        q: "How many visits are required?",
        a: "Typically, it requires a consultation, the implant placement day, and a final visit a few months later to attach the permanent crown. We also schedule quick follow-ups to monitor healing.",
      },
    ],
  },

  leadForm: {
    heading: "Book Your Implant Consultation",
    intro: "Take the first step toward a permanent, confident smile. Fill out the form and we'll contact you.",
    interest: "Dental Implants — Landing Page (Vizag)",
    submitLabel: "Book Consultation",
  },
};
