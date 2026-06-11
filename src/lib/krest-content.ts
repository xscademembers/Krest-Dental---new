import type {
  BlogPost,
  GalleryImage,
  NavItem,
  OurServiceCategory,
  Service,
  SocialLink,
  Stat,
  Testimonial,
} from "@/types/krest";

/** Footer-only logo (public/images/Krest Logo.Ai - 7.png) */
export const FOOTER_LOGO_SRC = "/images/Krest%20Logo.Ai%20-%207.png";

export const NAV_ITEMS: NavItem[] = [
  {
    label: "About Us",
    href: "/about-us",
    children: [{ label: "Dr. Suneeta", href: "/drsuneeta" }],
  },
  {
    label: "Our Services",
    href: "/our-services",
    children: [
      { label: "Invisalign", href: "/invisalign" },
      { label: "Invisilign - old", href: "/invisilign-old" },
      { label: "Implants", href: "/implants" },
      { label: "Implants - old", href: "/implants-old" },
    ],
  },
  { label: "Blogs", href: "/blogs" },
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
  { src: "/images/gallery/clinic-01.jpg", alt: "Krest Dental clinic interior", width: 1940, height: 1294 },
  { src: "/images/gallery/clinic-02.jpg", alt: "Krest Dental hallway", width: 836, height: 1294 },
  { src: "/images/gallery/clinic-03.jpg", alt: "Krest Dental treatment room", width: 1940, height: 1294 },
  { src: "/images/gallery/clinic-04.jpg", alt: "Krest Dental consultation area", width: 1940, height: 1294 },
  { src: "/images/gallery/clinic-05.jpg", alt: "Krest Dental operatory", width: 1940, height: 1294 },
  { src: "/images/gallery/clinic-06.jpg", alt: "Krest Dental reception detail", width: 862, height: 1294 },
  { src: "/images/gallery/clinic-07.jpg", alt: "Krest Dental interior view", width: 1940, height: 1294 },
];

