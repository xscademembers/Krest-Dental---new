import { DrSuneetaHighlight } from "@/components/DrSuneetaHighlight";
import { DR_SUNEETA_NAME_WITH_CREDENTIAL, HERO } from "@/lib/krest-content";

export function DoctorQuote() {
  return (
    <section
      aria-label="Doctor's note"
      className="relative overflow-hidden py-16 lg:py-24"
    >
      <div className="krest-site grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <div className="relative mx-auto aspect-[7/8] w-full max-w-[360px] overflow-hidden">
          <img
            src={HERO.doctorPortrait}
            alt={`Portrait of ${DR_SUNEETA_NAME_WITH_CREDENTIAL}`}
            className="absolute inset-0 h-full w-full object-cover"
            width={360}
            height={420}
            loading="lazy"
            decoding="async"
          />
        </div>
        <figure className="text-left w-full max-w-[517px] mx-auto lg:mx-0">
          <blockquote className="relative font-display italic text-[#A67B5B]">
            <p className="text-[18px] lg:text-[22px] leading-[1.3]">
              &ldquo;{HERO.quote}&rdquo;
            </p>
          </blockquote>
          <figcaption className="mt-8 space-y-3">
            <DrSuneetaHighlight className="font-display text-[18px] text-copper" as="p" />
            <img
              src={HERO.signature}
              alt="Dr. Suneeta signature"
              width={186}
              height={72}
              className="h-[72px] w-[186px] object-contain opacity-100"
              loading="lazy"
              decoding="async"
            />
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
