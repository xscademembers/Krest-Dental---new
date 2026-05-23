import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/components/icons";
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
    <footer className="mt-12 border-t border-copper/15 bg-white pb-8 pt-10">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-12 px-[32px] sm:grid-cols-2 lg:grid-cols-[1.25fr_0.65fr_1fr_0.8fr] lg:gap-24">
        <div className="flex flex-col items-start gap-8">
          <FooterLogo />
          <ul className="flex items-center gap-4 text-taupe">
            {SOCIALS.map((s) => {
              const Icon = socialIcon[s.label];
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-taupe text-taupe transition-colors hover:border-copper hover:text-copper"
                  >
                    <Icon className="h-[14px] w-[14px]" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-[22px] font-semibold tracking-wide text-copper">Menu</h3>
          <ul className="mt-3 flex flex-col gap-2">
            {FOOTER_NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-body text-[11px] text-taupe transition-colors hover:text-copper"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-[22px] font-semibold tracking-wide text-copper">
            Contact Us
          </h3>
          <dl className="mt-3 flex flex-col gap-3 font-body text-[11px] text-taupe">
            <div>
              <dt className="font-semibold text-taupe">E-mail</dt>
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
              <dt className="font-semibold text-taupe">Phone</dt>
              <dd>
                <a href={PHONE_TEL} className="transition-colors hover:text-copper">
                  {PHONE_DISPLAY}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-taupe">Address</dt>
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
          <h3 className="font-display text-[22px] font-semibold tracking-wide text-copper">
            Opening Hours
          </h3>
          <dl className="mt-3 flex flex-col gap-3 font-body text-[11px] text-taupe">
            {HOURS.map((row) => (
              <div key={row.day}>
                <dt className="font-semibold text-taupe">
                  {row.day}
                </dt>
                <dd>{row.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-[1180px] px-[32px] text-center font-body text-[11px] text-taupe">
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

function FooterLogo() {
  return (
    <a
      href="/"
      aria-label="Krest Dental — Home"
      className="inline-flex items-center gap-2.5 text-taupe"
    >
      <svg
        viewBox="0 0 64 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="h-14 w-14 text-copper"
      >
        <path
          d="M 8 14 C 16 4, 25 11, 32 10 C 43 8, 52 3, 56 9 C 60 15, 54 28, 44 36 C 34 44, 25 46, 15 42 C 8 39, 5 31, 8 22"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 18 18 C 25 21, 34 21, 45 15"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-display text-[36px] font-semibold leading-none tracking-tight">
        Krest
      </span>
      <span aria-hidden="true" className="h-[34px] w-px bg-copper/35" />
      <span className="flex flex-col font-accent leading-[1.05] tracking-[0.18em] text-taupe">
        <span className="text-[10px]">DENTAL</span>
        <span className="text-[10px]">CARE</span>
      </span>
    </a>
  );
}
