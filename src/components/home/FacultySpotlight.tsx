"use client";

import Link from "next/link";
import { Users, ChevronRight } from "lucide-react";
import { FACULTY } from "@/data/school";

export function FacultySpotlight() {
  const spotlightFaculty = FACULTY.slice(0, 4);

  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          <h3 className="font-display text-lg font-semibold">Faculty Spotlight</h3>
        </div>
        <Link
          href="/faculty"
          className="flex items-center gap-1 text-xs text-primary hover:underline"
        >
          View all <ChevronRight className="h-3 w-3" />
        </Link>
      </div>

      <div className="space-y-3">
        {spotlightFaculty.map((faculty) => (
          <div key={faculty.id} className="flex items-center gap-3 rounded-lg p-2">
            <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-primary/20 to-primary/10">
              {faculty.photo ? (
                <img
                  src={faculty.photo}
                  alt={faculty.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-sm font-bold text-primary">
                  {faculty.name.charAt(0)}
                </div>
              )}
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-medium truncate">{faculty.name}</div>
              <div className="text-xs text-muted-foreground truncate">{faculty.designation}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
