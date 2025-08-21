"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Smartphone,
} from "lucide-react";
import * as Icons from "lucide-react";
import { aboutMeInfo } from "@/data/info";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-[calc(100vh-4rem)] flex flex-col justify-center pt-20"
    >
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          {/* <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/10 text-primary mb-6">
            <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
            Available for new projects
          </div> */}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            {aboutMeInfo.name}
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-primary mb-6">
            {aboutMeInfo.role}
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            {aboutMeInfo.desc}
          </p>

          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4 text-primary" />
              <Link
                href={`tel:+963${aboutMeInfo.phone}`}
                className="hover:text-primary transition-colors"
              >
                (+963) {aboutMeInfo.phone}
              </Link>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4 text-primary" />
              <Link
                href={`mailto:${aboutMeInfo.email}`}
                className="hover:text-primary transition-colors"
              >
                {aboutMeInfo.email}
              </Link>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{aboutMeInfo.address}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="#contact" className="flex items-center gap-1">
                Contact Me <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <a href="/resume.pdf" download={`${aboutMeInfo.name}-downloa.pdf`}>
              <Button variant="outline">
                Download Resume <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>

          <div className="flex gap-4 mt-6">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="rounded-full"
            >
              <Link
                href={aboutMeInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="rounded-full"
            >
              <Link
                href={aboutMeInfo.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="rounded-full"
            >
              <Link href={`mailto:${aboutMeInfo.email}`}>
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
            <Image
              src={aboutMeInfo.profileImg}
              alt={aboutMeInfo.name}
              fill
              className="object-cover"
              priority
            />
            {/* <Image
              src={aboutMeInfo.profileImg}
              alt={aboutMeInfo.name}
              fill
              className="object-cover"
              priority
            /> */}
          </div>
          {/* <div className="absolute bottom-4 right-4 bg-background dark:bg-card px-3 py-1 rounded-full text-sm font-medium border">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              Kotlin Hero
            </span>
          </div> */}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-24"
      >
        <div className="text-center mb-12">
          <h3 className="text-sm font-medium text-primary mb-2">ABOUT ME</h3>
          <h2 className="text-3xl font-bold">My Background</h2>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {aboutMeInfo.backgroundExp?.map((exp, index) => {
            const IconComponent = (Icons as any)[exp.icon];

            return (
              <div key={index} className="bg-card rounded-lg p-6 border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  {IconComponent ? (
                    <IconComponent className="h-6 w-6 text-primary" />
                  ) : null}
                </div>

                {exp.backgroundTitle && (
                  <h3 className="text-xl font-bold mb-2">
                    {exp.backgroundTitle}
                  </h3>
                )}

                {exp.backgroundDesc && (
                  <p className="text-muted-foreground">{exp.backgroundDesc}</p>
                )}
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
