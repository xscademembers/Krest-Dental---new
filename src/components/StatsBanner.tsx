import { STATS } from "@/lib/krest-content";

type Stat = { value: string; label: string };

type StatsBannerProps = {
  /** "default" = landing page look, "light" = white centered theme (contact page) */
  variant?: "default" | "light";
  headingLines?: string[];
  stats?: Stat[];
  sectionBg?: string;
  cardBg?: string;
};

const LIGHT_HEADING = ["Creating Beautiful Smiles,", "One Patient at a Time."];

const LIGHT_STATS: Stat[] = [
  { value: "5,000+", label: "Happy Patients" },
  { value: "20+", label: "Years of Experience" },
  { value: "25000+", label: "Successful Procedures" },
  { value: "10+", label: "Expert Doctors" },
];

export function StatsBanner({
  variant = "default",
  headingLines,
  stats,
  sectionBg,
  cardBg,
}: StatsBannerProps) {
  const light = variant === "light";
  const lines = headingLines ?? (light ? LIGHT_HEADING : null);
  const items = stats ?? (light ? LIGHT_STATS : STATS);

  const activeSectionBg = sectionBg ?? "bg-white";
  const activeCardBg = cardBg ?? "bg-[#F4EAE6]";

  return (
    <section
      aria-label="Krest Dental — by the numbers"
      className={`${activeSectionBg} py-16 lg:py-24`}
    >
      <div className="krest-site">
        {light ? (
          <h2 className="mx-auto max-w-[820px] text-center font-display text-[34px] font-normal leading-[1.3] text-copper sm:text-[44px] lg:text-[52px]">
            {(lines ?? LIGHT_HEADING).map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        ) : (
          <h2 className="text-[32px] sm:text-[44px] lg:text-[50px] leading-[1.2] text-copper text-center">
            Crafting world-class smiles with Precision and Artistry.
          </h2>
        )}

        <ul
          className={
            light
              ? "mx-auto mt-12 grid max-w-[1100px] grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-7"
              : "mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6"
          }
        >
          {items.map((stat) => (
            <li
              key={stat.label}
              className={`${light
                  ? "rounded-[20px]"
                  : "rounded-[28px]"
                } w-full max-w-[285px] h-[199px] mx-auto flex flex-col justify-center px-8 ${activeCardBg}`}
            >
              <p className="text-krest-stat-value">
                {stat.value}
              </p>
              <span
                aria-hidden="true"
                className="mt-4 block h-px w-full bg-ink/80"
              />
              <p className="text-krest-caption mt-5 tracking-wide">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center lg:mt-14">
          <a
            href="/about-us"
            className={
              light
                ? "inline-flex h-10 items-center justify-center rounded-full bg-copper px-6 font-body text-[13px] text-white transition-opacity hover:opacity-90"
                : "inline-flex h-11 items-center justify-center rounded-full border border-copper bg-white px-7 font-display text-[14px] italic text-copper transition-colors hover:bg-copper hover:text-white"
            }
          >
            Our Story
          </a>
        </div>
      </div>
    </section>
  );
}
