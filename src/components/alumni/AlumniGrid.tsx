"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { AlumniCard } from "./AlumniCard";
import { AlumniFilters } from "./AlumniFilters";
import { AlumniTimeline } from "./AlumniTimeline";
import { ALUMNI_ALL, BATCH_YEARS } from "@/data/alumni";
import type { AlumniRecord } from "@/data/alumni";

export function AlumniGrid() {
  const [search, setSearch] = useState("");
  const [batch, setBatch] = useState<number | "all">("all");
  const [profession, setProfession] = useState<string>("all");

  const professions = useMemo(() => {
    const profs = new Set(ALUMNI_ALL.map((a) => a.profession));
    return ["all", ...Array.from(profs).sort()];
  }, []);

  const filtered = useMemo(() => {
    let result = ALUMNI_ALL;
    if (batch !== "all") result = result.filter((a) => a.batch === batch);
    if (profession !== "all") result = result.filter((a) => a.profession === profession);
    if (search.trim()) {
      const term = search.toLowerCase();
      result = result.filter(
        (a) =>
          a.name.toLowerCase().includes(term) ||
          a.profession.toLowerCase().includes(term) ||
          a.workplace?.toLowerCase().includes(term)
      );
    }
    return result;
  }, [batch, profession, search]);

  const byBatch = useMemo(() => {
    const map = new Map<number, AlumniRecord[]>();
    filtered.forEach((a) => {
      if (!map.has(a.batch)) map.set(a.batch, []);
      map.get(a.batch)!.push(a);
    });
    return Array.from(map.entries()).sort((a, b) => b[0] - a[0]);
  }, [filtered]);

  return (
    <div className="space-y-8">
      <AlumniFilters
        search={search}
        onSearchChange={setSearch}
        batch={batch}
        onBatchChange={setBatch}
        profession={profession}
        onProfessionChange={setProfession}
        batches={BATCH_YEARS}
        professions={professions}
      />

      {byBatch.length === 0 ? (
        <div className="py-12 text-center text-muted-foreground">
          No alumni found matching your criteria.
        </div>
      ) : (
        <div className="space-y-8">
          {byBatch.map(([year, alumni]) => (
            <div key={year}>
              <div className="mb-4 flex items-center gap-3">
                <h2 className="font-display text-2xl font-bold text-primary">{year}</h2>
                <div className="flex-1 h-px bg-border" />
                <span className="text-xs text-muted-foreground">{alumni.length} alumni</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {alumni.map((a, i) => (
                  <motion.div
                    key={`${a.name}-${a.batch}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(i * 0.03, 0.5) }}
                  >
                    <AlumniCard alumni={a} />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
