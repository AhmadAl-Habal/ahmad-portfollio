"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function Experience() {
  const experiences = [
    {
      title: "Android Developer",
      company: "PLAN A Agency",
      period: "12/2024 - Present",
      location: "Damascus, Syria",
      description: [
        "I develop and maintain key app features, focusing on creating intuitive interfaces that enhance user experience while meeting business objectives.",
        "I actively participate in collaborative code reviews, embracing feedback to refine my skills and contribute to our team's high quality standards.",
      ],
    },
    {
      title: "Mid-Level Android Developer",
      company: "OnMyWay",
      period: "05/2024 - 12/2024",
      location: "Remotely",
      description: [
        "I played a key role in developing new features that improved both functionality and user satisfaction, always keeping business goals at the forefront.",
        "I built comprehensive unit tests that significantly reduced production bugs and ensured reliable app performance across updates.",
        "I helped implement CI/CD pipelines that transformed our release process, making it more efficient and allowing us to deliver updates more frequently and reliably.",
        "Engaged in code reviews by senior developers, incorporating their feedback to continually improve my skills and contribute to a high standard of code across the team.",
        "Provided guidance and code reviews for junior developers, ensuring adherence to best practices and maintaining high code quality standards across the team.",
      ],
    },
    {
      title: "Mobile Developer",
      company: "Solunyx Sdn. Bhd.",
      period: "07/2022 - 12/2024",
      location: "Damascus, Syria",
      description: [
        "Developed and delivered multiple Android applications, including SmartDeen Pro and Tayar Tablet, ensuring they met client expectations with clean design and solid performance.",
        "Delivered Nous, a Flutter-based cross-platform app, fully managing its development from the ground up, including both Android and iOS support.",
        "Refactored and modernized legacy Android codebases, improving maintainability and laying the groundwork for long-term scalability.",
        "Adopted Jetpack Compose to modernize UI development, leading to a smoother user experience and more efficient development workflows.",
        "Set up CI/CD pipelines, automating builds and deployments to streamline the development cycle and speed up app delivery.",
        "Continuously explored and implemented new technologies and frameworks across both Android and Flutter projects to stay aligned with modern mobile development practices.",
        "Participated in the hiring process by interviewing candidates and designing technical assessments to evaluate mobile development skills."
      ],
    },
  ]

  return (
    <section id="experience" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h3 className="text-sm font-medium text-primary mb-2">MY JOURNEY</h3>
        <h2 className="text-3xl font-bold">Work Experience</h2>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary/20"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background dark:border-background"></div>

              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"} pl-8 md:pl-0`}>
                <Card>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <Badge variant="outline" className="mb-2 bg-primary/10 text-primary border-primary/20">
                        {exp.period}
                      </Badge>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      {exp.company === "Solunyx Sdn. Bhd." ? (
                        <p className="text-primary font-medium">
                          <Link
                            href="https://solunyx.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            Solunyx Sdn. Bhd.
                          </Link>
                        </p>
                      ) : exp.company === "PLAN A Agency" ? (
                        <p className="text-primary font-medium">
                          <Link
                            href="https://plana.ae"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            PLAN A Agency
                          </Link>
                        </p>
                      ) : (
                        <p className="text-primary font-medium">OnMyWay</p>
                      )}
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Empty div for layout */}
              <div className="md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
