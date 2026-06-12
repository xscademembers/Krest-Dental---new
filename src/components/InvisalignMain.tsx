import { Play, CheckCircle2, XCircle, ChevronDown, Star, Sparkles, Clock, Target, Activity, Check } from 'lucide-react';

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
              <Sparkles className="h-4 w-4 text-copper" />
              <span className="font-accent text-[12px] font-bold tracking-widest text-copper uppercase">Clear Aligners</span>
            </div>
            
            <h1 className="mt-6 font-display text-[56px] leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[80px]">
              Invisalign <br />
              <span className="bg-gradient-to-r from-copper to-pink bg-clip-text text-transparent italic pr-2">Reimagined</span>
            </h1>
            
            <p className="mt-8 text-[18px] leading-[1.7] text-taupe/90 sm:text-[20px] max-w-[540px]">
              Achieve beautifully aligned teeth without metal braces. Invisalign clear aligners are discreet, comfortable, and customized for precise smile correction in everyday life.
            </p>
            
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a href="/contact" className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-copper px-8 font-display text-[18px] text-white transition-all hover:scale-105 hover:shadow-[0_12px_28px_-10px_rgba(159,100,73,0.7)]">
                <span className="relative z-10">Book Consultation</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
              </a>
              <div className="flex items-center gap-3 rounded-full border border-copper/15 bg-white/50 px-5 py-3 backdrop-blur-sm">
                <Clock className="h-5 w-5 text-copper" />
                <span className="font-display text-[16px] text-ink">20–22 Hrs/Day</span>
              </div>
            </div>
            
            <div className="mt-8 flex items-center gap-3 text-taupe font-display text-[15px]">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-50 text-green-600">
                <Check className="h-4 w-4" />
              </div>
              No Metal Wires or Brackets
            </div>
          </div>

          <div data-float-in="up" className="relative mx-auto w-full max-w-[540px]">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-[40px] shadow-[0_30px_60px_-20px_rgba(159,100,73,0.3)] ring-1 ring-copper/10 transition-all duration-500 hover:shadow-[0_40px_70px_-20px_rgba(159,100,73,0.4)]">
              <img
                src="/images/hero/dr-suneeta-portrait.jpg"
                alt="Invisalign consultation and smile planning at Krest Dental"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                width={540}
                height={675}
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              
              <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-center">
                <button aria-label="Play Invisalign procedure video" className="group/btn relative flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/40 shadow-2xl transition-transform hover:scale-110">
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
                      <p className="font-accent text-[12px] tracking-wider text-white/80">INVISALIGN TREATMENT</p>
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
              Tailored Solutions for Every Smile
            </h2>
            <p className="mt-6 text-[18px] leading-[1.7] text-taupe/90 sm:text-[20px]">
              Clear aligners do more than straighten teeth — they improve smile harmony, bite function, and confidence in a discreet way.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Sparkles, title: "Mild Correction", body: "Correct small spacing, mild crowding, and minor rotation with a comfortable journey." },
              { icon: Target, title: "Smile Refinement", body: "Address visible crowding and uneven alignment with staged, digital planning." },
              { icon: Activity, title: "Bite Improvement", body: "Selected bite issues can be improved with aligners and attachment-based control." },
              { icon: Clock, title: "Relapse Correction", body: "If teeth have shifted after past braces, Invisalign helps realign and stabilize." },
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
            <h2 className="font-display text-[40px] text-ink sm:text-[48px]">Why Invisalign?</h2>
            <p className="mt-6 text-[18px] leading-[1.7] text-taupe/90">
              Invisalign offers discreet alignment with removable clear trays, making daily routines easier. See how it compares to traditional methods.
            </p>
          </div>

          <div className="mx-auto max-w-5xl rounded-[32px] border border-copper/15 bg-white p-2 shadow-xl shadow-copper/5 md:p-4" data-float-in="up">
            <div className="grid grid-cols-[1fr_1fr_1fr] items-center rounded-[24px] bg-cream/40 p-4 font-display text-[16px] sm:text-[20px] text-ink">
              <div className="pl-2 sm:pl-4 font-medium">Feature</div>
              <div className="text-center font-bold text-copper">Invisalign</div>
              <div className="text-center text-taupe">Traditional Braces</div>
            </div>

            <div className="mt-2 divide-y divide-copper/5">
              {[
                { label: "Visibility", in: "Nearly invisible clear trays", br: "Visible metal brackets/wires", inGood: true, brGood: false },
                { label: "Eating routine", in: "Remove to eat anything", br: "Strict food restrictions", inGood: true, brGood: false },
                { label: "Oral hygiene", in: "Normal brushing/flossing", br: "Requires special cleaning", inGood: true, brGood: false },
                { label: "Comfort", in: "Smooth, comfortable plastic", br: "Can irritate cheeks/gums", inGood: true, brGood: false },
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
              { num: "01", title: "Consultation", body: "Detailed clinical review and precise digital impressions." },
              { num: "02", title: "Custom Plan", body: "A staged movement strategy mapping your perfect smile." },
              { num: "03", title: "Aligner Wear", body: "Daily wear with periodic appointments to track progress." },
              { num: "04", title: "Retention", body: "Final refinements and retainers to maintain results forever." },
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

      {/* Patient Stories */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-cream/20 to-cream/50">
        <div className="krest-site px-[25px]">
          <div className="text-center mb-16" data-float-in="up">
            <p className="font-accent text-[12px] uppercase tracking-[0.25em] text-copper font-bold mb-4">Patient Stories</p>
            <h2 className="font-display text-[40px] text-ink sm:text-[48px]">Real Results, Real Smiles</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { quote: "The aligners were comfortable and easy to follow. My smile changed naturally without affecting my daily routine.", name: "Anjali R.", meta: "Visakhapatnam" },
              { quote: "I loved how discreet the treatment was. Progress reviews were clear, and my confidence improved month by month.", name: "Priya M.", meta: "Kakinada" },
              { quote: "My bite feels better and my teeth look aligned beautifully. The team explained every step in a very reassuring way.", name: "Sneha V.", meta: "Rajahmundry" },
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
              Ready to start your Invisalign journey?
            </h2>
            <p className="relative z-10 mx-auto mt-6 max-w-[600px] text-[18px] leading-[1.6] text-white/90">
              Book your consultation and receive a clear aligner roadmap designed for your smile goals, bite needs, and lifestyle.
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
