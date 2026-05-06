import Image from "next/image";
import { HERO } from "@/lib/krest-content";

export function DoctorQuote() {
  return (
    <section
      aria-label="Doctor's note"
      className="relative overflow-hidden py-16 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 lg:px-12">
        <div className="relative mx-auto aspect-[7/8] w-full max-w-[360px] overflow-hidden">
          <Image
            src={HERO.doctorPortrait}
            alt="Portrait of Dr. Suneeta Veeramachaneni"
            fill
            sizes="(max-width: 1024px) 80vw, 360px"
            className="object-cover"
          />
        </div>
        <figure className="text-center lg:text-left">
          <blockquote className="relative font-display italic text-taupe">
            <p className="text-[24px] leading-[1.4] sm:text-[28px] lg:text-[32px] lg:leading-[1.35]">
              &ldquo;{HERO.quote}&rdquo;
            </p>
          </blockquote>
          <figcaption className="mt-8">
            <Image
              src={HERO.signature}
              alt="Dr. Suneeta signature"
              width={211}
              height={82}
              className="mx-auto h-auto w-[180px] lg:mx-0"
            />
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
