"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ALUMNI_ALL } from "@/data/alumni";

const DECADES = [
  { label: "1990s", range: [1990, 1999] },
  { label: "2000s", range: [2000, 2009] },
  { label: "2010s", range: [2010, 2019] },
  { label: "2020s", range: [2020, 2029] },
];

export function AlumniTimeline() {
  const [selectedDecade, setSelectedDecade] = useState<string>("all");

  const alumniByDecade = (() => {
    const map = new Map<string, number>();
    DECADES.forEach((d) => map.set(d.label, 0));
    ALUMNI_ALL.forEach((a) => {
      const decade = DECADES.find((d) => a.batch >= d.range[0] && a.batch <= d.range[1]);
      if (decade) map.set(decade.label, (map.get(decade.label) || 0) + 1);
    });
    return map;
  })();

  const maxCount = Math.max(...Array.from(alumniByDecade.values()));

  return (
    <div className="space-y-4">
      <h3 className="font-display text-xl font-bold">Alumni Growth Timeline</h3>
      <div className="space-y-3">
        {DECADES.map((decade) => {
          const count = alumniByDecade.get(decade.label) || 0;
          const percentage = maxCount > 0 ? (count / maxCount) * 100 : 0;

          return (
            <div key={decade.label} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{decade.label}</span>
                <span className="text-muted-foreground">{count} alumni</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${percentage}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-gold"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
