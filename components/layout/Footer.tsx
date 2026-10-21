import { availableSocials, nav, site } from "@/lib/content";
import { AnimatedLink } from "@/components/ui/AnimatedLink";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap">
        <p className="footer-banner">
          <span>Good ideas start somewhere</span>
          <span className="footer-rule" aria-hidden="true" />
          <span className="footer-star" aria-hidden="true">
            ✦
          </span>
        </p>
        <div className="footer-main">
          <div className="footer-idea">
            <a className="footer-cta" href="/#contact" data-cursor="Talk">
              <span className="footer-spark" aria-hidden="true">
                ✦
              </span>
              <span className="footer-question">Have a good idea?</span>
              <span className="footer-orbit" aria-hidden="true" />
              <span className="footer-arrow" aria-hidden="true">
                →
              </span>
            </a>
            <p className="footer-offer">Let’s make something meaningful.</p>
          </div>
          <div className="footer-aside">
            <nav aria-label="Footer">
              {nav.map((item) => (
                <p key={item.id}>
                  <AnimatedLink href={item.href}>{item.label}</AnimatedLink>
                </p>
              ))}
            </nav>
            {availableSocials.length ? (
              <p className="footer-socials">
                {availableSocials.map((item, index) => (
                  <span key={item.id}>
                    {index > 0 ? " · " : ""}
                    <a
                      href={item.url ?? undefined}
                      target="_blank"
                      rel="noreferrer"
                      className="ink"
                    >
                      {item.label}
                    </a>
                  </span>
                ))}
              </p>
            ) : null}
          </div>
        </div>
        <p className="footer-motto">
          <span className="footer-rule" aria-hidden="true" />
          <span>Build with purpose</span>
          <span className="footer-star" aria-hidden="true">
            ✦
          </span>
          <span>Think with curiosity</span>
          <span className="footer-star" aria-hidden="true">
            ✦
          </span>
          <span>Make it matter</span>
          <span className="footer-rule" aria-hidden="true" />
        </p>
        <div className="footer-meta">
          <p>
            © {year} {site.name} · Built with care in {site.location}
          </p>
          <p className="footer-quiet">Quiet first. Then the making starts.</p>
        </div>
      </div>
    </footer>
  );
}
