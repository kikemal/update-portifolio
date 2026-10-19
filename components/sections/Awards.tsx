"use client";

import Image from "next/image";
import { useState } from "react";
import { certificates } from "@/lib/content";
import { cx } from "@/lib/utils";

export function Awards() {
  const [active, setActive] = useState(0);
  const current = certificates[active];

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
        <div className="award-feature">
          <p className="award-mark">
            1st
            <br />
            place.
          </p>
          <div className="award-copy">
            <p className="kicker">July 2026 · Adwa Museum, Addis Ababa</p>
            <h3>Cursor AI Hackathon Ethiopia</h3>
            <p>
              A team award for AYNE, a voice-first assistant built for visually
              impaired people. I was one member of that team — not the sole
              winner. The night was short, the problem was real, and the work
              was shared.
            </p>
          </div>
        </div>
        <div className="certs">
          <div>
            {certificates.map((item, index) => (
              <button
                type="button"
                key={item.id}
                className={cx("cert-row", index === active && "is-active")}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                aria-pressed={index === active}
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
              <Image
                src={current.image}
                alt={`${current.title} certificate from ${current.issuer}`}
                width={720}
                height={520}
              />
            ) : (
              <div>
                <strong style={{ display: "block", color: "var(--ink)", fontFamily: "var(--font-serif)", fontSize: "1.8rem", marginBottom: "0.4rem" }}>
                  {current.title}
                </strong>
                Certificate image still needed for {current.issuer}, {current.date}.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
