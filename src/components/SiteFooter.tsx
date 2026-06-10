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
    <footer className="mt-12 bg-white pb-10 pt-14 lg:pb-12 lg:pt-16">
      <div className="krest-site grid w-full grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.75fr)_minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start lg:gap-x-16 xl:gap-x-24">
        <div className="flex w-full flex-col items-start gap-7 pl-0 sm:gap-8">
          <FooterLogo />
          <ul className="flex items-center gap-3">
            {SOCIALS.map((s) => {
              const Icon = socialIcon[s.label];
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-white transition-opacity hover:opacity-85"
                  >
                    <Icon className="h-[15px] w-[15px]" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-[22px] font-semibold leading-none text-copper">
            Menu
          </h3>
          <ul className="mt-4 flex flex-col gap-2.5">
            {FOOTER_NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-display text-[16px] leading-[1.5] text-taupe transition-colors hover:text-copper"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-[22px] font-semibold leading-none text-copper">
            Contact Us
          </h3>
          <dl className="mt-4 flex flex-col gap-4 font-display text-[16px] leading-[1.55] text-taupe">
            <div>
              <dt className="font-semibold text-taupe">E-mail</dt>
              <dd className="mt-0.5">
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
              <dd className="mt-0.5">
                <a href={PHONE_TEL} className="transition-colors hover:text-copper">
                  {PHONE_DISPLAY}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-taupe">Address</dt>
              <dd className="mt-0.5 not-italic">
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
          <h3 className="font-display text-[22px] font-semibold leading-none text-copper">
            Opening Hours
          </h3>
          <dl className="mt-4 flex flex-col gap-4 font-display text-[16px] leading-[1.55] text-taupe">
            {HOURS.map((row) => (
              <div key={row.day}>
                <dt className="font-semibold text-taupe">{row.day}</dt>
                <dd className="mt-0.5">{row.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="krest-site krest-site--cards mt-16 text-center font-display text-[16px] leading-[1.5] text-taupe lg:mt-20">
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
        height={100}
        className="h-auto w-[220px] max-w-full object-contain object-left sm:w-[280px]"
        loading="lazy"
        decoding="async"
      />
    </a>
  );
}
