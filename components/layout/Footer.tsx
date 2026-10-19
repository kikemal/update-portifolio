import { availableSocials, nav, site } from "@/lib/content";
import { AnimatedLink } from "@/components/ui/AnimatedLink";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <p className="footer-name">
            <span>Kidist</span> <span>Kemal</span>
          </p>
          <div>
            <nav aria-label="Footer">
              {nav.map((item) => (
                <p key={item.id}>
                  <AnimatedLink href={item.href}>{item.label}</AnimatedLink>
                </p>
              ))}
            </nav>
            <p style={{ marginTop: "1rem" }}>
              <AnimatedLink href="/#contact">Let’s talk</AnimatedLink>
            </p>
          </div>
        </div>
        <div className="footer-meta">
          <p>
            © {year} {site.name}. Built with care in {site.location}.
          </p>
          <p>
            {availableSocials.map((item, index) => (
              <span key={item.id}>
                {index > 0 ? " · " : ""}
                <a href={item.url ?? undefined} target="_blank" rel="noreferrer" className="ink">
                  {item.label}
                </a>
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
