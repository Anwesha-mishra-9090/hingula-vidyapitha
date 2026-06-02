'use client';

import { motion } from 'framer-motion';

interface Stat {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface ClubStatsProps {
  stats: Stat[];
  gradientColor: string;
}

export function ClubStats({ stats, gradientColor }: ClubStatsProps) {
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
          {stat.icon && <div className="mb-2 flex justify-center">{stat.icon}</div>}
          <div className={`font-display text-2xl font-bold ${gradientColor}`}>{stat.value}</div>
          <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}