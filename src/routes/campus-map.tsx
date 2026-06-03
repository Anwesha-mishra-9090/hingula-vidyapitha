import { createFileRoute } from "@tanstack/react-router";
import React from "react";
import CampusMap from "@/components/mvp/CampusMap";

export const Route = createFileRoute("/campus-map")({
  component: CampusMapPage,
});

export function CampusMapPage() {
  return (
    <div className="container py-12">
      <h1 className="font-display text-3xl font-bold mb-4">Interactive Campus Map (MVP)</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">Explore facilities visually and find quick info.</div>
        <aside>
          <CampusMap />
        </aside>
      </div>
    </div>
  );
}

export default CampusMapPage;
