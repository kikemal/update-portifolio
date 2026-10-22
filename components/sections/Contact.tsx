"use client";

import { FormEvent, useId, useRef, useState } from "react";
import { site } from "@/lib/content";
import {
  buildWhatsAppUrl,
  validateContactFields,
  type ContactFieldErrors,
  type ContactFields,
} from "@/lib/contact";
import { Reveal } from "@/components/ui/Reveal";
import { SocialIcon } from "@/components/ui/SocialLinks";

type Status = "idle" | "loading" | "opened" | "error";

function openExternalUrl(href: string) {
  const anchor = document.createElement("a");
  anchor.href = href;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
}

const contactChannels = [
  { id: "github", label: "GitHub", url: site.github },
  { id: "linkedin", label: "LinkedIn", url: site.linkedin },
  { id: "telegram", label: "Telegram", url: site.telegram },
  { id: "whatsapp", label: "WhatsApp", url: site.whatsapp },
] as const;

export function Contact() {
  const formId = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [whatsAppHref, setWhatsAppHref] = useState<string | null>(null);
  const submittingRef = useRef(false);

  function clearTransientStatus() {
    if (status === "opened" || status === "error") setStatus("idle");
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submittingRef.current || status === "loading") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const fields: ContactFields = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };

    const nextErrors = validateContactFields(fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    submittingRef.current = true;
    setStatus("loading");

    try {
      const href = buildWhatsAppUrl(site.whatsapp, fields);
      setWhatsAppHref(href);
      openExternalUrl(href);
      setStatus("opened");
    } catch {
      setStatus("error");
    } finally {
      submittingRef.current = false;
    }
  }

  const nameErrorId = `${formId}-name-error`;
  const emailErrorId = `${formId}-email-error`;
  const messageErrorId = `${formId}-message-error`;

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact-grid">
        <Reveal>
          <div className="contact-intro">
            <h2 id="contact-title">Have an idea? Let’s build it.</h2>
            <p className="contact-lead">
              Got a product in mind or a rough brief? I’m open to freelance work.
            </p>
            {site.email ? (
              <a className="contact-email" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            ) : null}
            <div className="contact-pills">
              {contactChannels.map((item) => (
                <a
                  key={item.id}
                  className="contact-pill"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.label} (opens in a new tab)`}
                >
                  <SocialIcon id={item.id} />
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <form className="form" onSubmit={onSubmit} noValidate aria-busy={status === "loading"}>
            <div className="field">
              <input
                name="name"
                autoComplete="name"
                placeholder="Your name"
                aria-label="Your name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? nameErrorId : undefined}
                required
                onChange={clearTransientStatus}
              />
              {errors.name ? (
                <span className="error" id={nameErrorId}>
                  {errors.name}
                </span>
              ) : null}
            </div>
            <div className="field">
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Your email"
                aria-label="Your email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? emailErrorId : undefined}
                required
                onChange={clearTransientStatus}
              />
              {errors.email ? (
                <span className="error" id={emailErrorId}>
                  {errors.email}
                </span>
              ) : null}
            </div>
            <div className="field">
              <textarea
                name="message"
                rows={4}
                placeholder="Tell me about your idea"
                aria-label="Tell me about your idea"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? messageErrorId : undefined}
                required
                onChange={clearTransientStatus}
              />
              {errors.message ? (
                <span className="error" id={messageErrorId}>
                  {errors.message}
                </span>
              ) : null}
            </div>
            <button className="contact-send" type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Opening WhatsApp" : "Send via WhatsApp"}
            </button>
            <p className="contact-hint">
              WhatsApp will open with your message so you can review and send it yourself.
            </p>
            <p
              className={`form-status ${status === "opened" ? "ok" : status === "error" ? "bad" : ""}`}
              role="status"
              aria-live="polite"
            >
              {status === "opened" && (
                <>
                  WhatsApp is opening with your message. Review it there and send it when you’re
                  ready.{" "}
                  {whatsAppHref ? (
                    <a
                      className="contact-fallback"
                      href={whatsAppHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Continue in WhatsApp
                    </a>
                  ) : null}
                </>
              )}
              {status === "error" &&
                "WhatsApp could not be opened. Use the WhatsApp button above, or try again."}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
