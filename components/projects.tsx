"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      id: "smartdeen-pro",
      title: "SmartDeen Pro",
      description:
        "A comprehensive Islamic lifestyle tablet app built for Android, designed to support daily religious practices through a wide range of features.",
      technologies: [
        "Android",
        "Kotlin",
        "Jetpack Compose",
        "Retrofit",
        "Room",
        "Work Manager",
        "Paging 3",
        "Exoplayer",
        "Gradle Flavors",
        "Socket IO",
        "Kiosk Mode",
        "Device Owner",
        "Multi-Module Architecture",
      ],
      image: "/images/smartdeen/welcome.png",
    },
    {
      id: "tayar-tablet",
      title: "Tayar Tablet",
      description:
        "Tayar Tablet is an Android application designed for clients using solar power systems in regions with unreliable electricity.",
      technologies: [
        "Android",
        "Kotlin",
        "Jetpack Compose",
        "Kotlin Coroutines",
        "Ktor",
        "Koin",
        "Kotlinx Serialization",
        "Data Store",
        "Socket IO",
        "MVVM",
      ],
      image: "/images/tayar/main-dashboard.png",
    },
    {
      id: "onmyway-app",
      title: "OnMyWay App",
      description:
        "On My Way is a cross-border package delivery app that connects senders with transporters traveling between countries.",
      technologies: [
        "Android",
        "Kotlin",
        "Jetpack Compose",
        "Gson",
        "Push Notifications",
        "Stripe",
        "Google Maps",
        "MVI",
        "Unit Testing",
        "JUnit",
        "Mockito",
        "CI/CD",
        "GetStream SDK",
        "Scandit ID-Verification SDK",
      ],
      image: "/images/onmyway/on-my-way.png",
    },
    {
      id: "moushref",
      title: "Moushref",
      description:
        "Moushref is a cashless payment and school bus tracking system designed to streamline and secure daily operations for students, parents, and schools.",
      technologies: [
        "Dart",
        "BLoC",
        "Cubit",
        "Dio",
        "GoRouter",
        "Freezed",
        "Json Serializable",
        "Injectable",
        "Push Notifications",
        "RxDart",
        "Google Maps",
        "Socket IO",
        "NFC",
        "Shared Preferences",
      ],
      image: "/images/moushref/moushref-1.png",
    },
  ]

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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full flex flex-col overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projects/${project.id}`} className="flex items-center gap-1">
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
  )
}
