import { BookButton, InvisilignHeroMosaic } from "@/components/InvisilignHeroMosaic";
import { JourneyUnderline, StepEllipseIcon } from "@/components/InvisilignDecorations";

const pageUrl = "https://www.krest.dental/invisilign";

const orthoCards = [
  {
    title: "Braces & Invisalign",
    body:
      "We offer both traditional metal braces and Invisalign clear aligners to effectively straighten teeth. Each treatment plan is fully customized to meet your smile goals with maximum comfort and precision.",
  },
  {
    title: "Clear Aligners",
    body:
      "Nearly invisible and removable, clear aligners are ideal for those seeking a discreet, flexible solution to correct alignment without metal brackets or wires.",
  },
  {
    title: "Pediatric Orthodontics",
    body:
      "Early orthodontic care helps guide proper jaw and tooth development, preventing future dental issues. We provide gentle, effective treatments tailored for children.",
  },
  {
    title: "Cosmetic Smile Alignment",
    body:
      "For adults with mild crowding or spacing, our aesthetic alignment treatments deliver a confident, beautiful smile — often without the need for full braces.",
  },
];

const whyInvisalign = [
  {
    title: "Nearly Invisible",
    body:
      "Clear aligners blend seamlessly with your natural teeth. Most people won’t even know you’re wearing them.",
  },
  {
    title: "Removable & Flexible",
    body: "Eat, brush, and floss freely — Invisalign fits perfectly into your lifestyle.",
  },
  {
    title: "Comfortable Fit",
    body:
      "Crafted from smooth SmartTrack® material, Invisalign aligners are custom-designed to fit snugly without irritation.",
  },
  {
    title: "Fewer Clinic Visits",
    body: "Enjoy fewer adjustments and check-ups compared to traditional braces.",
  },
  {
    title: "Predictable Results",
    body:
      "Advanced 3D imaging allows you to see your treatment plan and expected outcome from the start.",
  },
  {
    title: "Improved Oral Hygiene",
    body:
      "Since aligners are removable, maintaining your oral health is easier, reducing plaque buildup and gum issues.",
  },
];

const whyKrest = [
  {
    title: "World-Class Technology",
    body:
      "Digital scanners, 3D imaging, and modern orthodontic tools ensure precise, comfortable treatment.",
  },
  {
    title: "Expert-Led Care",
    body:
      "Over 23 years of global experience and leadership in cosmetic and orthodontic dentistry.",
  },
  {
    title: "Personalized Treatment Plans",
    body: "Every Invisalign journey is custom-tailored to your smile goals and lifestyle.",
  },
  {
    title: "Trusted by Thousands",
    body: "Backed by countless happy patients and consistently outstanding results.",
  },
];

const journey = [
  { step: "01", title: "Comprehensive Consultation & Smile Evaluation" },
  { step: "02", title: "Digital 3D Scan & Customized Treatment Plan" },
  { step: "03", title: "Custom Aligner Fabrication & Fitting" },
  { step: "04", title: "Active Alignment & Progress Tracking" },
  { step: "05", title: "Smile Reveal & Retention Phase" },
];

/**
 * Two-column "Why ..." band shared by sections 2-4 of the live page.
 * Live geometry @1440: left col 584px (pt 45), 40px gap, right cards 712px
 * (2-up grid, 341px cards, 30px gaps, 20px radius, 24px padding).
 */