/** 15 images — same order as krest.dental Instagram pro-gallery */
export const INSTAGRAM_POSTS: GalleryImage[] = [
  { src: "/images/instagram/post-01.jpg", alt: "Krest Dental Instagram post 1" },
  { src: "/images/instagram/post-02.jpg", alt: "Krest Dental Instagram post 2" },
  { src: "/images/instagram/post-03.jpg", alt: "Krest Dental Instagram post 3" },
  { src: "/images/instagram/post-04.jpg", alt: "Krest Dental Instagram post 4" },
  { src: "/images/instagram/post-05.jpg", alt: "Krest Dental Instagram post 5" },
  { src: "/images/instagram/post-06.jpg", alt: "Krest Dental Instagram post 6" },
  { src: "/images/instagram/post-07.jpg", alt: "Krest Dental Instagram post 7" },
  { src: "/images/instagram/post-08.jpg", alt: "Krest Dental Instagram post 8" },
  { src: "/images/instagram/post-09.jpg", alt: "Krest Dental Instagram post 9" },
  { src: "/images/instagram/post-10.jpg", alt: "Krest Dental Instagram post 10" },
  { src: "/images/instagram/post-11.jpg", alt: "Krest Dental Instagram post 11" },
  { src: "/images/instagram/post-12.jpg", alt: "Krest Dental Instagram post 12" },
  { src: "/images/instagram/post-13.jpg", alt: "Krest Dental Instagram post 13" },
  { src: "/images/instagram/post-14.jpg", alt: "Krest Dental Instagram post 14" },
  { src: "/images/instagram/post-15.jpg", alt: "Krest Dental Instagram post 15" },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "what-to-expect-at-your-first-visit",
    title: "What to expect at your first visit to Krest Dental",
    excerpt:
      "A walkthrough of what happens from the moment you arrive — paperwork, oral examination, imaging, and how we plan your treatment together.",
    date: "2025-09-12",
    readingTime: "4 min read",
    category: "Patient Guide",
    cover: { src: "/images/gallery/clinic-03.jpg", alt: "Krest Dental waiting area" },
    body: [
      "Your first visit is a chance for us to understand your goals and for you to get comfortable with our team. After a brief check-in, we sit with you to discuss what brought you in — pain, an aesthetic concern, a routine cleaning, or something more involved like implants or aligners.",
      "Next is a full clinical examination. We check your gums, existing restorations, bite, and soft tissues. Where helpful, we capture digital X-rays and 3D scans on the spot so we can show you exactly what is happening inside your mouth.",
      "Once we have the full picture, Dr. Suneeta walks you through the findings using your scans on a screen. We then build a phased treatment plan — usually with a couple of options — along with timelines and transparent pricing. You leave the visit knowing what is recommended, what is optional, and what is urgent.",
      "Most first appointments take 45 to 60 minutes. If you would like to share previous reports or X-rays, please bring them along; it helps us tailor the plan and avoid repeat imaging.",
    ],
  },
  {
    slug: "implants-vs-bridges",
    title: "Implants vs. bridges: how to choose what is right for you",
    excerpt:
      "Both restore missing teeth, but they age differently and demand different long-term care. Here is how we help patients decide.",
    date: "2025-08-02",
    readingTime: "5 min read",
    category: "Implants",
    cover: { src: "/images/services/implants.png", alt: "Krest Dental — implants overview" },
    body: [
      "When a tooth is lost, two of the most common replacement options are a dental implant and a fixed bridge. Both restore function and aesthetics, but they take different paths to get there.",
      "An implant replaces the root with a titanium post anchored in the jaw, then a custom crown is placed on top. Because the post stimulates the bone, the surrounding ridge stays healthier over time. The neighbouring teeth are left untouched.",
      "A bridge instead uses the two adjacent teeth as anchors. The middle tooth is suspended between them. It is a faster, lower-cost path that suits patients who want to avoid surgery, and it can look excellent in skilled hands. The trade-off is that the anchor teeth need to be reshaped, and the bone underneath the missing tooth slowly resorbs.",
      "We usually recommend implants when the neighbouring teeth are healthy, when bone volume is good, and when the patient wants the most long-lasting solution. Bridges remain a strong option when the adjacent teeth already need crowns, or when surgery is not preferred.",
    ],
  },
  {
    slug: "invisalign-or-braces",
    title: "Invisalign or braces? A practical guide for adults",
    excerpt:
      "Aligners are not always the answer, and braces are not always the slow option. Here is how we match the appliance to the case.",
    date: "2025-06-18",
    readingTime: "4 min read",
    category: "Orthodontics",
    cover: { src: "/images/services/invisalign.png", alt: "Krest Dental — Invisalign overview" },
    body: [
      "Most adult patients ask the same question on day one: should I go with Invisalign or traditional braces? The honest answer is that it depends on the bite, the goal, and the lifestyle.",
      "Invisalign suits mild to moderate crowding, spacing, and many bite issues. It is removable, almost invisible, and easy to keep clean. It works best for patients who can commit to wearing aligners 20 to 22 hours a day.",
      "Braces still have an edge for complex movements — large rotations, severe crowding, or significant bite corrections. Modern brackets are smaller and more comfortable than they used to be, and they remove the discipline of wearing trays.",
      "At the consultation we capture a 3D scan and run a digital simulation. You get to see the projected outcome before any treatment begins, which makes the choice between Invisalign and braces much more informed.",
    ],
  },
  {
    slug: "how-we-keep-the-clinic-spotless",
    title: "Behind the scenes: how we keep the clinic spotless",
    excerpt:
      "Sterilisation, water lines, surface protocols, and the small habits that protect every patient who walks in.",
    date: "2025-04-21",
    readingTime: "3 min read",
    category: "Inside Krest",
    cover: { src: "/images/gallery/clinic-05.jpg", alt: "Krest Dental consultation area" },
    body: [
      "Behind every smooth appointment is a strict, repeatable cleaning routine. Every instrument that touches a patient is single-use, autoclaved at high temperature and pressure, or chemically disinfected to a clinical standard.",
      "Operatory surfaces — chair, lights, handpiece holders, screens — are wiped down between patients with hospital-grade disinfectant. Plastic barriers cover high-contact items so the underlying surface stays clean for the entire day.",
      "Water lines are flushed and treated regularly to keep them free of biofilm. Air filtration runs continuously, and the team follows a hand-hygiene routine that is logged and audited each week.",
      "None of this is glamorous, but it is what makes a calm, predictable visit possible. We take it seriously so you do not have to think about it.",
    ],
  },
  {
    slug: "pediatric-dental-care-tips",
    title: "Five small habits that protect your child’s teeth",
    excerpt:
      "Practical, evidence-based ideas for parents — what to do, what to skip, and when to bring your child in.",
    date: "2025-03-09",
    readingTime: "3 min read",
    category: "Pediatric",
    cover: { src: "/images/gallery/clinic-07.jpg", alt: "Krest Dental — pediatric care area" },
    body: [
      "Children rarely complain about their teeth until something already hurts, so prevention is the most useful thing parents can do. Five habits cover most of what matters.",
      "First, brush with the child until age seven. Their fine motor control is not ready before that, no matter how confident they look. Use a soft brush and a smear of fluoride toothpaste.",
      "Second, treat juices and sticky snacks as occasional rather than daily. Frequency hurts more than amount — a sip every 20 minutes is far worse for the enamel than the same drink in one sitting.",
      "Third, check for grooves on the back molars when the permanent ones erupt. A simple sealant placed early prevents most childhood cavities.",
      "Fourth, schedule the first dental visit by age one or within six months of the first tooth, even if everything looks fine. A short, friendly visit teaches them the chair is not a scary place.",
      "Fifth, model the behaviour. Children copy what they see at home — brushing twice a day, flossing, and showing up for check-ups together is more powerful than any reminder.",
    ],
  },
  {
    slug: "smile-makeover-process",
    title: "How a smile makeover actually works, step by step",
    excerpt:
      "From the first photographs to the final polish — what a cosmetic plan looks like at Krest, and how long each phase takes.",
    date: "2025-01-14",
    readingTime: "6 min read",
    category: "Cosmetic",
    cover: { src: "/images/services/aesthetic.png", alt: "Krest Dental — aesthetic / cosmetic dentistry" },
    body: [
      "A smile makeover is rarely one procedure. It is a sequence of small, carefully ordered steps that move from diagnostic work to a tested preview before any tooth is touched.",
      "Phase one is records. We capture clinical photos, full-face video, a digital scan, and where useful a CBCT. These together let us study the lips, gum line, midline, and tooth proportions side by side.",
      "Phase two is the digital design. We mock up the new smile on screen and 3D-print a temporary version that you wear for a few days. This is the moment to say what you like and what you do not — changes here are essentially free.",
      "Phase three is the clinical work itself: whitening if needed, gum re-contouring if needed, and finally veneers, crowns, or bonding done one quadrant at a time. We protect tooth structure aggressively and keep restorations as conservative as the design allows.",
      "Phase four is review. We see you a week later, polish edges, refine contacts, and confirm comfort. A smile makeover ages well only when this final phase is taken seriously.",
    ],
  },
];

