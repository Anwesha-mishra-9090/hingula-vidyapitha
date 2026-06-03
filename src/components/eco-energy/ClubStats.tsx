"use client";

import { ScrollReveal } from "../animations/ScrollReveal";

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
        <ScrollReveal key={stat.label} delay={i * 0.1} className="rounded-lg border border-border bg-card p-4 text-center">
          {stat.icon && <div className="mb-2 flex justify-center">{stat.icon}</div>}
          <div className={`font-display text-2xl font-bold ${gradientColor}`}>{stat.value}</div>
          <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
        </ScrollReveal>
      ))}
    </div>
  );
}
