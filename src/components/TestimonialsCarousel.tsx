"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

const TESTIMONIAL_VIDEOS = [
  "https://video.wixstatic.com/video/7dc839_2375e62257ef4cf086bc39dd9c308c69/1080p/mp4/file.mp4",
  "https://video.wixstatic.com/video/7dc839_375653392496453d9aa2ba3eb6ff2f16/1080p/mp4/file.mp4",
  "https://video.wixstatic.com/video/7dc839_80edeb2f5c504246b1f502019eb61299/1080p/mp4/file.mp4",
  "https://video.wixstatic.com/video/7dc839_beea85b893c848dda5a99f4bf8b4d5bf/720p/mp4/file.mp4",
  "https://video.wixstatic.com/video/7dc839_2720e04be8ff4fd9b9cb7edcc81affdb/720p/mp4/file.mp4",
  "https://video.wixstatic.com/video/7dc839_9b37c3a4a8764a09a9f2c6d00c9c31ff/720p/mp4/file.mp4",
  "https://video.wixstatic.com/video/7dc839_4c790e0f0d7d440d8282cedcb133712f/720p/mp4/file.mp4",
  "https://video.wixstatic.com/video/7dc839_c718eb7732a54068806f404f52319d18/720p/mp4/file.mp4",
];

const AUTO_PLAY_INTERVAL = 4000;
const DESKTOP_GAP = 22;

type MobileSlidePhase = "idle" | "slide-out" | "slide-in";

