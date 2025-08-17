"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Heart } from "lucide-react"

export default function Volunteering() {
  const volunteeringExperiences = [
    {
      title: "Technical Mentor",
      organization: "Teens In AI",
      location: "Damascus, Syria",
      description: [
        "I provided personalized guidance to young programmers of all skill levels, creating a supportive environment where they felt confident to explore and create.",
        "I helped mentees grasp complex coding concepts by breaking them down into understandable components, empowering them to solve problems independently.",
        "I offered thoughtful feedback that helped participants refine their projects while building their confidence and presentation skills.",
      ],
    },
    {
      title: "ICPC Mentor",
      organization: "Damascus University",
      location: "Damascus, Syria",
      description: [
        "I guided programming beginners through their learning journey, helping them build confidence as they mastered fundamental concepts and overcame challenges.",
        "I designed and led engaging workshops that strengthened participants' coding skills and prepared them for the unique demands of competitive programming.",
        "I developed clear, accessible learning materials that made complex programming concepts more approachable for students at all levels.",
        "I fostered an inclusive learning community where diverse perspectives were valued, creating an environment where everyone could thrive.",
      ],
    },
  ]

  return (
    <section id="volunteering" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h3 className="text-sm font-medium text-primary mb-2">GIVING BACK</h3>
        <h2 className="text-3xl font-bold">Volunteering Experience</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {volunteeringExperiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.organization}</p>
                    <p className="text-sm text-muted-foreground mb-4">{exp.location}</p>

                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
