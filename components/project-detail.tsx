"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { ProjectDetailInfo, ProjectId } from "@/data/info";

type ProjectDetailProps = {
  project: ProjectDetailInfo;
  projectId: ProjectId;
};

export default function ProjectDetail({
  project,
  projectId,
}: ProjectDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const selectedImageSrc = project.images[selectedImage] ?? "/placeholder.svg";

  return (
    <article className="container mx-auto px-4 py-16 md:py-24">
      <div className="mb-8 flex flex-wrap items-center gap-3">
        <Button variant="outline" asChild>
          <Link href="/#projects" aria-label="Back to the projects section">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        {project.deployment && (
          <Button asChild>
            <a
              href={project.deployment}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open the live ${project.title} project`}
            >
              <ExternalLink className="h-4 w-4" />
              View Live
            </a>
          </Button>
        )}
      </div>

      <div className="mb-8 max-w-4xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
          Project Case Study
        </p>
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
          {project.title}
        </h1>
      </div>

      <div className="mb-10 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <Badge
            key={tech}
            variant="outline"
            className="border-primary/20 bg-primary/10 text-primary"
          >
            {tech}
          </Badge>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
        <div className="min-w-0">
          <div className="relative mb-4 aspect-video overflow-hidden rounded-lg border bg-muted">
            <Image
              src={selectedImageSrc}
              alt={`${project.title} screenshot ${selectedImage + 1}`}
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="object-contain"
              priority
            />
          </div>

          <div
            className="flex gap-3 overflow-x-auto pb-2"
            aria-label={`${project.title} image gallery`}
          >
            {project.images.map((image, index) => (
              <button
                key={`${projectId}-${image}`}
                type="button"
                onClick={() => setSelectedImage(index)}
                aria-label={`Show ${project.title} screenshot ${index + 1}`}
                aria-current={selectedImage === index ? "true" : undefined}
                className={`relative h-20 w-32 shrink-0 overflow-hidden rounded-md border-2 bg-muted transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  selectedImage === index
                    ? "border-primary"
                    : "border-transparent opacity-75 hover:opacity-100"
                }`}
              >
                <Image
                  src={image}
                  alt={`${project.title} thumbnail ${index + 1}`}
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <aside className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <h2 className="mb-3 text-2xl font-bold">Project Overview</h2>
          <div className="space-y-4 text-muted-foreground">
            {project.description
              .trim()
              .split(/\n\s*\n/)
              .map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
          </div>
        </aside>
      </div>

      {(project.challenges || project.outcomes) && (
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {project.challenges && (
            <section>
              <h2 className="mb-3 text-2xl font-bold">Challenges</h2>
              <div className="whitespace-pre-line text-muted-foreground">
                {project.challenges}
              </div>
            </section>
          )}

          {project.outcomes && (
            <section>
              <h2 className="mb-3 text-2xl font-bold">Outcomes</h2>
              <div className="whitespace-pre-line text-muted-foreground">
                {project.outcomes}
              </div>
            </section>
          )}
        </div>
      )}
    </article>
  );
}
