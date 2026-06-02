'use client';

import { motion } from 'framer-motion';
import { Users, Award, Flag, Calendar, Trophy, Shield } from 'lucide-react';

interface Stat {
  icon: any;
  label: string;
  value: string;
}

const stats: Stat[] = [
  { icon: Users, label: 'Active Cadets', value: '50' },
  { icon: Award, label: 'District Awards', value: '8' },
  { icon: Flag, label: 'Camps Attended', value: '18' },
  { icon: Trophy, label: 'Best Cadet Honours', value: '6' },
  { icon: Calendar, label: 'Established', value: '2012' },
  { icon: Shield, label: 'Parent Unit', value: '4(O) CTC' },
];

export function NCCStats() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
      {stats.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-lg border border-border bg-card p-4 text-center"
          >
            <Icon className="mx-auto h-5 w-5 text-gold" />
            <div className="mt-2 font-display text-xl font-bold">{stat.value}</div>
            <div className="text-[10px] text-muted-foreground">{stat.label}</div>
          </motion.div>
        );
      })}
    </div>
  );
}