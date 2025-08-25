"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";
import { educationInfo } from "../data/info";

export default function Education() {
  return (
    <section id="education" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h3 className="text-sm font-medium text-primary mb-2">MY EDUCATION</h3>
        <h2 className="text-3xl font-bold">Academic Background</h2>
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
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div className="">
                    <h3 className="text-xl font-bold pt-2">
                      {educationInfo.name}
                    </h3>
                    <p className="text-primary font-medium">
                      {educationInfo.collage}
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    {educationInfo.date}
                  </Badge>
                </div>
                <p>{educationInfo.desc}</p>
                {/* <ul className=" pl-5 space-y-2 text-muted-foreground">
                  <li></li>
                </ul> */}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
