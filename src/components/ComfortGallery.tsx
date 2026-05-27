"use client";

import { GALLERY } from "@/lib/krest-content";

export function ComfortGallery() {
  const sliderImages = [...GALLERY, ...GALLERY];

  return (
    <section
      aria-label="Krest Dental — interiors and amenities"
      className="bg-white py-16 lg:py-24"
    >
      <div className="krest-site">
        <div className="mb-12 text-center lg:mb-14">
          <p className="font-display text-[42px] font-normal leading-[1.05] tracking-[-0.02em] text-copper sm:text-[58px] lg:text-[70px]">
            Redefining Comfort and Care
          </p>
          <p className="mt-1 font-display text-[38px] font-normal italic leading-[1.05] tracking-[-0.02em] text-copper sm:text-[52px] lg:text-[64px]">
            — Only at Krest Dental
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="flex w-max animate-[comfort-gallery-scroll_70s_linear_infinite] hover:[animation-play-state:paused]">
            {sliderImages.map((image, idx) => (
              <div
                key={`${image.src}-${idx}`}
                className="h-[260px] w-[86vw] shrink-0 border-r-4 border-white sm:h-[300px] sm:w-[56vw] lg:h-[340px] lg:w-[33.333vw] xl:h-[360px]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                  width={520}
                  height={360}
                  loading={idx < 3 ? "eager" : "lazy"}
                  decoding="async"
                  fetchPriority={idx === 0 ? "high" : undefined}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes comfort-gallery-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
