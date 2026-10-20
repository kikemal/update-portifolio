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
        <div className="hero-identity">
          <p className="eyebrow reveal">{site.location}</p>
          <MaskText text="Kidist Kemal" as="h1" className="reveal delay-1" />
          <p className="hero-headline reveal delay-2">
            <span className="hero-role">Full-Stack Developer</span>
            <span className="hero-stack">
              React • Next.js • Flutter
              <span className="hero-sep" aria-hidden="true">
                {" "}
                ·{" "}
              </span>
              AI Enthusiast
            </span>
            <span className="hero-promise">
              Turning Ideas into Scalable Digital Products
            </span>
          </p>
        </div>
        <Portrait className="reveal delay-2" />
        <div className="hero-about">
          <p className="hero-intro reveal delay-3">
            I’m Kidist Kemal, a creative developer from Ethiopia who enjoys
            turning ideas into useful digital experiences. I build thoughtful,
            human-centered products around technology, usability, and purposeful
            design — solving real problems and making technology more accessible.
          </p>
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
        <div className="hero-texture">
          <div className="about-chips reveal delay-4">
            <span className="chip">Problem-solving</span>
            <span className="chip">Learning in public</span>
            <span className="chip">Fashion</span>
            <span className="chip">Photography</span>
            <span className="chip">Good conversation</span>
          </div>
          <p className="faith reveal delay-4">
            Faith sits in the work without needing a spotlight. I pray about my
            goals, and I give <em>God</em> credit for the things that land.
          </p>
          <div className="what-if reveal delay-4">
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
        </div>
      </div>
    </section>
  );
}
