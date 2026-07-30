import { Fragment, type ReactNode } from "react";
import { DR_SUNEETA_NAME_WITH_CREDENTIAL } from "@/lib/krest-content";
import {
  DR_SUNEETA_HIGHLIGHT_CLASS,
  splitTextByDrSuneetaCredential,
  textContainsDrSuneetaCredential,
} from "@/lib/dr-suneeta-highlight";

type TextWithDrSuneetaHighlightProps = {
  text: string;
  highlightClassName?: string;
};

export function TextWithDrSuneetaHighlight({
  text,
  highlightClassName,
}: TextWithDrSuneetaHighlightProps): ReactNode {
  if (!textContainsDrSuneetaCredential(text)) {
    return text;
  }

  const parts = splitTextByDrSuneetaCredential(text);

  return (
    <>
      {parts.map((part, index) => (
        <Fragment key={`${index}-${part.slice(0, 12)}`}>
          {part}
          {index < parts.length - 1 ? (
            <span className={[DR_SUNEETA_HIGHLIGHT_CLASS, highlightClassName].filter(Boolean).join(" ")}>
              {DR_SUNEETA_NAME_WITH_CREDENTIAL}
            </span>
          ) : null}
        </Fragment>
      ))}
    </>
  );
}
