"use client";

import { useEffect, useState } from "react";

export function Intro() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || sessionStorage.getItem("kidist-intro") === "1") return;
    setOpen(true);
    const timer = window.setTimeout(() => dismiss(), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  function dismiss() {
    sessionStorage.setItem("kidist-intro", "1");
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div className="intro" role="dialog" aria-label="Introduction">
      <div className="intro-inner">
        <p>The quiet mind, in motion</p>
        <h2>Kidist Kemal</h2>
        <button type="button" onClick={dismiss}>
          Skip
        </button>
      </div>
    </div>
  );
}
