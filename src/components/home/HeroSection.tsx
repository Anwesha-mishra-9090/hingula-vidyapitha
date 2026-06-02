'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';
import { SCHOOL } from '@/data/school';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/90 to-primary/60 py-16 md:py-24">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl text-white"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            Government Aided High School
          </span>
          
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            {SCHOOL.name}
          </h1>
          
          <p className="mt-4 text-white/80 text-lg">
            {SCHOOL.motto}
          </p>
          
          <p className="mt-2 text-white/70">
            Established {SCHOOL.established} • {SCHOOL.affiliation}
          </p>
          
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 font-semibold text-primary transition hover:bg-white/90"
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/campus-life"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 py-2.5 font-semibold text-white transition hover:bg-white/20"
            >
              <Play className="h-4 w-4" />
              Virtual Tour
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
    </section>
  );
}