import { STATS } from "@/lib/krest-content";

export function StatsBanner() {
  return (
    <section
      aria-label="Krest Dental — by the numbers"
      className="bg-white py-16 lg:py-24"
    >
      <div className="krest-site">
        <h2 className="text-center font-display text-[34px] font-normal leading-[1.15] tracking-[-0.01em] text-copper sm:text-[44px] lg:text-left lg:text-[52px]">
          Crafting world-class smiles with Precision and Artistry.
        </h2>

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          {STATS.map((stat) => (
            <li
              key={stat.label}
              className="rounded-[28px] bg-[#F4EAE6] px-7 py-9 lg:px-8 lg:py-10"
            >
              <p className="font-display text-[36px] font-normal leading-none tracking-tight text-ink sm:text-[40px] lg:text-[44px]">
                {stat.value}
              </p>
              <span
                aria-hidden="true"
                className="mt-4 block h-px w-full bg-ink/80"
              />
              <p className="mt-5 font-display text-[14px] tracking-wide text-taupe sm:text-[15px]">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center lg:mt-14">
          <a
            href="/about-us"
            className="inline-flex h-11 items-center justify-center rounded-full border border-copper bg-white px-7 font-display text-[14px] italic text-copper transition-colors hover:bg-copper hover:text-white"
          >
            Our Story
          </a>
        </div>
      </div>
    </section>
  );
}
