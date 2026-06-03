"use client";

import { useState } from "react";
// framer-motion deferred; use non-animated wrappers here
import { FacultyCard } from "./FacultyCard";
import { FacultyFilters } from "./FacultyFilters";
import { FacultyModal } from "./FacultyModal";
import { FACULTY, type Faculty } from "@/data/school";

export function FacultyGrid() {
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("all");

  const filtered = FACULTY.filter((f) => {
    const matchesSearch =
      f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.designation.toLowerCase().includes(search.toLowerCase());
    const matchesDept = department === "all" || f.department === department;
    return matchesSearch && matchesDept;
  });

  const departments = ["all", ...new Set(FACULTY.map((f) => f.department))];

  return (
    <>
      <FacultyFilters
        search={search}
        onSearchChange={setSearch}
        department={department}
        onDepartmentChange={setDepartment}
        departments={departments}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((faculty, i) => (
          <div key={faculty.id}>
            <FacultyCard faculty={faculty} onClick={() => setSelectedFaculty(faculty)} />
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-12 text-center text-muted-foreground">
          No faculty members found matching your criteria.
        </div>
      )}

      <FacultyModal faculty={selectedFaculty} onClose={() => setSelectedFaculty(null)} />
    </>
  );
}
