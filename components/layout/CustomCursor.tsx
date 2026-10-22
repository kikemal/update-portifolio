"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const label = labelRef.current;
    if (!cursor || !label) return;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduce) return;

    document.body.classList.add("has-cursor");
    let x = 0;
    let y = 0;
    let px = 0;
    let py = 0;
    let frame = 0;

    const move = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      cursor.classList.add("is-on");
      const target = event.target as HTMLElement | null;
      const hot = target?.closest(
        "a, button, input, textarea, select, label, .project-row, .carousel-media, .portrait-hit, .award-shot, .what-if-btn, .media-zoom",
      ) as HTMLElement | null;
      cursor.classList.toggle("is-hot", Boolean(hot));
      const text = hot?.dataset.cursor;
      if (text) {
        label.textContent = text;
        cursor.classList.add("is-labeled");
      } else {
        label.textContent = "";
        cursor.classList.remove("is-labeled");
      }
    };

    const loop = () => {
      px += (x - px) * 0.32;
      py += (y - py) * 0.32;
      cursor.style.transform = `translate(${px}px, ${py}px) translate(-50%, -50%)`;
      frame = window.requestAnimationFrame(loop);
    };

    const hide = () => cursor.classList.remove("is-on");

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerleave", hide);
    frame = window.requestAnimationFrame(loop);

    return () => {
      document.body.classList.remove("has-cursor");
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerleave", hide);
    };
  }, []);

  return (
    <div className="cursor" ref={cursorRef} aria-hidden="true">
      <span className="cursor-label" ref={labelRef} />
    </div>
  );
}
