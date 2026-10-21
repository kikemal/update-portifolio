"use client";

import Image from "next/image";
import { useState } from "react";
import { featuredAward, getProject } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Lightbox } from "@/components/ui/Lightbox";
import { Reveal } from "@/components/ui/Reveal";
import { CertificateCarousel } from "@/components/sections/CertificateCarousel";

export function Awards() {
  const ayne = getProject("ayne");
  const [previewAward, setPreviewAward] = useState(false);

  return (
    <section className="section" id="awards" aria-labelledby="awards-title">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <div>
              <p className="kicker">Team achievement</p>
              <h2 id="awards-title">First place</h2>
            </div>
            <p className="section-note">
              AYNE and the hackathon award belong together — a shared night of
              building, not a solo trophy.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80} variant="media">
          <div className="ayne-award">
            <article className="ayne-card">
              {ayne?.media[0]?.src ? (
                <div className="pair-media">
                  <Image
                    src={ayne.media[0].src}
                    alt={ayne.media[0].alt}
                    fill
                    quality={90}
                    sizes="(max-width: 820px) 100vw, 48vw"
                  />
                </div>
              ) : null}
              <p className="pair-label">
                {ayne?.kicker} · {ayne?.year}
              </p>
              <h3>{ayne?.name}</h3>
              <p className="pair-copy pair-clamp">
                AYNE is a voice-first AI assistant concept designed to support
                people with visual impairments — helping them navigate and
                understand a physical environment through spoken commands.
              </p>
              <p className="pair-copy">
                Team MVP built at the Cursor AI Hackathon Ethiopia.
              </p>
              <Button href="/work/ayne">Read the case</Button>
            </article>

            <article className="award-card">
              <button
                type="button"
                className="pair-media award-shot media-zoom"
                onClick={() => setPreviewAward(true)}
                data-cursor="View"
                aria-label="Open first-place certificate"
              >
                <Image
                  src={featuredAward.image}
                  alt="First-place certificate from the Cursor AI Hackathon Ethiopia, presented to Kidist Kemal Muhamed."
                  fill
                  quality={95}
                  sizes="(max-width: 820px) 100vw, 48vw"
                />
              </button>
              <div className="pair-meta">
                <p className="pair-label">Jul 25–26, 2026 · Addis Ababa</p>
                <span className="pair-pill">1st place</span>
              </div>
              <h3>{featuredAward.title}</h3>
              <p className="pair-copy">
                A team award for AYNE. I was one member of that team — not the
                sole winner.
              </p>
              <Button type="button" ghost onClick={() => setPreviewAward(true)}>
                View certificate
              </Button>
            </article>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <CertificateCarousel />
        </Reveal>
      </div>

      {previewAward ? (
        <Lightbox title="Certificate preview" onClose={() => setPreviewAward(false)}>
          <Image
            src={featuredAward.image}
            alt="First-place certificate from the Cursor AI Hackathon Ethiopia, presented to Kidist Kemal Muhamed as a team member."
            width={1600}
            height={1100}
            quality={95}
          />
        </Lightbox>
      ) : null}
    </section>
  );
}
