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
          <p className="pull">
            I like sitting with a problem until it becomes a thing someone can
            actually use.
          </p>
          <div>
            <div className="about-copy">
              <p>
                I’m <strong>Kidist Kemal</strong>, a creative developer from
                Ethiopia. I enjoy solving problems, learning as the tools change,
                and imagining products that did not have to stay as sketches.
              </p>
              <p>
                The phrase I come back to is simple: my brain has a{" "}
                <strong>“what if we built this?”</strong> button. I press it when
                a queue lasts too long, when an opportunity looks shiny but
                unclear, when a parent is waiting on a report card that arrives
                too late.
              </p>
              <p>
                I can be quiet at first. That doesn’t mean nothing is happening.
                I’m usually turning the idea over — the feature, the interaction,
                the conversation it might start — and looking for the version
                that helps.
              </p>
              <p>
                Away from the screen I care about fashion, photography, and
                conversations that mean something. Those things keep my eye on
                pacing, texture, and how a person feels when they enter a space.
              </p>
            </div>
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
