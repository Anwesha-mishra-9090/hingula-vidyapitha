'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface FacilityHeroProps {
  name: string;
  category: string;
  tagline: string;
  hero: string;
  accent: string;
}

export function FacilityHero({ name, category, tagline, hero, accent }: FacilityHeroProps) {
  return (
    <div className="relative h-[40vh] min-h-[300px] overflow-hidden rounded-2xl">
      <motion.img
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        src={hero}
        alt={name}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <Link
          href="/campus-life"
          className="mb-3 inline-flex items-center gap-1 text-sm text-white/70 hover:text-white transition"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Campus Life
        </Link>
        <div className="flex items-center gap-2">
          <span
            className="rounded-full px-2 py-0.5 text-xs font-semibold uppercase tracking-wider"
            style={{ backgroundColor: accent, color: 'white' }}
          >
            {category}
          </span>
        </div>
        <h1 className="mt-2 font-display text-3xl font-bold md:text-4xl lg:text-5xl">{name}</h1>
        <p className="mt-2 max-w-2xl text-white/80">{tagline}</p>
      </div>
    </div>
  );
}