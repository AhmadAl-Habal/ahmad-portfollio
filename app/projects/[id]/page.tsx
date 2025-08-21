"use client";

import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { projectsDetails } from "../../../data/info";

export default function ProjectDetail() {
  const { id } = useParams();
  const projectId = Array.isArray(id) ? id[0] : id;
  const project = projectsDetails[projectId as keyof typeof projectsDetails];

  const [selectedImage, setSelectedImage] = useState(0);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold mb-6">Project not found</h1>
        <Button asChild>
          <Link href="/#projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <Button variant="outline" asChild className="mb-8">
        <Link href="/#projects">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>
      </Button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech, i) => (
            <Badge
              key={i}
              className="bg-primary/10 text-primary border-primary/20"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
              <Image
                src={project.images[selectedImage] || "/placeholder.svg"}
                alt={`${project.title} screenshot ${selectedImage + 1}`}
                fill
                className="object-contain bg-black/5 dark:bg-white/5"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {project.images.map((image, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`relative h-20 w-32 rounded-md overflow-hidden border-2 transition-all ${
                    selectedImage === i
                      ? "border-primary"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} thumbnail ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-3">Project Overview</h2>
              <div className="text-muted-foreground whitespace-pre-line">
                {project.description}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-3">Challenges</h2>
            <div className="text-muted-foreground whitespace-pre-line">
              {project.challenges}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Outcomes</h2>
            <div className="text-muted-foreground whitespace-pre-line">
              {project.outcomes}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
