"use client";

import { useMemo, useRef, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import { GALLERY } from "@/lib/krest-content";
import type { GalleryImage } from "@/types/krest";

const GALLERY_OUTER_HEIGHT_PX = 571;
const GALLERY_PADDING_BOTTOM_PX = 50;
const GALLERY_INNER_HEIGHT_PX =
  GALLERY_OUTER_HEIGHT_PX - GALLERY_PADDING_BOTTOM_PX;
const SLIDE_GAP_PX = 8;
const PIXELS_PER_SECOND = 50;

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

export function ComfortGallery() {
  const desktopSlides = useMemo(
    () => buildSlides(GALLERY_INNER_HEIGHT_PX),
    [],
  );
  const mobileSlides = useMemo(() => buildSlides(280), []);

  const desktopSetWidth = useMemo(
    () =>
      desktopSlides.reduce(
        (sum, slide) => sum + slide.displayWidth + SLIDE_GAP_PX,
        0,
      ),
    [desktopSlides],
  );

  const mobileSetWidth = useMemo(
    () =>
      mobileSlides.reduce(
        (sum, slide) => sum + slide.displayWidth + SLIDE_GAP_PX,
        0,
      ),
    [mobileSlides],
  );

  const desktopTrackRef = useRef<HTMLDivElement>(null);
  const mobileTrackRef = useRef<HTMLDivElement>(null);
  const mobileOffsetRef = useRef(0);
  const isHovered = useRef(false);
  const lastTime = useRef<number>(0);
  const isScrollingManually = useRef(false);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout>>(null);
  const prefersFineHover = useRef(false);

  // Render 3 sets so we can seamlessly loop forward and backward
  const tripledDesktop = [...desktopSlides, ...desktopSlides, ...desktopSlides];
  const tripledMobile = [...mobileSlides, ...mobileSlides, ...mobileSlides];

  useEffect(() => {
    prefersFineHover.current = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;

    // Start in the middle set to allow backward scrolling
    if (desktopTrackRef.current) {
      desktopTrackRef.current.scrollLeft = desktopSetWidth;
    }
    mobileOffsetRef.current = mobileSetWidth;
    if (mobileTrackRef.current) {
      mobileTrackRef.current.style.transform = `translate3d(-${mobileSetWidth}px, 0, 0)`;
    }

    let rafId: number;

    const tick = (time: number) => {
      if (!lastTime.current) lastTime.current = time;
      let dt = (time - lastTime.current) / 1000;
      if (dt > 0.1) dt = 0.1; // Cap dt to avoid huge jumps if tab is inactive
      lastTime.current = time;

      const isMobile = window.innerWidth < 1024;

      if (!isHovered.current && !isScrollingManually.current && isMobile && mobileTrackRef.current) {
        const delta = PIXELS_PER_SECOND * dt;
        mobileOffsetRef.current += delta;

        if (mobileOffsetRef.current >= mobileSetWidth * 2) {
          mobileOffsetRef.current -= mobileSetWidth;
        } else if (mobileOffsetRef.current <= 0) {
          mobileOffsetRef.current += mobileSetWidth;
        }

        mobileTrackRef.current.style.transform = `translate3d(-${mobileOffsetRef.current}px, 0, 0)`;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [desktopSetWidth, mobileSetWidth]);

  const go = (direction: -1 | 1) => {
    isScrollingManually.current = true;
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

    const jump = 400; // Pixels to scroll on button click
    if (desktopTrackRef.current && window.innerWidth >= 1024) {
      desktopTrackRef.current.scrollBy({ left: direction * jump, behavior: "smooth" });
    }
    if (mobileTrackRef.current && window.innerWidth < 1024) {
      mobileOffsetRef.current += direction * jump;
      mobileTrackRef.current.style.transform = `translate3d(-${mobileOffsetRef.current}px, 0, 0)`;
    }

    // Resume auto-scroll after smooth scroll completes (approx 500ms)
    scrollTimeout.current = setTimeout(() => {
      isScrollingManually.current = false;
    }, 500);
  };

  return (
    <section
      aria-label="Krest Dental — interiors and amenities"
      className="bg-white pb-16 pt-20 lg:pb-20 lg:pt-28"
    >
      <div className="krest-site">
        <header className="text-center">
          <p className="text-krest-display-lg text-center">
            Redefining Comfort and Care
          </p>
          <p className="text-krest-display-lg text-center">
            — Only at Krest Dental
          </p>
        </header>
      </div>

      <div className="mt-14 w-full lg:mt-16">
        <div className="pro-gallery mx-auto box-border w-full px-4 pt-0 max-lg:pb-0 lg:h-[571px] lg:pb-[50px]">
          <div
            className="relative w-full overflow-hidden max-lg:h-[280px] lg:h-[521px] group"
            onMouseEnter={() => {
              if (prefersFineHover.current) isHovered.current = true;
            }}
            onMouseLeave={() => {
              if (prefersFineHover.current) isHovered.current = false;
            }}
          >
            <div
              ref={desktopTrackRef}
              className="flex max-lg:hidden overflow-hidden scrollbar-hide"
              style={{
                height: `${GALLERY_INNER_HEIGHT_PX}px`,
                gap: `${SLIDE_GAP_PX}px`,
              }}
            >
              {tripledDesktop.map((image, slideIndex) => (
                <div
                  key={`${image.src}-${slideIndex}`}
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
                    loading={slideIndex < desktopSlides.length ? "eager" : "lazy"}
                    decoding="async"
                    draggable={false}
                  />
                </div>
              ))}
            </div>

            <div className="w-full overflow-hidden lg:hidden" style={{ height: "280px" }}>
              <div
                ref={mobileTrackRef}
                className="flex will-change-transform"
                style={{
                  height: "280px",
                  gap: `${SLIDE_GAP_PX}px`,
                }}
              >
              {tripledMobile.map((image, slideIndex) => (
                <div
                  key={`${image.src}-mobile-${slideIndex}`}
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
                    loading={slideIndex < mobileSlides.length ? "eager" : "lazy"}
                    decoding="async"
                    draggable={false}
                  />
                </div>
              ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous Item"
              className="absolute left-0 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center bg-white/60 text-ink opacity-0 transition-opacity group-hover:opacity-90 hover:!opacity-100"
            >
              <ChevronLeftIcon className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next Item"
              className="absolute right-0 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center bg-white/60 text-ink opacity-0 transition-opacity group-hover:opacity-90 hover:!opacity-100"
            >
              <ChevronRightIcon className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
