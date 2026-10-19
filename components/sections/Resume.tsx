import Image from "next/image";
import { cvHighlights, site } from "@/lib/content";
import { Button } from "@/components/ui/Button";

export function Resume({ cvAvailable }: { cvAvailable: boolean }) {
  return (
    <section className="section" id="cv" aria-labelledby="cv-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="kicker">On paper</p>
            <h2 id="cv-title">CV</h2>
          </div>
          <p className="section-note">
            A concise picture of studies, tools, projects, and the team award.
            Work history is only what has been confirmed.
          </p>
        </div>
        <div className="resume-box">
          <div>
            <p className="hero-lead" style={{ marginTop: 0 }}>
              I’m a creative developer looking for freelance collaborations —
              someone who can take a fuzzy idea, ask better questions, and shape
              it into a working digital experience.
            </p>
            <div className="cv-actions">
              <Button href={cvAvailable ? site.cvPath : undefined} disabled={!cvAvailable}>
                View CV
              </Button>
              <Button
                href={cvAvailable ? site.cvPath : undefined}
                ghost
                download={cvAvailable}
                disabled={!cvAvailable}
              >
                Download CV
              </Button>
            </div>
            {!cvAvailable && (
              <p className="need" style={{ marginTop: "1rem" }}>
                CV file not in place yet. Add it at public/files/kidist-kemal-cv.png.
              </p>
            )}
            <dl>
              {cvHighlights.map((item) => (
                <div className="highlight" key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="cv-preview">
            {cvAvailable ? (
              <Image
                src={site.cvPath}
                alt="Kidist Kemal CV"
                width={900}
                height={1270}
              />
            ) : (
              <div className="cv-empty">
                <div>
                  <strong style={{ display: "block", color: "var(--ink)", fontFamily: "var(--font-serif)", fontSize: "2rem" }}>
                    CV preview
                  </strong>
                  Place kidist-kemal-cv.png in public/files to enable view and
                  download.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
