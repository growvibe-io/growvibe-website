import { Check } from "lucide-react";

import type { ContentBlock } from "@/lib/blog-data";

interface ArticleBodyProps {
  blocks: ContentBlock[];
}

/**
 * Renders the typed content-block array from src/lib/blog-data.ts as
 * styled article markup. Kept as one small switch rather than a block-type
 * component per file since the block set is small and unlikely to grow
 * much — easy to split out later if it does.
 */
export function ArticleBody({ blocks }: ArticleBodyProps) {
  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "p":
            return (
              <p key={index} className="text-base leading-relaxed text-muted-foreground">
                {block.text}
              </p>
            );

          case "h2":
            return (
              <h2
                key={index}
                id={block.id}
                className="scroll-mt-28 pt-4 font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
              >
                {block.text}
              </h2>
            );

          case "h3":
            return (
              <h3
                key={index}
                className="pt-2 font-heading text-lg font-semibold tracking-tight text-foreground sm:text-xl"
              >
                {block.text}
              </h3>
            );

          case "ul":
            return (
              <ul key={index} className="space-y-2.5 pl-1">
                {block.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex gap-3 text-base leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );

          case "ol":
            return (
              <ol key={index} className="space-y-2.5 pl-1">
                {block.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex gap-3 text-base leading-relaxed text-muted-foreground"
                  >
                    <span className="flex-shrink-0 font-heading text-sm font-semibold text-primary">
                      {itemIndex + 1}.
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            );

          case "checklist":
            return (
              <ul
                key={index}
                className="space-y-3 rounded-2xl border border-border bg-card p-6"
              >
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex gap-3 text-base leading-relaxed">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/15">
                      <Check className="h-3 w-3 text-primary" />
                    </span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            );

          case "callout":
            return (
              <div
                key={index}
                className="rounded-2xl border border-primary/20 bg-primary/5 p-6"
              >
                <p className="font-heading text-base font-semibold text-foreground">
                  {block.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {block.text}
                </p>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
