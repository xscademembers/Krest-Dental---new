import { HeaderLogoIcon } from "@/components/HeaderLogoIcon";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href="/"
      aria-label="Krest Dental — Home"
      className={`inline-block shrink-0 ${className}`}
    >
      {/* Live header vector art: 165×54 at 1440px */}
      <HeaderLogoIcon className="h-[54px] w-[165px] max-w-full" />
    </a>
  );
}
