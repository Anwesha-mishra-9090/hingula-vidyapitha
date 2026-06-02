"use client";

import { Search } from "lucide-react";

interface AlumniFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  batch: number | "all";
  onBatchChange: (value: number | "all") => void;
  profession: string;
  onProfessionChange: (value: string) => void;
  batches: number[];
  professions: string[];
}

export function AlumniFilters({
  search,
  onSearchChange,
  batch,
  onBatchChange,
  profession,
  onProfessionChange,
  batches,
  professions,
}: AlumniFiltersProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by name, profession, or workplace..."
          className="h-10 w-full rounded-lg border border-border bg-background pl-9 pr-4 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>

      <div className="flex flex-wrap gap-3">
        <select
          value={batch === "all" ? "all" : String(batch)}
          onChange={(e) => onBatchChange(e.target.value === "all" ? "all" : Number(e.target.value))}
          className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm outline-none focus:border-primary"
        >
          <option value="all">All Batches</option>
          {batches.map((y) => (
            <option key={y} value={y}>
              Batch {y}
            </option>
          ))}
        </select>

        <select
          value={profession}
          onChange={(e) => onProfessionChange(e.target.value)}
          className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm outline-none focus:border-primary"
        >
          {professions.map((p) => (
            <option key={p} value={p}>
              {p === "all" ? "All Professions" : p}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
