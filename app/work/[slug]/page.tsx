import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects, site } from "@/lib/content";
import { ProjectCase } from "@/components/work/ProjectCase";

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Work" };
  return {
    title: `${project.name} · ${site.name}`,
    description: project.summary,
  };
}

export default async function WorkPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <ProjectCase project={project} />;
}
