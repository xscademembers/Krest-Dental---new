import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SiteContainerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** Use wider horizontal padding band for large white cards (1275px). */
  variant?: "default" | "cards";
};

/** Matches Wix site max width (1425px) and computed gutters at 1440px viewport. */
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
