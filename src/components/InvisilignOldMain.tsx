import { BookButton, InvisilignHeroMosaic } from "@/components/InvisilignHeroMosaic";

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
    <main className="flex-1 bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <InvisilignHeroMosaic />

      {/* WHY ORTHODONTICS? */}
      <section className="bg-white py-14 lg:py-20">
        <div className="krest-site">
          <div className="max-w-[820px]">
            <h2 className="font-display text-[44px] leading-[1.1] text-copper sm:text-5xl">
              Why Orthodontics?
            </h2>
            <p className="mt-5 text-[18px] leading-8 text-taupe">
              Orthodontic treatment isn’t just about aesthetics — it’s about
              creating a healthy bite, boosting your self-confidence, and
              protecting your long-term oral health. Whether you’re addressing
              gaps, crowding, or bite issues, orthodontics ensures your smile
              looks great and functions perfectly.
            </p>
            <BookButton className="mt-7" />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {orthoCards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-copper/15 bg-[#F3E9E4] p-6"
              >
                <h3 className="font-display text-[24px] leading-[1.2] text-copper">
                  {card.title}
                </h3>
                <p className="mt-3 text-[16px] leading-7 text-taupe">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE INVISALIGN? */}
      <section className="krest-site pt-14 pb-14 lg:pt-20 lg:pb-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
          <div>
            <h2 className="font-display text-[44px] leading-[1.1] text-copper sm:text-5xl">
              Why Choose Invisalign?
            </h2>
            <p className="mt-5 text-[18px] leading-8 text-taupe">
              Invisalign has completely transformed orthodontic care, offering a
              smarter, more comfortable alternative to braces. Here’s why it’s
              the preferred choice for teens and adults:
            </p>
            <BookButton className="mt-7" />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {whyInvisalign.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-copper/15 bg-[#F3E9E4] p-6"
              >
                <h3 className="font-display text-[24px] leading-[1.2] text-copper">
                  {card.title}
                </h3>
                <p className="mt-3 text-[16px] leading-7 text-taupe">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE KREST DENTAL FOR INVISALIGN? */}
      <section className="bg-white py-14 lg:py-20">
        <div className="krest-site grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
          <div>
            <h2 className="font-display text-[44px] leading-[1.1] text-copper sm:text-5xl">
              Why Choose Krest Dental for Invisalign?
            </h2>
            <p className="mt-5 text-[18px] leading-8 text-taupe">
              Experience world-class Invisalign care at Krest Dental, led by
              UCSF-trained Dr. Suneeta Veeramachaneni. Our blend of advanced
              technology, personalized treatment, and unmatched expertise makes
              us the preferred choice in Visakhapatnam.
            </p>
            <BookButton className="mt-7" />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {whyKrest.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-copper/15 bg-[#F3E9E4] p-6"
              >
                <h3 className="font-display text-[28px] leading-[1.2] text-copper">
                  {card.title}
                </h3>
                <p className="mt-3 text-[16px] leading-7 text-taupe">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* YOUR INVISALIGN JOURNEY */}
      <section className="krest-site pt-14 pb-14 lg:pt-20 lg:pb-20">
        <div className="text-center">
          <h2 className="font-display text-[44px] leading-[1.1] text-copper sm:text-5xl">
            Your Invisalign Journey
          </h2>
          <p className="mx-auto mt-4 max-w-[720px] text-[18px] leading-8 text-taupe">
            A Seamless, Personalized Path to Your Perfect Smile
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {journey.map((item) => (
            <li
              key={item.step}
              className="flex flex-col items-start gap-4 rounded-[20px] border border-copper/20 bg-[#F3E9E4] p-6"
            >
              <span className="font-accent text-[44px] leading-none text-copper">
                {item.step}
              </span>
              <h3 className="font-display text-[20px] leading-[1.25] text-ink">
                {item.title}
              </h3>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <section className="krest-site pt-6 pb-20 lg:pt-10">
        <div className="rounded-[28px] border border-copper/35 bg-white/60 p-8 text-center lg:p-10">
          <h2 className="font-display text-4xl text-ink">
            Ready for a confident, beautifully aligned smile?
          </h2>
          <p className="mx-auto mt-4 max-w-[840px] text-lg leading-8 text-taupe">
            Book your Invisalign consultation with Dr. Suneeta and get a
            personalized clear-aligner plan tailored to your smile goals.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex h-11 items-center rounded-full bg-copper px-6 font-display text-white"
            >
              Book Appointment
            </a>
            <a
              href="tel:9573884525"
              className="inline-flex h-11 items-center rounded-full border border-copper px-6 font-display text-copper"
            >
              Call / WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
