"use client";

import { useMemo, useState } from "react";
import { ALUMNI_ALL } from "@/data/alumni";

export function AlumniPortal() {
  const [search, setSearch] = useState("");
  const results = useMemo(() => {
    const term = search.toLowerCase();
    return ALUMNI_ALL.filter((a) => a.name.toLowerCase().includes(term) || a.profession.toLowerCase().includes(term));
  }, [search]);

  return (
    <div className="rounded-lg border border-border p-4 bg-card">
      <h3 className="font-semibold mb-2">Alumni Portal</h3>
      <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search alumni" className="w-full p-2 rounded border mb-2" />
      <div className="space-y-2 max-h-64 overflow-auto">
        {results.map((r) => (
          <div key={`${r.name}-${r.batch}`} className="p-2 rounded hover:bg-accent transition">
            <div className="font-semibold">{r.name} <span className="text-xs text-muted-foreground">({r.batch})</span></div>
            <div className="text-sm text-muted-foreground">{r.profession} — {r.workplace}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlumniPortal;
