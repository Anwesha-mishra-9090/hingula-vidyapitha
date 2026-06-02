"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, Award } from "lucide-react";
import { ALUMNI_CURATED } from "@/data/alumni";

export function AlumniSpotlight() {
  const featured = ALUMNI_CURATED.slice(0, 6);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-xl font-bold">Featured Alumni</h3>
        <span className="text-xs text-muted-foreground">Inspiring stories from our graduates</span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((alumni, i) => (
          <motion.div
            key={alumni.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-lg border border-border bg-gradient-to-br from-primary/5 to-transparent p-4"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 font-display text-lg font-bold text-primary">
                {alumni.name
                  .split(" ")
                  .slice(-2)
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-semibold">{alumni.name}</div>
                <div className="text-xs text-muted-foreground">Batch of {alumni.batch}</div>
                <div className="mt-2 flex items-center gap-1 text-xs">
                  <Briefcase className="h-3 w-3 text-primary" />
                  <span>{alumni.profession}</span>
                </div>
                {alumni.location && (
                  <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>{alumni.location}</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