export function WhyBand({
  heading,
  intro,
  cards,
  cardHeight,
  cardsBg,
  cardsOffset,
  minHeight = 520,
  introJustify = true,
  cardBodyJustify = false,
}: {
  heading: string;
  intro: string;
  cards: { title: string; body: string }[];
  cardHeight: number;
  cardsBg: string;
  cardsOffset: number;
  minHeight?: number;
  introJustify?: boolean;
  cardBodyJustify?: boolean;
}) {
  return (
    <div
      className="mx-auto grid max-w-[1425px] grid-cols-1 content-start gap-10 px-[25px] lg:grid-cols-[584px_1fr] lg:gap-x-[40px] lg:px-[44px]"
      style={{ minHeight }}
    >
      <div className="lg:pt-[45px]">
        <h2 className="font-display text-[30px] leading-[1.2] text-black lg:text-[36px]">
          {heading}
        </h2>
        <p
          className={`mt-[16px] font-display text-[20px] leading-[1.6] text-black lg:text-[23px] ${
            introJustify ? "text-justify" : ""
          }`}
        >
          {intro}
        </p>
        <BookButton className="mt-[22px]" />
      </div>

      <div
        className="grid grid-cols-1 gap-[30px] sm:grid-cols-2"
        style={{ marginTop: cardsOffset }}
      >
        {cards.map((card) => (
          <article
            key={card.title}
            className="rounded-[20px] p-6"
            style={{ backgroundColor: cardsBg, minHeight: cardHeight }}
          >
            <h3 className="font-display text-[23px] leading-[1.3] text-[#9F6449]">
              {card.title}
            </h3>
            <p
              className={`mt-[18px] font-display text-[18px] leading-[1.6] text-black ${
                cardBodyJustify ? "text-justify" : ""
              }`}
            >
              {card.body}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function InvisilignOldMain() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.krest.dental/" },
      { "@type": "ListItem", position: 2, name: "Invisalign", item: pageUrl },
    ],
  };

  return (
    <main className="flex-1 bg-[#F4EAE6]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <InvisilignHeroMosaic />

      {/* WHY ORTHODONTICS? — white band, cream cards (240px) */}
      <section className="bg-white py-[44px]">
        <WhyBand
          heading="Why Orthodontics?"
          intro="Orthodontic treatment isn’t just about aesthetics — it’s about creating a healthy bite, boosting your self-confidence, and protecting your long-term oral health. Whether you’re addressing gaps, crowding, or bite issues, orthodontics ensures your smile looks great and functions perfectly."
          cards={orthoCards}
          cardHeight={240}
          cardsBg="#F4EAE6"
          cardsOffset={12}
        />
      </section>

      {/* WHY CHOOSE INVISALIGN? — cream band, white cards (227px) */}
      <section className="bg-[#F4EAE6] py-[44px]">
        <WhyBand
          heading="Why Choose Invisalign?"
          intro="Invisalign has completely transformed orthodontic care, offering a smarter, more comfortable alternative to braces. Here’s why it’s the preferred choice for teens and adults:"
          cards={whyInvisalign}
          cardHeight={227}
          cardsBg="#FFFFFF"
          cardsOffset={0}
          minHeight={741}
        />
      </section>

      {/* WHY CHOOSE KREST DENTAL FOR INVISALIGN? — white band, cream cards (227px) */}
      <section className="bg-white py-[44px]">
        <WhyBand
          heading="Why Choose Krest Dental for Invisalign?"
          intro="Experience world-class Invisalign care at Krest Dental, led by UCSF-trained Dr. Suneeta Veeramachaneni. Our blend of advanced technology, personalized treatment, and unmatched expertise makes us the preferred choice in Visakhapatnam."
          cards={whyKrest}
          cardHeight={227}
          cardsBg="#F4EAE6"
          cardsOffset={18}
          cardBodyJustify
        />
      </section>

      {/* YOUR INVISALIGN JOURNEY — cream band, white pill rows */}
      <section className="bg-[#F4EAE6] pb-[118px] pt-[60px]">
        <div className="mx-auto grid max-w-[1425px] grid-cols-1 gap-10 px-[25px] lg:grid-cols-2 lg:gap-0 lg:px-[40px]">
          <div className="lg:pt-[26px]">
            <div className="relative inline-block">
              <h2 className="font-display text-[36px] leading-[1.1] text-black lg:text-[47px]">
                Your Invisalign Journey
              </h2>
              <JourneyUnderline className="absolute left-[208px] top-[49px] hidden h-[22px] w-[216px] lg:block" />
            </div>
            <p className="mt-[30px] max-w-[394px] font-body text-[18px] leading-[1.4] text-black lg:text-[20px]">
              A Seamless, Personalized Path to Your Perfect Smile
            </p>
          </div>

          <ol className="flex flex-col gap-[50px] lg:mt-[25px]">
            {journey.map((item, i) => (
              <li
                key={item.step}
                className="relative flex min-h-[102px] items-center rounded-[30px] bg-white py-4 pl-[140px] pr-6 lg:py-0 lg:pl-[159px]"
              >
                <span className="absolute left-[47px] top-1/2 flex h-[58px] w-[71px] -translate-y-1/2 items-center justify-center">
                  <StepEllipseIcon index={i} className="absolute inset-0 h-full w-full" />
                  <span className="font-body text-[27px] leading-[1.1] text-black">
                    {item.step}
                  </span>
                </span>
                <span className="max-w-[451px] font-body text-[20px] leading-[1.3] text-[#9F6449] lg:text-[24px]">
                  {item.title}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
