"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import { GALLERY } from "@/lib/krest-content";

export function ComfortGallery() {
  const [active, setActive] = useState(0);
  const total = GALLERY.length;
  const go = (direction: -1 | 1) =>
    setActive((current) => (current + direction + total) % total);

  return (
    <section
      aria-label="Krest Dental — interiors and amenities"
      className="py-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-[25px]">
        <div className="mb-12 text-center">
          <p className="font-accent text-[18px] tracking-wide text-copper sm:text-[20px]">
            Redefining Comfort and Care
          </p>
          <p className="mt-1 font-display text-[26px] italic text-taupe sm:text-[30px] lg:text-[34px]">
            — Only at Krest Dental
          </p>
        </div>

        <div className="relative">
          <div className="relative mx-auto aspect-[16/9] w-full max-w-[1100px] overflow-hidden rounded-[8px]">
            {GALLERY.map((image, idx) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  idx === active ? "opacity-100" : "opacity-0"
                }`}
                width={1100}
                height={619}
                loading={idx === 0 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={idx === 0 ? "high" : undefined}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 text-copper shadow transition-colors hover:bg-copper hover:text-white"
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 text-copper shadow transition-colors hover:bg-copper hover:text-white"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {GALLERY.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActive(idx)}
              aria-label={`Show photo ${idx + 1}`}
              className={`h-1.5 w-8 rounded-full transition-colors ${
                idx === active ? "bg-copper" : "bg-copper/25 hover:bg-copper/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
