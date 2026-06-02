'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Camera, ChevronRight } from 'lucide-react';

const campusHighlights = [
  { title: 'Library', desc: '5,200+ volumes', image: '/gallery/ncc/ncc-05.jpg' },
  { title: 'Science Lab', desc: '12 work benches', image: '/gallery/ncc/ncc-06.jpg' },
  { title: 'Sports Ground', desc: 'Annual sports meet', image: '/gallery/ncc/ncc-07.jpg' },
  { title: 'Eco Garden', desc: 'Student maintained', image: '/gallery/eco/eco-01.jpg' },
];

export function CampusPreview() {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Camera className="h-5 w-5 text-primary" />
          <h3 className="font-display text-lg font-semibold">Campus Highlights</h3>
        </div>
        <Link href="/campus-life" className="flex items-center gap-1 text-xs text-primary hover:underline">
          Explore <ChevronRight className="h-3 w-3" />
        </Link>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {campusHighlights.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-lg"
          >
            <img src={item.image} alt={item.title} className="h-24 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-2 left-2 right-2">
              <div className="text-sm font-medium text-white">{item.title}</div>
              <div className="text-[10px] text-white/80">{item.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}