/** About page hero — copy aligned with krest.dental/about-us */
export const ABOUT_HERO = {
  portraitSrc: "/images/about/established-portrait.jpg", /* DSC08634_edited (2139b1_68472ba674d34d209f9c0d89dfd78284~mv2) */
  portraitAlt:
    "Dr. Suneeta Veeramachaneni — Cosmetic and Aesthetic Dentist and Implantologist at Krest Dental Care, Visakhapatnam",
  /** Host on Wix CDN so the image loads without committing `public/images/about/` (folder often untracked). JPEG fill only — no enc_avif. */
  receptionSrc:
    "https://static.wixstatic.com/media/2139b1_623b9e88c9ad41c084c945121d516cd8~mv2.jpg/v1/fill/w_1400,h_980,al_c,q_85,usm_0.66_1.00_0.01/IMG_0889.jpg",
  receptionAlt: "Krest Dental Care clinic reception and front desk",
  establishedHeading: "Established in 2014",
  bioParagraphs: [
    "Dr. Suneeta Veeramachaneni is a distinguished Cosmetic and Aesthetic Dentist and Implantologist with over 23 years of expertise transforming smiles. Driven by her vision to bring world-class dental care to India, she founded Krest Dental Care a center of excellence where advanced technology and compassionate care come together seamlessly.",
    "Dr. Suneeta completed her Bachelor of Dental Surgery (BDS) at Manipal University, before earning her Doctor of Dental Surgery (DDS) from the prestigious University of California, San Francisco (UCSF). During her time at UCSF, she was honored as the top of her class, standing out among a globally diverse group of dental professionals. Following her graduation in 2005, she practiced for over eight years in San Francisco, earning a stellar reputation as a leading cosmetic dentist and implantologist. In 2013, she returned to India with a mission to establish Krest Dental Care and elevate the standard of dental care in Visakhapatnam.",
  ],
  clinicParagraphs: [
    "At Krest Dental Care, patients benefit from a comprehensive range of dental services, including Teeth Whitening, Implants, Orthodontics & Invisalign, Cosmetic Dentistry, Smile Makeovers, Full-Mouth Reconstructions, Oral Surgery, Veneers, Crowns, Bridges & Dentures, Restorations & Root Canals, Gum Treatments, Pediatric Dentistry, and Preventive Care.",
    "Our clinic is outfitted with state-of-the-art technology, reflecting our unwavering commitment to excellence and patient safety. We maintain stringent sterilization protocols and feature plush, high-end dental chairs for ultimate comfort. Our advanced tools include precision lasers, digital orthopantomograms (OPG), digital X-rays, Zoom teeth whitening systems, 3D navigation systems for implants, and cutting-edge digital scanners for 3D impressions ensuring the highest accuracy and best outcomes.",
    "Dr. Suneeta’s dedication to continual innovation and personalized care has made Krest Dental Care a trusted destination for those seeking comprehensive, advanced, and truly world-class dental treatments in Visakhapatnam.",
  ],
} as const;

