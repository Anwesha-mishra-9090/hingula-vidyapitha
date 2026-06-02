"use client";

import { motion } from "framer-motion";
import { Footprints, Target, Compass, HeartHandshake, BookOpen, Mountain } from "lucide-react";

const pillars = [
  {
    icon: Footprints,
    title: "Drill & Parade",
    desc: "Weekly parade practice on the school ground. Foot drill, arms drill and ceremonial movements.",
  },
  {
    icon: Target,
    title: "Weapon Training",
    desc: "Familiarisation with .22 rifle under supervised range conditions during ATCs.",
  },
  {
    icon: Compass,
    title: "Map Reading & Field Craft",
    desc: "Direction-finding, contour reading, field signals and concealment.",
  },
  {
    icon: Mountain,
    title: "Adventure Activities",
    desc: "Trekking, obstacle course and rock-climbing through state-level adventure camps.",
  },
  {
    icon: HeartHandshake,
    title: "Social Service",
    desc: "Swachh Bharat drives, plantation, blood donation awareness and road-safety campaigns.",
  },
  {
    icon: BookOpen,
    title: "Institutional Training",
    desc: "Theory on NCC organisation, national integration, leadership and disaster management.",
  },
];

export function NCCTrainingPillars() {
  return (
    <div>
      <h2 className="mb-6 font-display text-2xl font-bold">Training Pillars</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((pillar, i) => {
          const Icon = pillar.icon;
          return (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-lg border border-border bg-card p-4"
            >
              <Icon className="h-6 w-6 text-gold" />
              <h3 className="mt-2 font-semibold">{pillar.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{pillar.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
