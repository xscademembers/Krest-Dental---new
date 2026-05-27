const pageUrl = "https://www.krest.dental/implants";

const faqs = [
  {
    q: "Is dental implant surgery painful?",
    a: "Most patients describe dental implant treatment as comfortable. The procedure is performed under local anesthesia, so you should not feel sharp pain during surgery. Mild soreness afterward is normal and usually controlled with medication and aftercare guidance.",
  },
  {
    q: "How long do dental implants last?",
    a: "Dental implants are built as a long-term solution. With healthy gums, proper cleaning, and regular dental reviews, they can last for many years and often decades. The visible crown may need maintenance over time, but the implant base is highly durable.",
  },
  {
    q: "Are dental implants safe?",
    a: "Yes, implants are a proven and widely used treatment in modern dentistry. Safety is improved with proper diagnosis, digital planning, and strict sterilization protocols. A complete consultation helps us identify the safest approach for your specific case.",
  },
  {
    q: "What is the recovery time after implant surgery?",
    a: "Most patients return to routine non-strenuous activities in one to two days. Gum tenderness usually settles in a few days, while full bone integration takes longer depending on the case. We monitor healing carefully before final tooth placement.",
  },
  {
    q: "Can anyone get dental implants?",
    a: "Many adults are eligible, including patients missing one, several, or all teeth. Bone support, gum health, and medical history are assessed before treatment. Even when bone is reduced, advanced planning may still make implants possible.",
  },
  {
    q: "Are implants better than dentures?",
    a: "Implants are fixed and generally feel closer to natural teeth, especially while eating and speaking. Dentures can still be suitable for some patients, but they may feel less stable. The best choice depends on your oral condition and goals.",
  },
  {
    q: "How long does the procedure take?",
    a: "The timeline depends on the treatment type - single implant, multiple implants, or full-mouth rehabilitation. Some cases move faster, while others need staged healing. During consultation, you receive a clear, personalized timeline.",
  },
  {
    q: "What is the success rate of dental implants?",
    a: "Dental implants have a high long-term success rate when diagnosis, technique, and aftercare are done properly. Success depends on hygiene, gum health, and regular check-ups. We provide detailed post-treatment instructions to protect outcomes.",
  },
  {
    q: "Are implants permanent teeth replacement?",
    a: "Dental implants are considered the closest option to permanent teeth replacement currently available. They are anchored in the jawbone and designed for long-term function. Good maintenance is essential to keep them healthy and stable.",
  },
  {
    q: "What can I eat after implant surgery?",
    a: "In the early healing phase, soft and non-spicy foods are usually recommended. Avoid very hard, sticky, or very hot foods until your dentist confirms healing progress. A guided food plan can make recovery smoother and safer.",
  },
];