/** Dr. Suneeta dedicated page — krest.dental/drsuneeta */
export const DR_SUNEETA_PAGE = {
  /* Exact live crop: fill/w_713,h_676,fp_0.50_0.43 of DSC08627 (downloaded at 2x) */
  portraitSrc: "/images/dr-suneeta/hero-portrait.jpg",
  portraitAlt:
    "Dr. Suneeta Veramachaneni — Cosmetic Dentist and Implantologist at Krest Dental",
  name: "Dr. Suneeta Veramachaneni",
  title: "Cosmetic Dentist & Implantologist",
  journeyHeading: "Dr Suneeta Journey",
  milestones: [
    {
      id: "bds",
      text: "Bachelor of Dental Surgery (BDS) at Manipal - 2000",
      lines: [
        "Bachelor of Dental Surgery",
        "(BDS) at Manipal - 2000",
      ],
    },
    {
      id: "dds",
      text: "Doctor of Dental Surgery (DDS) at University of California - 2005",
      lines: [
        "Doctor of Dental Surgery",
        "(DDS) at University of",
        "California - 2005",
      ],
    },
    {
      id: "sf",
      text: "Practiced dentistry in San Francisco for over 8 years",
      lines: ["Practiced dentistry in", "San Francisco for over 8 years"],
    },
    {
      id: "india",
      text: "Return to India in 2013",
      lines: ["Return to India in 2013"],
    },
    {
      id: "krest",
      text: "Established KREST Dental - 2014",
      lines: ["Established KREST", "Dental - 2014"],
    },
  ],
  ourStoryHeading: "Our Story",
  ourStoryText:
    "Dr. Suneeta Veeramachaneni, a top-ranked graduate from UCSF, launched Krest Dental Care in Visakhapatnam after practicing in San Francisco for 8+ years. Krest offers advanced dental services, including implants, orthodontics, and smile makeovers, using cutting-edge technology like digital X-rays, lasers, and stringent sterilization standards for top-tier patient care.",
  statsHeading: "Success in Numbers",
} as const;

/** About page — "Excellence that sets us apart" feature cards (live krest.dental/about-us) */
export const ABOUT_EXCELLENCE = {
  heading: "Excellence that sets us apart",
  intro:
    "At Krest Dental, your well-being is at the heart of everything we do. We create fully personalized care plans tailored to each patient\u2019s unique needs and goals. From your first visit to your final result, our skilled team ensures your comfort, safety, and peace of mind delivering care that is both compassionate and precise.",
  cards: [
    {
      id: "team",
      title: "An Exceptional Team of Experts",
      text: "Led by Dr. Suneeta Veeramachaneni, our dedicated team of exceptionally trained professionals blend expertise with artistic precision to restore and enhance smiles. We don\u2019t just replace teeth, we transform confidence and improve quality of life through every carefully crafted result.",
    },
    {
      id: "technology",
      title: "Advanced Technology & Modern Techniques",
      text: "We believe a confident smile starts with a strong foundation. That\u2019s why we use state-of-the-art technology including 3D imaging, guided surgical tools, and cutting-edge biomaterials in every treatment. This ensures exceptional precision, comfort, and long-lasting results.",
    },
    {
      id: "results",
      title: "Proven Results You Can Trust",
      text: "At Krest, we go beyond promises we deliver. Our success is built on consistently outstanding outcomes, glowing testimonials, and life-changing smile transformations. Backed by advanced diagnostics and meticulous planning, our results are not just beautiful but truly built to last.",
    },
    {
      id: "patient",
      title: "A Truly Patient-Centric Experience",
      text: "From the moment you enter, you\u2019ll feel the Krest difference. Our calm, welcoming environment, plush dental chairs, and attentive team make every visit stress-free and comfortable. We believe great dentistry is not only about technical excellence but also about making each patient feel understood, cared for, and confident.",
    },
  ],
} as const;

