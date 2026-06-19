import type { SVGProps } from "react";
import {
  SiteCardBand,
  SiteContainer,
  SiteProse,
} from "@/components/SiteContainer";
import { ButtonArrowCircle } from "@/components/DrSuneetaDecorations";
import { OUR_SERVICES_PAGE } from "@/lib/krest-content";

function BookArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}

function BookAppointmentButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="/contact"
      className={`inline-flex h-11 shrink-0 items-center gap-3 rounded-full bg-copper pl-5 pr-1.5 font-display text-[14px] tracking-wide text-white transition-all duration-200 hover:bg-copper/90 ${className}`}
    >
      <span>Book Appointment</span>
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-copper">
        <BookArrow className="h-3 w-3" />
      </span>
    </a>
  );
}

export function OurServicesPage() {
  const { title, intro, categories, cta } = OUR_SERVICES_PAGE;

  return (
    <>
      <section
        aria-labelledby="our-services-heading"
        className="bg-[#F4EAE6] pb-20 pt-14 lg:pb-28 lg:pt-20"
      >
        <SiteContainer className="text-center">
          <SiteProse>
            <h1 id="our-services-heading" className="font-display text-[69px] font-normal leading-[1.4] text-[#A67B5B] text-center">
              {title}
            </h1>
            <p className="mt-6 font-sans text-[18px] font-normal leading-[1.6] text-black text-justify">{intro}</p>
          </SiteProse>
        </SiteContainer>

        <SiteContainer variant="cards" className="mt-12 lg:mt-14">
          <ul className="flex flex-col gap-10 lg:gap-12">
            {categories.map((category, index) => (
              <li key={category.id}>
                <SiteCardBand>
                  <article className="rounded-[40px] bg-white pt-[70px] pb-[80px] pl-[40px] pr-[25px] shadow-[0_6px_28px_-10px_rgba(0,0,0,0.1)] lg:min-h-[376px]">
                    <div className="mx-auto grid w-full max-w-[1000px] grid-cols-1 items-center lg:grid-cols-[0.5fr_1.2fr_1.1fr] gap-10 lg:gap-x-12 xl:gap-x-16">
                      <div className="flex justify-center lg:justify-start">
                        <div className={`flex shrink-0 items-center justify-center rounded-full bg-[#F0E8E4] aspect-square ${category.id === "invisalign" ? "h-[200px] w-[200px] min-h-[200px] min-w-[200px]" : "h-[180px] w-[180px] min-h-[180px] min-w-[180px]"}`}>
                          <img
                            src={category.image}
                            alt={category.imageAlt}
                            width={category.id === "invisalign" ? 200 : 120}
                            height={category.id === "invisalign" ? 200 : 120}
                            className={category.id === "invisalign" ? "h-[200px] w-[200px] object-contain" : "h-[120px] w-[120px] object-contain"}
                            style={
                              category.id === "invisalign"
                                ? {
                                    filter:
                                      "brightness(0) saturate(100%) invert(44%) sepia(26%) saturate(1039%) hue-rotate(336deg) brightness(89%) contrast(90%)",
                                  }
                                : undefined
                            }
                            loading={index < 2 ? "eager" : "lazy"}
                            decoding="async"
                          />
                        </div>
                      </div>

                      <div className="min-w-0 text-center lg:text-left">
                        <h2 className="font-display text-[44px] font-normal leading-[0.9] text-[#A67B5B]">
                          {category.title}
                        </h2>
                        <p className="mt-4 font-display text-[20px] font-normal leading-[1.5] text-[#6F6356] text-justify">
                          {category.description}
                        </p>
                        <div className="mt-7 flex justify-center lg:justify-start">
                          <BookAppointmentButton />
                        </div>
                      </div>

                      <ul className="font-display text-[21px] text-[#6F6356] list-disc space-y-2.5 pl-5 marker:text-copper lg:pl-6">
                        {category.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </SiteCardBand>
              </li>
            ))}
          </ul>
        </SiteContainer>
      </section>

      {/* Live: white section, 1340x499 photo (radius 30) with a centered
          673x345 cream card floating over it — card has Wix Float entrance */}
      <section
        aria-labelledby="our-services-cta-heading"
        className="bg-white px-0 py-[60px]"
      >
        <div className="mx-auto w-full max-w-[1425px] px-[25px] lg:px-[42px]">
          <div className="relative flex items-center justify-center overflow-hidden rounded-[30px] px-4 py-12 sm:px-8 sm:py-16 lg:h-[499px] lg:py-0">
            <img
              src={cta.image}
              alt={cta.imageAlt}
              width={1340}
              height={499}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            {/* Live: 673x345 card, bg #F4EAE6, radius 30, centered on the photo */}
            <div
              data-float-in="up"
              className="relative w-full max-w-[673px] rounded-[30px] bg-[#F4EAE6] px-6 pb-[28px] pt-[28px] text-center sm:px-[27px] lg:min-h-[345px]"
            >
              {/* Live: EB Garamond 47.25px copper, lh 1.1 */}
              <h2
                id="our-services-cta-heading"
                className="mx-auto max-w-[619px] font-display text-[30px] font-normal leading-[1.1] text-copper sm:text-[38px] lg:text-[47.25px]"
              >
                {cta.heading}
              </h2>
              {/* Live: 20px rgb(111,99,86), lh 1.3, width 496 */}
              <p className="mx-auto mt-[28px] max-w-[496px] font-display text-[17px] leading-[1.3] text-[#6F6356] sm:text-[18px] lg:text-[20px] text-justify">
                {cta.text}
              </p>
              {/* Live: 227x50 copper pill, EB Garamond 18px white + 26px arrow circle */}
              <a
                href="/contact"
                className="mt-[29px] inline-flex h-[50px] w-[227px] items-center rounded-[50px] bg-copper pl-[22px] text-left transition-colors hover:bg-copper/90"
              >
                <span className="font-display text-[18px] leading-[1.4] text-white">
                  Book Appointment
                </span>
                <ButtonArrowCircle className="ml-[19px] h-[26px] w-[26px]" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
