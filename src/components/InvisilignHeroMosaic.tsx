import { ButtonArrowIcon } from "@/components/InvisilignDecorations";

const IMAGES = {
  consultation: "/images/invisilign-old/invisalign-consultation.jpg",
  portrait: "/images/invisilign-old/studio-portrait.jpg",
  patient: "/images/invisilign-old/getty-man.jpg",
} as const;

/** Exact Wix palette from krest.dental/invisilign computed styles */
const COLORS = {
  cream: "#F4EAE6",
  copper: "#9F6449",
  ink: "#000000",
  dark: "#4C453B",
  pink: "#F5B8AA",
  tan: "#CCAD9E",
  greyBrown: "#726758",
} as const;

/**
 * Live "Book Appointment" button: 227x50, copper pill, EB Garamond 18px
 * white label (0.9px tracking) + 26px white arrow circle, padding 0 10px 0 22px.
 */
function BookButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="/contact"
      className={`inline-flex h-[50px] w-[227px] items-center justify-between rounded-[50px] bg-[#9F6449] pl-[22px] pr-[10px] font-display text-[18px] tracking-[0.9px] text-white transition-opacity hover:opacity-90 ${className}`}
    >
      <span>Book Appointment</span>
      <ButtonArrowIcon className="h-[26px] w-[26px] flex-none" />
    </a>
  );
}

/*
 * Hero collage — exact live geometry at 1440px: 569x574 box, three 191px
 * rows; corner radii 134px (Wix 119px scaled) and full pills.
 * All offsets converted to percentages so the collage scales below lg.
 */
const RADIUS = "clamp(80px, 9.3vw, 134px)"; // live 133.6px circular at 1440

type HeroCollageProps = {
  title?: string;
  paragraph?: string;
  leadImage?: string;
  leadImageAlt?: string;
  sectionHeight?: number;
  textMarginTop?: number;
  collageMarginTop?: number;
};

export function InvisilignHeroMosaic({
  title = "The Clear Choice for a Confident Smile",
  paragraph = "Invisalign is a modern, discreet orthodontic solution that uses clear, removable aligners to gently and comfortably straighten your teeth. Invisalign offers a virtually invisible way to achieve the smile you’ve always wanted — without compromising your confidence or lifestyle.",
  leadImage = IMAGES.consultation,
  leadImageAlt = "Invisalign Consultation",
  sectionHeight = 830,
  textMarginTop = 205,
  collageMarginTop = 135,
}: HeroCollageProps) {
  return (
    <section className="bg-[#F4EAE6]">
      <div
        className="mx-auto grid max-w-[1425px] grid-cols-1 items-start gap-10 px-[25px] py-14 lg:h-[var(--hero-h)] lg:grid-cols-[557px_569px] lg:justify-between lg:gap-[71px] lg:px-[114px] lg:py-0"
        style={
          {
            "--hero-h": `${sectionHeight}px`,
            "--hero-text-mt": `${textMarginTop}px`,
            "--hero-collage-mt": `${collageMarginTop}px`,
          } as React.CSSProperties
        }
      >
        {/* Left — copy */}
        <div data-float-in="up" className="lg:mt-[var(--hero-text-mt)] lg:w-[557px]">
          <h1 className="font-display text-[40px] font-normal leading-[1.1] text-black sm:text-[52px] lg:text-[63px]">
            {title}
          </h1>

          <span
            aria-hidden="true"
            className="mt-[21px] block h-[2px] w-[223px] bg-[#9F6449]"
          />

          <p className="mt-[34px] text-justify font-display text-[19px] leading-[1.29] text-black lg:text-[24px]">
            {paragraph}
          </p>

          <BookButton className="mt-[22px]" />
        </div>

        {/* Right — collage (569x574 live box) */}
        <div className="relative mx-auto aspect-[569/574] w-full max-w-[569px] lg:mt-[var(--hero-collage-mt)] lg:w-[569px]">
          {/* Row 1 — consultation photo (rounded TL + BR) */}
          <div
            className="absolute overflow-hidden"
            style={{
              left: 0,
              top: 0,
              width: "44.99%",
              height: "33.28%",
              borderRadius: `${RADIUS} 0 ${RADIUS} 0`,
            }}
          >
            <img
              src={leadImage}
              alt={leadImageAlt}
              className="h-full w-full object-cover"
              width={512}
              height={382}
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>

          {/* Row 1 — tan blob (rounded BL) */}
          <div
            className="absolute"
            style={{
              left: "44.99%",
              top: 0,
              right: 0,
              height: "33.28%",
              backgroundColor: COLORS.tan,
              borderRadius: `0 0 0 ${RADIUS}`,
            }}
          />

          {/* Row 2 — dark pill (rounded right end) */}
          <div
            className="absolute"
            style={{
              left: 0,
              top: "33.28%",
              width: "65.03%",
              height: "33.28%",
              backgroundColor: COLORS.dark,
              borderRadius: "0 999px 999px 0",
            }}
          />

          {/* Row 2 — circular studio portrait */}
          <div
            className="absolute overflow-hidden rounded-full"
            style={{
              left: "65.03%",
              top: "33.28%",
              width: "34.97%",
              height: "33.28%",
              backgroundColor: COLORS.pink,
            }}
          >
            <img
              src={IMAGES.portrait}
              alt="Studio Portrait"
              className="h-full w-full object-cover"
              width={398}
              height={382}
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Row 3 — patient photo (rounded BL) */}
          <div
            className="absolute overflow-hidden"
            style={{
              left: 0,
              top: "66.72%",
              width: "35.15%",
              height: "33.28%",
              borderRadius: `0 0 0 ${RADIUS}`,
            }}
          >
            <img
              src={IMAGES.patient}
              alt=""
              className="h-full w-full object-cover"
              width={400}
              height={382}
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Row 3 — taupe pill (rounded right end) */}
          <div
            className="absolute"
            style={{
              left: "34.97%",
              top: "66.72%",
              right: 0,
              height: "33.28%",
              backgroundColor: COLORS.greyBrown,
              borderRadius: "0 999px 999px 0",
            }}
          />

          {/* Row 3 — copper + dark stripes over the pill */}
          <div
            className="absolute"
            style={{
              left: "34.97%",
              top: "66.72%",
              width: "12.83%",
              height: "33.28%",
              backgroundColor: COLORS.copper,
            }}
          />
          <div
            className="absolute"
            style={{
              left: "47.98%",
              top: "66.72%",
              width: "12.83%",
              height: "33.28%",
              backgroundColor: COLORS.dark,
            }}
          />
        </div>
      </div>
    </section>
  );
}

export { BookButton, COLORS as INVISILIGN_COLORS };