export function ImplantsMain() {
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
    name: "Dental Implant Treatment",
    procedureType: "Dental implant placement and restoration",
    bodyLocation: "Teeth and jawbone",
    howPerformed:
      "Consultation, imaging, digital planning, implant placement, healing, and final prosthetic restoration.",
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
      { "@type": "ListItem", position: 2, name: "Implants", item: pageUrl },
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
              DENTAL CARE
            </p>
            <h1 className="mt-4 max-w-[560px] font-display text-[52px] leading-[1.02] text-ink sm:text-6xl lg:text-[72px]">
              Dental Implants{" "}
              <span className="italic text-copper">Reimagined</span>
            </h1>
            <p className="text-krest-body mt-6 max-w-[540px] text-taupe">
              Achieve the perfect balance between function and esthetics with advanced
              dental implants. Our specialized approach is designed for natural-looking
              results, lasting stability, and confident everyday comfort.
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
                2–3 Visits
              </span>
            </div>
            <p className="mt-5 inline-flex items-center rounded-full border border-copper/15 bg-white/60 px-4 py-2 font-display text-[14px] text-taupe">
              <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full border border-copper/30 text-[11px] text-copper">
                ✓
              </span>
              Recovery: 1–2 Weeks
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[36px] border-[6px] border-white shadow-[0_26px_50px_-28px_rgba(0,0,0,0.45)]">
              <img
                src="/images/hero/dr-suneeta-portrait.jpg"
                alt="Dental implant specialist consultation and procedure guidance"
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
                  aria-label="Play implants procedure video"
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
                Dental Implants • Procedure Video
              </p>
            </div>

            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-copper/15 bg-white/90 px-4 py-3 shadow-lg">
              <p className="font-display text-[14px] text-ink">98% Satisfaction</p>
              <p className="mt-1 font-accent text-[11px] tracking-widest text-taupe">
                DENTAL IMPLANTS
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-14 lg:py-20">
          <div className="krest-site grid grid-cols-1 gap-8 px-[25px] lg:grid-cols-[1.05fr_1.25fr] lg:gap-10">
            <div className="pt-2">
              <h2 className="font-display text-[44px] leading-[1.1] text-ink">
                Tailored Implant Solutions for Every Need
              </h2>
              <p className="mt-5 max-w-[520px] text-[20px] leading-8 text-taupe">
                Dental implants do more than fill gaps — they protect your long-term
                oral health and overall well-being.
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
                  title: "Single Tooth Replacement",
                  body: "Replace one missing tooth with a single implant and a custom-made crown designed to match your natural teeth perfectly.",
                },
                {
                  title: "Multi Teeth Replacement",
                  body: "Bridge larger gaps using two or more implants to support a fixed bridge — stronger, more stable, and longer-lasting than traditional options.",
                },
                {
                  title: "Full Arch Restoration",
                  body: "Restore an entire upper or lower arch with implant-supported dentures, eliminating slipping or adhesives and bringing back full confidence.",
                },
                {
                  title: "Bone Grafting & Sinus Lifts",
                  body: "Advanced bone augmentation techniques allow us to rebuild insufficient bone volume, creating a strong foundation for implant success even in complex cases.",
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
            Why choose dental implants over other tooth replacement options?
          </h2>
          <p className="mt-5 text-[17px] leading-8 text-taupe">
            If you are comparing tooth replacement options, implants are often considered the gold standard for
            stability and long-term value. Unlike removable dentures, implants are fixed. Unlike many conventional
            bridge plans, implants can reduce dependency on adjacent teeth and help preserve jawbone support.
          </p>
          <div className="mt-8 overflow-x-auto rounded-[20px] border border-copper/25 bg-white/55">
            <table className="min-w-full text-left">
              <thead className="border-b border-copper/20">
                <tr className="text-ink">
                  <th className="px-5 py-4 font-display text-xl">Feature</th>
                  <th className="px-5 py-4 font-display text-xl">Dental Implants</th>
                  <th className="px-5 py-4 font-display text-xl">Dentures / Bridges</th>
                </tr>
              </thead>
              <tbody className="text-[16px] text-taupe">
                <tr className="border-b border-copper/15">
                  <td className="px-5 py-4">Stability while chewing</td>
                  <td className="px-5 py-4">Fixed and stable</td>
                  <td className="px-5 py-4">May move or feel less firm</td>
                </tr>
                <tr className="border-b border-copper/15">
                  <td className="px-5 py-4">Natural look and feel</td>
                  <td className="px-5 py-4">Very close to natural teeth</td>
                  <td className="px-5 py-4">Varies by fit and design</td>
                </tr>
                <tr className="border-b border-copper/15">
                  <td className="px-5 py-4">Jawbone preservation</td>
                  <td className="px-5 py-4">Supports bone maintenance</td>
                  <td className="px-5 py-4">Limited stimulation of bone</td>
                </tr>
                <tr>
                  <td className="px-5 py-4">Long-term maintenance</td>
                  <td className="px-5 py-4">Excellent with regular care</td>
                  <td className="px-5 py-4">Frequent adjustments may be needed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white py-14 lg:py-20">
          <div className="krest-site">
            <h2 className="font-display text-4xl text-copper">How does the dental implant procedure work?</h2>
            <ol className="mt-8 space-y-4">
              {[
              {
                title: "Consultation and scan",
                body: "Detailed oral exam and imaging to evaluate gum health, bone support, and bite alignment.",
              },
              {
                title: "Implant placement",
                body: "Implants are placed with precise planning under local anesthesia for comfort and accuracy.",
              },
              {
                title: "Healing phase",
                body: "The implant integrates with bone over time; interim options can be discussed where needed.",
              },
              {
                title: "Crown placement",
                body: "A custom final restoration is fixed for natural esthetics and functional chewing support.",
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
          <h2 className="font-display text-4xl text-copper">What is the cost of dental implants?</h2>
          <p className="mt-5 text-[17px] leading-8 text-taupe">
            The cost of dental implants varies by treatment complexity and final restoration design. Instead of quoting
            a single number for every patient, we provide a case-specific estimate after diagnosis so your plan is
            accurate, transparent, and medically appropriate.
          </p>
          <h3 className="mt-7 font-display text-2xl text-ink">What factors affect implant cost?</h3>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-[17px] leading-8 text-taupe">
            <li>Number of implants and type of prosthetic restoration</li>
            <li>Bone quality and supportive procedures if required</li>
            <li>Implant system and material selection</li>
            <li>Technology and planning complexity for your case</li>
            <li>Esthetic and bite refinement needs</li>
          </ul>
        </section>

        <section className="bg-white py-14 lg:py-20">
          <div className="krest-site">
            <h2 className="font-display text-4xl text-copper">
              Before and after: what changes can you expect?
            </h2>
            <p className="mt-4 max-w-[920px] text-[17px] leading-8 text-taupe">
              Dental implant treatment is not just about filling a gap - it is about restoring confidence, bite
              function, and long-term oral health. Here is what most patients commonly experience before and after
              treatment.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <article className="rounded-[22px] border border-copper/20 bg-[#F3E9E4] p-7">
                <h3 className="font-display text-3xl text-ink">Before Treatment</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-[16px] leading-7 text-taupe">
                  <li>Difficulty chewing hard foods comfortably</li>
                  <li>Visible smile gaps and reduced confidence in photos</li>
                  <li>Shifting nearby teeth and uneven bite pressure</li>
                  <li>Speech discomfort or unclear pronunciation in some cases</li>
                  <li>Concern about long-term bone support in missing-tooth areas</li>
                </ul>
              </article>

              <article className="rounded-[22px] border border-copper/20 bg-[#F3E9E4] p-7">
                <h3 className="font-display text-3xl text-copper">After Treatment</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-[16px] leading-7 text-taupe">
                  <li>Improved chewing strength and everyday comfort</li>
                  <li>Natural-looking smile restoration with stable bite function</li>
                  <li>Better confidence while speaking, smiling, and socializing</li>
                  <li>Long-term support for jawbone health and facial balance</li>
                  <li>A durable, fixed alternative to removable options</li>
                </ul>
              </article>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-full border border-copper/25 bg-[#F3E9E4] px-5 py-3 text-center font-display text-[16px] text-ink">
                Stronger Bite Performance
              </div>
              <div className="rounded-full border border-copper/25 bg-[#F3E9E4] px-5 py-3 text-center font-display text-[16px] text-ink">
                Improved Smile Confidence
              </div>
              <div className="rounded-full border border-copper/25 bg-[#F3E9E4] px-5 py-3 text-center font-display text-[16px] text-ink">
                Long-Term Stability
              </div>
            </div>
          </div>
        </section>

        <section className="krest-site pt-14 pb-14 lg:pt-20 lg:pb-20">
          <div className="text-center">
            <p className="inline-flex items-center gap-3 font-accent text-[11px] uppercase tracking-[0.28em] text-copper">
              <span className="h-px w-10 bg-copper/45" />
              Real Results
              <span className="h-px w-10 bg-copper/45" />
            </p>
            <h2 className="mt-3 font-display text-5xl text-ink sm:text-6xl">
              Implants Transformations
            </h2>
            <p className="mx-auto mt-4 max-w-[760px] text-[17px] leading-8 text-taupe">
              See smile and facial-balance improvements from real implant cases.
              Each treatment is personalized for function, esthetics, and
              long-term comfort.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-3">
            {[
              {
                before: "/images/instagram/post-01.jpg",
                after: "/images/instagram/post-02.jpg",
              },
              {
                before: "/images/instagram/post-03.jpg",
                after: "/images/instagram/post-04.jpg",
              },
              {
                before: "/images/instagram/post-05.jpg",
                after: "/images/instagram/post-06.jpg",
              },
            ].map((item, idx) => (
              <article
                key={idx}
                className="rounded-[24px] border border-copper/15 bg-[#F3E9E4] p-5"
              >
                <div className="grid grid-cols-2 gap-2">
                  <figure className="relative overflow-hidden rounded-[14px]">
                    <img
                      src={item.before}
                      alt="Dental implants before treatment"
                      width={300}
                      height={380}
                      className="h-[240px] w-full object-cover sm:h-[280px]"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="absolute bottom-2 left-2 rounded-full bg-black/75 px-2 py-1 font-accent text-[10px] tracking-wider text-white">
                      BEFORE
                    </span>
                  </figure>
                  <figure className="relative overflow-hidden rounded-[14px]">
                    <img
                      src={item.after}
                      alt="Dental implants after treatment"
                      width={300}
                      height={380}
                      className="h-[240px] w-full object-cover sm:h-[280px]"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="absolute bottom-2 left-2 rounded-full bg-copper px-2 py-1 font-accent text-[10px] tracking-wider text-white">
                      AFTER
                    </span>
                  </figure>
                </div>
                <p className="mt-3 border-t border-copper/20 pt-3 text-center font-accent text-[11px] uppercase tracking-[0.22em] text-taupe">
                  Implants
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white py-14 lg:py-20">
          <div className="krest-site">
            <div className="text-center">
              <p className="font-accent text-[11px] uppercase tracking-[0.28em] text-copper">
                Patient Stories
              </p>
              <h2 className="mt-3 font-display text-5xl text-ink sm:text-6xl">
                What Patients Say About Implants
              </h2>
              <p className="mx-auto mt-4 max-w-[760px] text-[20px] text-taupe">
                Real feedback from patients who chose Krest Dental for implant treatment.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              {[
                {
                  quote:
                    "From consultation to recovery, the team kept me informed at every step. My implant feels stable and natural in everyday life.",
                  name: "Ananya R.",
                  meta: "Visakhapatnam • Dental Implants",
                },
                {
                  quote:
                    "I wanted subtle and refined results, and that is exactly what I received. Recovery guidance was clear, and I was comfortable quickly.",
                  name: "Priya M.",
                  meta: "Kakinada • Dental Implants",
                },
                {
                  quote:
                    "The result feels personalized to my smile and bite. The doctors explained each stage clearly and made the process stress-free.",
                  name: "Sneha V.",
                  meta: "Rajahmundry • Dental Implants",
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

        <section className="krest-site pt-14 pb-14 lg:pt-20 lg:pb-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-10">
            <div>
              <h2 className="font-display text-4xl text-ink">Why Krest Dental for Implants?</h2>
              <p className="mt-5 text-[17px] leading-8 text-taupe">
                Experience exceptional implant dentistry at Krest Dental, led by UCSF-trained Dr. Suneeta
                Veeramachaneni. Combining advanced technology, personalized care, and over two decades of global
                expertise, we deliver results that are functional, natural-looking, and designed to last.
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
                  title: "World-Class Technology",
                  body: "3D CBCT imaging, digital scanners, and guided surgical tools ensure precise, safe, and predictable implant placement.",
                },
                {
                  title: "Expert-Led Care",
                  body: "Dr. Suneeta brings over 23 years of international experience and a meticulous approach to every implant case.",
                },
                {
                  title: "Customized Treatment Plans",
                  body: "Each implant solution is tailored to your bone health, facial structure, and aesthetic goals.",
                },
                {
                  title: "Proven Results",
                  body: "Trusted by thousands of patients, supported by glowing testimonials, and celebrated for consistently excellent outcomes.",
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
            <h2 className="font-display text-5xl text-ink sm:text-6xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-[20px] text-taupe">
              Get answers to common questions about dental implants.
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
            <h2 className="font-display text-4xl text-ink">Ready for permanent teeth replacement?</h2>
            <p className="mx-auto mt-4 max-w-[840px] text-lg leading-8 text-taupe">
              Early consultation helps prevent progressive bone changes and keeps treatment options broader. Book now to
              receive your personalized implant plan, expected timeline, and next steps.
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

