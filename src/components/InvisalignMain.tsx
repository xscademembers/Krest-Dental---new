const pageUrl = "https://www.krest.dental/invisalign";

const faqs = [
  {
    q: "Is Invisalign painful?",
    a: "Invisalign is generally more comfortable than traditional braces. You may feel mild pressure for a day or two when switching to a new aligner, which is a sign your teeth are moving as planned.",
  },
  {
    q: "How long does Invisalign treatment take?",
    a: "Treatment duration depends on alignment complexity. Mild cases may finish sooner, while moderate to complex corrections take longer. Your digital plan gives a clear projected timeline.",
  },
  {
    q: "Can I eat normally with Invisalign?",
    a: "Yes. You remove aligners while eating, so there are no major food restrictions like fixed braces. Just clean your teeth before wearing aligners again.",
  },
  {
    q: "How many hours per day should I wear aligners?",
    a: "For best results, aligners should usually be worn about 20 to 22 hours daily. Consistent wear is key for predictable progress.",
  },
  {
    q: "Is Invisalign safe for adults?",
    a: "Yes. Invisalign is widely used for adults and is considered safe when supervised by a qualified dentist. We monitor each stage carefully for gum, bite, and movement health.",
  },
  {
    q: "Can Invisalign fix crowded teeth?",
    a: "In many cases, yes. Invisalign can correct crowding, spacing, and many bite issues through staged tooth movement. A consultation confirms if your case is suitable.",
  },
  {
    q: "How often are follow-up visits needed?",
    a: "Most patients are reviewed periodically based on case progress, often every few weeks. Visits are generally quick and focused on fit, movement, and plan adjustments.",
  },
  {
    q: "Will Invisalign affect my speech?",
    a: "Some patients notice a slight lisp initially, but it usually settles quickly as you adapt. Speaking normally and wearing aligners consistently helps speed this adjustment.",
  },
  {
    q: "What is the cost of Invisalign?",
    a: "Cost varies with complexity, treatment duration, and refinement needs. We provide a transparent estimate after digital assessment so your plan is clear from day one.",
  },
  {
    q: "Do I need retainers after Invisalign?",
    a: "Yes. Retainers are important to maintain your new alignment after treatment. We provide retention guidance and follow-up to protect long-term results.",
  },
];

