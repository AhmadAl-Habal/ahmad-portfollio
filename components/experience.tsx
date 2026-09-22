"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { experiencesInfo } from "@/data/info";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h3 className="mb-2 text-sm font-medium text-primary">MY JOURNEY</h3>
        <h2 className="text-3xl font-bold">Work Experience</h2>
      </motion.div>

      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-4 w-0.5 bg-primary/20 md:left-[12.5%] md:-translate-x-1/2"
        />

        <div className="space-y-12">
          {experiencesInfo.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.date}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex flex-col justify-center md:flex-row-reverse"
            >
              <div
                aria-hidden="true"
                className="absolute left-4 top-8 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-background bg-primary md:left-[12.5%]"
              />

              <div className="pl-8 md:w-3/4 md:pl-12">
                <Card className="transition-shadow hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      {exp.date && (
                        <Badge
                          variant="outline"
                          className="mb-2 border-primary/20 bg-primary/10 text-primary"
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

                    {exp.responsibilities?.length > 0 && (
                      <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                        {exp.responsibilities.map((item, i) => (
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
