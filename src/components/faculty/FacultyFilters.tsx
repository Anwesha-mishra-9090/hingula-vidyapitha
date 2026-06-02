"use client";

import { Search } from "lucide-react";

interface FacultyFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  department: string;
  onDepartmentChange: (value: string) => void;
  departments: string[];
}

export function FacultyFilters({
  search,
  onSearchChange,
  department,
  onDepartmentChange,
  departments,
}: FacultyFiltersProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by name or designation..."
          className="h-10 w-full rounded-lg border border-border bg-background pl-9 pr-4 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>

      <div className="flex gap-2 overflow-x-auto">
        {departments.map((dept) => (
          <button
            key={dept}
            onClick={() => onDepartmentChange(dept)}
            className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition ${
              department === dept
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-card hover:bg-accent"
            }`}
          >
            {dept === "all" ? "All Departments" : dept}
          </button>
        ))}
      </div>
    </div>
  );
}
