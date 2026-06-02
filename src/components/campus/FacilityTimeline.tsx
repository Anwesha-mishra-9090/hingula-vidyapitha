"use client";

import { motion } from "framer-motion";

interface TimelineItem {
  year: number;
  title: string;
  body: string;
}

interface FacilityTimelineProps {
  timeline: TimelineItem[];
  accent: string;
}

export function FacilityTimeline({ timeline, accent }: FacilityTimelineProps) {
  if (!timeline.length) return null;

  return (
    <div>
      <h2 className="mb-6 font-display text-2xl font-bold">Milestones</h2>
      <div className="relative pl-6">
        <div className="absolute left-2 top-0 bottom-0 w-px" style={{ background: accent }} />
        <div className="space-y-6">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <span
                className="absolute -left-[22px] top-1 h-3 w-3 rounded-full ring-4 ring-background"
                style={{ backgroundColor: accent }}
              />
              <div className="font-display text-xl font-bold" style={{ color: accent }}>
                {item.year}
              </div>
              <div className="mt-1 font-semibold">{item.title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
