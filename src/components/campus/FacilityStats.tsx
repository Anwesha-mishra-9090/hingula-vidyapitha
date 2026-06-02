"use client";

import { motion } from "framer-motion";

interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

interface FacilityStatsProps {
  stats: Stat[];
  accent: string;
}

export function FacilityStats({ stats, accent }: FacilityStatsProps) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="rounded-lg border border-border bg-card p-4 text-center"
        >
          <div className="font-display text-3xl font-bold" style={{ color: accent }}>
            {stat.value.toLocaleString()}
            {stat.suffix || ""}
          </div>
          <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