export function TestimonialsCarousel() {
  const totalVideos = TESTIMONIAL_VIDEOS.length;

  /* ═══ DESKTOP — marquee-style one-card shift ═══ */
  const viewportRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [desktopIndex, setDesktopIndex] = useState(0);
  const [shiftState, setShiftState] = useState<"rest" | "left" | "right">(
    "rest",
  );
  const [animateStrip, setAnimateStrip] = useState(true);
  const busy = useRef(false);

  // Measure card width from viewport
  useEffect(() => {
    const measure = () => {
      if (viewportRef.current) {
        const w = viewportRef.current.offsetWidth;
        setCardWidth((w - 2 * DESKTOP_GAP) / 3);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const desktopNext = useCallback(() => {
    if (busy.current || cardWidth === 0) return;
    busy.current = true;
    setAnimateStrip(true);
    setShiftState("left"); // slide strip to the left

    setTimeout(() => {
      setAnimateStrip(false); // instant reset
      setDesktopIndex((prev) => (prev + 1) % totalVideos);
      setShiftState("rest");
      requestAnimationFrame(() => {
        busy.current = false;
      });
    }, 420);
  }, [totalVideos, cardWidth]);

  const desktopPrev = useCallback(() => {
    if (busy.current || cardWidth === 0) return;
    busy.current = true;
    setAnimateStrip(true);
    setShiftState("right"); // slide strip to the right

    setTimeout(() => {
      setAnimateStrip(false);
      setDesktopIndex((prev) => (prev - 1 + totalVideos) % totalVideos);
      setShiftState("rest");
      requestAnimationFrame(() => {
        busy.current = false;
      });
    }, 420);
  }, [totalVideos, cardWidth]);

  // 5-card strip: [idx-1, idx, idx+1, idx+2, idx+3]
  // At rest, viewport shows cards at positions 1-3 (idx, idx+1, idx+2)
  const stripIndices = [-1, 0, 1, 2, 3].map(
    (offset) => (desktopIndex + offset + totalVideos) % totalVideos,
  );

  const restX = -(cardWidth + DESKTOP_GAP);
  const translateX =
    shiftState === "rest"
      ? restX
      : shiftState === "left"
        ? restX - (cardWidth + DESKTOP_GAP)
        : restX + (cardWidth + DESKTOP_GAP);

  /* ═══ MOBILE — existing slide + auto-rotate ═══ */
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [mobilePhase, setMobilePhase] = useState<MobileSlidePhase>("idle");
  const [mobileDir, setMobileDir] = useState<"left" | "right">("left");

  const mobileNav = useCallback(
    (newIdx: number, dir: "left" | "right") => {
      if (mobilePhase !== "idle") return;
      setMobileDir(dir);
      setMobilePhase("slide-out");
      setTimeout(() => {
        setMobileIndex(newIdx);
        setMobilePhase("slide-in");
        setTimeout(() => setMobilePhase("idle"), 350);
      }, 300);
    },
    [mobilePhase],
  );

  const mobileNext = useCallback(
    () => mobileNav((mobileIndex + 1) % totalVideos, "left"),
    [mobileIndex, totalVideos, mobileNav],
  );
  const mobilePrev = useCallback(
    () => mobileNav((mobileIndex - 1 + totalVideos) % totalVideos, "right"),
    [mobileIndex, totalVideos, mobileNav],
  );
  const mobileGoTo = useCallback(
    (idx: number) => {
      if (idx !== mobileIndex)
        mobileNav(idx, idx > mobileIndex ? "left" : "right");
    },
    [mobileIndex, mobileNav],
  );

  // Auto-rotation disabled on mobile per request

  let mobileSlideClass = "vt-slide--idle";
  if (mobilePhase === "slide-out")
    mobileSlideClass =
      mobileDir === "left" ? "vt-slide--out-left" : "vt-slide--out-right";
  else if (mobilePhase === "slide-in")
    mobileSlideClass =
      mobileDir === "left" ? "vt-slide--in-right" : "vt-slide--in-left";

  return (
    <section
      aria-label="What our customers say"
      className="bg-cream py-12 md:py-16 lg:py-20"
    >
      <div className="krest-site">
        <h2 className="video-testimonials__title">What Our Customers Say</h2>

        {/* ─── DESKTOP: marquee carousel ─── */}
        <div className="video-testimonials__desktop">
          {/* Viewport clips to 3 cards */}
          <div ref={viewportRef} className="video-testimonials__viewport">
            <div
              className="video-testimonials__strip"
              style={{
                transform: `translateX(${translateX}px)`,
                transition: animateStrip ? "transform 0.4s ease" : "none",
                gap: `${DESKTOP_GAP}px`,
              }}
            >
              {stripIndices.map((videoIdx, slot) => (
                <div
                  key={`d-${videoIdx}-${slot}`}
                  className="video-testimonials__card"
                  style={
                    cardWidth > 0
                      ? { width: `${cardWidth}px`, flexShrink: 0 }
                      : undefined
                  }
                >
                  <video
                    src={TESTIMONIAL_VIDEOS[videoIdx]}
                    controls
                    preload="metadata"
                    playsInline
                    className="video-testimonials__video"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            type="button"
            onClick={desktopPrev}
            aria-label="Previous video"
            className="video-testimonials__arrow video-testimonials__arrow--left"
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={desktopNext}
            aria-label="Next video"
            className="video-testimonials__arrow video-testimonials__arrow--right"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </button>

          {/* Dots */}
          <div className="video-testimonials__dots">
            {TESTIMONIAL_VIDEOS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  if (idx !== desktopIndex && !busy.current) {
                    setAnimateStrip(false);
                    setDesktopIndex(idx);
                    setShiftState("rest");
                  }
                }}
                aria-label={`Go to video ${idx + 1}`}
                className={`video-testimonials__dot ${
                  idx === desktopIndex
                    ? "video-testimonials__dot--active"
                    : ""
                }`}
              />
            ))}
          </div>
        </div>

        {/* ─── MOBILE: 1 visible (unchanged) ─── */}
        <div
          className="video-testimonials__mobile"
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setTimeout(() => setIsPaused(false), 3000)}
        >
          <div
            className={`video-testimonials__mobile-card ${mobileSlideClass}`}
          >
            <video
              src={TESTIMONIAL_VIDEOS[mobileIndex]}
              controls
              preload="metadata"
              playsInline
              className="video-testimonials__video"
            />
          </div>

          <div className="video-testimonials__mobile-nav">
            <button
              type="button"
              onClick={mobilePrev}
              aria-label="Previous video"
              className="video-testimonials__mobile-arrow"
            >
              <ChevronLeftIcon className="h-3.5 w-3.5" />
            </button>

            <div className="video-testimonials__mobile-dots">
              {TESTIMONIAL_VIDEOS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => mobileGoTo(idx)}
                  aria-label={`Go to video ${idx + 1}`}
                  className={`video-testimonials__dot ${
                    idx === mobileIndex
                      ? "video-testimonials__dot--active"
                      : ""
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={mobileNext}
              aria-label="Next video"
              className="video-testimonials__mobile-arrow"
            >
              <ChevronRightIcon className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
