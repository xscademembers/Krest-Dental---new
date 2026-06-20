import {
  SiteCardBand,
  SiteContainer,
  SiteProse,
} from "@/components/SiteContainer";
import { CopperArrowButton } from "@/components/CopperArrowButton";
import { OUR_SERVICES_PAGE } from "@/lib/krest-content";

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
            <h1
              id="our-services-heading"
              className="font-display text-[34px] font-normal leading-[1.4] tracking-normal text-[#A67B5B] text-center lg:text-[69px]"
            >
              {title}
            </h1>
            <p className="mt-6 font-body text-[18px] font-normal leading-[1.6] tracking-normal text-black text-justify">
              {intro}
            </p>
          </SiteProse>
        </SiteContainer>

        <SiteContainer variant="cards" className="mt-12 lg:mt-14">
          <ul className="flex flex-col gap-10 lg:gap-12">
            {categories.map((category, index) => (
              <li key={category.id}>
                <SiteCardBand>
                  <article className="rounded-[40px] bg-white px-6 pb-12 pt-12 shadow-[0_6px_28px_-10px_rgba(0,0,0,0.1)] max-lg:px-5 lg:min-h-[376px] lg:pb-[80px] lg:pl-[40px] lg:pr-[25px] lg:pt-[70px]">
                    <div className="mx-auto grid w-full max-w-[1000px] grid-cols-1 items-center gap-8 lg:grid-cols-[0.5fr_1.2fr_1.1fr] lg:gap-10 lg:gap-x-12 xl:gap-x-16">
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
                        <h2 className="font-display text-[33px] font-normal leading-[0.9] tracking-normal text-[#A67B5B] max-lg:text-center lg:text-[44px]">
                          {category.title}
                        </h2>
                        <p className="mt-4 font-display text-[18px] font-normal leading-[1.5] tracking-normal text-[#6F6356] text-center max-lg:text-center lg:text-[20px] lg:text-justify">
                          {category.description}
                        </p>
                        <div className="mt-7 flex justify-center lg:justify-start">
                          <CopperArrowButton href="/contact" variant="cta">
                            Book Appointment
                          </CopperArrowButton>
                        </div>
                      </div>

                      <ul className="mx-auto w-fit list-disc space-y-2.5 pl-5 font-display text-[18px] leading-[1.6] tracking-[-0.01em] text-[#6F6356] marker:text-copper max-lg:text-left lg:mx-0 lg:w-auto lg:pl-6 lg:text-[21px] lg:leading-normal lg:tracking-normal">
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
              <CopperArrowButton href="/contact" variant="cta" className="mt-[29px]">
                Book Appointment
              </CopperArrowButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
