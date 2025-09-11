"use client";

import { useParams } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { projectsDetails } from "../../../data/info";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

export default function ProjectDetail() {
  const [sliderRef] = useKeenSlider({
    slides: { perView: 7, spacing: 8 },
    
  });
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
        <div className="flex items-center mb-5">
          <h1 className="text-4xl font-bold mr-5">{project.title}</h1>
          {project.deployment && (
            <a
              href={project.deployment}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 hover:text-primary"
              target="_blank"
            >
              <ExternalLink className="h-4 w-4" />
              View Live
            </a>
          )}
        </div>

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
           <div ref={sliderRef} className="keen-slider" >
  {project.images.map((image, i) => (
   <div
  key={i}
  className="keen-slider__slide !w-32 flex items-center justify-center"
  style={{ flex: "0 0 auto" }} 
>
  <button
    onClick={() => setSelectedImage(i)}
    className={`relative h-20 w-32 rounded-md overflow-hidden border-2 transition-all box-border ${
      selectedImage === i ? "border-primary" : "border-transparent"
    }`}
  >
    <Image
      src={image || "/placeholder.svg"}
      alt={`${project.title} thumbnail ${i + 1}`}
      width={128}
      height={80}
      className="object-cover w-full h-full block"
    />
  </button>
</div>

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
          {project.challenges && (
            <div>
              <h2 className="text-2xl font-bold mb-3">Challenges</h2>
              <div className="text-muted-foreground whitespace-pre-line">
                {project.challenges}
              </div>
            </div>
          )}

          {project.outcomes && (
            <div>
              <h2 className="text-2xl font-bold mb-3">Outcomes</h2>
              <div className="text-muted-foreground whitespace-pre-line">
                {project.outcomes}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
