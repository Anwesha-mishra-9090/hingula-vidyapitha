"use client";

import { ScrollReveal } from "../animations/ScrollReveal";
import { Star, BookOpen, Users, TestTube2, Microscope, Trophy, Flag } from "lucide-react";

interface Highlight {
  icon: string;
  title: string;
  body: string;
}

interface FacilityHighlightsProps {
  highlights: Highlight[];
  accent: string;
}

export function FacilityHighlights({ highlights, accent }: FacilityHighlightsProps) {
  return (
    <div>
      <h2 className="mb-6 font-display text-2xl font-bold">Key Features</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {highlights.map((highlight, i) => {
          const ICONS: Record<string, any> = { BookOpen, Users, TestTube2, Microscope, Trophy, Flag };
          const Icon = ICONS[highlight.icon] || Star;
          return (
            <ScrollReveal key={highlight.title} delay={i * 0.1} className="rounded-lg border border-border bg-card p-4">
              <div className="mb-3 inline-flex rounded-lg p-2" style={{ backgroundColor: `${accent}20` }}>
                <Icon className="h-5 w-5" style={{ color: accent }} />
              </div>
              <h3 className="font-semibold">{highlight.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{highlight.body}</p>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}
