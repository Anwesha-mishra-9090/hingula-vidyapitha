import { createFileRoute } from "@tanstack/react-router";
import React from "react";
import AlumniPortal from "@/components/mvp/AlumniPortal";

export const Route = createFileRoute("/alumni-portal")({
  component: AlumniPortalPage,
});

export function AlumniPortalPage() {
  return (
    <div className="container py-12">
      <h1 className="font-display text-3xl font-bold mb-4">Alumni Portal (MVP)</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <p className="text-muted-foreground mb-4">Search and browse alumni records. This is a lightweight MVP using local data.</p>
        </div>
        <aside>
          <AlumniPortal />
        </aside>
      </div>
    </div>
  );
}

export default AlumniPortalPage;
