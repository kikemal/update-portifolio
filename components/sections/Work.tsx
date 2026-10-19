"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects } from "@/lib/content";
import { cx } from "@/lib/utils";

function Preview({
  project,
  active,
}: {
  project: (typeof projects)[number];
  active: boolean;
}) {
  const media = project.media[0];

  return (
    <div className={cx("preview-frame", active && "is-active")} aria-hidden={!active}>
      {media.type === "image" && media.src ? (
        <Image src={media.src} alt={media.alt} fill sizes="(max-width: 900px) 100vw, 48vw" />
      ) : media.type === "video" && media.src ? (
        <video src={media.src} muted playsInline preload="metadata" />
      ) : (
        <div className="placeholder-art">
          <div>
            <strong>{project.name}</strong>
            Screenshots still to be added.
          </div>
        </div>
      )}
    </div>
  );
}

export function Work() {
  const [active, setActive] = useState(0);
  const current = projects[active];

  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="kicker">Selected work</p>
            <h2 id="work-title">Work</h2>
          </div>
          <p className="section-note">
            Hover a title to change the preview. Every project opens into a
            longer note.
          </p>
        </div>
        <div className="work-layout">
          <div className="project-list" role="list">
            {projects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className={cx("project-row", index === active && "is-active")}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                role="listitem"
              >
                <span className="project-idx">0{index + 1}</span>
                <span className="project-name">
                  <span>{project.name}</span>
                </span>
                <span className="project-meta">
                  {project.kicker}
                  {project.year ? ` · ${project.year}` : ""}
                </span>
              </Link>
            ))}
          </div>
          <div className="preview-stage" aria-live="polite">
            {projects.map((project, index) => (
              <Preview key={project.slug} project={project} active={index === active} />
            ))}
            <span className="preview-label">{current.name}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
