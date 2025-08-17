"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Medal } from "lucide-react"

export default function Achievements() {
  return (
    <section id="achievements" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h3 className="text-sm font-medium text-primary mb-2">RECOGNITION</h3>
        <h2 className="text-3xl font-bold">Key Achievements</h2>
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
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Medal className="h-6 w-6 text-primary" />
              </div>

              <div>
                <h3 className="text-xl font-bold">2022's DCPC 5th Place</h3>
                <p className="text-muted-foreground mt-2">
                In 2022, I had the privilege of working with an amazing team, and together we earned 5th place out of nearly 80 teams in the Damascus Collegiate Programming Contest (DCPC). This competition brings together the university's top programming
                  talent to solve complex algorithmic challenges under pressure. Our success reflects both technical
                  skill and the collaborative problem-solving approach I bring to all my work.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
