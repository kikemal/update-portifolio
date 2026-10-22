import type { CSSProperties } from "react";
import { LEFT_PIXELS, RIGHT_PIXELS, type Pixel } from "@/lib/constellation";
import { cx } from "@/lib/utils";

type Side = "left" | "right";

function PixelDot({ pixel }: { pixel: Pixel }) {
  return (
    <span
      className={cx(
        "hero-pixel",
        `hero-pixel-t${pixel.tone}`,
        `hero-pixel-tier${pixel.tier}`,
        pixel.live != null && `hero-pixel-live hero-pixel-live-${pixel.live}`,
        pixel.glow && "hero-pixel-glow",
        pixel.drift != null && `hero-pixel-drift hero-pixel-drift-${pixel.drift}`,
        pixel.sync && "hero-pixel-sync",
      )}
      style={
        {
          left: `${pixel.x}%`,
          top: `${pixel.y}%`,
          width: pixel.size,
          height: pixel.size,
          "--pixel-op": pixel.op,
          "--pixel-delay": `${pixel.delay}s`,
        } as CSSProperties
      }
    />
  );
}

export function PixelConstellation({ side }: { side: Side }) {
  const pixels = side === "left" ? LEFT_PIXELS : RIGHT_PIXELS;

  return (
    <div className={cx("hero-field", `hero-field-${side}`)} aria-hidden="true">
      {pixels.map((pixel, index) => (
        <PixelDot key={`${side}-${index}`} pixel={pixel} />
      ))}
    </div>
  );
}
