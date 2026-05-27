"use client";

import { useState } from "react";
import {
  ChevronDownIcon,
  CloseIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MenuIcon,
  PhoneIcon,
  YoutubeIcon,
} from "@/components/icons";
import { Logo } from "@/components/Logo";
import {
  EMAIL,
  NAV_ITEMS,
  PHONE_DISPLAY,
  PHONE_TEL,
  SOCIALS,
} from "@/lib/krest-content";

const socialIcon = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  YouTube: YoutubeIcon,
} as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <header className="relative z-30 w-full">
      <div className="bg-copper text-white">
        <div className="krest-site flex items-center justify-between gap-6 py-2">
          <ul className="flex items-center gap-2">
            {SOCIALS.map((s) => {
              const Icon = socialIcon[s.label];
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-copper transition-transform hover:scale-105"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-6 text-[13px] sm:flex">
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <PhoneIcon className="h-3.5 w-3.5" />
              <span>{PHONE_DISPLAY}</span>
            </a>
            <span aria-hidden="true" className="h-3.5 w-px bg-white/40" />
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <MailIcon className="h-3.5 w-3.5" />
              <span>{EMAIL}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="krest-site flex items-center justify-between gap-6 py-4">
          <Logo />

          <nav aria-label="Site" className="hidden lg:block">
            <ul className="flex items-center gap-12">
              {NAV_ITEMS.map((item, idx) => (
                <li
                  key={item.label}
                  className={`group relative ${
                    idx === NAV_ITEMS.length - 1
                      ? "before:absolute before:-left-6 before:top-1/2 before:h-4 before:w-px before:-translate-y-1/2 before:bg-copper/30"
                      : ""
                  }`}
                >
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-2 font-display text-[16px] text-ink transition-colors hover:text-copper"
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDownIcon className="h-2.5 w-2.5 transition-transform group-hover:rotate-180" />
                    )}
                  </a>
                  {item.children && (
                    <ul className="invisible absolute left-1/2 top-full z-40 mt-3 min-w-[200px] -translate-x-1/2 rounded-md border border-copper/15 bg-white py-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href}
                            className="block px-4 py-2 font-display text-[15px] text-ink transition-colors hover:bg-cream hover:text-copper"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="/contact"
            className="hidden h-11 items-center justify-center rounded-full border border-copper px-6 font-display text-[15px] italic text-copper transition-colors hover:bg-copper hover:text-white lg:inline-flex"
          >
            Book Appointment
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="text-ink lg:hidden"
          >
            {open ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-6 w-5" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute inset-x-0 top-full z-40 origin-top border-t border-copper/15 bg-white shadow-lg lg:hidden">
          <ul className="flex flex-col divide-y divide-copper/10">
            {NAV_ITEMS.map((item) => (
              <li key={item.label} className="px-[25px] py-4">
                <div className="flex items-center justify-between">
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-xl text-ink"
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <button
                      type="button"
                      onClick={() =>
                        setOpenSubmenu((current) =>
                          current === item.label ? null : item.label,
                        )
                      }
                      aria-label={`Toggle ${item.label} submenu`}
                      className="text-ink"
                    >
                      <ChevronDownIcon
                        className={`h-3 w-3 transition-transform ${
                          openSubmenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.children && openSubmenu === item.label && (
                  <ul className="mt-3 flex flex-col gap-2 pl-2">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="font-display text-[15px] text-taupe"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="px-[25px] py-5">
              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 items-center justify-center rounded-full border border-copper px-6 font-display text-[15px] italic text-copper"
              >
                Book Appointment
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
