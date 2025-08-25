"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { experiencesInfo } from "@/data/info";

export default function Experience() {
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
        <div className="absolute left-0 md:left-[13vw] transform md:-translate-x-1/2 h-full w-0.5 bg-primary/20"></div>

        <div className="space-y-12">
          {experiencesInfo.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row-reverse justify-center`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-[13vw] transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background dark:border-background"></div>

              {/* Content */}
              <div className="md:w-3/4 md:pl-12 pl-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      {exp.date && (
                        <Badge
                          variant="outline"
                          className="mb-2 bg-primary/10 text-primary border-primary/20"
                        >
                          {exp.date}
                        </Badge>
                      )}

                      {exp.role && (
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                      )}

                      {exp.company && (
                        <p className="text-primary font-medium">
                          {exp.company}
                        </p>
                      )}

                      {exp.location && (
                        <p className="text-sm text-muted-foreground">
                          {exp.location}
                        </p>
                      )}
                    </div>

                    {exp.responsibilties?.length > 0 && (
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        {exp.responsibilties.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
