"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { certificates, featuredAward, getProject } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Lightbox } from "@/components/ui/Lightbox";
import { Reveal } from "@/components/ui/Reveal";
import { cx } from "@/lib/utils";

export function Awards() {
  const ayne = getProject("ayne");
  const scroller = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [preview, setPreview] = useState<(typeof certificates)[number] | "award" | null>(null);

  useEffect(() => {
    const node = scroller.current;
    if (!node) return;

    const onScroll = () => {
      const cards = [...node.querySelectorAll<HTMLElement>(".carousel-card")];
      if (!cards.length) return;
      const mid = node.scrollLeft + node.clientWidth / 2;
      let nearest = 0;
      let distance = Infinity;
      cards.forEach((card, index) => {
        const center = card.offsetLeft + card.offsetWidth / 2;
        const delta = Math.abs(center - mid);
        if (delta < distance) {
          distance = delta;
          nearest = index;
        }
      });
      setActive(nearest);
    };

    node.addEventListener("scroll", onScroll, { passive: true });
    return () => node.removeEventListener("scroll", onScroll);
  }, []);

  function go(direction: number) {
    const node = scroller.current;
    const card = node?.querySelector<HTMLElement>(".carousel-card");
    if (!node || !card) return;
    const amount = card.getBoundingClientRect().width + 16;
    node.scrollBy({ left: direction * amount, behavior: "smooth" });
  }

  function jump(index: number) {
    const card = scroller.current?.querySelectorAll<HTMLElement>(".carousel-card")[index];
    card?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }

  const previewImage =
    preview === "award"
      ? {
          src: featuredAward.image,
          alt: "First-place certificate from the Cursor AI Hackathon Ethiopia, presented to Kidist Kemal Muhamed as a team member.",
        }
      : preview?.image
        ? {
            src: preview.image,
            alt: `${preview.title} certificate from ${preview.issuer}`,
          }
        : null;

  const previewFile =
    preview && preview !== "award" && "file" in preview && preview.file
      ? {
          src: preview.file,
          alt: `${preview.title} certificate from ${preview.issuer}`,
        }
      : null;

  return (
    <section className="section" id="awards" aria-labelledby="awards-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="kicker">Team achievement</p>
            <h2 id="awards-title">First place</h2>
          </div>
          <p className="section-note">
            AYNE and the hackathon award belong together — a shared night of
            building, not a solo trophy.
          </p>
        </div>

        <Reveal>
          <div className="ayne-award">
            <article className="ayne-card">
              {ayne?.media[0]?.src ? (
                <div className="ayne-card-media">
                  <Image
                    src={ayne.media[0].src}
                    alt={ayne.media[0].alt}
                    fill
                    quality={90}
                    sizes="(max-width: 900px) 100vw, 48vw"
                  />
                </div>
              ) : null}
              <p className="kicker">{ayne?.kicker} · {ayne?.year}</p>
              <h3>{ayne?.name}</h3>
              <p>
                AYNE is a voice-first AI assistant concept designed to support
                people with visual impairments — helping them navigate and
                understand a physical environment through spoken commands.
              </p>
              <p>
                Built as a team MVP at the Cursor AI Hackathon Ethiopia, with
                teammates Mulualem Mekonin, Melkamu Teshome, Obsan Habtamu, and
                Samuel Feyisa.
              </p>
              <Button href="/work/ayne">Read the case</Button>
            </article>

            <article className="award-card">
              <p className="award-mark">1st place</p>
              <h3>Cursor AI Hackathon Ethiopia</h3>
              <p className="kicker">
                {featuredAward.date} · {featuredAward.placeDetail}
              </p>
              <p>
                A team award for AYNE. I was one member of that team — not the
                sole winner.
              </p>
              <button
                type="button"
                className="award-shot media-zoom"
                onClick={() => setPreview("award")}
                data-cursor="View"
                aria-label="Open first-place certificate"
              >
                <Image
                  src={featuredAward.image}
                  alt="First-place certificate from the Cursor AI Hackathon Ethiopia, presented to Kidist Kemal Muhamed."
                  width={1200}
                  height={840}
                  quality={95}
                />
              </button>
            </article>
          </div>
        </Reveal>

        <div className="carousel-head">
          <div>
            <p className="kicker">Study</p>
            <h3 className="carousel-title">Certificates</h3>
          </div>
          <div className="carousel-nav">
            <button type="button" className="icon-btn" onClick={() => go(-1)} aria-label="Previous certificate">
              ←
            </button>
            <button type="button" className="icon-btn" onClick={() => go(1)} aria-label="Next certificate">
              →
            </button>
          </div>
        </div>

        <div
          className="carousel-viewport"
          ref={scroller}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") {
              event.preventDefault();
              go(1);
            }
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              go(-1);
            }
          }}
          aria-label="Certificate carousel"
        >
          {certificates.map((item, index) => (
            <article key={item.id} className={cx("carousel-card", index === active && "is-active")}>
              {item.image ? (
                <button
                  type="button"
                  className="carousel-media"
                  onClick={() => setPreview(item)}
                  data-cursor="Preview"
                  aria-label={`Open ${item.title} certificate`}
                >
                  <Image
                    src={item.image}
                    alt={`${item.title} certificate from ${item.issuer}`}
                    width={900}
                    height={640}
                    quality={95}
                  />
                </button>
              ) : item.file ? (
                <button
                  type="button"
                  className="carousel-media carousel-doc"
                  onClick={() => setPreview(item)}
                  data-cursor="Preview"
                  aria-label={`Open ${item.title} certificate`}
                >
                  <strong>{item.title}</strong>
                  Open the original PDF
                </button>
              ) : (
                <div className="carousel-placeholder">
                  <strong>{item.title}</strong>
                  Image still to be added.
                </div>
              )}
              <h3>{item.title}</h3>
              <p>
                {item.issuer} · {item.date}
              </p>
              {item.verifyUrl ? (
                <Link className="ink" href={item.verifyUrl} target="_blank" rel="noreferrer">
                  Verify
                </Link>
              ) : null}
            </article>
          ))}
        </div>

        <div className="carousel-dots" role="group" aria-label="Certificate position">
          {certificates.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={cx("carousel-dot", index === active && "is-active")}
              aria-label={`Show ${item.title}`}
              aria-current={index === active}
              onClick={() => jump(index)}
            />
          ))}
        </div>
      </div>

      {previewImage ? (
        <Lightbox title="Certificate preview" onClose={() => setPreview(null)}>
          <Image src={previewImage.src} alt={previewImage.alt} width={1600} height={1100} quality={95} />
        </Lightbox>
      ) : null}

      {previewFile ? (
        <Lightbox title="Certificate preview" onClose={() => setPreview(null)}>
          <iframe className="lightbox-pdf" src={previewFile.src} title={previewFile.alt} />
          <p className="lightbox-actions">
            <a className="ink" href={previewFile.src} target="_blank" rel="noreferrer">
              Open in a new tab
            </a>
          </p>
        </Lightbox>
      ) : null}
    </section>
  );
}
