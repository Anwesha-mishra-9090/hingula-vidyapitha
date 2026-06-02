"use client";

import { Users, GraduationCap, Briefcase, MapPin } from "lucide-react";
import { ALUMNI_ALL, BATCH_YEARS } from "@/data/alumni";

export function AlumniStats() {
  const uniqueProfessions = new Set(ALUMNI_ALL.map((a) => a.profession));
  const uniqueLocations = new Set(ALUMNI_ALL.filter((a) => a.location).map((a) => a.location));

  const stats = [
    { label: "Total Alumni", value: ALUMNI_ALL.length, icon: Users },
    { label: "Batches", value: BATCH_YEARS.length, icon: GraduationCap },
    { label: "Professions", value: uniqueProfessions.size, icon: Briefcase },
    { label: "Locations", value: uniqueLocations.size, icon: MapPin },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div key={stat.label} className="rounded-lg border border-border bg-card p-4 text-center">
            <Icon className="mx-auto h-5 w-5 text-primary" />
            <div className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {stat.label}
            </div>
            <div className="mt-2 font-display text-2xl font-bold">
              {stat.value.toLocaleString()}
            </div>
          </div>
        );
      })}
    </div>
  );
}
