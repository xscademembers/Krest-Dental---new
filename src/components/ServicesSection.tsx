import { ArrowRightIcon } from "@/components/icons";
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
        <div className="mx-auto mb-14 max-w-[920px] text-center lg:mb-20">
          <h2 className="text-krest-display-xl">
            Signature Services
          </h2>
          <p className="text-krest-body-lg mt-6 text-copper">
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
    <article className="grid grid-cols-1 items-center gap-6 rounded-[28px] border border-copper/35 bg-white/40 px-6 py-8 sm:px-10 sm:py-10 lg:grid-cols-[280px_1px_1fr] lg:gap-10 lg:px-14 lg:py-14">
      <div className="relative mx-auto flex aspect-square w-[200px] items-center justify-center sm:w-[240px] lg:w-[260px]">
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#EFD9D0]"
        />
        <img
          src={service.image}
          alt={`${service.title} illustration`}
          width={260}
          height={260}
          className="relative h-[78%] w-auto object-contain"
          loading="lazy"
          decoding="async"
          sizes="(max-width: 640px) 200px, (max-width: 1024px) 240px, 260px"
        />
      </div>

      <div
        aria-hidden="true"
        className="hidden h-full w-px self-stretch bg-[repeating-linear-gradient(to_bottom,theme(colors.copper)_0_4px,transparent_4px_10px)] opacity-50 lg:block"
      />

      <div className="text-center lg:text-left">
        <h3 className="text-krest-section-title">
          {service.title}
        </h3>
        <p className="text-krest-body-md mt-4">
          {service.description}
        </p>
        <a
          href={service.link}
          className="mt-6 inline-flex h-[40px] items-center gap-3 rounded-full bg-copper pl-5 pr-2 font-display text-[14px] tracking-wide text-white transition-all duration-300 hover:bg-copper/90"
        >
          <span>Know More</span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
            <ArrowRightIcon className="h-3 w-3 -rotate-180" />
          </span>
        </a>
      </div>
    </article>
  );
}
