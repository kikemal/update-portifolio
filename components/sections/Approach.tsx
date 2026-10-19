import { approach } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function Approach() {
  return (
    <section className="section" id="approach" aria-labelledby="approach-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="kicker">How I think</p>
            <h2 id="approach-title">Approach</h2>
          </div>
          <p className="section-note">
            Not a formal methodology. Just the way my mind actually moves from a
            question to a working thing.
          </p>
        </div>
        <div className="approach-list">
          {approach.map((item, index) => (
            <Reveal key={item.num} delay={index * 70}>
              <article className="approach-item" tabIndex={0}>
                <span className="num">{item.num}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
