"use client";

import Image from "next/image";
import { useState } from "react";
import { site, whatIfs } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";

export function Hero() {
  const [idea, setIdea] = useState(0);
  const [wobble, setWobble] = useState(false);

  function cycle() {
    setIdea((value) => (value + 1) % whatIfs.length);
  }

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
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow reveal">{site.location}</p>
          <h1 id="hero-title" className="reveal delay-1">
            Kidist Kemal
          </h1>
          <p className="hero-headline reveal delay-2">
            <span>Creative Developer</span>
            <span className="hero-sep" aria-hidden="true">
              |
            </span>
            <span>Turning Ideas into Useful Digital Experiences</span>
            <span className="hero-sep" aria-hidden="true">
              |
            </span>
            <span>Building Thoughtful, Human-Centered Products</span>
          </p>
          <div className="what-if reveal delay-3">
            <p className="what-if-label">
              My brain has a{" "}
              <button
                type="button"
                className="what-if-btn"
                onMouseEnter={cycle}
                onFocus={cycle}
                onClick={cycle}
                aria-describedby="what-if-idea"
                data-cursor="Play"
              >
                “what if we built this?”
              </button>{" "}
              button.
            </p>
            <span id="what-if-idea" className="what-if-next" aria-live="polite">
              <span key={idea}>{whatIfs[idea]}</span>
            </span>
          </div>
          <div className="hero-actions reveal delay-4">
            <Magnetic>
              <Button href="/#work">Explore my work</Button>
            </Magnetic>
            <Magnetic>
              <Button href="/#contact" ghost>
                Let’s talk
              </Button>
            </Magnetic>
          </div>
        </div>
        <figure className="portrait-frame reveal delay-2">
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
                priority
                sizes="(max-width: 900px) 88vw, 320px"
              />
            </span>
          </button>
          <figcaption className="portrait-caption">
            <span>Portrait</span>
            <span>Quiet first. Then the making starts.</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
