import Link from "next/link";
import type { Project } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { usableMedia } from "@/lib/media";
import { CaseMedia } from "@/components/work/CaseMedia";

function Block({ title, children }: { title: string; children?: React.ReactNode }) {
  if (!children) {
    return (
      <article className="case-block">
        <h2>{title}</h2>
        <p className="need">Details still to be added.</p>
      </article>
    );
  }

  return (
    <article className="case-block">
      <h2>{title}</h2>
      {children}
    </article>
  );
}

export function ProjectCase({ project }: { project: Project }) {
  const media = usableMedia(project.media);
  const hero = media[0] ?? { type: "placeholder" as const, alt: `${project.name} media will appear here.` };
  const rest = media.slice(1);

  return (
    <article className="case">
      <div className="wrap">
        <Link href="/#work" className="case-back ink">
          ← All work
        </Link>
        <p className="kicker">
          {project.kicker}
          {project.year ? ` · ${project.year}` : ""}
        </p>
        <h1>{project.name}</h1>
        <p className="case-summary">{project.summary}</p>
        <div className="hero-actions" style={{ marginTop: 0, marginBottom: "1.5rem" }}>
          {project.demoUrl ? (
            <Button href={project.demoUrl} external>
              Open live demo
            </Button>
          ) : null}
          {project.repoUrl ? (
            <Button href={project.repoUrl} ghost external>
              View repository
            </Button>
          ) : null}
        </div>
        <CaseMedia item={hero} />
        <div className="case-grid">
          <Block title="The need">{project.problem ? <p>{project.problem}</p> : undefined}</Block>
          <Block title="Who it’s for">{project.audience ? <p>{project.audience}</p> : undefined}</Block>
          <Block title="My role">{project.role ? <p>{project.role}</p> : undefined}</Block>
          <Block title="Process">{project.process ? <p>{project.process}</p> : undefined}</Block>
          <Block title="Decisions">{project.decisions ? <p>{project.decisions}</p> : undefined}</Block>
          <Block title="Stack">
            {project.stack ? (
              <p>{project.stack.join(" · ")}</p>
            ) : undefined}
          </Block>
          <Block title="What happened">{project.results ? <p>{project.results}</p> : undefined}</Block>
          <Block title="Links">
            {project.demoUrl || project.repoUrl ? (
              <p>
                {project.demoUrl ? (
                  <>
                    <a className="ink" href={project.demoUrl} target="_blank" rel="noreferrer">
                      Live demo
                    </a>
                    {project.repoUrl ? " · " : null}
                  </>
                ) : null}
                {project.repoUrl ? (
                  <a className="ink" href={project.repoUrl} target="_blank" rel="noreferrer">
                    Repository
                  </a>
                ) : null}
              </p>
            ) : undefined}
          </Block>
        </div>
        {rest.length ? (
          <div style={{ display: "grid", gap: "1.2rem", marginTop: "2.5rem" }}>
            {rest.map((item) => (
              <CaseMedia key={item.src ?? item.alt} item={item} />
            ))}
          </div>
        ) : null}
        {project.pending.length ? (
          <aside className="pending-list">
            <h2>Still to add</h2>
            <ul>
              {project.pending.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        ) : null}
      </div>
    </article>
  );
}
