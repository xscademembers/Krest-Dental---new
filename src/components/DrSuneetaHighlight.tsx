import { DR_SUNEETA_NAME_WITH_CREDENTIAL } from "@/lib/krest-content";
import { DR_SUNEETA_HIGHLIGHT_CLASS } from "@/lib/dr-suneeta-highlight";
import { cn } from "@/lib/utils";

type DrSuneetaHighlightProps = {
  className?: string;
  as?: "span" | "p";
};

export function DrSuneetaHighlight({
  className,
  as: Tag = "span",
}: DrSuneetaHighlightProps) {
  return (
    <Tag className={cn(DR_SUNEETA_HIGHLIGHT_CLASS, className)}>
      {DR_SUNEETA_NAME_WITH_CREDENTIAL}
    </Tag>
  );
}
