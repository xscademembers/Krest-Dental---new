import Link from "next/link";
import { PhoneIcon } from "@/components/icons";
import { PHONE_TEL } from "@/lib/krest-content";

export function FloatingCallButton() {
  return (
    <Link
      href={PHONE_TEL}
      aria-label="Call Krest Dental"
      className="fixed bottom-6 right-6 z-50 flex h-[65px] w-[65px] items-center justify-center rounded-full bg-ink text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
    >
      <PhoneIcon className="h-6 w-6" />
    </Link>
  );
}
