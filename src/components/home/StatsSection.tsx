"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { STATS } from "@/data/school";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {STATS.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.1 }}
          className="rounded-xl border border-border bg-card p-4 text-center"
        >
          <div className="font-display text-3xl font-bold text-primary">
            {isInView ? (
              <AnimatedCounter end={stat.value} suffix={stat.suffix || ""} />
            ) : (
              `0${stat.suffix || ""}`
            )}
          </div>
          <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
