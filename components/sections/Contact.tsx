"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/content";

type Status = "idle" | "loading" | "success" | "unconfigured" | "error";

const liveSocials = [
  { id: "github", label: "GitHub", url: site.github },
  { id: "linkedin", label: "LinkedIn", url: site.linkedin },
];

// Add a url later to show these pills:
// const pendingSocials = [
//   { id: "x", label: "X", url: null },
//   { id: "instagram", label: "Instagram", url: null },
//   { id: "facebook", label: "Facebook", url: null },
//   { id: "telegram", label: "Telegram", url: null },
// ];

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const nextErrors: Record<string, string> = {};

    if (!name) nextErrors.name = "Please add your name.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please add a valid email.";
    }
    if (message.length < 12) nextErrors.message = "Tell me a little more about the idea.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const payload = (await response.json()) as { ok: boolean; reason?: string };
      if (response.status === 501 || payload.reason === "unconfigured") {
        setStatus("unconfigured");
        return;
      }
      if (!response.ok || !payload.ok) {
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact-grid">
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
            {liveSocials.map((item) => (
              <a
                key={item.id}
                className="contact-pill"
                href={item.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`${item.label} (opens in a new tab)`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <form className="form" onSubmit={onSubmit} noValidate>
          <div className="field">
            <input
              name="name"
              autoComplete="name"
              placeholder="Your name"
              aria-label="Your name"
              required
            />
            {errors.name ? <span className="error">{errors.name}</span> : null}
          </div>
          <div className="field">
            <input
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Your email"
              aria-label="Your email"
              required
            />
            {errors.email ? <span className="error">{errors.email}</span> : null}
          </div>
          <div className="field">
            <textarea
              name="message"
              rows={4}
              placeholder="Tell me about your idea"
              aria-label="Tell me about your idea"
              required
            />
            {errors.message ? <span className="error">{errors.message}</span> : null}
          </div>
          <button className="contact-send" type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Sending" : "Send message"}
          </button>
          <p
            className={`form-status ${status === "success" || status === "unconfigured" ? "ok" : status === "error" ? "bad" : ""}`}
            role="status"
            aria-live="polite"
          >
            {status === "success" && "Received. I’ll write back as soon as I can."}
            {status === "unconfigured" &&
              "The form is ready, but a sending service is not connected yet. Please use LinkedIn for now."}
            {status === "error" && "Something went wrong. Please try LinkedIn, or try again in a moment."}
          </p>
        </form>
      </div>
    </section>
  );
}
