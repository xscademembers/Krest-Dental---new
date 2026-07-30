import { DR_SUNEETA_NAME_WITH_CREDENTIAL } from "@/lib/krest-content";

export const DR_SUNEETA_HIGHLIGHT_CLASS = "dr-suneeta-highlight";

/** Split prose so UI can wrap the doctor credential in highlight styling. */
export function splitTextByDrSuneetaCredential(text: string): string[] {
  return text.split(DR_SUNEETA_NAME_WITH_CREDENTIAL);
}

export function textContainsDrSuneetaCredential(text: string): boolean {
  return text.includes(DR_SUNEETA_NAME_WITH_CREDENTIAL);
}
