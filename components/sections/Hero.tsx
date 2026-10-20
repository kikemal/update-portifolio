"use client";

import { useState } from "react";
import { site, whatIfs } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { MaskText } from "@/components/ui/MaskText";
import { Portrait } from "@/components/ui/Portrait";

export function Hero() {
  const [idea, setIdea] = useState(0);

  function cycle() {
    setIdea((value) => (value + 1) % whatIfs.length);
  }

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow reveal">{site.location}</p>
          <MaskText text="Kidist Kemal" as="h1" className="reveal delay-1" />
          <p className="hero-headline reveal delay-2">
            <span className="hero-role">Creative Developer</span>
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
        <Portrait />
      </div>
    </section>
  );
}
