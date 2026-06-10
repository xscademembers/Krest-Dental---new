const IMAGES = {
  consultation: "/images/invisilign-old/invisalign-consultation.jpg",
  portrait: "/images/invisilign-old/studio-portrait.jpg",
  patient: "/images/invisilign-old/getty-man.jpg",
} as const;

/** Exact Wix palette from krest.dental/invisilign computed styles */
const COLORS = {
  cream: "#f4eae6",
  copper: "#9f6449",
  ink: "#000000",
  dark: "#4c453b",
  darkStrip: "#3d3833",
  pink: "#f5b8aa",
  tan: "#ccad9e",
  greyBrown: "#726758",
} as const;

const R = "clamp(72px, 8.5vw, 120px)";

function BookButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="/contact"
      className={`inline-flex h-[50px] min-w-[227px] items-center gap-3 rounded-full pl-6 pr-1.5 font-display text-[15px] text-white transition-opacity hover:opacity-90 ${className}`}
      style={{ backgroundColor: COLORS.copper }}
    >
      <span>Book Appointment</span>
      <span
        className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-white"
        style={{ color: COLORS.copper }}
      >
        <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </a>
  );
}

export function InvisilignHeroMosaic() {
  return (
    <section
      className="krest-site grid min-h-[min(92vh,900px)] items-center gap-10 px-[25px] py-14 lg:grid-cols-[1fr_1fr] lg:gap-14 lg:py-20"
      style={{ backgroundColor: COLORS.cream }}
    >
      {/* Left — copy (matches live typography) */}
      <div className="max-w-[640px] lg:pr-6">
        <h1
          className="font-display text-[43px] font-normal leading-[1.1] sm:text-[56px] lg:text-[83px]"
          style={{ color: COLORS.ink }}
        >
          The Clear Choice for a Confident Smile
        </h1>

        <span
          aria-hidden="true"
          className="mt-6 block h-[2px] w-[40%] max-w-[280px]"
          style={{ backgroundColor: COLORS.copper }}
        />

        <p
          className="mt-6 font-display text-[18px] leading-[1.6] sm:text-[22px] lg:text-[24px]"
          style={{ textAlign: "justify", color: COLORS.ink }}
        >
          Invisalign is a modern, discreet orthodontic solution that uses clear, removable
          aligners to gently and comfortably straighten your teeth. Invisalign offers a
          virtually invisible way to achieve the smile you&apos;ve always wanted — without
          compromising your confidence or lifestyle.
        </p>

        <BookButton className="mt-8" />
      </div>

      {/*
        Right — mosaic grid (live Wix layout)
        4 cols × 3 rows with cream gutters between every block
      */}
      <div
        className="mx-auto grid w-full max-w-[560px] gap-[12px] lg:max-w-[620px]"
        style={{
          gridTemplateColumns: "2.05fr 0.26fr 0.26fr 1.55fr",
          gridTemplateRows: "1.42fr 0.82fr 1.58fr",
          aspectRatio: "1 / 0.96",
        }}
      >
        {/* Top-left — consultation (rounded TL + BR) */}
        <div
          className="overflow-hidden"
          style={{
            gridColumn: "1",
            gridRow: "1",
            borderRadius: `${R} 0 ${R} 0`,
          }}
        >
          <img
            src={IMAGES.consultation}
            alt="Invisalign Consultation"
            className="h-full w-full object-cover grayscale"
            width={900}
            height={900}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>

        {/* Top-right — tan block (rounded BL only) */}
        <div
          style={{
            gridColumn: "2 / 5",
            gridRow: "1",
            backgroundColor: COLORS.tan,
            borderRadius: `0 0 0 ${R}`,
          }}
        />

        {/* Middle-left — dark pill (rounded right end) */}
        <div
          style={{
            gridColumn: "1 / 4",
            gridRow: "2",
            backgroundColor: COLORS.dark,
            borderRadius: `0 999px 999px 0`,
          }}
        />

        {/* Middle-right — circular portrait */}
        <div
          className="overflow-hidden rounded-full"
          style={{
            gridColumn: "4",
            gridRow: "2",
            backgroundColor: COLORS.pink,
            alignSelf: "center",
            justifySelf: "end",
            width: "100%",
            maxWidth: "100%",
            aspectRatio: "1",
          }}
        >
          <img
            src={IMAGES.portrait}
            alt="Studio Portrait"
            className="h-full w-full object-cover grayscale"
            width={900}
            height={900}
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Bottom-left — patient (rounded BL) */}
        <div
          className="overflow-hidden"
          style={{
            gridColumn: "1",
            gridRow: "3",
            borderRadius: `0 0 0 ${R}`,
          }}
        >
          <img
            src={IMAGES.patient}
            alt="Invisalign patient"
            className="h-full w-full object-cover object-[center_20%] grayscale"
            width={900}
            height={900}
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Bottom — terracotta strip */}
        <div
          style={{
            gridColumn: "2",
            gridRow: "3",
            backgroundColor: COLORS.copper,
          }}
        />

        {/* Bottom — dark strip */}
        <div
          style={{
            gridColumn: "3",
            gridRow: "3",
            backgroundColor: COLORS.darkStrip,
          }}
        />

        {/* Bottom-right — taupe pill (rounded right end) */}
        <div
          style={{
            gridColumn: "4",
            gridRow: "3",
            backgroundColor: COLORS.greyBrown,
            borderRadius: `0 999px 999px 0`,
          }}
        />
      </div>
    </section>
  );
}

export { BookButton, COLORS as INVISILIGN_COLORS };
