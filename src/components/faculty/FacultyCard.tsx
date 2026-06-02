"use client";

import { Phone, Mail } from "lucide-react";
import { type Faculty } from "@/data/school";

interface FacultyCardProps {
  faculty: Faculty;
  onClick: () => void;
}

export function FacultyCard({ faculty, onClick }: FacultyCardProps) {
  return (
    <button
      onClick={onClick}
      className="group w-full text-left rounded-xl border border-border bg-card p-4 transition-all hover:shadow-md hover:border-primary/30"
    >
      <div className="flex items-start gap-3">
        <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-primary to-blue-900">
          {faculty.photo ? (
            <img src={faculty.photo} alt={faculty.name} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-white text-lg font-bold">
              {faculty.name
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")}
            </div>
          )}
          {faculty.badge && (
            <span className="absolute -bottom-0.5 -right-0.5 rounded-full bg-amber-500 px-1 py-0.5 text-[8px] font-bold text-black">
              {faculty.badge}
            </span>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="font-semibold truncate">{faculty.name}</div>
          <div className="text-xs text-muted-foreground">{faculty.designation}</div>
          <div className="mt-1 text-[10px] uppercase text-muted-foreground">
            {faculty.department}
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2 text-xs text-primary">
        <Phone className="h-3 w-3" />
        <span>{faculty.phone}</span>
      </div>
    </button>
  );
}
