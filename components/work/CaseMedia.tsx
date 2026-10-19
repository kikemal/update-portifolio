"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { ProjectMedia } from "@/lib/content";

export function CaseMedia({ item }: { item: ProjectMedia }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

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
          <div className="lightbox" role="dialog" aria-modal="true">
            <button type="button" className="media-zoom" onClick={() => setOpen(false)}>
              <Image src={item.src} alt={item.alt} width={1600} height={1000} />
              <span className="visually-hidden">Close media</span>
            </button>
          </div>
        ) : null}
      </>
    );
  }

  if (item.type === "video" && item.src) {
    return (
      <div className="case-hero-media">
        <video src={item.src} controls playsInline preload="metadata" poster={undefined} />
        {item.caption ? (
          <p style={{ padding: "0.8rem 1rem", color: "var(--muted)" }}>{item.caption}</p>
        ) : null}
      </div>
    );
  }

  return (
    <div className="case-hero-media">
      <div className="placeholder-art" style={{ minHeight: "22rem" }}>
        <div>
          <strong>Media</strong>
          {item.alt}
        </div>
      </div>
    </div>
  );
}
