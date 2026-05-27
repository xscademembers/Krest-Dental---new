import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/components/icons";
import {
  ADDRESS,
  EMAIL,
  FOOTER_LOGO_SRC,
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
      <div className="krest-site grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.65fr_1fr_0.8fr] lg:gap-24">
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

      <div className="krest-site mt-20 text-center font-body text-[11px] text-taupe">
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
      className="inline-block"
    >
      <img
        src={FOOTER_LOGO_SRC}
        alt="Krest Dental Care"
        width={320}
        height={120}
        className="h-auto w-[200px] max-w-full object-contain object-left sm:w-[260px]"
        loading="lazy"
        decoding="async"
      />
    </a>
  );
}
