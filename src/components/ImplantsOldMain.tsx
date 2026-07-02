
import { InvisilignHeroMosaic } from "@/components/InvisilignHeroMosaic";
import { WhyBand } from "@/components/InvisilignOldMain";
import { JourneyUnderline, StepEllipseIcon } from "@/components/InvisilignDecorations";

const pageUrl = "https://www.krest.dental/implants";

const solutionCards = [
  {
    title: "Single Tooth Replacement",
    body:
      "Replace one missing tooth with a single implant and a custom-made crown designed to match your natural teeth perfectly.",
  },
  {
    title: "Multi Teeth Replacement",
    body:
      "Bridge larger gaps using two or more implants to support a fixed bridge — stronger, more stable, and longer-lasting than traditional options.",
  },
  {
    title: "Full Arch Restoration",
    body:
      "Restore an entire upper or lower arch with implant-supported dentures, eliminating slipping or adhesives and bringing back full confidence.",
  },
  {
    title: "Bone Grafting & Sinus Lifts",
    body:
      "Advanced bone augmentation techniques allow us to rebuild insufficient bone volume, creating a strong foundation for implant success even in complex cases.",
  },
];

const whyKrest = [
  {
    title: "World-Class Technology",
    body:
      "3D CBCT imaging, digital scanners, and guided surgical tools ensure precise, safe, and predictable implant placement.",
  },
  {
    title: "Expert-Led Care",
    body:
      "Dr. Suneeta brings over 23 years of international experience and a meticulous approach to every implant case.",
  },
  {
    title: "Customized Treatment Plans",
    body:
      "Each implant solution is tailored to your bone health, facial structure, and aesthetic goals.",
  },
  {
    title: "Proven Results",
    body:
      "Trusted by thousands of patients, supported by glowing testimonials, and celebrated for consistently excellent outcomes.",
  },
];

const journey = [
  { step: "01", title: "Consultation & Comprehensive Assessment" },
  { step: "02", title: "Digital Scan & Detailed Implant Planning" },
  { step: "03", title: "Implant Placement Surgery." },
  { step: "04", title: "Healing & Osseointegration" },
  { step: "05", title: "Custom Crown Placement & Smile Reveal" },
];

export function ImplantsOldMain() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.krest.dental/" },
      { "@type": "ListItem", position: 2, name: "Implants", item: pageUrl },
    ],
  };

  return (
    <main className="flex-1 bg-[#F4EAE6]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* HERO — same live collage as /invisilign, implants lead photo */}
      <InvisilignHeroMosaic
        title="Restore Your Smile, Renew Your Confidence"
        paragraph="Dental implants are the most reliable, natural-looking solution to replace missing teeth — restoring not just your smile, but your confidence and quality of life. At Krest Dental, we use advanced techniques and cutting-edge digital technology to deliver implants that look, feel, and function just like natural teeth. Implants help preserve bone, maintain your facial structure, improve chewing efficiency, and give you a lifelong reason to smile with pride."
        leadImage="/images/implants-old/implants.jpg"
        leadImageAlt="implants.png"
        sectionHeight={839}
        textMarginTop={128}
        collageMarginTop={140}
      />

      {/* TAILORED IMPLANT SOLUTIONS — white band, cream cards (227px) */}
      <section className="bg-white py-[44px]">
        <WhyBand
          heading="Tailored Implant Solutions for Every Need"
          intro="Dental implants do more than fill gaps — they protect your long-term oral health and overall well-being."
          cards={solutionCards}
          cardHeight={227}
          cardsBg="#F4EAE6"
          cardsOffset={18}
        />
      </section>

      {/* WHY KREST DENTAL FOR IMPLANTS? — cream band, white cards (227px) */}
      <section className="bg-[#F4EAE6] py-[44px]">
        <WhyBand
          heading="Why Krest Dental for Implants?"
          intro="Experience exceptional implant dentistry at Krest Dental, led by UCSF-trained Dr. Suneeta Veeramachaneni. Combining advanced technology, personalized care, and over two decades of global expertise, we deliver results that are functional, natural-looking, and designed to last."
          cards={whyKrest}
          cardHeight={227}
          cardsBg="#FFFFFF"
          cardsOffset={18}
          cardBodyJustify
        />
      </section>

      {/* YOUR IMPLANTS JOURNEY — white band, cream pill rows */}
      <section className="bg-white pb-[118px] pt-[60px]">
        <div className="mx-auto grid max-w-[1425px] grid-cols-1 gap-10 px-[25px] lg:grid-cols-2 lg:gap-0 lg:px-[40px]">
          <div className="lg:pt-[26px]">
            <div className="relative inline-block">
              <h2 className="font-display text-[36px] leading-[1.1] text-black lg:text-[47px]">
                Your Implants Journey
              </h2>
              <JourneyUnderline className="absolute left-[208px] top-[49px] hidden h-[22px] w-[216px] lg:block" />
            </div>
            <p className="mt-[30px] max-w-[394px] font-body text-[18px] leading-[1.4] text-black lg:text-[20px]">
              A Seamless, Confident Path to a Complete Smile
            </p>
          </div>

          <ol className="flex flex-col gap-[50px] lg:mt-[25px]">
            {journey.map((item, i) => (
              <li
                key={item.step}
                className="relative flex min-h-[102px] items-center rounded-[30px] bg-[#F4EAE6] py-4 pl-[140px] pr-6 lg:py-0 lg:pl-[159px]"
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
