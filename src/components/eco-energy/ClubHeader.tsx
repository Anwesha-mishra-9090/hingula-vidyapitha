"use client";

import { ReactNode } from "react";
import { ScrollReveal } from "../animations/ScrollReveal";

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
          <LazyImage src={heroImage} alt={title} className="h-full w-full object-cover" aspectRatio="16/9" />
        <div
          className={`absolute inset-0 bg-gradient-to-r from-${gradientFrom}/90 to-${gradientTo}/70`}
        />
      </div>

      <div className="relative p-8 text-white md:p-12">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
          {icon}
          {subtitle}
        </div>

        <ScrollReveal className="font-display text-4xl font-bold md:text-5xl lg:text-6xl">
          {title}
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-4 max-w-2xl text-white/80">
          {description}
        </ScrollReveal>
      </div>
    </div>
  );
}
