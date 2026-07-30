import {
  ABOUT_VISION_MISSION,
  DR_SUNEETA_NAME,
  DR_SUNEETA_PAGE,
  STATS,
} from "@/lib/krest-content";
import { TextWithDrSuneetaHighlight } from "@/components/TextWithDrSuneetaHighlight";
import { ConnectWithUsSection } from "@/components/ConnectWithUsSection";
import {
  ButtonArrowCircle,
  JourneyPin,
  JourneySwirl,
  ToothFlourish,
} from "@/components/DrSuneetaDecorations";

/**
 * Journey milestones positioned exactly as on krest.dental/drsuneeta.
 * Coordinates are relative to the 566x2326 swirl box (measured at 1440px).
 */
const MILESTONE_LAYOUT: Record<
  string,
  { left: number; top: number; textWidth: number; gap: number }
> = {
  bds: { left: 173, top: 231, textWidth: 245, gap: 23 },
  dds: { left: 353, top: 673, textWidth: 245, gap: 26 },
  sf: { left: 305, top: 1100, textWidth: 245, gap: 22 },
  india: { left: 110, top: 1540, textWidth: 220, gap: 24 },
  krest: { left: 396, top: 2027, textWidth: 170, gap: 20 },
};

export function DrSuneetaPage() {
  return (
    <>
      {/* ============ Hero: portrait left, name + CTA on pale-pink panel right ============ */}
      <section aria-label={DR_SUNEETA_NAME} className="bg-white">
        <div className="mx-auto grid w-full max-w-[1425px] grid-cols-1 lg:h-[676px] lg:grid-cols-2">
          {/* Live: 713x676 photo, fp 0.50 0.43 */}
          <div className="relative min-h-[360px] sm:min-h-[480px] lg:min-h-0">
            <img
              src={DR_SUNEETA_PAGE.portraitSrc}
              alt={DR_SUNEETA_PAGE.portraitAlt}
              width={713}
              height={676}
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>

          {/* Live: bg #F4EAE6, text starts 54px in / 254px down */}
          <div className="relative bg-[#F4EAE6] px-[25px] py-14 sm:px-12 lg:px-0 lg:py-0">
            <div className="lg:pl-[54px] lg:pt-[254px]">
              {/* Live: EB Garamond italic 56.78px, lh 0.9, ls -0.03em, black */}
              <h1 className="font-display text-[30px] font-normal italic leading-[0.9] tracking-[-0.03em] text-black sm:text-[42px] lg:text-[56.78px]">
                {DR_SUNEETA_PAGE.name}
              </h1>
              {/* Live: 90x2 copper line + Marmelad 20px copper */}
              <div className="mt-[16px] flex items-center">
                <span
                  aria-hidden="true"
                  className="block w-[28px] shrink-0 border-t-2 border-copper lg:w-[90px]"
                />
                <p className="ml-2 font-accent text-[18px] leading-[1.3] text-copper max-lg:whitespace-nowrap lg:ml-[29px] lg:whitespace-normal lg:text-[20px]">
                  {DR_SUNEETA_PAGE.title}
                </p>
              </div>
              {/* Live: 227x50 copper pill, EB Garamond 18px white + 26px white arrow circle */}
              <a
                href="/contact"
                className="mt-[25px] inline-flex h-[50px] w-[227px] items-center rounded-[50px] bg-copper pl-[22px] transition-colors hover:bg-copper/90"
              >
                <span className="font-display text-[18px] leading-[1.4] text-white">
                  Book Appointment
                </span>
                <ButtonArrowCircle className="ml-[19px] h-[26px] w-[26px]" />
              </a>
            </div>
            {/* Live: 356x245 thin grey tooth doodle, flush bottom-right */}
            <ToothFlourish className="pointer-events-none absolute bottom-0 right-0 hidden h-[245px] w-[356px] lg:block" />
          </div>
        </div>
      </section>

      {/* ============ Our Story (sticky) + Dr Suneeta Journey timeline ============ */}
      <section aria-label="Our Story and Dr Suneeta Journey" className="bg-white">
        <div className="mx-auto grid w-full max-w-[1425px] grid-cols-1 lg:grid-cols-[712px_1fr]">
          {/* LEFT — sticky "Our Story" (live: sticky top 61px, text inset 61px) */}
          <div className="px-[25px] pt-16 lg:px-0 lg:pt-0">
            {/* Live: sticky box is a fixed 900px-tall container, so it releases
                and scrolls away once the swirl nears the section bottom */}
            <div className="lg:sticky lg:top-[61px] lg:h-[900px] lg:pl-[61px] lg:pt-[89px]">
              {/* Live: EB Garamond italic 60.12px copper, lh 1 */}
              <h2 className="font-display text-[36px] font-normal italic leading-none text-copper sm:text-[48px] lg:text-[60.12px]">
                {DR_SUNEETA_PAGE.ourStoryHeading}
              </h2>
              {/* Live: 22px justify black, width 602 */}
              <p className="mt-[42px] max-w-[602px] text-justify font-display text-[18px] leading-[1.3] text-black sm:text-[20px] lg:text-[22px]">
                <TextWithDrSuneetaHighlight text={DR_SUNEETA_PAGE.ourStoryText} />
              </p>
            </div>
          </div>

          {/* RIGHT — journey label + giant swirl with absolutely-placed milestones */}
          <div className="px-[25px] pb-16 pt-12 lg:px-0 lg:pb-0 lg:pt-[28px]">
            {/* Live: label 116px in from swirl left, 36px above swirl */}
            <p className="font-display text-[20px] leading-[1.1] text-black lg:ml-auto lg:mr-auto lg:w-[566px] lg:pl-[116px] lg:text-[22.27px]">
              {DR_SUNEETA_PAGE.journeyHeading}
            </p>

            {/* Desktop: exact 566x2326 swirl with measured milestone coordinates */}
            <div className="relative mx-auto mt-[36px] hidden h-[2326px] w-[566px] lg:block">
              <JourneySwirl className="absolute inset-0 h-full w-full" />
              <ol className="absolute inset-0">
                {DR_SUNEETA_PAGE.milestones.map((item) => {
                  const pos = MILESTONE_LAYOUT[item.id];
                  return (
                    <li
                      key={item.id}
                      data-float-in="left"
                      className="absolute"
                      style={{ left: pos.left, top: pos.top, width: pos.textWidth }}
                    >
                      <JourneyPin className="h-[21px] w-auto" />
                      <p
                        className="font-display text-[22.27px] font-normal leading-[1.1] text-black"
                        style={{ marginTop: pos.gap }}
                      >
                        {item.lines.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </p>
                    </li>
                  );
                })}
              </ol>
            </div>

            {/* Mobile/tablet: simple timeline list over a slimmer swirl */}
            <div className="relative mt-8 lg:hidden">
              <JourneySwirl className="pointer-events-none absolute left-1/2 top-0 h-full w-auto -translate-x-1/2 opacity-70" />
              <ol className="relative space-y-16 py-6">
                {DR_SUNEETA_PAGE.milestones.map((item, idx) => (
                  <li
                    key={item.id}
                    data-float-in="left"
                    className={`flex flex-col gap-3 ${idx % 2 === 0 ? "items-start pl-2" : "items-end pr-2 text-right"}`}
                  >
                    <JourneyPin className="h-[21px] w-auto" />
                    <p className="max-w-[260px] font-display text-[19px] leading-[1.15] text-black">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Our Vision / Our Mission (white bg, pale-pink cards) ============ */}
      <section aria-label="Our Vision and Our Mission" className="bg-white">
        <div className="mx-auto grid w-full max-w-[1425px] grid-cols-1 gap-10 px-[25px] py-12 lg:grid-cols-2 lg:gap-x-[139px] lg:px-[69px] lg:pb-[35px] lg:pt-[35px]">
          {/* Live: 574x455 card, radius 56.4, bg #F4EAE6, content centered */}
          <article className="flex min-h-[320px] flex-col items-center justify-center rounded-[40px] bg-[#F4EAE6] px-8 py-12 lg:min-h-[455px] lg:rounded-[56px] lg:px-[50px]">
            {/* Live: EB Garamond italic 67.59px copper, lh 1.4 */}
            <h2 className="text-center font-display text-[38px] font-normal italic leading-[1.4] text-copper sm:text-[50px] lg:text-[67.59px]">
              {ABOUT_VISION_MISSION.vision.title}
            </h2>
            {/* Live: 24px justify black, lh 1.3, width 473 */}
            <p className="mt-[34px] max-w-[473px] text-justify font-display text-[18px] leading-[1.3] text-black sm:text-[20px] lg:text-[24px]">
              {ABOUT_VISION_MISSION.vision.text}
            </p>
          </article>
          {/* Live: right card 574x432, offset 12px lower */}
          <article className="flex min-h-[320px] flex-col items-center justify-center rounded-[40px] bg-[#F4EAE6] px-8 py-12 lg:mt-[12px] lg:min-h-[432px] lg:rounded-[56px] lg:px-[50px]">
            <h2 className="text-center font-display text-[38px] font-normal italic leading-[1.4] text-copper sm:text-[50px] lg:text-[67.59px]">
              {ABOUT_VISION_MISSION.mission.title}
            </h2>
            <p className="mt-[34px] max-w-[473px] text-justify font-display text-[18px] leading-[1.3] text-black sm:text-[20px] lg:text-[24px]">
              {ABOUT_VISION_MISSION.mission.text}
            </p>
          </article>
        </div>
      </section>

      {/* ============ Success in Numbers (pale-pink band, white stat cards) ============ */}
      <section aria-label="Success in Numbers" className="bg-[#F4EAE6]">
        <div className="mx-auto w-full max-w-[1425px] px-[25px] pb-16 pt-12 lg:px-[67px] lg:pb-[113px] lg:pt-[63px]">
          {/* Live: EB Garamond italic 55.66px copper, lh 1 */}
          <h2 className="font-display text-[34px] font-normal italic leading-none text-copper sm:text-[44px] lg:pl-[12px] lg:text-[55.66px]">
            {DR_SUNEETA_PAGE.statsHeading}
          </h2>
          {/* Live: cards 312x225, radius 34, 22px gap, 96px below heading */}
          <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-[96px] lg:grid-cols-4 lg:gap-[22px]">
            {STATS.map((stat) => (
              <li
                key={stat.label}
                className="rounded-[34px] bg-white px-[22px] pb-[40px] pt-[51px] lg:h-[225px]"
              >
                {/* Live: EB Garamond 47.25px black, lh 1.1 */}
                <p className="font-display text-[38px] font-normal leading-[1.1] text-black lg:text-[47.25px]">
                  {stat.value}
                </p>
                {/* Live: 1px black line 24px below value */}
                <span aria-hidden="true" className="mt-[24px] block w-full border-t border-black" />
                {/* Live: EB Garamond 18px black, lh 1.3 */}
                <p className="mt-[23px] font-display text-[18px] leading-[1.3] text-black">
                  {stat.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ConnectWithUsSection showHeading />
    </>
  );
}
