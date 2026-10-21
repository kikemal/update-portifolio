"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
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
        <Image
          src={media.src}
          alt={media.alt}
          fill
          sizes="(max-width: 900px) 100vw, 42vw"
        />
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
        <Reveal>
          <div className="section-head">
            <div>
              <p className="kicker">Selected work</p>
              <h2 id="work-title">Work</h2>
            </div>
            <p className="section-note">
              Hover or focus a title to change the preview. Every project opens
              into a longer note — nothing essential is hover-only.
            </p>
          </div>
        </Reveal>
        <div className="work-layout">
          <div className="project-list">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 70}>
                <Link
                  href={`/work/${project.slug}`}
                  className={cx("project-row", index === active && "is-active")}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  data-cursor="View project"
                >
                  <span className="project-idx">0{index + 1}</span>
                  <span className="project-name">
                    <span>{project.name}</span>
                  </span>
                  <span className="project-meta">
                    {project.kicker}
                    {project.year ? ` · ${project.year}` : ""}
                  </span>
                  <span className="project-copy">{project.summary}</span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal variant="media" delay={80} className="preview-stage">
            {projects.map((project, index) => (
              <Preview key={project.slug} project={project} active={index === active} />
            ))}
            <span className="preview-label">{current.name}</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
