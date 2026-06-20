import { FooterLogoIcon } from "@/components/FooterLogoIcon";
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

export function SiteFooter({ mobileWhiteBg = false }: { mobileWhiteBg?: boolean }) {
  return (
    <footer
      className={`pb-10 pt-14 lg:pb-12 lg:pt-16 ${mobileWhiteBg ? "bg-white" : "bg-cream lg:bg-white"}`}
    >
      {/* Mobile — Wix collage: brand row, menu|contact, opening hours full-width */}
      <div className="footer-mobile krest-site lg:hidden">
        <div className="footer-mobile__grid">
          <div className="footer-mobile__brand col-span-2 flex items-center justify-between gap-3">
            <FooterLogo compact />
            <FooterSocialLinks mobile />
          </div>

          <FooterMenu mobile />
          <FooterContact mobile emailUnderline />

          <div className="col-span-2">
            <FooterHours mobile />
          </div>
        </div>
      </div>

      {/* Desktop — 4-column layout */}
      <div className="krest-site hidden w-full grid-cols-[minmax(0,1.35fr)_minmax(0,0.75fr)_minmax(0,1.15fr)_minmax(0,0.85fr)] gap-x-16 lg:grid xl:gap-x-24">
        <div className="flex w-full flex-col items-start gap-8">
          <FooterLogo />
          <FooterSocialLinks />
        </div>

        <FooterMenu />
        <FooterContact />
        <FooterHours />
      </div>

      <div className="krest-site footer-mobile__copyright mt-[15px] text-center font-display text-[15px] leading-[1.5] text-taupe lg:mt-20 lg:text-[16px]">
        © 2025 by Krest Dental. Developed by{" "}
        <a
          href="https://www.xscade.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-taupe underline decoration-taupe/70 underline-offset-2 transition-colors hover:text-copper lg:text-copper lg:no-underline lg:hover:underline"
        >
          Xscade
        </a>
      </div>
    </footer>
  );
}

function FooterSocialLinks({ mobile = false }: { mobile?: boolean }) {
  return (
    <ul className={`flex shrink-0 items-center ${mobile ? "gap-2" : "gap-2.5"}`}>
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
  );
}

function FooterMenu({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className={mobile ? "min-w-0" : undefined}>
      <h3
        className={
          mobile
            ? "footer-mobile__heading"
            : "font-display text-[22px] font-semibold leading-none text-copper"
        }
      >
        Menu
      </h3>
      <ul className={`flex flex-col ${mobile ? "footer-mobile__menu mt-3.5 gap-2.5" : "mt-4 gap-2.5"}`}>
        {FOOTER_NAV.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className={
                mobile
                  ? "footer-mobile__link"
                  : "font-display text-[16px] leading-[1.5] text-taupe transition-colors hover:text-copper"
              }
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterContact({
  phoneUnderline = false,
  emailUnderline = false,
  mobile = false,
}: {
  phoneUnderline?: boolean;
  emailUnderline?: boolean;
  mobile?: boolean;
}) {
  return (
    <div className={mobile ? "min-w-0" : undefined}>
      <h3
        className={
          mobile
            ? "footer-mobile__heading"
            : "font-display text-[22px] font-semibold leading-none text-copper"
        }
      >
        Contact Us
      </h3>
      <dl
        className={`flex flex-col ${mobile ? "footer-mobile__contact mt-3.5 gap-3.5" : "mt-4 gap-4 font-display text-[16px] leading-[1.55] text-taupe"}`}
      >
        <div>
          <dt className={mobile ? "footer-mobile__label" : "font-body text-[16px] font-semibold text-taupe"}>
            E-mail
          </dt>
          <dd className={mobile ? "footer-mobile__text mt-0.5" : "mt-0.5"}>
            <a
              href={`mailto:${EMAIL}`}
              className={`transition-colors hover:text-copper ${emailUnderline ? "underline decoration-taupe/80 underline-offset-2" : ""}`}
            >
              {EMAIL}
            </a>
          </dd>
        </div>
        <div>
          <dt className={mobile ? "footer-mobile__label" : "font-body text-[16px] font-semibold text-taupe"}>
            Phone
          </dt>
          <dd className={mobile ? "footer-mobile__text mt-0.5" : "mt-0.5"}>
            <a
              href={PHONE_TEL}
              className={`transition-colors hover:text-copper ${phoneUnderline ? "underline decoration-taupe/80 underline-offset-2" : ""}`}
            >
              {PHONE_DISPLAY}
            </a>
          </dd>
        </div>
        <div>
          <dt className={mobile ? "footer-mobile__label" : "font-body text-[16px] font-semibold text-taupe"}>
            Address
          </dt>
          <dd className={mobile ? "footer-mobile__text mt-0.5 not-italic" : "mt-0.5 not-italic"}>
            <address className="not-italic">
              <span className={mobile ? "font-body uppercase" : "font-semibold"}>
                {ADDRESS.name}
              </span>
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
  );
}

function FooterHours({ mobile = false }: { mobile?: boolean }) {
  return (
    <div>
      <h3
        className={
          mobile
            ? "footer-mobile__heading"
            : "font-display text-[22px] font-semibold leading-none text-copper"
        }
      >
        Opening Hours
      </h3>
      <dl
        className={`flex flex-col ${mobile ? "footer-mobile__hours mt-3.5 gap-3.5" : "mt-4 gap-4 font-display text-[16px] leading-[1.55] text-taupe"}`}
      >
        {HOURS.map((row) => (
          <div key={row.day}>
            <dt className={mobile ? "footer-mobile__label" : "font-body text-[16px] font-semibold text-taupe"}>
              {mobile ? row.day.replace(" to ", " - ") : row.day}
            </dt>
            <dd className={mobile ? "footer-mobile__text mt-0.5" : "mt-0.5"}>{row.time}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function FooterLogo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="/" aria-label="Krest Dental — Home" className="inline-block shrink-0">
      <FooterLogoIcon
        className={
          compact
            ? "h-[54px] w-[136px] max-w-[calc(100vw-130px)]"
            : "h-[76px] w-[188px] max-w-full"
        }
      />
    </a>
  );
}
