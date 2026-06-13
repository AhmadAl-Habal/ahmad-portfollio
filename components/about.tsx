"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  type LucideIcon,
} from "lucide-react";
import * as Icons from "lucide-react";
import { Button } from "@/components/ui/button";
import { aboutMeInfo } from "@/data/info";

export default function About() {
  return (
    <section
      id="about"
      className="flex min-h-[calc(100vh-4rem)] scroll-mt-24 flex-col justify-center pt-24"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Portfolio
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            {aboutMeInfo.name}
          </h1>

          <h2 className="mb-6 text-xl font-medium text-primary md:text-2xl">
            {aboutMeInfo.role}
          </h2>

          <p className="mb-8 text-lg leading-8 text-muted-foreground">
            {aboutMeInfo.desc}
          </p>

          <div className="mb-8 grid gap-3 text-muted-foreground sm:grid-cols-2">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
              <Link
                href={`tel:+963${aboutMeInfo.phone}`}
                className="transition-colors hover:text-primary"
              >
                (+963) {aboutMeInfo.phone}
              </Link>
            </div>

            <div className="flex min-w-0 items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <Link
                href={`mailto:${aboutMeInfo.email}`}
                className="truncate transition-colors hover:text-primary"
              >
                {aboutMeInfo.email}
              </Link>
            </div>

            <div className="flex items-center gap-2 sm:col-span-2">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              <span>{aboutMeInfo.address}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="#contact">
                Contact Me <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <Button variant="outline" asChild>
              <a href="/resume.pdf" download={`${aboutMeInfo.name} resume.pdf`}>
                Download Resume <Download className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="mt-6 flex gap-3">
            <Button variant="ghost" size="icon" asChild className="rounded-full">
              <Link
                href={aboutMeInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="rounded-full">
              <Link
                href={aboutMeInfo.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="rounded-full">
              <Link href={`mailto:${aboutMeInfo.email}`}>
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email Ahmad</span>
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="justify-self-center"
        >
          <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary/20 shadow-lg md:h-80 md:w-80">
            <Image
              src={aboutMeInfo.profileImg}
              alt={`${aboutMeInfo.name} portrait`}
              fill
              sizes="(min-width: 768px) 320px, 256px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-24"
      >
        <div className="mb-12 text-center">
          <h3 className="mb-2 text-sm font-medium text-primary">ABOUT ME</h3>
          <h2 className="text-3xl font-bold">My Background</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          {aboutMeInfo.backgroundExp.map((exp) => {
            const IconComponent = (Icons as unknown as Record<string, LucideIcon>)[
              exp.icon
            ];

            return (
              <div
                key={exp.backgroundTitle}
                className="h-full rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  {IconComponent ? (
                    <IconComponent className="h-6 w-6 text-primary" aria-hidden="true" />
                  ) : null}
                </div>

                <h3 className="mb-3 text-xl font-bold">
                  {exp.backgroundTitle}
                </h3>

                <div className="space-y-3 text-muted-foreground">
                  {exp.backgroundDesc
                    .trim()
                    .split(/\n\s*\n/)
                    .map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
