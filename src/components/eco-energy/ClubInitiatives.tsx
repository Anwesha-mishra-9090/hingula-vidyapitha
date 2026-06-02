'use client';

import { motion } from 'framer-motion';

interface Initiative {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag?: string;
}

interface ClubInitiativesProps {
  initiatives: Initiative[];
}

export function ClubInitiatives({ initiatives }: ClubInitiativesProps) {
  return (
    <div>
      <h2 className="mb-6 font-display text-2xl font-bold">Initiatives</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {initiatives.map((initiative, i) => (
          <motion.div
            key={initiative.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-lg border border-border bg-card p-4"
          >
            <div className="mb-3">{initiative.icon}</div>
            <h3 className="font-semibold">{initiative.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{initiative.description}</p>
            {initiative.tag && (
              <span className="mt-2 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
                {initiative.tag}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}