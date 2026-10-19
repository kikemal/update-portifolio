"use client";

import Image from "next/image";
import { useState } from "react";
import { site, whatIfs } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { MaskText } from "@/components/ui/MaskText";

export function Hero() {
  const [idea, setIdea] = useState(0);

  function cycle() {
    setIdea((value) => (value + 1) % whatIfs.length);
  }

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow reveal">
            {site.role} · {site.location}
          </p>
          <MaskText as="h1" text="Kidist Kemal" className="reveal delay-1" delay={80} />
          <p className="hero-lead reveal delay-2">
            I turn quiet questions into useful digital experiences. I can be still
            in a room and loud in my head — sketching products, interactions, and
            the next version of an idea until it can actually be used.
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
              button. Hover, focus, or tap it — the question is always visible.
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
          <div className="portrait-media">
            <Image
              src="/images/portrait.jpg"
              alt="Portrait of Kidist Kemal, seated, looking toward the camera."
              fill
              priority
              sizes="(max-width: 900px) 88vw, 380px"
            />
          </div>
          <figcaption className="portrait-caption">
            <span>Portrait</span>
            <span>Quiet first. Then the making starts.</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
