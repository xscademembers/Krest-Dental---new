import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/components/icons";
import { Logo } from "@/components/Logo";
import {
  ADDRESS,
  EMAIL,
  HOURS,
  PHONE_DISPLAY,
  PHONE_TEL,
  SOCIALS,
} from "@/lib/krest-content";

const socialIcon = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  YouTube: YoutubeIcon,
} as const;

const FOOTER_NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/our-services" },
  { label: "Contact Us", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-copper/15 bg-cream pt-16 pb-10">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-[25px] sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-6">
          <Logo />
          <ul className="flex items-center gap-4 text-ink">
            {SOCIALS.map((s) => {
              const Icon = socialIcon[s.label];
              return (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-copper"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-[18px] tracking-wide text-copper">Menu</h3>
          <ul className="mt-4 flex flex-col gap-2">
            {FOOTER_NAV.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="font-body text-[14px] text-ink transition-colors hover:text-copper"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-[18px] tracking-wide text-copper">
            Contact Us
          </h3>
          <dl className="mt-4 flex flex-col gap-3 font-body text-[14px] text-ink">
            <div>
              <dt className="text-[12px] uppercase tracking-wider text-taupe">E-mail</dt>
              <dd>
                <a
                  href={`mailto:${EMAIL}`}
                  className="transition-colors hover:text-copper"
                >
                  {EMAIL}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[12px] uppercase tracking-wider text-taupe">Phone</dt>
              <dd>
                <a href={PHONE_TEL} className="transition-colors hover:text-copper">
                  {PHONE_DISPLAY}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[12px] uppercase tracking-wider text-taupe">Address</dt>
              <dd className="not-italic leading-[1.55]">
                <address className="not-italic">
                  <span className="font-semibold">{ADDRESS.name}</span>
                  <br />
                  {ADDRESS.lines.map((line, idx) => (
                    <span key={idx}>
                      {line}
                      <br />
                    </span>
                  ))}
                </address>
              </dd>
            </div>
          </dl>
        </div>

        <div>
          <h3 className="font-display text-[18px] tracking-wide text-copper">
            Opening Hours
          </h3>
          <dl className="mt-4 flex flex-col gap-3 font-body text-[14px] text-ink">
            {HOURS.map((row) => (
              <div key={row.day}>
                <dt className="text-[12px] uppercase tracking-wider text-taupe">
                  {row.day}
                </dt>
                <dd>{row.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[1280px] border-t border-copper/15 px-[25px] pt-6 text-center font-body text-[12px] text-taupe">
        © 2025 by Krest Dental. Developed by{" "}
        <a
          href="https://www.xscade.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-copper transition-colors hover:underline"
        >
          Xscade
        </a>
        .
      </div>
    </footer>
  );
}
