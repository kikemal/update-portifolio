export function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="kicker">The person</p>
            <h2 id="about-title">About</h2>
          </div>
          <p className="section-note">
            A little quieter in person. Always somewhere in the middle of a
            question.
          </p>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            <p>
              I’m <strong>Kidist Kemal</strong>, a creative developer from
              Ethiopia who enjoys turning ideas into useful digital experiences.
              I build thoughtful, human-centered products that bring together
              technology, usability, and purposeful design.
            </p>
            <p>
              From web applications to AI-powered experiences, I’m interested in
              solving real problems and making technology more accessible. Away
              from the screen I care about fashion, photography, and
              conversations that mean something.
            </p>
          </div>
          <div>
            <div className="about-chips">
              <span className="chip">Problem-solving</span>
              <span className="chip">Learning in public</span>
              <span className="chip">Fashion</span>
              <span className="chip">Photography</span>
              <span className="chip">Good conversation</span>
            </div>
            <p className="faith">
              Faith sits in the work without needing a spotlight. I pray about
              my goals, and I give <em>God</em> credit for the things that land.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
