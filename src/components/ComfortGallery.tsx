"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import { GALLERY } from "@/lib/krest-content";

const DESKTOP_VISIBLE = 3;

function wrapIndex(index: number, length: number) {
  return ((index % length) + length) % length;
}

function visibleSlides(start: number, count: number) {
  return Array.from({ length: count }, (_, offset) => GALLERY[wrapIndex(start + offset, GALLERY.length)]);
}

export function ComfortGallery() {
  const [index, setIndex] = useState(0);

  const go = (direction: -1 | 1) => {
    setIndex((current) => wrapIndex(current + direction, GALLERY.length));
  };

  const desktopSlides = visibleSlides(index, DESKTOP_VISIBLE);
  const mobileSlide = GALLERY[index];

  return (
    <section
      aria-label="Krest Dental — interiors and amenities"
      className="bg-white py-20 lg:py-28"
    >
      <div className="krest-site">
        <header className="text-center">
          <p className="text-krest-display-lg">
            Redefining Comfort and Care
          </p>
          <p className="text-krest-display-lg">
            — Only at Krest Dental
          </p>
        </header>
      </div>

      <div className="relative mt-14 lg:mt-16">
        <div className="krest-site">
          <div className="relative">
            <div className="grid grid-cols-3 gap-[3px] max-sm:hidden">
              {desktopSlides.map((image, slideIndex) => (
                <div key={`${image.src}-${slideIndex}`} className="h-[280px] sm:h-[320px] lg:h-[352px]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                    width={425}
                    height={352}
                    loading={slideIndex === 0 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={slideIndex === 0 && index === 0 ? "high" : undefined}
                  />
                </div>
              ))}
            </div>

            <div className="h-[280px] sm:hidden">
              <img
                src={mobileSlide.src}
                alt={mobileSlide.alt}
                className="h-full w-full object-cover"
                width={425}
                height={352}
                loading="eager"
                decoding="async"
              />
            </div>

            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous Item"
              className="absolute left-0 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center bg-white/60 text-ink opacity-90 transition-opacity hover:opacity-100"
            >
              <ChevronLeftIcon className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next Item"
              className="absolute right-0 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center bg-white/60 text-ink opacity-90 transition-opacity hover:opacity-100"
            >
              <ChevronRightIcon className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
