"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skillCategoriesInfo } from "@/data/info";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h3 className="mb-2 text-sm font-medium text-primary">MY EXPERTISE</h3>
        <h2 className="text-3xl font-bold">Skills & Technologies</h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {skillCategoriesInfo.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full transition-shadow hover:shadow-md">
              <CardContent className="h-full p-6">
                <h3 className="mb-5 text-xl font-bold">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={`${category.title}-${skill}-${i}`}
                      variant="outline"
                      className="border-primary/20 bg-primary/10 text-primary"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