export function InvisalignMain() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Invisalign Clear Aligner Treatment",
    procedureType: "Orthodontic alignment with clear aligners",
    bodyLocation: "Teeth and bite",
    howPerformed:
      "Digital smile assessment, aligner planning, staged aligner wear, periodic reviews, and retention phase.",
    provider: {
      "@type": "Dentist",
      name: "Krest Dental",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3rd Floor, Door No 2-48-21, MVP Colony",
        addressLocality: "Visakhapatnam",
        postalCode: "530017",
        addressCountry: "IN",
      },
      telephone: "+91 95738 84525",
      email: "krestdental@gmail.com",
    },
  };

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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        <section className="krest-site grid items-center gap-12 px-[25px] pb-14 pt-14 lg:grid-cols-[1fr_0.95fr] lg:gap-16 lg:pb-18 lg:pt-20">
          <div>
            <p className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 font-accent text-[12px] tracking-wide text-copper">
              CLEAR ALIGNERS
            </p>
            <h1 className="mt-4 max-w-[560px] font-display text-[52px] leading-[1.02] text-ink sm:text-6xl lg:text-[72px]">
              Invisalign{" "}
              <span className="italic text-copper">Reimagined</span>
            </h1>
            <p className="text-krest-body mt-6 max-w-[540px] text-taupe">
              Achieve beautifully aligned teeth without metal braces. Invisalign
              clear aligners are discreet, comfortable, and customized for precise
              smile correction in everyday life.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="inline-flex h-12 items-center rounded-full bg-copper px-7 font-display text-white shadow-[0_8px_20px_-10px_rgba(159,100,73,0.65)]"
              >
                Book Consultation
              </a>
              <span className="inline-flex h-12 items-center rounded-full border border-copper/20 bg-white/60 px-5 font-display text-[15px] text-ink">
                <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full border border-copper/30 text-[11px] text-copper">
                  ⏱
                </span>
                20–22 Hrs/Day
              </span>
            </div>
            <p className="mt-5 inline-flex items-center rounded-full border border-copper/15 bg-white/60 px-4 py-2 font-display text-[14px] text-taupe">
              <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full border border-copper/30 text-[11px] text-copper">
                ✓
              </span>
              No Metal Wires or Brackets
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[36px] border-[6px] border-white shadow-[0_26px_50px_-28px_rgba(0,0,0,0.45)]">
              <img
                src="/images/hero/dr-suneeta-portrait.jpg"
                alt="Invisalign consultation and smile planning at Krest Dental"
                className="absolute inset-0 h-full w-full object-cover"
                width={520}
                height={650}
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-center">
                <button
                  type="button"
                  aria-label="Play Invisalign procedure video"
                  className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-copper shadow-lg"
                >
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 translate-x-0.5 fill-current"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
              <p className="absolute inset-x-0 top-[58%] text-center font-display text-sm text-white">
                Invisalign • Treatment Overview
              </p>
            </div>

            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-copper/15 bg-white/90 px-4 py-3 shadow-lg">
              <p className="font-display text-[14px] text-ink">98% Satisfaction</p>
              <p className="mt-1 font-accent text-[11px] tracking-widest text-taupe">
                INVISALIGN
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-14 lg:py-20">
          <div className="krest-site grid grid-cols-1 gap-8 px-[25px] lg:grid-cols-[1.05fr_1.25fr] lg:gap-10">
            <div className="pt-2">
              <h2 className="font-display text-[44px] leading-[1.1] text-ink">
                Tailored Invisalign Solutions for Every Smile
              </h2>
              <p className="mt-5 max-w-[520px] text-[20px] leading-8 text-taupe">
                Clear aligners do more than straighten teeth — they improve smile
                harmony, bite function, and confidence in a discreet way.
              </p>
              <a
                href="/contact"
                className="mt-8 inline-flex h-12 items-center gap-3 rounded-full bg-copper px-7 font-display text-white shadow-[0_8px_20px_-10px_rgba(159,100,73,0.65)]"
              >
                <span>Book Appointment</span>
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-copper">
                  <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </a>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {[
                {
                  title: "Mild Alignment Correction",
                  body: "Correct small spacing, mild crowding, and minor rotation with a comfortable aligner journey.",
                },
                {
                  title: "Moderate Smile Refinement",
                  body: "Address visible crowding and uneven alignment with staged, digitally planned movements.",
                },
                {
                  title: "Bite Improvement Cases",
                  body: "Selected bite issues can be improved with aligners and attachment-based control strategies.",
                },
                {
                  title: "Post-Braces Relapse Correction",
                  body: "If teeth have shifted after past orthodontic treatment, Invisalign can help realign and stabilize your smile.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-copper/15 bg-[#F3E9E4] p-6"
                >
                  <h3 className="font-display text-[28px] leading-[1.2] text-copper">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[16px] leading-7 text-taupe">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="krest-site pt-14 pb-14 lg:pt-20 lg:pb-20">
          <h2 className="font-display text-4xl text-copper">
            Why choose Invisalign over traditional braces?
          </h2>
          <p className="mt-5 text-[17px] leading-8 text-taupe">
            Invisalign offers discreet alignment with removable clear trays, making
            daily routines easier for many adults and teens. Compared to fixed
            braces, aligners are often preferred for esthetics and comfort.
          </p>
          <div className="mt-8 overflow-x-auto rounded-[20px] border border-copper/25 bg-[#F3E9E4]">
            <table className="min-w-full text-left">
              <thead className="border-b border-copper/20">
                <tr className="text-ink">
                  <th className="px-5 py-4 font-display text-xl">Feature</th>
                  <th className="px-5 py-4 font-display text-xl">Invisalign</th>
                  <th className="px-5 py-4 font-display text-xl">Traditional Braces</th>
                </tr>
              </thead>
              <tbody className="text-[16px] text-taupe">
                <tr className="border-b border-copper/15">
                  <td className="px-5 py-4">Visibility</td>
                  <td className="px-5 py-4">Nearly invisible trays</td>
                  <td className="px-5 py-4">Visible metal brackets/wires</td>
                </tr>
                <tr className="border-b border-copper/15">
                  <td className="px-5 py-4">Eating routine</td>
                  <td className="px-5 py-4">Aligners removed while eating</td>
                  <td className="px-5 py-4">Food restrictions more common</td>
                </tr>
                <tr className="border-b border-copper/15">
                  <td className="px-5 py-4">Oral hygiene</td>
                  <td className="px-5 py-4">Easier brushing/flossing routine</td>
                  <td className="px-5 py-4">Cleaning around brackets required</td>
                </tr>
                <tr>
                  <td className="px-5 py-4">Comfort</td>
                  <td className="px-5 py-4">Smooth aligner surfaces</td>
                  <td className="px-5 py-4">Wire/bracket irritation possible</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white py-14 lg:py-20">
          <div className="krest-site">
            <h2 className="font-display text-4xl text-copper">How does the Invisalign procedure work?</h2>
            <ol className="mt-8 space-y-4">
              {[
                {
                  title: "Smile consultation and digital scan",
                  body: "We assess your teeth, bite, and smile goals with a detailed clinical review and digital records.",
                },
                {
                  title: "Custom aligner plan",
                  body: "A staged movement plan is created so each aligner gradually shifts your teeth into better alignment.",
                },
                {
                  title: "Aligner wear and progress checks",
                  body: "You wear aligners daily and switch trays as instructed, with periodic appointments to track progress.",
                },
                {
                  title: "Refinement and retention",
                  body: "After active alignment, refinements are completed if needed, followed by retainers to maintain results.",
                },
              ].map((step, i) => (
                <li key={step.title} className="flex gap-4 rounded-[20px] border border-copper/25 bg-[#F3E9E4] p-6">
                  <span className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-copper font-accent text-sm text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl text-ink">{step.title}</h3>
                    <p className="mt-2 text-[17px] leading-7 text-taupe">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="krest-site pt-14 pb-14 lg:pt-20 lg:pb-20">
          <h2 className="font-display text-4xl text-copper">What is the cost of Invisalign?</h2>
          <p className="mt-5 text-[17px] leading-8 text-taupe">
            Invisalign cost depends on case complexity, treatment duration, and
            refinement needs. We provide a personalized estimate after digital
            evaluation so you get transparent planning aligned to your goals.
          </p>
          <h3 className="mt-7 font-display text-2xl text-ink">What factors affect Invisalign cost?</h3>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-[17px] leading-8 text-taupe">
            <li>Severity of crowding/spacing and bite correction requirements</li>
            <li>Total number of aligners and active treatment duration</li>
            <li>Need for refinements after primary alignment</li>
            <li>Retainer protocol and long-term maintenance planning</li>
            <li>Complexity of smile design and finishing goals</li>
          </ul>
        </section>

        <section className="bg-white py-14 lg:py-20">
          <div className="krest-site">
            <h2 className="font-display text-4xl text-copper">
              Before and after: what changes can you expect?
            </h2>
            <p className="mt-4 max-w-[920px] text-[17px] leading-8 text-taupe">
              Invisalign treatment improves alignment progressively with each tray.
              Patients often notice better smile balance, improved confidence, and
              cleaner tooth positioning over time.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <article className="rounded-[22px] border border-copper/20 bg-[#F3E9E4] p-7">
                <h3 className="font-display text-3xl text-ink">Before Treatment</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-[16px] leading-7 text-taupe">
                  <li>Crowded or spaced teeth affecting smile appearance</li>
                  <li>Uneven bite contact in daily chewing</li>
                  <li>Reduced confidence while smiling in photos</li>
                  <li>Difficulty keeping overlapped teeth clean</li>
                </ul>
              </article>

              <article className="rounded-[22px] border border-copper/20 bg-[#F3E9E4] p-7">
                <h3 className="font-display text-3xl text-copper">After Treatment</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-[16px] leading-7 text-taupe">
                  <li>More balanced, natural-looking smile alignment</li>
                  <li>Improved bite harmony and everyday comfort</li>
                  <li>Better confidence while speaking and smiling</li>
                  <li>Easier oral hygiene maintenance in aligned teeth</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="krest-site pt-14 pb-14 lg:pt-20 lg:pb-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-10">
            <div>
              <h2 className="font-display text-4xl text-ink">Why Krest Dental for Invisalign?</h2>
              <p className="mt-5 text-[17px] leading-8 text-taupe">
                Experience precision-driven clear aligner care with personalized planning and close progress
                supervision. We combine esthetic understanding, functional bite analysis, and patient-focused support
                to achieve confident smile outcomes.
              </p>
              <a
                href="/contact"
                className="mt-8 inline-flex h-12 items-center gap-3 rounded-full bg-copper px-7 font-display text-white shadow-[0_8px_20px_-10px_rgba(159,100,73,0.65)]"
              >
                <span>Book Appointment</span>
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-copper">
                  <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </a>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  title: "Digital Smile Planning",
                  body: "Detailed scan-based planning improves predictability and precision at each stage.",
                },
                {
                  title: "Expert-Led Monitoring",
                  body: "Regular reviews ensure your aligners fit correctly and your progress stays on track.",
                },
                {
                  title: "Customized Aligner Strategy",
                  body: "Every treatment is tailored to your alignment goals, bite profile, and facial harmony.",
                },
                {
                  title: "Reliable Smile Outcomes",
                  body: "Our structured approach supports stable correction and long-term smile confidence.",
                },
              ].map((card) => (
                <article key={card.title} className="rounded-[20px] border border-copper/15 bg-[#F3E9E4] p-6">
                  <h3 className="font-display text-[30px] leading-[1.2] text-copper">{card.title}</h3>
                  <p className="mt-3 text-[16px] leading-7 text-taupe">{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-14 lg:py-20">
          <div className="krest-site">
            <div className="text-center">
              <p className="font-accent text-[11px] uppercase tracking-[0.28em] text-copper">
                Patient Stories
              </p>
              <h2 className="mt-3 font-display text-5xl text-ink sm:text-6xl">
                What Patients Say About Invisalign
              </h2>
              <p className="mx-auto mt-4 max-w-[760px] text-[20px] text-taupe">
                Real feedback from patients who chose Krest Dental for Invisalign treatment.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              {[
                {
                  quote:
                    "The aligners were comfortable and easy to follow. My smile changed naturally without affecting my daily routine.",
                  name: "Anjali R.",
                  meta: "Visakhapatnam • Invisalign",
                },
                {
                  quote:
                    "I loved how discreet the treatment was. Progress reviews were clear, and my confidence improved month by month.",
                  name: "Priya M.",
                  meta: "Kakinada • Invisalign",
                },
                {
                  quote:
                    "My bite feels better and my teeth look aligned beautifully. The team explained every step in a very reassuring way.",
                  name: "Sneha V.",
                  meta: "Rajahmundry • Invisalign",
                },
              ].map((item) => (
                <article
                  key={item.name}
                  className="rounded-[20px] border border-copper/12 bg-[#F3E9E4] p-6"
                >
                  <p className="font-accent text-[16px] tracking-[0.2em] text-[#D1A72E]">
                    ★★★★★
                  </p>
                  <p className="mt-3 text-[16px] leading-7 text-taupe">&ldquo;{item.quote}&rdquo;</p>
                  <p className="mt-5 font-display text-[20px] text-ink">{item.name}</p>
                  <p className="mt-1 font-accent text-[12px] tracking-wide text-taupe">{item.meta}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-14 lg:py-20">
          <div className="krest-site">
            <div className="text-center">
              <h2 className="font-display text-5xl text-ink sm:text-6xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-[20px] text-taupe">
                Get answers to common questions about Invisalign.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-[920px] space-y-4">
              {faqs.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-[16px] border border-copper/10 bg-[#F3E9E4] px-6 py-5 shadow-[0_1px_0_rgba(0,0,0,0.03)]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                    <h3 className="font-display text-[30px] leading-[1.25] text-ink">
                      {item.q}
                    </h3>
                    <span className="inline-flex h-7 w-7 flex-none items-center justify-center text-copper">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 transition-transform duration-200 group-open:rotate-180"
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 border-t border-copper/10 pt-4 text-[17px] leading-7 text-taupe">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="krest-site pt-14 pb-20 lg:pt-20">
          <div className="rounded-[28px] border border-copper/35 bg-white/60 p-8 text-center lg:p-10">
            <h2 className="font-display text-4xl text-ink">
              Ready to start your Invisalign smile journey?
            </h2>
            <p className="mx-auto mt-4 max-w-[840px] text-lg leading-8 text-taupe">
              Book your consultation and receive a clear aligner roadmap designed for your smile goals, bite needs, and
              lifestyle.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <a href="/contact" className="inline-flex h-11 items-center rounded-full bg-copper px-6 font-display text-white">
                Book Consultation
              </a>
              <a href="tel:9573884525" className="inline-flex h-11 items-center rounded-full border border-copper px-6 font-display text-copper">
                Call / WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
  );
}

