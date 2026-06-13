"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";
import { educationInfo } from "@/data/info";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h3 className="mb-2 text-sm font-medium text-primary">MY EDUCATION</h3>
        <h2 className="text-3xl font-bold">Academic Background</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl"
      >
        <Card className="transition-shadow hover:shadow-md">
          <CardContent className="p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <GraduationCap className="h-8 w-8 text-primary" aria-hidden="true" />
              </div>

              <div className="flex-1">
                <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="pt-2 text-xl font-bold">
                      {educationInfo.name}
                    </h3>
                    <p className="text-primary font-medium">
                      {educationInfo.college}
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className="w-fit border-primary/20 bg-primary/10 text-primary"
                  >
                    {educationInfo.date}
                  </Badge>
                </div>
                {educationInfo.desc && (
                  <p className="text-muted-foreground">{educationInfo.desc}</p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
