"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cx } from "@/lib/utils";

const sectionIds = ["about", "work", "awards", "cv", "contact"];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const nodes = sectionIds
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link href="/#" className="brand" data-cursor="Home" aria-label={`${site.name}, home`}>
          <Logo variant="nav" />
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={cx("nav-link", active === item.id && "is-active")}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="nav-tools">
          <ThemeToggle />
          <button
            type="button"
            className="icon-btn menu-btn"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="visually-hidden">{open ? "Close menu" : "Open menu"}</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              {open ? (
                <path d="M3 3l10 10M13 3 3 13" stroke="currentColor" strokeWidth="1.4" />
              ) : (
                <path d="M2 4.5h12M2 8h12M2 11.5h12" stroke="currentColor" strokeWidth="1.4" />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div id="mobile-nav" className={cx("mobile-panel", open && "is-open")}>
        {nav.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={cx("nav-link", active === item.id && "is-active")}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
