import type { SVGProps } from "react";
import {
  SiteCardBand,
  SiteContainer,
  SiteProse,
} from "@/components/SiteContainer";
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
            <h1 id="our-services-heading" className="text-krest-page-title">
              {title}
            </h1>
            <p className="text-krest-body mt-6">{intro}</p>
          </SiteProse>
        </SiteContainer>

        <SiteContainer variant="cards" className="mt-12 lg:mt-14">
          <ul className="flex flex-col gap-10 lg:gap-12">
            {categories.map((category, index) => (
              <li key={category.id}>
                <SiteCardBand>
                  <article className="rounded-[40px] bg-white px-8 py-10 shadow-[0_6px_28px_-10px_rgba(0,0,0,0.1)] sm:px-10 sm:py-12 lg:px-12 lg:py-14">
                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(100px,140px)_minmax(0,1fr)_minmax(240px,320px)] lg:gap-x-12 xl:gap-x-16">
                      <div className="flex justify-center lg:justify-start">
                        <img
                          src={category.image}
                          alt={category.imageAlt}
                          width={140}
                          height={140}
                          className="h-auto w-full max-w-[130px] object-contain lg:max-w-[140px]"
                          loading={index < 2 ? "eager" : "lazy"}
                          decoding="async"
                        />
                      </div>

                      <div className="min-w-0 text-center lg:text-left">
                        <h2 className="text-krest-section-title">
                          {category.title}
                        </h2>
                        <p className="text-krest-body mt-4">
                          {category.description}
                        </p>
                        <div className="mt-7 flex justify-center lg:justify-start">
                          <BookAppointmentButton />
                        </div>
                      </div>

                      <ul className="text-krest-list list-disc space-y-2.5 pl-5 marker:text-copper lg:pl-6">
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

      <section
        aria-labelledby="our-services-cta-heading"
        className="bg-[#F4EAE6] pb-20 lg:pb-28"
      >
        <SiteContainer variant="cards">
          <SiteCardBand>
            <div className="relative min-h-[420px] overflow-hidden rounded-[40px] sm:min-h-[480px] lg:min-h-[560px]">
              <img
                src={cta.image}
                alt={cta.imageAlt}
                width={1400}
                height={980}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-black/5"
              />
              <div className="relative flex min-h-[inherit] items-center justify-center px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
                <div className="w-full max-w-[673px] rounded-[28px] bg-[#FFFFFF] px-8 py-11 text-center shadow-[0_12px_44px_rgba(0,0,0,0.14)] sm:px-10 sm:py-12 lg:rounded-[32px] lg:px-12 lg:py-14">
                  <h2
                    id="our-services-cta-heading"
                    className="text-krest-display-sm text-copper"
                  >
                    {cta.heading}
                  </h2>
                  <p className="text-krest-body-md mx-auto mt-5 max-w-[540px] text-copper">
                    {cta.text}
                  </p>
                  <div className="mt-8 flex justify-center">
                    <BookAppointmentButton />
                  </div>
                </div>
              </div>
            </div>
          </SiteCardBand>
        </SiteContainer>
      </section>
    </>
  );
}
