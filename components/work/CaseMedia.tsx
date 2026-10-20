"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProjectMedia } from "@/lib/content";
import { Lightbox } from "@/components/ui/Lightbox";

export function CaseMedia({ item }: { item: ProjectMedia }) {
  const [open, setOpen] = useState(false);

  if (item.type === "image" && item.src) {
    return (
      <>
        <button
          type="button"
          className="case-hero-media media-zoom"
          onClick={() => setOpen(true)}
          data-cursor="Expand"
          aria-label={`Expand ${item.alt}`}
        >
          <Image src={item.src} alt={item.alt} width={1600} height={1000} />
        </button>
        {open ? (
          <Lightbox title={item.alt} onClose={() => setOpen(false)}>
            <Image src={item.src} alt={item.alt} width={1600} height={1000} />
          </Lightbox>
        ) : null}
      </>
    );
  }

  if (item.type === "video" && item.src) {
    return (
      <div className="case-hero-media">
        <video src={item.src} controls playsInline preload="metadata" />
        {item.caption ? (
          <p style={{ padding: "0.8rem 1rem", color: "var(--muted)" }}>{item.caption}</p>
        ) : null}
      </div>
    );
  }

  return (
    <div className="case-hero-media">
      <div className="placeholder-art" style={{ minHeight: "18rem" }}>
        <div>
          <strong>Media</strong>
          {item.alt}
        </div>
      </div>
    </div>
  );
}
