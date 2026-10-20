"use client";

import Image from "next/image";
import { useState } from "react";
import { cvHighlights, site } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Lightbox } from "@/components/ui/Lightbox";

export function Resume({ cvAvailable }: { cvAvailable: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <section className="section" id="cv" aria-labelledby="cv-title">
      <div className="wrap resume-box">
        <div>
          <p className="kicker">On paper</p>
          <h2 id="cv-title">CV</h2>
          <p className="hero-lead" style={{ marginTop: "0.85rem" }}>
            A concise picture of studies, tools, projects, and the team award.
            Work history is only what has been confirmed.
          </p>
          <div className="cv-actions">
            <Button type="button" disabled={!cvAvailable} onClick={() => setOpen(true)}>
              Preview CV
            </Button>
            <Button
              href={cvAvailable ? site.cvPath : undefined}
              ghost
              download={cvAvailable}
              disabled={!cvAvailable}
            >
              Download CV
            </Button>
          </div>
          {!cvAvailable && (
            <p className="need" style={{ marginTop: "1rem" }}>
              CV file not in place yet. Add it at public/files/kidist-kemal-cv.png.
            </p>
          )}
        </div>
        <dl>
          {cvHighlights.map((item) => (
            <div className="highlight" key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {open && cvAvailable ? (
        <Lightbox title="CV preview" onClose={() => setOpen(false)}>
          <Image src={site.cvPath} alt="Kidist Kemal CV" width={900} height={1270} quality={95} />
          <p className="lightbox-actions">
            <a className="ink" href={site.cvPath} target="_blank" rel="noreferrer">
              Open in a new tab
            </a>
            {" · "}
            <a className="ink" href={site.cvPath} download>
              Download
            </a>
          </p>
        </Lightbox>
      ) : null}
    </section>
  );
}
