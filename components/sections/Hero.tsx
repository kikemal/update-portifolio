"use client";

import { useState } from "react";
import { whatIfs } from "@/lib/content";
import { MaskText } from "@/components/ui/MaskText";
import { Portrait } from "@/components/ui/Portrait";

export function Hero() {
  const [idea, setIdea] = useState(0);

  function cycle() {
    setIdea((value) => (value + 1) % whatIfs.length);
  }

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap">
        <div className="hero-top">
          <div className="hero-identity">
            <MaskText text="Kidist Kemal" as="h1" className="reveal delay-1" />
            <p className="hero-headline reveal delay-2">
              <span className="hero-role">Full-Stack Developer</span>
              <span className="hero-stack">
                React • Next.js • Flutter • AI Enthusiast
              </span>
              <span className="hero-promise">
                Turning Ideas into Scalable Digital Products
              </span>
            </p>
          </div>
          <Portrait compact className="reveal delay-2" />
        </div>
        <div className="hero-body">
          <div className="hero-col reveal delay-3">
            <p className="hero-kicker">About me</p>
            <p className="hero-pull">Creative by nature. Developer by choice.</p>
            <p className="hero-intro">
              I’m Kidist Kemal, a creative developer from Ethiopia who enjoys
              turning ideas into useful digital experiences. I build thoughtful,
              human-centered products around technology, usability, and
              purposeful design — solving real problems and making technology
              more accessible.
            </p>
          </div>
          <div className="hero-col reveal delay-3">
            <p className="hero-kicker">A little more about me</p>
            <p className="hero-pull">
              Faith sits in the work without needing a spotlight.
            </p>
            <p className="hero-intro">
              I pray about my goals, and I give <em>God</em> credit for the
              things that land.
            </p>
            <div className="what-if">
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
        <a className="hero-scroll reveal delay-4" href="/#work">
          Scroll to the work
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
