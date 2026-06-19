import { ButtonArrowCircle, ButtonArrowCircleOutline } from "@/components/DrSuneetaDecorations";

type CopperArrowButtonProps = {
  href: string;
  children: string;
  className?: string;
  variant?: "card" | "cta";
};

export function CopperArrowButton({
  href,
  children,
  className = "",
  variant = "card",
}: CopperArrowButtonProps) {
  const variantClass =
    variant === "cta"
      ? "h-[50px] w-[227px] pl-[22px] text-[18px] leading-[1.4]"
      : "h-[42px] gap-3 pl-6 pr-2 text-[15px] tracking-wide";

  const Icon = variant === "cta" ? ButtonArrowCircle : ButtonArrowCircleOutline;
  const iconClass =
    variant === "cta"
      ? "ml-[19px] h-[26px] w-[26px] shrink-0"
      : "h-[30px] w-[30px] shrink-0 text-white";

  return (
    <a
      href={href}
      className={`inline-flex items-center rounded-[50px] bg-copper font-display text-white transition-colors hover:bg-copper/90 ${variantClass} ${className}`}
    >
      <span>{children}</span>
      <Icon className={iconClass} />
    </a>
  );
}
