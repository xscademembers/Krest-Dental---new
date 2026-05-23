import type { SVGProps } from "react";
import { HERO } from "@/lib/krest-content";

export function HeroSection() {
  return (
    <section
      aria-label="Hero — Dr. Suneeta Veramachaneni"
      className="relative overflow-hidden bg-cream pb-20 pt-12 lg:pb-28 lg:pt-16"
    >
      <img
        src={HERO.backdropOrnament}
        alt=""
        aria-hidden="true"
        width={400}
        height={560}
        className="pointer-events-none absolute right-0 top-8 z-0 h-[128%] w-auto select-none opacity-55 lg:right-0 lg:top-6"
      />
      <div className="mx-auto max-w-[1240px] px-[25px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <h1 className="font-display italic text-[40px] font-normal leading-[1.05] tracking-[-0.01em] text-ink sm:text-[52px] lg:text-[60px]">
              Dr. Suneeta Veramachaneni
            </h1>
            <div className="mt-4 flex items-center gap-9">
              <span
                aria-hidden="true"
                className="block h-px w-[120px] shrink-0 bg-copper"
              />
              <p className="font-accent text-[14px] tracking-wide text-copper sm:text-[15px]">
                Cosmetic Dentist &amp; Implantologist
              </p>
            </div>
            <p className="mt-6 max-w-[560px] font-display text-[15px] leading-[1.65] text-ink sm:text-[16px] lg:text-[16.5px]">
              {HERO.description}
            </p>
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
            <div className="relative z-10 aspect-[4/5] w-full overflow-hidden rounded-[28px] shadow-[0_18px_40px_-22px_rgba(0,0,0,0.35)] lg:rounded-[36px]">
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

        <div className="mt-12 grid grid-cols-1 items-center gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-12">
          <div className="hidden lg:flex lg:items-center">
            <QuoteLoopFlourish className="h-44 w-auto text-ink/90" />
          </div>
          <figure className="text-center lg:text-left">
            <blockquote>
              <p className="font-display italic text-[14px] leading-[1.7] text-taupe sm:text-[15px] lg:text-[15.5px]">
                &ldquo;{HERO.quote}&rdquo;
              </p>
            </blockquote>
            <figcaption className="mt-3">
              <img
                src={HERO.signature}
                alt="Dr. Suneeta — signature"
                width={211}
                height={82}
                className="mx-auto h-auto w-[150px] lg:mx-0"
                loading="lazy"
                decoding="async"
              />
            </figcaption>
          </figure>
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

