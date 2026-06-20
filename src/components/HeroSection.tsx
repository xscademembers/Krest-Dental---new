import type { SVGProps } from "react";
import { CopperArrowButton } from "@/components/CopperArrowButton";
import { HERO } from "@/lib/krest-content";

export function HeroSection() {
  return (
    <section
      aria-label="Hero — Dr. Suneeta Veramachaneni"
      className="relative overflow-hidden bg-cream pb-14 pt-5 max-lg:pb-12 lg:pb-28 lg:pt-16"
    >
      <img
        src={HERO.backdropOrnament}
        alt=""
        aria-hidden="true"
        width={400}
        height={560}
        className="pointer-events-none absolute -right-2 top-0 z-0 h-auto w-[62%] max-w-[230px] select-none opacity-40 lg:hidden"
      />
      <img
        src={HERO.backdropOrnament}
        alt=""
        aria-hidden="true"
        width={400}
        height={560}
        className="pointer-events-none absolute right-0 top-6 z-0 hidden h-[128%] w-auto select-none opacity-55 lg:block"
      />

      <div className="krest-site">
        {/* Mobile — Wix: name, em-dash title, body, CTA, portrait, quote, signature */}
        <div className="hero-mobile relative z-10 flex flex-col items-stretch lg:hidden">
          <h1 className="hero-mobile__name">{HERO.name}</h1>

          <p className="hero-mobile__title">— {HERO.title}</p>

          <p className="hero-mobile__body">{HERO.description}</p>

          <CopperArrowButton href="/contact" variant="cta" className="mt-[22px] self-start">
            Book Appointment
          </CopperArrowButton>

          <div className="mt-7 w-full overflow-hidden rounded-[28px]">
            <img
              src={HERO.doctorPortrait}
              alt="Dr. Suneeta Veeramachaneni — Cosmetic Dentist & Implantologist at Krest Dental, Vizag"
              className="aspect-[4/5] h-auto w-full object-cover"
              width={480}
              height={600}
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>

          <figure className="mt-7 text-center">
            <blockquote>
              <p className="hero-mobile__quote">&ldquo;{HERO.quote}&rdquo;</p>
            </blockquote>
            <figcaption className="mt-3 flex justify-center">
              <img
                src={HERO.signature}
                alt="Dr. Suneeta — signature"
                width={211}
                height={82}
                className="h-auto w-[150px]"
                loading="lazy"
                decoding="async"
              />
            </figcaption>
          </figure>
        </div>

        {/* Desktop — unchanged two-column layout */}
        <div className="relative z-10 hidden lg:block">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <h1 className="text-krest-hero-name italic">{HERO.name}</h1>
              <div className="mt-4 flex items-center gap-9">
                <span
                  aria-hidden="true"
                  className="block h-px w-[120px] shrink-0 bg-copper"
                />
                <p className="text-krest-accent tracking-wide">{HERO.title}</p>
              </div>
              <p className="text-krest-body-serif mt-6">{HERO.description}</p>
              <a
                href="/contact"
                className="mt-7 inline-flex h-11 items-center gap-3 rounded-full bg-copper pl-5 pr-1.5 font-display text-[14px] tracking-wide text-white transition-all duration-200 hover:bg-copper/90"
              >
                <span>Book Appointment</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-copper">
                  <SimpleArrow className="h-3 w-3" />
                </span>
              </a>
            </div>

            <div className="relative mx-auto w-full max-w-[480px]">
              <div className="relative z-10 aspect-[4/5] w-full overflow-hidden rounded-[36px] shadow-[0_18px_40px_-22px_rgba(0,0,0,0.35)]">
                <img
                  src={HERO.doctorPortrait}
                  alt="Dr. Suneeta Veeramachaneni — Cosmetic Dentist & Implantologist at Krest Dental, Vizag"
                  className="absolute inset-0 h-full w-full object-cover"
                  width={480}
                  height={600}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex items-center">
              <QuoteLoopFlourish className="h-44 w-auto text-ink/90" />
            </div>
            <figure className="text-left">
              <blockquote>
                <p className="text-krest-body-lg italic text-taupe">
                  &ldquo;{HERO.quote}&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-3">
                <img
                  src={HERO.signature}
                  alt="Dr. Suneeta — signature"
                  width={211}
                  height={82}
                  className="h-auto w-[150px]"
                  loading="lazy"
                  decoding="async"
                />
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

function SimpleArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}

function QuoteLoopFlourish(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 420 180"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M 58 88
           C 58 144, 94 176, 154 176
           C 232 176, 286 134, 316 76
           C 336 36, 312 8, 278 12
           C 246 16, 234 50, 258 72
           C 286 98, 330 104, 364 84
           C 394 66, 412 38, 414 14"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
