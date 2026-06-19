"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import { TESTIMONIALS } from "@/lib/krest-content";

const PER_PAGE = 2;

export function TestimonialsCarousel() {
  const totalPages = Math.ceil(TESTIMONIALS.length / PER_PAGE);
  const [page, setPage] = useState(0);
  const start = page * PER_PAGE;
  const visible = TESTIMONIALS.slice(start, start + PER_PAGE);

  const go = (direction: -1 | 1) => {
    setPage((current) => (current + direction + totalPages) % totalPages);
  };

  return (
    <section
      aria-label="What our happy customers say"
      className="bg-cream py-20 lg:py-28"
    >
      <div className="krest-site">
        <h2 className="text-krest-display-md text-center">
          What Our Happy Customers Say
        </h2>

        <div className="relative mt-12 lg:mt-16">
          <div className="grid grid-cols-1 gap-6 px-2 md:grid-cols-2 md:gap-8 md:px-16">
            {visible.map((t) => (
              <figure
                key={t.id}
                className="flex h-[346px] w-full max-w-[494px] mx-auto flex-col items-center justify-center gap-8 rounded-[18px] border-2 border-copper/70 bg-cream/40 px-8 py-12 sm:px-10 lg:px-12"
              >
                <blockquote className="w-full">
                  <p className="text-krest-caption text-justify text-[#A67B5B]">
                    {t.quote}
                  </p>
                </blockquote>
                <figcaption className="text-krest-caption font-semibold tracking-wide text-center text-[#A67B5B]">
                  {t.author}
                </figcaption>
              </figure>
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-copper/60 bg-cream text-copper transition-colors hover:bg-copper hover:text-white md:flex"
          >
            <ChevronLeftIcon className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-copper/60 bg-cream text-copper transition-colors hover:bg-copper hover:text-white md:flex"
          >
            <ChevronRightIcon className="h-3.5 w-3.5" />
          </button>

          <div className="mt-8 flex items-center justify-center gap-4 md:hidden">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-copper/60 bg-cream text-copper transition-colors hover:bg-copper hover:text-white"
            >
              <ChevronLeftIcon className="h-3 w-3" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-copper/60 bg-cream text-copper transition-colors hover:bg-copper hover:text-white"
            >
              <ChevronRightIcon className="h-3 w-3" />
            </button>
          </div>

          <div className="mt-10 flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setPage(idx)}
                aria-label={`Go to testimonial page ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  idx === page
                    ? "w-8 bg-copper"
                    : "w-2 bg-copper/30 hover:bg-copper/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
