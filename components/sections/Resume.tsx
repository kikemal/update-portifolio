export function Resume() {
  const cvHref = "/files/kidist-kemal-cv.pdf";

  return (
    <section className="section" id="cv" aria-labelledby="cv-title">
      <div className="wrap cv-block">
        <div className="cv-copy">
          <p className="cv-kicker">On paper</p>
          <h2 id="cv-title">CV</h2>
          <p className="cv-lead">
            A concise picture of studies, tools, projects, and the team award.
            Work history is only what has been confirmed.
          </p>
        </div>
        <div className="cv-actions">
          <a
            className="cv-btn cv-btn-preview"
            href={cvHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Preview CV
          </a>
          <a
            className="cv-btn cv-btn-download"
            href={cvHref}
            download="Kidist-Kemal-CV.pdf"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
