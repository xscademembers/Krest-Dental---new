import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SiteContainerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** Legacy alias — same 25px gutters as default; card width via SiteCardBand. */
  variant?: "default" | "cards";
};

/** Matches Wix site max width (1425px) and 25px section padding at all breakpoints. */
export function SiteContainer({
  children,
  className,
  as: Tag = "div",
  variant = "default",
}: SiteContainerProps) {
  return (
    <Tag
      className={cn(
        "krest-site",
        variant === "cards" && "krest-site--cards",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Inner text column (~1069px on desktop) — hero intros, centered copy. */
export function SiteProse({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("krest-prose", className)}>{children}</div>;
}

/** Wide white card band (~1275px on desktop) — service cards, CTAs. */
export function SiteCardBand({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("krest-card-band", className)}>{children}</div>;
}
