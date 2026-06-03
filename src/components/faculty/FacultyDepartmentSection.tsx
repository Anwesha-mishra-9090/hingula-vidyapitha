"use client";

// framer-motion deferred; render non-animated list items
import { FacultyCard } from "./FacultyCard";
import { type Faculty } from "@/data/school";

interface FacultyDepartmentSectionProps {
  department: string;
  faculty: Faculty[];
  onFacultyClick: (faculty: Faculty) => void;
}

export function FacultyDepartmentSection({
  department,
  faculty,
  onFacultyClick,
}: FacultyDepartmentSectionProps) {
  if (faculty.length === 0) return null;

  return (
    <div className="mb-8">
      <h2 className="mb-4 font-display text-2xl font-bold text-primary">{department}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {faculty.map((f) => (
          <div key={f.id}>
            <FacultyCard faculty={f} onClick={() => onFacultyClick(f)} />
          </div>
        ))}
      </div>
    </div>
  );
}
