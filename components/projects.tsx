"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projectsInfo } from "@/data/info";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h3 className="text-sm font-medium text-primary mb-2">MY WORK</h3>
        <h2 className="text-3xl font-bold">Projects</h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectsInfo.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Card className="group flex h-full flex-col overflow-hidden transition-shadow hover:shadow-md">
              <div className="relative h-48 w-full border-b bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} project preview`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl leading-tight">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-grow flex-col">
                <p className="mb-4 min-h-[4.5rem] text-muted-foreground line-clamp-3">
                  {project.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge
                      key={`${project.id}-${tech}-${i}`}
                      variant="outline"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link
                    href={`/projects/${project.id}`}
                    aria-label={`View details for ${project.title}`}
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Details
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
