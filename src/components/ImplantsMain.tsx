import { Play, CheckCircle2, XCircle, ChevronDown, Star, Sparkles, Clock, Target, Activity, ShieldPlus, Check } from 'lucide-react';

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
    <main className="flex-1 bg-cream/30">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-32 bg-gradient-to-b from-cream via-cream/80 to-transparent">
        <div className="absolute top-0 right-0 -mr-40 -mt-40 h-[600px] w-[600px] rounded-full bg-copper/5 blur-3xl" />
        <div className="absolute top-40 left-0 -ml-40 h-[400px] w-[400px] rounded-full bg-pink/10 blur-3xl" />
        
        <div className="krest-site relative z-10 grid items-center gap-16 px-[25px] lg:grid-cols-[1.1fr_0.9fr]">
          <div data-float-in="left" className="max-w-[600px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-white/60 px-4 py-1.5 backdrop-blur-md">
              <ShieldPlus className="h-4 w-4 text-copper" />
              <span className="font-accent text-[12px] font-bold tracking-widest text-copper uppercase">Dental Care</span>
            </div>
            
            <h1 className="mt-6 font-display text-[56px] leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[80px]">
              Dental Implants <br />
              <span className="bg-gradient-to-r from-copper to-pink bg-clip-text text-transparent italic pr-2">Reimagined</span>
            </h1>
            
            <p className="mt-8 text-[18px] leading-[1.7] text-taupe/90 sm:text-[20px] max-w-[540px]">
              Achieve the perfect balance between function and esthetics with advanced dental implants. Our specialized approach is designed for natural-looking results, lasting stability, and confident everyday comfort.
            </p>
            
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a href="/contact" className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-copper px-8 font-display text-[18px] text-white transition-all hover:scale-105 hover:shadow-[0_12px_28px_-10px_rgba(159,100,73,0.7)]">
                <span className="relative z-10">Book Consultation</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
              </a>
              <div className="flex items-center gap-3 rounded-full border border-copper/15 bg-white/50 px-5 py-3 backdrop-blur-sm">
                <Clock className="h-5 w-5 text-copper" />
                <span className="font-display text-[16px] text-ink">2–3 Visits</span>
              </div>
            </div>
            
            <div className="mt-8 flex items-center gap-3 text-taupe font-display text-[15px]">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-50 text-green-600">
                <Check className="h-4 w-4" />
              </div>
              Recovery: 1–2 Weeks
            </div>
          </div>

          <div data-float-in="up" className="relative mx-auto w-full max-w-[540px]">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-[40px] shadow-[0_30px_60px_-20px_rgba(159,100,73,0.3)] ring-1 ring-copper/10 transition-all duration-500 hover:shadow-[0_40px_70px_-20px_rgba(159,100,73,0.4)]">
              <img
                src="/images/hero/dr-suneeta-portrait.jpg"
                alt="Dental implant specialist consultation and procedure guidance"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                width={540}
                height={675}
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              
              <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-center">
                <button aria-label="Play implants procedure video" className="group/btn relative flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/40 shadow-2xl transition-transform hover:scale-110">
                  <div className="absolute inset-0 rounded-full bg-white transition-opacity duration-300 group-hover/btn:opacity-90" />
                  <Play className="relative z-10 h-8 w-8 translate-x-0.5 fill-copper text-copper" />
                </button>
              </div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-copper text-white">
                      <Star className="h-6 w-6 fill-current" />
                    </div>
                    <div>
                      <p className="font-display text-[18px] text-white">98% Satisfaction</p>
                      <p className="font-accent text-[12px] tracking-wider text-white/80">DENTAL IMPLANTS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="relative py-20 lg:py-32 bg-white">
        <div className="krest-site px-[25px]">
          <div className="mb-16 max-w-2xl" data-float-in="up">
            <h2 className="font-display text-[40px] leading-[1.1] text-ink sm:text-[48px]">
              Tailored Implant Solutions for Every Need
            </h2>
            <p className="mt-6 text-[18px] leading-[1.7] text-taupe/90 sm:text-[20px]">
              Dental implants do more than fill gaps — they protect your long-term oral health and overall well-being.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Target, title: "Single Tooth Replacement", body: "Replace one missing tooth with a single implant and a custom-made crown designed to match perfectly." },
              { icon: Activity, title: "Multi Teeth Replacement", body: "Bridge larger gaps using two or more implants to support a fixed bridge — stronger and more stable." },
              { icon: ShieldPlus, title: "Full Arch Restoration", body: "Restore an entire upper or lower arch with implant-supported dentures, eliminating slipping entirely." },
              { icon: Sparkles, title: "Bone Grafting & Sinus Lifts", body: "Advanced augmentation rebuilds insufficient bone, creating a strong foundation for complex cases." },
            ].map((item, i) => (
              <article key={i} data-float-in="up" style={{ transitionDelay: `${i * 100}ms` }} className="group relative overflow-hidden rounded-[24px] border border-copper/10 bg-gradient-to-b from-cream/30 to-cream/10 p-8 transition-all hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(159,100,73,0.15)] hover:border-copper/30">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-copper/10 transition-transform group-hover:scale-110 group-hover:bg-copper group-hover:text-white">
                  <item.icon className="h-6 w-6 text-copper transition-colors group-hover:text-white" />
                </div>
                <h3 className="font-display text-[24px] leading-[1.2] text-ink">{item.title}</h3>
                <p className="mt-4 text-[16px] leading-[1.6] text-taupe/90">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 lg:py-32 bg-cream/20">
        <div className="krest-site px-[25px]">
          <div className="text-center max-w-3xl mx-auto mb-16" data-float-in="up">
            <h2 className="font-display text-[40px] text-ink sm:text-[48px]">Why Dental Implants?</h2>
            <p className="mt-6 text-[18px] leading-[1.7] text-taupe/90">
              Implants are considered the gold standard for stability and long-term value compared to removable dentures or traditional bridges.
            </p>
          </div>

          <div className="mx-auto max-w-5xl rounded-[32px] border border-copper/15 bg-white p-2 shadow-xl shadow-copper/5 md:p-4" data-float-in="up">
            <div className="grid grid-cols-[1fr_1fr_1fr] items-center rounded-[24px] bg-cream/40 p-4 font-display text-[16px] sm:text-[20px] text-ink">
              <div className="pl-2 sm:pl-4 font-medium">Feature</div>
              <div className="text-center font-bold text-copper">Dental Implants</div>
              <div className="text-center text-taupe">Dentures / Bridges</div>
            </div>

            <div className="mt-2 divide-y divide-copper/5">
              {[
                { label: "Stability while chewing", in: "Fixed and stable", br: "May move or feel less firm", inGood: true, brGood: false },
                { label: "Natural look and feel", in: "Very close to natural teeth", br: "Varies by fit and design", inGood: true, brGood: false },
                { label: "Jawbone preservation", in: "Supports bone maintenance", br: "Limited stimulation of bone", inGood: true, brGood: false },
                { label: "Long-term maintenance", in: "Excellent with regular care", br: "Frequent adjustments needed", inGood: true, brGood: false },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-[1fr_1fr_1fr] items-center p-4 py-6 transition-colors hover:bg-cream/20 rounded-[20px]">
                  <div className="pl-2 sm:pl-4 font-display text-[15px] sm:text-[18px] text-ink">{row.label}</div>
                  <div className="flex flex-col items-center gap-2 text-center text-[13px] sm:text-[16px] text-taupe/90">
                    {row.inGood ? <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" /> : <XCircle className="h-5 w-5 sm:h-6 sm:w-6 text-red-400" />}
                    <span>{row.in}</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 text-center text-[13px] sm:text-[16px] text-taupe/90">
                    {row.brGood ? <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" /> : <XCircle className="h-5 w-5 sm:h-6 sm:w-6 text-red-400/60" />}
                    <span>{row.br}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="krest-site px-[25px]">
          <h2 className="font-display text-[40px] text-ink sm:text-[48px] text-center mb-16" data-float-in="up">How the process works</h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative">
            <div className="hidden lg:block absolute top-10 left-[15%] w-[70%] border-t-2 border-dashed border-copper/20" />
            
            {[
              { num: "01", title: "Consultation & Scan", body: "Detailed oral exam and imaging to evaluate gum health, bone, and bite." },
              { num: "02", title: "Implant Placement", body: "Implants are placed with precise digital planning under local anesthesia." },
              { num: "03", title: "Healing Phase", body: "The implant integrates with bone over time; interim options available." },
              { num: "04", title: "Crown Placement", body: "A custom final restoration is fixed for natural esthetics and chewing support." },
            ].map((step, i) => (
              <div key={i} data-float-in="up" style={{ transitionDelay: `${i * 100}ms` }} className="relative text-center z-10">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-cream/80 text-copper shadow-[0_0_0_8px_rgba(255,255,255,1)] ring-1 ring-copper/20 transition-transform hover:scale-110">
                  <span className="font-display text-[28px] font-bold">{step.num}</span>
                </div>
                <h3 className="font-display text-[22px] text-ink mb-3">{step.title}</h3>
                <p className="text-[16px] leading-[1.6] text-taupe/90 max-w-[240px] mx-auto">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before and After Comparison */}
      <section className="py-20 lg:py-32 bg-cream/20">
        <div className="krest-site px-[25px]">
          <div className="text-center mb-16" data-float-in="up">
            <h2 className="font-display text-[40px] text-ink sm:text-[48px]">What changes can you expect?</h2>
            <p className="mx-auto mt-6 max-w-[800px] text-[18px] leading-[1.7] text-taupe/90">
              Dental implant treatment is not just about filling a gap - it is about restoring confidence, bite function, and long-term oral health.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2" data-float-in="up">
            <article className="relative overflow-hidden rounded-[32px] border border-copper/10 bg-white p-10 shadow-lg">
              <div className="absolute top-0 left-0 w-2 h-full bg-copper/20" />
              <h3 className="font-display text-[32px] text-ink mb-6">Before Treatment</h3>
              <ul className="space-y-4">
                {[
                  "Difficulty chewing hard foods comfortably",
                  "Visible smile gaps and reduced confidence in photos",
                  "Shifting nearby teeth and uneven bite pressure",
                  "Speech discomfort or unclear pronunciation",
                  "Concern about long-term bone support",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle className="h-6 w-6 text-red-400 shrink-0 mt-0.5" />
                    <span className="text-[17px] leading-[1.6] text-taupe/90">{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="relative overflow-hidden rounded-[32px] border border-copper/20 bg-gradient-to-br from-white to-cream/30 p-10 shadow-xl">
              <div className="absolute top-0 left-0 w-2 h-full bg-copper" />
              <h3 className="font-display text-[32px] text-copper mb-6">After Treatment</h3>
              <ul className="space-y-4">
                {[
                  "Improved chewing strength and everyday comfort",
                  "Natural-looking smile with stable bite function",
                  "Better confidence while speaking and socializing",
                  "Long-term support for jawbone health and facial balance",
                  "A durable, fixed alternative to removable options",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-[17px] leading-[1.6] text-taupe/90">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Transformations Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="krest-site px-[25px]">
          <div className="text-center mb-16" data-float-in="up">
            <p className="inline-flex items-center gap-3 font-accent text-[12px] uppercase tracking-[0.25em] text-copper font-bold mb-4">
              <span className="h-px w-10 bg-copper/40" />
              Real Results
              <span className="h-px w-10 bg-copper/40" />
            </p>
            <h2 className="font-display text-[40px] text-ink sm:text-[48px]">Implants Transformations</h2>
            <p className="mx-auto mt-4 max-w-[760px] text-[18px] leading-[1.7] text-taupe/90">
              See smile and facial-balance improvements from real implant cases. Each treatment is personalized for function, esthetics, and long-term comfort.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { before: "/images/instagram/post-01.jpg", after: "/images/instagram/post-02.jpg" },
              { before: "/images/instagram/post-03.jpg", after: "/images/instagram/post-04.jpg" },
              { before: "/images/instagram/post-05.jpg", after: "/images/instagram/post-06.jpg" },
            ].map((item, i) => (
              <article key={i} data-float-in="up" style={{ transitionDelay: `${i * 100}ms` }} className="group relative overflow-hidden rounded-[32px] border border-copper/10 bg-cream/10 p-4 transition-all hover:shadow-[0_20px_40px_-15px_rgba(159,100,73,0.15)] hover:bg-cream/20">
                <div className="grid grid-cols-2 gap-3">
                  <figure className="relative overflow-hidden rounded-[20px] shadow-sm">
                    <img src={item.before} alt="Dental implants before treatment" className="h-[240px] w-full object-cover sm:h-[300px] transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    <span className="absolute bottom-3 left-3 rounded-full bg-black/70 backdrop-blur-sm px-3 py-1 font-accent text-[11px] font-bold tracking-wider text-white">BEFORE</span>
                  </figure>
                  <figure className="relative overflow-hidden rounded-[20px] shadow-sm">
                    <img src={item.after} alt="Dental implants after treatment" className="h-[240px] w-full object-cover sm:h-[300px] transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    <span className="absolute bottom-3 right-3 rounded-full bg-copper px-3 py-1 font-accent text-[11px] font-bold tracking-wider text-white">AFTER</span>
                  </figure>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Stories */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-cream/20 to-cream/50">
        <div className="krest-site px-[25px]">
          <div className="text-center mb-16" data-float-in="up">
            <p className="font-accent text-[12px] uppercase tracking-[0.25em] text-copper font-bold mb-4">Patient Stories</p>
            <h2 className="font-display text-[40px] text-ink sm:text-[48px]">What Patients Say About Implants</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { quote: "From consultation to recovery, the team kept me informed at every step. My implant feels stable and natural in everyday life.", name: "Ananya R.", meta: "Visakhapatnam" },
              { quote: "I wanted subtle and refined results, and that is exactly what I received. Recovery guidance was clear, and I was comfortable quickly.", name: "Priya M.", meta: "Kakinada" },
              { quote: "The result feels personalized to my smile and bite. The doctors explained each stage clearly and made the process stress-free.", name: "Sneha V.", meta: "Rajahmundry" },
            ].map((item, i) => (
              <article key={i} data-float-in="up" style={{ transitionDelay: `${i * 100}ms` }} className="relative flex flex-col justify-between rounded-[32px] bg-white p-8 shadow-[0_15px_40px_-20px_rgba(159,100,73,0.15)] ring-1 ring-copper/5 transition-transform hover:-translate-y-2">
                <div>
                  <div className="flex gap-1 text-copper mb-6">
                    {[...Array(5)].map((_, idx) => <Star key={idx} className="h-5 w-5 fill-current" />)}
                  </div>
                  <p className="text-[17px] leading-[1.7] text-ink/80 mb-8">"{item.quote}"</p>
                </div>
                <div>
                  <p className="font-display text-[20px] text-ink">{item.name}</p>
                  <p className="font-accent text-[13px] text-taupe tracking-wider mt-1 uppercase">{item.meta}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="krest-site px-[25px] max-w-4xl mx-auto">
          <div className="text-center mb-16" data-float-in="up">
            <h2 className="font-display text-[40px] text-ink sm:text-[48px]">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details 
                key={i} 
                data-float-in="up"
                style={{ transitionDelay: `${i * 50}ms` }}
                className="group overflow-hidden rounded-[20px] border border-copper/10 bg-white transition-all duration-300 hover:border-copper/20 hover:bg-cream/5 open:border-copper/30 open:bg-cream/20 open:shadow-md"
              >
                <summary className="flex w-full cursor-pointer list-none items-center justify-between p-6 text-left [&::-webkit-details-marker]:hidden">
                  <h3 className="font-display text-[22px] text-ink pr-8">{faq.q}</h3>
                  <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-cream text-copper transition-transform duration-300 group-open:rotate-180 group-open:bg-copper group-open:text-white">
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </summary>
                <div className="p-6 pt-0">
                  <p className="text-[16px] leading-[1.7] text-taupe/90 border-t border-copper/10 pt-6">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="krest-site px-[25px]">
          <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-copper to-[#8A5138] p-12 text-center shadow-2xl lg:p-20" data-float-in="up">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-black/10 blur-3xl" />
            
            <h2 className="relative z-10 font-display text-[40px] leading-[1.1] text-white sm:text-[56px] max-w-3xl mx-auto">
              Ready for permanent teeth replacement?
            </h2>
            <p className="relative z-10 mx-auto mt-6 max-w-[600px] text-[18px] leading-[1.6] text-white/90">
              Early consultation helps prevent progressive bone changes and keeps treatment options broader. Book now to receive your personalized implant plan.
            </p>
            
            <div className="relative z-10 mt-10 flex flex-wrap justify-center gap-4">
              <a href="/contact" className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-display text-[18px] text-copper transition-all hover:scale-105 hover:shadow-xl">
                <span className="relative z-10">Book Consultation</span>
              </a>
              <a href="tel:9573884525" className="inline-flex h-14 items-center rounded-full border border-white/30 px-8 font-display text-[18px] text-white transition-colors hover:bg-white/10">
                Call / WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

