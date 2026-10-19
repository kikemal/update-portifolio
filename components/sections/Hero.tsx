"use client";

import Image from "next/image";
import { useState } from "react";
import { site, whatIfs } from "@/lib/content";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const [idea, setIdea] = useState(0);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow reveal">
            {site.role} · {site.location}
          </p>
          <h1 id="hero-title" className="reveal delay-1">
            Kidist
            <br />
            Kemal
          </h1>
          <p className="hero-lead reveal delay-2">
            I turn quiet questions into useful digital experiences. I can be still
            in a room and loud in my head — sketching products, interactions, and
            the next version of an idea until it can actually be used.
          </p>
          <div className="what-if reveal delay-3">
            <p className="what-if-label">
              {site.phrase} Hover the line if you want to see where it goes.
            </p>
            <button
              type="button"
              className="what-if-btn"
              onMouseEnter={() => setIdea((value) => (value + 1) % whatIfs.length)}
              onFocus={() => setIdea((value) => (value + 1) % whatIfs.length)}
              onClick={() => setIdea((value) => (value + 1) % whatIfs.length)}
              aria-describedby="what-if-idea"
            >
              what if we built this?
            </button>
            <span id="what-if-idea" className="what-if-next">
              {whatIfs[idea]}
            </span>
          </div>
          <div className="hero-actions reveal delay-4">
            <Button href="/#work">Explore my work</Button>
            <Button href="/#contact" ghost>
              Let’s talk
            </Button>
          </div>
        </div>
        <figure className="portrait-frame reveal delay-2">
          <div className="portrait-media">
            <Image
              src="/images/portrait.jpg"
              alt="Portrait of Kidist Kemal, seated, looking toward the camera."
              fill
              priority
              sizes="(max-width: 900px) 90vw, 420px"
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
