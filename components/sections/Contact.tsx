"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";

type Status = "idle" | "loading" | "success" | "unconfigured" | "error";

const reasons = ["Freelance project", "Collaboration", "Something else"];

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const reason = String(data.get("reason") || "").trim();
    const message = String(data.get("message") || "").trim();
    const nextErrors: Record<string, string> = {};

    if (!name) nextErrors.name = "Please add your name.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please add a valid email.";
    }
    if (!reason) nextErrors.reason = "Please choose a reason.";
    if (message.length < 12) nextErrors.message = "Tell me a little more about the idea.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, reason, message }),
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
        <div>
          <p className="kicker">Freelance & collaborations</p>
          <h2 id="contact-title">Have an idea? Let’s explore what we could build.</h2>
          <p className="contact-lead">
            If you have a product in mind, a messy brief, or a half-formed “what
            if” — I would like to hear it. Freelance inquiries are welcome.
          </p>
          <div className="direct-links">
            {site.email ? (
              <a className="ink" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            ) : (
              <p className="need">Email address still needed — LinkedIn is the live contact path for now.</p>
            )}
            <a className="ink" href={site.linkedin} target="_blank" rel="noreferrer">
              Message me on LinkedIn
            </a>
            <a className="ink" href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
          <SocialLinks />
        </div>
        <form className="form" onSubmit={onSubmit} noValidate>
          <label className="field">
            <span>Name</span>
            <input name="name" autoComplete="name" required />
            {errors.name ? <span className="error">{errors.name}</span> : null}
          </label>
          <label className="field">
            <span>Email</span>
            <input name="email" type="email" autoComplete="email" required />
            {errors.email ? <span className="error">{errors.email}</span> : null}
          </label>
          <label className="field">
            <span>Reason</span>
            <select name="reason" defaultValue="" required>
              <option value="" disabled>
                What brings you here?
              </option>
              {reasons.map((reason) => (
                <option key={reason} value={reason}>
                  {reason}
                </option>
              ))}
            </select>
            {errors.reason ? <span className="error">{errors.reason}</span> : null}
          </label>
          <label className="field">
            <span>Message</span>
            <textarea name="message" required />
            {errors.message ? <span className="error">{errors.message}</span> : null}
          </label>
          <Button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Sending" : "Send the idea"}
          </Button>
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
