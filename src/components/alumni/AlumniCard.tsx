"use client";

import { MapPin, Briefcase, Calendar } from "lucide-react";
import type { AlumniRecord } from "@/data/alumni";

interface AlumniCardProps {
  alumni: AlumniRecord;
}

export function AlumniCard({ alumni }: AlumniCardProps) {
  return (
    <div className="rounded-lg border border-border bg-card p-4 transition-all hover:shadow-md">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10 font-display text-sm font-bold text-primary">
          {alumni.name
            .split(" ")
            .slice(-2)
            .map((n) => n[0])
            .join("")}
        </div>
        <div className="min-w-0 flex-1">
          <div className="font-medium truncate">{alumni.name}</div>
          <div className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
            <Briefcase className="h-3 w-3" />
            <span className="truncate">{alumni.profession}</span>
          </div>
          {alumni.workplace && (
            <div className="mt-0.5 text-[10px] text-muted-foreground/80 truncate">
              {alumni.workplace}
            </div>
          )}
          <div className="mt-1.5 flex items-center gap-2 text-[10px] text-muted-foreground">
            <Calendar className="h-3 w-3" />
            <span>Batch {alumni.batch}</span>
            {alumni.location && (
              <>
                <span>•</span>
                <MapPin className="h-3 w-3" />
                <span className="truncate">{alumni.location}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
