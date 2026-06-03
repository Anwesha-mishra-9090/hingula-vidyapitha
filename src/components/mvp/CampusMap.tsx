"use client";

import React from "react";
import { FACILITIES } from "@/data/facilities";

export function CampusMap() {
  return (
    <div className="rounded-lg border border-border p-4 bg-card">
      <h3 className="font-semibold mb-3">Campus Map</h3>
      <div className="w-full h-64 bg-muted/20 rounded overflow-hidden relative">
        {/* Simple SVG schematic: place dots for facilities */}
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect x="0" y="0" width="100" height="100" fill="#fff" />
          {FACILITIES.slice(0, 8).map((f, i) => {
            const x = 10 + (i % 4) * 22;
            const y = 20 + Math.floor(i / 4) * 40;
            return (
              <g key={f.slug}>
                <circle cx={x} cy={y} r={3} fill="#0ea5a4" />
                <text x={x + 4} y={y + 1} fontSize={3} fill="#0f172a">{f.name.split(" ").slice(0,2).join(" ")}</text>
              </g>
            );
          })}
        </svg>
      </div>
      <p className="text-xs text-muted-foreground mt-2">Click a facility for details (coming soon)</p>
    </div>
  );
}

export default CampusMap;
