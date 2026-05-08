export function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href="/"
      aria-label="Krest Dental — Home"
      className={`inline-flex items-center gap-3 text-ink ${className}`}
    >
      <span className="font-display text-[36px] font-medium leading-none tracking-tight sm:text-[40px]">
        Krest
      </span>
      <span aria-hidden="true" className="h-[34px] w-px bg-copper/35 sm:h-[38px]" />
      <span className="flex flex-col font-accent leading-[1.05] tracking-[0.18em] text-taupe">
        <span className="text-[11px] sm:text-[12px]">DENTAL</span>
        <span className="text-[11px] sm:text-[12px]">CARE</span>
      </span>
    </a>
  );
}
