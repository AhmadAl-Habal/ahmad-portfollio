"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Cpu, Layers } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Android",
      icon: <Cpu className="h-5 w-5" />,
      skills: [
        "Kotlin",
        "Java",
        "Jetpack Compose",
        "XML Views",
        "Kotlin Coroutines",
        "Ktor",
        "Retrofit",
        "Koin",
        "Hilt",
        "Kotlinx Serialization",
        "Gson",
        "Room",
        "Data Store",
        "Work Manager",
        "Paging 3",
        "Exoplayer",
        "Gradle Flavors",
        "R8 & ProGuard",
        "Baseline Profiles",
        "Firebase Crashlytics",
        "Socket IO",
        "Kiosk Mode",
        "Device Owner",
        "Push Notifications",
        "Stripe",
        "NFC",
        "Google Maps",
        "MVVM",
        "MVI",
        "Multi-Module Architecture",
        "Unit Testing",
        "JUnit",
        "Mockito",
        "CI/CD",
        "GetStream SDK",
        "Scandit ID-Verification SDK",
      ],
    },
    {
      title: "Flutter",
      icon: <Layers className="h-5 w-5" />,
      skills: [
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
        "CI/CD",
      ],
    },
    {
      title: "Other",
      icon: <Code className="h-5 w-5" />,
      skills: [
        "Nest JS",
        "Typescript",
        "MySQL",
        "Algorithms",
        "Data Structures",
        "C++",
        "Problem Solving",
        "Teamwork",
        "Agile",
        "Jira",
        "GitHub",
        "GitLab",
      ],
    },
  ]

  return (
    <section id="skills" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h3 className="text-sm font-medium text-primary mb-2">MY EXPERTISE</h3>
        <h2 className="text-3xl font-bold">Skills & Technologies</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
