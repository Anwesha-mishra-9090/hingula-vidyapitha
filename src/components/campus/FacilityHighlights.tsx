'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

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
          const Icon = (Icons as any)[highlight.icon] || Icons.Star;
          return (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-lg border border-border bg-card p-4"
            >
              <div
                className="mb-3 inline-flex rounded-lg p-2"
                style={{ backgroundColor: `${accent}20` }}
              >
                <Icon className="h-5 w-5" style={{ color: accent }} />
              </div>
              <h3 className="font-semibold">{highlight.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{highlight.body}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}