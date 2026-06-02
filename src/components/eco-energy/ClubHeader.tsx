'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ClubHeaderProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  icon: ReactNode;
  gradientFrom: string;
  gradientTo: string;
}

export function ClubHeader({
  title,
  subtitle,
  description,
  heroImage,
  icon,
  gradientFrom,
  gradientTo,
}: ClubHeaderProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <div className="absolute inset-0">
        <img src={heroImage} alt={title} className="h-full w-full object-cover" />
        <div className={`absolute inset-0 bg-gradient-to-r from-${gradientFrom}/90 to-${gradientTo}/70`} />
      </div>
      
      <div className="relative p-8 text-white md:p-12">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
          {icon}
          {subtitle}
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
          {description}
        </motion.p>
      </div>
    </div>
  );
}