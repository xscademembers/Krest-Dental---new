import { CopperArrowButton } from "@/components/CopperArrowButton";
import { SERVICES } from "@/lib/krest-content";
import type { Service } from "@/types/krest";

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-label="Signature services"
      className="bg-white py-20 lg:py-28"
    >
      <div className="krest-site">
        <div className="mx-auto mb-14 max-w-[822px] text-center lg:mb-20">
          <h2 className="font-display text-[64px] font-normal leading-[1.1] text-copper">
            Signature Services
          </h2>
          <p className="mt-6 font-display text-[20px] font-normal leading-[1.3] text-[#A67B5B] text-justify">
            At Krest Dental, your well-being is our highest priority. We design
            personalized care plans tailored to each individual&apos;s needs and goals.
            Our team of skilled professionals ensures your comfort and safety at every
            step, providing reliable, compassionate support and world-class expertise.
            So you feel confident and cared for, always.
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:gap-12">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="mx-auto grid w-full max-w-[851px] min-h-[341px] grid-cols-1 items-center gap-6 rounded-[40px] border border-copper bg-white p-0 py-8 lg:grid-cols-[0.6fr_1px_1.4fr] lg:gap-x-[10px] lg:gap-y-0 lg:py-0 overflow-hidden">
      <div className="relative mx-auto flex h-[180px] w-[180px] min-h-[180px] min-w-[180px] shrink-0 items-center justify-center rounded-full bg-[#E8DED8] aspect-square">
        <img
          src={service.image}
          alt={`${service.title} illustration`}
          width={125}
          height={125}
          className="relative z-10 h-[125px] w-[125px] object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div
        aria-hidden="true"
        className="hidden h-full w-px self-stretch bg-[repeating-linear-gradient(to_bottom,theme(colors.copper)_0_2px,transparent_2px_6px)] opacity-60 lg:block"
      />

      <div className="text-center lg:text-left px-6 lg:pr-12 lg:pl-6 py-6">
        <h3 className="font-display text-[40px] font-normal leading-[1.1] text-copper">
          {service.title}
        </h3>
        <p className="mt-[15px] font-display text-[18px] font-normal leading-[1.3] text-[#333333] text-justify max-w-2xl mx-auto lg:mx-0">
          {service.description}
        </p>
        <CopperArrowButton href={service.link} className="mt-[25px]">
          Know More
        </CopperArrowButton>
      </div>
    </article>
  );
}

