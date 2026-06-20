"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import { TESTIMONIALS } from "@/lib/krest-content";

const DESKTOP_PER_PAGE = 2;

export function TestimonialsCarousel() {
  const [mobileIndex, setMobileIndex] = useState(0);
  const [desktopPage, setDesktopPage] = useState(0);

  const desktopTotalPages = Math.ceil(TESTIMONIALS.length / DESKTOP_PER_PAGE);
  const desktopStart = desktopPage * DESKTOP_PER_PAGE;
  const desktopVisible = TESTIMONIALS.slice(
    desktopStart,
    desktopStart + DESKTOP_PER_PAGE,
  );
  const mobileTestimonial = TESTIMONIALS[mobileIndex];

  const mobileGo = (direction: -1 | 1) => {
    setMobileIndex(
      (current) => (current + direction + TESTIMONIALS.length) % TESTIMONIALS.length,
    );
  };

  const desktopGo = (direction: -1 | 1) => {
    setDesktopPage(
      (current) => (current + direction + desktopTotalPages) % desktopTotalPages,
    );
  };

  return (
    <section
      aria-label="What our happy customers say"
      className="bg-cream py-16 md:py-20 lg:py-28"
    >
      <div className="krest-site">
        {/* Mobile — one card, split title, bottom outline nav */}
        <div className="testimonials-mobile md:hidden">
          <h2 className="testimonials-mobile__title">
            <span className="block">What Our Happy</span>
            <span className="block">Customers Say</span>
          </h2>

          <figure className="mx-auto mt-10 w-full border border-copper px-6 py-10 sm:px-8">
            <blockquote>
              <p className="testimonials-mobile__quote">{mobileTestimonial.quote}</p>
            </blockquote>
            <figcaption className="testimonials-mobile__author">
              {mobileTestimonial.author}
            </figcaption>
          </figure>

          <div className="mt-10 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={() => mobileGo(-1)}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-copper bg-transparent text-copper transition-colors hover:bg-copper/10"
            >
              <ChevronLeftIcon className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={() => mobileGo(1)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-copper bg-transparent text-copper transition-colors hover:bg-copper/10"
            >
              <ChevronRightIcon className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Desktop — two cards, side arrows, pagination dots */}
        <div className="hidden md:block">
          <h2 className="text-krest-display-md text-center">
            What Our Happy Customers Say
          </h2>

          <div className="relative mt-12 lg:mt-16">
            <div className="grid grid-cols-1 gap-6 px-2 md:grid-cols-2 md:gap-8 md:px-16">
              {desktopVisible.map((t) => (
                <figure
                  key={t.id}
                  className="mx-auto flex h-[346px] w-full max-w-[494px] flex-col items-center justify-center gap-8 rounded-[18px] border-2 border-copper/70 bg-cream/40 px-8 py-12 sm:px-10 lg:px-12"
                >
                  <blockquote className="w-full">
                    <p className="text-krest-caption text-justify text-[#A67B5B]">
                      {t.quote}
                    </p>
                  </blockquote>
                  <figcaption className="text-krest-caption text-center font-semibold tracking-wide text-[#A67B5B]">
                    {t.author}
                  </figcaption>
                </figure>
              ))}
            </div>

            <button
              type="button"
              onClick={() => desktopGo(-1)}
              aria-label="Previous testimonial"
              className="absolute left-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-copper/60 bg-cream text-copper transition-colors hover:bg-copper hover:text-white"
            >
              <ChevronLeftIcon className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={() => desktopGo(1)}
              aria-label="Next testimonial"
              className="absolute right-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-copper/60 bg-cream text-copper transition-colors hover:bg-copper hover:text-white"
            >
              <ChevronRightIcon className="h-3.5 w-3.5" />
            </button>

            <div className="mt-10 flex justify-center gap-2">
              {Array.from({ length: desktopTotalPages }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setDesktopPage(idx)}
                  aria-label={`Go to testimonial page ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === desktopPage
                      ? "w-8 bg-copper"
                      : "w-2 bg-copper/30 hover:bg-copper/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
