"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

interface NCCHeaderProps {
  title: string;
  subtitle: string;
  heroImage: string;
}

export function NCCHeader({ title, subtitle, heroImage }: NCCHeaderProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <div className="absolute inset-0">
          <LazyImage src={heroImage} alt="NCC" className="h-full w-full object-cover" aspectRatio="16/9" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
      </div>

      <div className="relative p-8 text-white md:p-12">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
          <Shield className="h-3 w-3" />
          National Cadet Corps
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl font-bold md:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-4 max-w-2xl text-white/80"
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
}
