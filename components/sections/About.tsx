"use client";

import { useState } from "react";
import { whatIfs } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  const [idea, setIdea] = useState(0);

  function cycle() {
    setIdea((value) => (value + 1) % whatIfs.length);
  }

  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="wrap">
        <div className="about-grid">
          <Reveal className="about-col">
            <p className="about-kicker">About me</p>
            <h2 id="about-title" className="about-pull">
              Creative by nature. Developer by choice.
            </h2>
            <p className="about-intro">
              I’m Kidist Kemal, a creative developer from Ethiopia who enjoys
              turning ideas into useful digital experiences. I build thoughtful,
              human-centered products around technology, usability, and
              purposeful design — solving real problems and making technology
              more accessible.
            </p>
          </Reveal>
          <Reveal className="about-col" delay={80}>
            <p className="about-kicker">A little more about me</p>
            <p className="about-pull">
              Faith sits in the work without needing a spotlight.
            </p>
            <p className="about-intro">
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}
