"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { certificates, featuredAward } from "@/lib/content";
import { cx } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

export function Awards() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const current = certificates[active];

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <section className="section" id="awards" aria-labelledby="awards-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="kicker">Recognition</p>
            <h2 id="awards-title">Awards</h2>
          </div>
          <p className="section-note">
            The headline award belongs to a team. The certificates are study I
            can stand behind.
          </p>
        </div>
        <Reveal>
          <div className="award-feature">
            <p className="award-mark">
              1st
              <br />
              place.
            </p>
            <div className="award-copy">
              <p className="kicker">
                {featuredAward.date} · {featuredAward.placeDetail}
              </p>
              <h3>{featuredAward.title}</h3>
              <p>
                A team award for AYNE, a voice-first assistant built for visually
                impaired people. I was one member of that team — not the sole
                winner. The night was short, the problem was real, and the work
                was shared.
              </p>
              <button
                type="button"
                className="award-shot media-zoom"
                onClick={() => setOpen(true)}
                data-cursor="View"
                aria-label="Open first-place certificate"
              >
                <Image
                  src={featuredAward.image}
                  alt="First-place certificate from the Cursor AI Hackathon Ethiopia, presented to Kidist Kemal Muhamed."
                  width={1600}
                  height={1100}
                />
              </button>
            </div>
          </div>
        </Reveal>
        <div className="certs">
          <div>
            {certificates.map((item, index) => (
              <button
                type="button"
                key={item.id}
                className={cx("cert-row", index === active && "is-active")}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                aria-pressed={index === active}
                data-cursor="Preview"
              >
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.issuer}</p>
                </div>
                <time dateTime={item.date}>{item.date}</time>
              </button>
            ))}
          </div>
          <div className="cert-preview" aria-live="polite">
            {current.image ? (
              <div>
                <Image
                  src={current.image}
                  alt={`${current.title} certificate from ${current.issuer}`}
                  width={720}
                  height={520}
                />
                {current.verifyUrl ? (
                  <p style={{ marginTop: "0.8rem" }}>
                    <a className="ink" href={current.verifyUrl} target="_blank" rel="noreferrer">
                      Verify certificate
                    </a>
                  </p>
                ) : null}
              </div>
            ) : (
              <div>
                <strong
                  style={{
                    display: "block",
                    color: "var(--ink)",
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.5rem",
                    marginBottom: "0.4rem",
                  }}
                >
                  {current.title}
                </strong>
                Certificate image still needed for {current.issuer}, {current.date}.
              </div>
            )}
          </div>
        </div>
      </div>
      {open ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Certificate">
          <button type="button" className="media-zoom" onClick={() => setOpen(false)}>
            <Image
              src={featuredAward.image}
              alt="First-place certificate from the Cursor AI Hackathon Ethiopia, presented to Kidist Kemal Muhamed."
              width={1600}
              height={1100}
            />
            <span className="visually-hidden">Close certificate preview</span>
          </button>
        </div>
      ) : null}
    </section>
  );
}
