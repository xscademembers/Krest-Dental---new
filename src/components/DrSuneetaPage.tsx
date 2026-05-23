import type { SVGProps } from "react";
import {
  ABOUT_VISION_MISSION,
  DR_SUNEETA_PAGE,
  STATS,
} from "@/lib/krest-content";

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

function HeroCornerFlourish(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 420 180"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
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

function MapPinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 2C7.589 2 4 5.589 4 9.995 4 14.55 9.572 21.038 11.213 22.667a1.122 1.122 0 0 0 1.575 0C14.428 21.038 20 14.55 20 9.995 20 5.589 16.411 2 12 2zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
    </svg>
  );
}

/** Winding decorative path behind the timeline (matches krest.dental/drsuneeta). */
function JourneyCurve(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 400 1100"
      fill="none"
      stroke="currentColor"
      strokeWidth="58"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M 320 40
           C 380 90, 380 170, 300 200
           C 220 230, 240 320, 320 360
           C 400 400, 380 480, 280 500
           C 160 520, 140 600, 240 660
           C 360 720, 340 820, 220 840
           C 110 860, 100 940, 200 980
           C 280 1010, 280 1060, 240 1080"
      />
    </svg>
  );
}

export function DrSuneetaPage() {
  return (
    <>
      <section
        aria-label="Dr. Suneeta Veramachaneni"
        className="bg-white"
      >
        <div className="grid min-h-[420px] grid-cols-1 lg:min-h-[560px] lg:grid-cols-2">
          <div className="relative min-h-[360px] lg:min-h-0">
            <img
              src={DR_SUNEETA_PAGE.portraitSrc}
              alt={DR_SUNEETA_PAGE.portraitAlt}
              width={1100}
              height={1040}
              className="absolute inset-0 h-full w-full object-cover object-[50%_28%]"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
          <div className="relative flex flex-col justify-center bg-[#F4EAE6] px-[25px] py-14 sm:px-14 lg:px-20 lg:py-16 xl:px-24">
            <div className="relative z-10 w-full min-w-0">
              <h1 className="whitespace-nowrap font-display text-[32px] font-normal italic leading-[1.06] tracking-[-0.02em] text-ink sm:text-[42px] lg:text-[52px] xl:text-[56px]">
                {DR_SUNEETA_PAGE.name}
              </h1>
              <div className="mt-5 flex items-center gap-6 sm:gap-9">
                <span
                  aria-hidden="true"
                  className="block h-px w-[100px] shrink-0 bg-copper sm:w-[120px]"
                />
                <p className="whitespace-nowrap font-accent text-[14px] tracking-wide text-copper sm:text-[15px]">
                  {DR_SUNEETA_PAGE.title}
                </p>
              </div>
              <a
                href="/contact"
                className="mt-8 inline-flex h-11 w-fit items-center gap-3 rounded-full bg-copper pl-5 pr-1.5 font-display text-[14px] tracking-wide text-white transition-all duration-200 hover:bg-copper/90"
              >
                <span>Book Appointment</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-copper">
                  <SimpleArrow className="h-3 w-3" />
                </span>
              </a>
            </div>
            <HeroCornerFlourish className="pointer-events-none absolute bottom-6 right-6 h-28 w-auto text-copper/25 sm:bottom-8 sm:right-10 sm:h-36 lg:h-44" />
          </div>
        </div>
      </section>

      <section
        aria-label="Dr Suneeta Journey and Our Story"
        className="relative bg-white"
      >
        <div className="mx-auto max-w-[1240px] px-[25px] py-16 lg:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* LEFT — sticky "Our Story" + heading */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <h2
                id="dr-suneeta-our-story"
                className="font-display text-[36px] font-normal italic leading-[1.05] tracking-[-0.02em] text-copper sm:text-[44px] lg:text-[56px]"
              >
                {DR_SUNEETA_PAGE.ourStoryHeading}
              </h2>
              <p className="mt-6 max-w-[460px] font-display text-[14px] leading-[1.65] text-ink sm:text-[15px]">
                {DR_SUNEETA_PAGE.ourStoryText}
              </p>
            </div>

            {/* RIGHT — Dr Suneeta Journey timeline with curvy decorative path */}
            <div className="relative">
              <p className="mb-12 text-right font-display text-[15px] text-ink sm:text-[16px] lg:mb-16">
                {DR_SUNEETA_PAGE.journeyHeading}
              </p>

              <JourneyCurve
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full text-[#F4EAE6]"
              />

              <ol className="relative space-y-32 sm:space-y-40 lg:space-y-44">
                {DR_SUNEETA_PAGE.milestones.map((item, idx) => (
                  <li
                    key={item.id}
                    className={`relative flex flex-col gap-3 ${
                      idx % 2 === 0
                        ? "items-start text-left sm:pl-2"
                        : "items-end text-right sm:pr-2"
                    }`}
                  >
                    <MapPinIcon className="h-5 w-5 text-ink" />
                    <p className="max-w-[28ch] font-display text-[14px] leading-[1.55] text-ink sm:text-[15px]">
                      {item.lines
                        ? item.lines.map((line, i) => (
                            <span key={i} className="block">
                              {line}
                            </span>
                          ))
                        : item.text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="dr-suneeta-vision-mission"
        className="bg-[#fdfcfb] py-14 lg:py-20"
      >
        <div className="mx-auto max-w-[1240px] px-[25px]">
          <h2 id="dr-suneeta-vision-mission" className="sr-only">
            Our vision and mission
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
            <article className="flex min-h-[280px] flex-col items-center justify-center rounded-[48px] bg-[#f4ece8] px-8 py-12 text-center sm:px-10 sm:py-14 lg:rounded-[50px] lg:px-12 lg:py-16">
              <h3 className="font-display text-[28px] font-normal italic leading-tight text-[#9b6c5a] sm:text-[32px] lg:text-[34px]">
                {ABOUT_VISION_MISSION.vision.title}
              </h3>
              <p className="mt-6 max-w-[52ch] font-display text-[16px] font-normal leading-[1.75] text-[#444444] sm:text-[17px]">
                {ABOUT_VISION_MISSION.vision.text}
              </p>
            </article>
            <article className="flex min-h-[280px] flex-col items-center justify-center rounded-[48px] bg-[#f4ece8] px-8 py-12 text-center sm:px-10 sm:py-14 lg:rounded-[50px] lg:px-12 lg:py-16">
              <h3 className="font-display text-[28px] font-normal italic leading-tight text-[#9b6c5a] sm:text-[32px] lg:text-[34px]">
                {ABOUT_VISION_MISSION.mission.title}
              </h3>
              <p className="mt-6 max-w-[52ch] font-display text-[16px] font-normal leading-[1.75] text-[#444444] sm:text-[17px]">
                {ABOUT_VISION_MISSION.mission.text}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        aria-label="Success in Numbers"
        className="bg-[#F4EAE6] py-16 lg:py-24"
      >
        <div className="mx-auto max-w-[1180px] px-[25px]">
          <h2 className="font-display text-[34px] font-normal italic leading-[1.15] tracking-[-0.01em] text-copper sm:text-[44px] lg:text-[52px]">
            {DR_SUNEETA_PAGE.statsHeading}
          </h2>
          <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-6">
            {STATS.map((stat) => (
              <li
                key={stat.label}
                className="rounded-[28px] bg-white px-7 py-9 text-left lg:px-8 lg:py-10"
              >
                <p className="font-display text-[36px] font-normal leading-none tracking-tight text-ink sm:text-[40px] lg:text-[44px]">
                  {stat.value}
                </p>
                <span
                  aria-hidden="true"
                  className="mt-4 block h-px w-[88%] bg-ink/85"
                />
                <p className="mt-5 font-display text-[14px] tracking-wide text-ink sm:text-[15px]">
                  {stat.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
