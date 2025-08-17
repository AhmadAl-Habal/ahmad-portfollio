"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Globe } from "lucide-react"

export default function Languages() {
  const languages = [
    { name: "Arabic", level: "Native", proficiency: 100 },
    { name: "English", level: "Intermediate", proficiency: 65 },
  ]

  return (
    <section id="languages" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h3 className="text-sm font-medium text-primary mb-2">COMMUNICATION</h3>
        <h2 className="text-3xl font-bold">Languages</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-green-200 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="h-6 w-6 text-green-700" />
              </div>

              <div className="flex-1 space-y-6">
                {languages.map((language, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{language.name}</span>
                      <span className="text-sm text-muted-foreground">{language.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-green-300 to-green-500 h-2 rounded-full"
                        style={{ width: `${language.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
