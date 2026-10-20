"use client";

import Image from "next/image";
import { useState } from "react";

export function Portrait() {
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
    <figure className="portrait-frame">
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
            sizes="(max-width: 900px) min(88vw, 380px), 380px"
          />
        </span>
      </button>
      <figcaption className="portrait-caption">
        <span>Portrait</span>
        <span>Quiet first. Then the making starts.</span>
      </figcaption>
    </figure>
  );
}
