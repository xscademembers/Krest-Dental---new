import { ButtonArrowCircle } from "@/components/DrSuneetaDecorations";

/**
 * Pixel-faithful clone of krest.dental/contact (measured at 1440px):
 * - Hero: blush #F4EAE6 band, text column at x=62, Google Map 679x719 on the right
 * - Headings: EB Garamond 36px / lh 1.0 / -0.02em / copper #9F6449
 * - Labels "Email. / Address. / Phone.": 20px bold copper; values 20px black lh 26px
 * - Book Appointment: 227x50 copper pill, 18px white label + 28px circle-arrow icon
 * - Stats band: white, 57px copper heading, 4 blush cards 285x199 r30, "Our Story" pill
 */

const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(
  "Krest Dental Care MVP Colony Visakhapatnam 530017",
)}&output=embed`;

const ADDRESS_LINES = [
  "KREST DENTAL CARE",
  "3rd Floor, Door No 2-48-21",
  "Opposite To Latte",
  "Sector 11, MVP Colony",
  "MVP Double Road",
  "Visakhapatnam -530017.",
];

const STATS = [
  { value: "5,000+", label: "Happy Patients" },
  { value: "20+", label: "Years of Experience" },
  { value: "25000+", label: "Successful Procedures" },
  { value: "10+", label: "Expert Doctors" },
];

function ContactHero() {
  return (
    <section aria-label="Discover the Krest difference" className="bg-[#F4EAE6]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12 px-[25px] pb-[60px] pt-[60px] lg:flex-row lg:gap-0 lg:px-0 lg:pb-[73px] lg:pt-[74px]">
        {/* Left: text column (live: x=62, headings start 26px below map top) */}
        <div className="lg:w-[610px] lg:shrink-0 lg:pl-[62px] lg:pt-[26px]">
          <h1 className="font-display text-[28px] font-normal leading-[1] tracking-[-0.02em] text-copper sm:text-[36px]">
            Discover the Krest difference.
          </h1>
          <p className="mt-[35px] max-w-[555px] font-display text-[28px] font-normal leading-[1] tracking-[-0.02em] text-copper sm:text-[36px]">
            Book your Consultation today and take the first step toward a healthier, more confident
            smile.
          </p>

          <div className="mt-[27px]">
            <p className="font-display text-[20px] font-bold leading-[26px] text-copper">Email.</p>
            <p className="font-display text-[20px] leading-[26px] text-black">
              krestdental@gmail.com
            </p>
          </div>

          <div className="mt-[26px]">
            <p className="font-display text-[20px] font-bold leading-[26px] text-copper">
              Address.
            </p>
            {ADDRESS_LINES.map((line) => (
              <p key={line} className="font-display text-[20px] leading-[26px] text-black">
                {line}
              </p>
            ))}
          </div>

          <div className="mt-[26px]">
            <p className="font-display text-[20px] font-bold leading-[26px] text-copper">Phone.</p>
            <p className="font-display text-[20px] leading-[26px] text-black">+91 95738 84525</p>
          </div>

          <div className="mt-[22px]">
            <a
              href="/contact"
              className="inline-flex h-[50px] w-[227px] items-center justify-between rounded-[50px] bg-copper pl-[22px] pr-[10px] transition-opacity hover:opacity-90"
            >
              <span className="font-display text-[18px] text-white">Book Appointment</span>
              <ButtonArrowCircle className="h-[28px] w-[28px] shrink-0" />
            </a>
          </div>
        </div>

        {/* Right: Google Map (live: 679x719, 55px gap from text column) */}
        <div className="lg:ml-auto lg:mr-[74px]">
          <iframe
            title="Krest Dental — map location"
            src={MAP_EMBED_URL}
            className="h-[420px] w-full border-0 sm:h-[560px] lg:h-[719px] lg:w-[679px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

function ContactStats() {
  return (
    <section aria-label="Krest Dental — by the numbers" className="bg-white">
      <div className="mx-auto max-w-[1440px] px-[25px] pb-[68px] pt-[84px]">
        <h2 className="mx-auto max-w-[640px] text-center font-display text-[36px] font-normal leading-[1.2] text-copper sm:text-[46px] lg:text-[57px]">
          Creating Beautiful Smiles,
          <br />
          One Patient at a Time.
        </h2>

        {/* Live: 4 cards 285x199 r30, 22px gaps, value 47.5px, 1px black rule, 18px label */}
        <ul className="mx-auto mt-[64px] grid max-w-[1206px] grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <li
              key={stat.label}
              className="h-[199px] rounded-[30px] bg-[#F4EAE6] px-[48px] pt-[38px]"
            >
              <p className="font-display text-[40px] leading-[1.1] text-black lg:text-[47.5px]">
                {stat.value}
              </p>
              <span aria-hidden="true" className="mt-[23px] block h-px w-full bg-black" />
              <p className="mt-[23px] font-display text-[18px] leading-[1.3] text-black">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-[63px] flex justify-center">
          <a
            href="/about-us"
            className="inline-flex h-[42px] w-[145px] items-center justify-center rounded-[50px] bg-copper font-body text-[14px] text-white transition-opacity hover:opacity-90"
          >
            Our Story
          </a>
        </div>
      </div>
    </section>
  );
}

export function ContactOldMain() {
  return (
    <main className="flex-1">
      <ContactHero />
      <ContactStats />
    </main>
  );
}
