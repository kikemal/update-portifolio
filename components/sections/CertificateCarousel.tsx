"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
  type PointerEvent,
} from "react";
import { certificates } from "@/lib/content";
import { Lightbox } from "@/components/ui/Lightbox";

const SWIPE_THRESHOLD = 48;
const AUTO_MS = 4500;

export function CertificateCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [preview, setPreview] = useState<(typeof certificates)[number] | null>(
    null,
  );
  const startX = useRef<number | null>(null);
  const ignoreClick = useRef(false);
  const count = certificates.length;
  const item = certificates[active];

  const go = useCallback(
    (direction: number) => {
      setActive((current) => (current + direction + count) % count);
    },
    [count],
  );

  useEffect(() => {
    if (count < 2 || preview || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => go(1), AUTO_MS);
    return () => window.clearInterval(timer);
  }, [count, go, paused, preview, active]);

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (preview) return;
    if (event.key === "ArrowRight") {
      event.preventDefault();
      event.stopPropagation();
      go(1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      event.stopPropagation();
      go(-1);
    }
  }

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    if (preview) return;
    if ((event.target as HTMLElement).closest("a")) return;
    startX.current = event.clientX;
  }

  function onPointerUp(event: PointerEvent<HTMLDivElement>) {
    const origin = startX.current;
    startX.current = null;
    if (origin == null || preview) return;
    const delta = origin - event.clientX;
    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    event.preventDefault();
    event.stopPropagation();
    ignoreClick.current = true;
    go(delta > 0 ? 1 : -1);
  }

  function onClickCapture(event: MouseEvent<HTMLDivElement>) {
    if (!ignoreClick.current) return;
    event.preventDefault();
    event.stopPropagation();
    ignoreClick.current = false;
  }

  const previewImage = preview?.image
    ? {
        src: preview.image,
        alt: `${preview.title} certificate from ${preview.issuer}`,
      }
    : null;

  const previewFile =
    preview && !preview.image && preview.file
      ? {
          src: preview.file,
          alt: `${preview.title} certificate from ${preview.issuer}`,
        }
      : null;

  return (
    <div
      className="cert-carousel"
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div className="carousel-head">
        <div>
          <p className="kicker">Study</p>
          <h3 className="carousel-title">Certificates</h3>
        </div>
        <div className="carousel-nav">
          <button
            type="button"
            className="icon-btn"
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              go(-1);
            }}
            aria-label="Previous certificate"
          >
            ←
          </button>
          <p className="carousel-count" aria-live="polite">
            {active + 1} / {count}
          </p>
          <button
            type="button"
            className="icon-btn"
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              go(1);
            }}
            aria-label="Next certificate"
          >
            →
          </button>
        </div>
      </div>

      <div
        className="carousel-stage"
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="Certificate carousel"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onClickCapture={onClickCapture}
        onPointerCancel={() => {
          startX.current = null;
        }}
      >
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {certificates.map((cert, index) => (
            <article
              key={cert.id}
              className="carousel-card"
              aria-hidden={index !== active}
              inert={index !== active}
            >
              {cert.image ? (
                <button
                  type="button"
                  className="carousel-media"
                  onClick={() => setPreview(cert)}
                  data-cursor="Preview"
                  aria-label={`Open ${cert.title} certificate`}
                >
                  <Image
                    src={cert.image}
                    alt={`${cert.title} certificate from ${cert.issuer}`}
                    fill
                    quality={95}
                    sizes="(max-width: 720px) 92vw, 40rem"
                    style={{ objectFit: "contain" }}
                  />
                </button>
              ) : cert.file ? (
                <button
                  type="button"
                  className="carousel-media carousel-doc"
                  onClick={() => setPreview(cert)}
                  data-cursor="Preview"
                  aria-label={`Open ${cert.title} certificate`}
                >
                  <strong>{cert.title}</strong>
                  Open the original PDF
                </button>
              ) : (
                <div className="carousel-placeholder">
                  <strong>{cert.title}</strong>
                  Image still to be added.
                </div>
              )}
              <h3>{cert.title}</h3>
              <p>
                {cert.issuer} · {cert.date}
              </p>
              {cert.verifyUrl ? (
                <Link
                  className="ink"
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Verify
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </div>

      <p className="visually-hidden" aria-live="polite">
        {item
          ? `${item.title} from ${item.issuer}, ${active + 1} of ${count}`
          : null}
      </p>

      {previewImage ? (
        <Lightbox title="Certificate preview" onClose={() => setPreview(null)}>
          <Image
            src={previewImage.src}
            alt={previewImage.alt}
            width={1600}
            height={1100}
            quality={95}
          />
        </Lightbox>
      ) : null}

      {previewFile ? (
        <Lightbox title="Certificate preview" onClose={() => setPreview(null)}>
          <iframe
            className="lightbox-pdf"
            src={previewFile.src}
            title={previewFile.alt}
          />
          <p className="lightbox-actions">
            <a className="ink" href={previewFile.src} target="_blank" rel="noreferrer">
              Open in a new tab
            </a>
          </p>
        </Lightbox>
      ) : null}
    </div>
  );
}