export const ABOUT_VISION_MISSION = {
  vision: {
    title: "Our Vision",
    text: "To transform lives by creating confident, healthy smiles through world-class, patient-centered dental care, setting new standards of excellence in Visakhapatnam and beyond.",
  },
  mission: {
    title: "Our Mission",
    text: "To deliver advanced, comprehensive, and compassionate dental solutions tailored to each individual. We combine cutting-edge technology, global expertise, and a deeply personalized approach to restore function, enhance aesthetics, and build lasting trust empowering every patient to smile with confidence.",
  },
} as const;

/** Our Services page — krest.dental/our-services */
export const OUR_SERVICES_PAGE = {
  title: "Our Services",
  intro:
    "At Krest Dental, we deliver advanced, patient-centric dental care tailored to every smile. From preventive checkups to complex procedures like implants, smile makeovers, and orthodontics, our expert-led services combine cutting-edge technology, precision, and comfort. Discover comprehensive care designed to restore, protect, and perfect your oral health.",
  categories: [
    {
      id: "general",
      title: "General Dentistry",
      description:
        "Our general dentistry services focus on maintaining lifelong oral health through preventive care, routine checkups, and timely treatments. From professional cleanings to root canals, every procedure is performed with precision and compassion — so you can smile confidently every day.",
      image: "/images/our-services/general-dentistry.png",
      imageAlt: "General Dentistry at Krest Dental",
      items: [
        "Comprehensive Dental Exams",
        "Professional Cleanings",
        "Mercury-Free Fillings",
        "Root Canals",
        "Extractions",
        "Sealants",
        "Inlays & Onlays, Fluoride Treatments",
        "Oral Cancer Screenings",
      ],
    },
    {
      id: "cosmetic",
      title: "Cosmetic Dentistry",
      description:
        "We believe a confident smile can transform not just your appearance but your self-esteem and overall quality of life. Our cosmetic treatments enhance the natural beauty of your teeth using advanced techniques and premium materials — all tailored to your goals and comfort.",
      image: "/images/our-services/cosmetic-dentistry.png",
      imageAlt: "Cosmetic Dentistry at Krest Dental",
      items: [
        "Braces",
        "Veneers",
        "Whitening",
        "Clear Aligners",
        "Smile Makeovers",
        "Bonding",
        "Gum Contouring",
      ],
    },
    {
      id: "restorative",
      title: "Restorative Dentistry",
      description:
        "Restore the function and beauty of your smile with our expert restorative solutions. Whether you need a single crown or a full-mouth rehabilitation, our team blends precision, innovation, and gentle care to help you eat, speak, and smile with renewed confidence.",
      image: "/images/our-services/restorative-dentistry.png",
      imageAlt: "Restorative Dentistry at Krest Dental",
      items: [
        "Implants",
        "Crowns",
        "Bridges",
        "Dentures",
        "Full-Mouth Rehabilitation",
      ],
    },
    {
      id: "emergency",
      title: "Emergency Care",
      description:
        "Dental emergencies can happen at any time. From sudden toothaches to knocked-out teeth, we provide prompt, expert care to relieve pain and restore your smile as quickly as possible. Your comfort and safety are always our top priority.",
      image: "/images/our-services/emergency-care.png",
      imageAlt: "Emergency Dental Care at Krest Dental",
      items: [
        "Chipped Tooth",
        "Lost Filling",
        "Severe Toothache",
        "Swelling or Infection",
      ],
    },
    {
      id: "invisalign",
      title: "Invisalign",
      description:
        "Straighten your teeth discreetly and comfortably with Invisalign’s clear, removable aligners. At Krest Dental, we customize each treatment plan using precise 3D digital scans, helping you achieve a straighter, more confident smile without brackets or wires — and with minimal impact on your lifestyle.",
      image: "/images/services/invisalign.png",
      imageAlt: "Invisalign clear aligners at Krest Dental",
      items: [
        "Bite Problems",
        "Tooth Wear",
        "Jaw Pain",
        "Better Function",
        "Long-term Stability",
      ],
    },
  ] satisfies OurServiceCategory[],
  cta: {
    /* Exact live crop: fill/w_1340,h_499,al_c of DSC08466 (downloaded at 2x) */
    image: "/images/our-services/cta-banner.jpg",
    imageAlt: "Krest Dental treatment room with dental chair and city view",
    heading: "Schedule Your Appointment Today!",
    text: "A healthy, beautiful smile starts with expert care. Contact us today to schedule your appointment and experience the Krest difference.",
  },
} as const;

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
  { day: "Monday - Saturday", time: "9:00 AM - 7:30 PM" },
  { day: "Sunday", time: "Closed" },
] as const;
