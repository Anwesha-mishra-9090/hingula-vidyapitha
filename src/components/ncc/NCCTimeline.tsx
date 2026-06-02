'use client';

import { motion } from 'framer-motion';

interface TimelineEvent {
  year: number;
  event: string;
  detail: string;
}

interface NCCTimelineProps {
  events: TimelineEvent[];
}

export function NCCTimeline({ events }: NCCTimelineProps) {
  return (
    <div>
      <h2 className="mb-6 font-display text-2xl font-bold">Unit History</h2>
      <div className="relative pl-6">
        <div className="absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-gold to-transparent" />
        <div className="space-y-6">
          {events.map((event, i) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[22px] top-1 h-3 w-3 rounded-full bg-gold ring-4 ring-background" />
              <div className="font-display text-xl font-bold text-gold">{event.year}</div>
              <div className="mt-1 font-semibold">{event.event}</div>
              <p className="mt-1 text-sm text-muted-foreground">{event.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}