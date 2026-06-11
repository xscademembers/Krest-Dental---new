"use client";

import { useMemo, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import { GALLERY } from "@/lib/krest-content";
import type { GalleryImage } from "@/types/krest";

const GALLERY_OUTER_HEIGHT_PX = 571;
const GALLERY_PADDING_BOTTOM_PX = 50;
const GALLERY_INNER_HEIGHT_PX =
  GALLERY_OUTER_HEIGHT_PX - GALLERY_PADDING_BOTTOM_PX;
const SLIDE_GAP_PX = 3;

type GallerySlide = GalleryImage & {
  displayWidth: number;
  displayHeight: number;
};

function slideWidth(image: GalleryImage, trackHeight: number) {
  if (!image.width || !image.height) return trackHeight;
  return Math.round(trackHeight * (image.width / image.height));
}

function buildSlides(trackHeight: number): GallerySlide[] {
  return GALLERY.map((image) => ({
    ...image,
    displayHeight: trackHeight,
    displayWidth: slideWidth(image, trackHeight),
  }));
}

function slideOffset(slides: GallerySlide[], index: number) {
  return slides
    .slice(0, index)
    .reduce((sum, slide) => sum + slide.displayWidth + SLIDE_GAP_PX, 0);
}

export function ComfortGallery() {
  const [index, setIndex] = useState(0);

  const desktopSlides = useMemo(
    () => buildSlides(GALLERY_INNER_HEIGHT_PX),
    [],
  );
  const mobileSlides = useMemo(() => buildSlides(280), []);

  const go = (direction: -1 | 1) => {
    setIndex((current) => {
      const next = current + direction;
      if (next < 0) return GALLERY.length - 1;
      if (next >= GALLERY.length) return 0;
      return next;
    });
  };

  const desktopOffset = slideOffset(desktopSlides, index);
  const mobileOffset = slideOffset(mobileSlides, index);

  return (
    <section
      aria-label="Krest Dental — interiors and amenities"
      className="bg-white pb-16 pt-20 lg:pb-20 lg:pt-28"
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

      <div className="krest-site mt-14 lg:mt-16">
        {/*
          Wix pro-gallery:
          - 1265×571 outer box, 16px side / 50px bottom padding
          - Fixed-height horizontal strip; each slide width = height × native aspect
          - No crop — images keep original landscape/portrait proportions
        */}
        <div className="pro-gallery mx-auto box-border w-full max-w-[1265px] pt-0 max-lg:pb-0 lg:h-[571px] lg:px-4 lg:pb-[50px]">
          <div className="relative w-full overflow-hidden max-lg:h-[280px] lg:h-[521px]">
            <div
              className="flex gap-[3px] transition-transform duration-500 ease-out will-change-transform max-lg:hidden"
              style={{
                height: `${GALLERY_INNER_HEIGHT_PX}px`,
                width: "max-content",
                transform: `translateX(-${desktopOffset}px)`,
              }}
            >
              {desktopSlides.map((image, slideIndex) => (
                <div
                  key={image.src}
                  className="shrink-0 bg-white"
                  style={{
                    width: `${image.displayWidth}px`,
                    height: `${image.displayHeight}px`,
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="block h-full w-full"
                    loading={slideIndex < 3 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={slideIndex === 0 ? "high" : undefined}
                    draggable={false}
                  />
                </div>
              ))}
            </div>

            <div
              className="flex gap-[3px] transition-transform duration-500 ease-out will-change-transform lg:hidden"
              style={{
                height: "280px",
                width: "max-content",
                transform: `translateX(-${mobileOffset}px)`,
              }}
            >
              {mobileSlides.map((image, slideIndex) => (
                <div
                  key={`${image.src}-mobile`}
                  className="shrink-0 bg-white"
                  style={{
                    width: `${image.displayWidth}px`,
                    height: `${image.displayHeight}px`,
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="block h-full w-full"
                    loading={slideIndex === 0 ? "eager" : "lazy"}
                    decoding="async"
                    draggable={false}
                  />
                </div>
              ))}
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
