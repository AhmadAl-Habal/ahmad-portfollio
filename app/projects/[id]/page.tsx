import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/project-detail";
import { projectIds, projectsDetails, type ProjectId } from "@/data/info";

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

function isProjectId(id: string): id is ProjectId {
  return projectIds.includes(id as ProjectId);
}

function getMetaDescription(description: string) {
  const cleanDescription = description.replace(/\s+/g, " ").trim();

  if (cleanDescription.length <= 160) {
    return cleanDescription;
  }

  return `${cleanDescription.slice(0, 157).trimEnd()}...`;
}

export function generateStaticParams() {
  return projectIds.map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;

  if (!isProjectId(id)) {
    return {
      title: "Project Not Found",
    };
  }

  const project = projectsDetails[id];
  const description = getMetaDescription(project.description);

  return {
    title: project.title,
    description,
    authors: [{ name: "Ahmad Al-Habal" }],
    openGraph: {
      title: `${project.title} | Ahmad Al-Habal`,
      description,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: `${project.title} | Ahmad Al-Habal`,
      description,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;

  if (!isProjectId(id)) {
    notFound();
  }

  return <ProjectDetail project={projectsDetails[id]} projectId={id} />;
}
