"use client";

import Image from "next/image";
import { useState } from "react";
import { cx } from "@/lib/utils";

export function Portrait({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const [wobble, setWobble] = useState(false);

  function shake() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    setWobble(false);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setWobble(true));
    });
  }

  return (
    <figure className={cx("portrait-frame", compact && "is-compact", className)}>
      <button
        type="button"
        className="portrait-hit"
        onClick={shake}
        onAnimationEnd={() => setWobble(false)}
        aria-label="Play a short portrait animation"
        data-cursor="Shake"
      >
        <span className={wobble ? "portrait-media is-wobble" : "portrait-media"}>
          <Image
            src="/images/portrait.jpg"
            alt="Portrait of Kidist Kemal, seated, looking toward the camera."
            fill
            unoptimized
            priority
            sizes={compact ? "128px" : "(max-width: 640px) 168px, (max-width: 900px) 240px, 270px"}
          />
        </span>
      </button>
      {compact ? null : (
        <figcaption className="portrait-caption">
          <span>Portrait</span>
          <span>Quiet first. Then the making starts.</span>
        </figcaption>
      )}
    </figure>
  );
}
