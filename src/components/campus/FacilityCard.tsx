"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Users, FlaskConical, TestTube2, Microscope, Trophy, Flag, Shield, Building2 } from "lucide-react";
import { MotionDiv } from "../animations/LazyMotion";

interface FacilityCardProps {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  hero: string;
  icon: string;
  accent: string;
  stats: { label: string; value: number; suffix?: string }[];
}

export function FacilityCard({
  slug,
  name,
  category,
  tagline,
  hero,
  icon,
  accent,
  stats,
}: FacilityCardProps) {
  const ICONS: Record<string, any> = {
    BookOpen,
    Users,
    FlaskConical,
    TestTube2,
    Microscope,
    Trophy,
    Flag,
    Shield,
  };
  const Icon = ICONS[icon] || Building2;

  return (
    <Link href={`/campus-life/${slug}`} className="group block">
      <MotionDiv whileHover={{ y: -4 }} className="overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-md">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={hero}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-white/20 p-1.5 backdrop-blur-sm">
                <Icon className="h-4 w-4 text-white" />
              </div>
              <span className="text-xs font-medium text-white">{category}</span>
            </div>
            <h3 className="mt-1 font-display text-lg font-bold text-white">{name}</h3>
          </div>
        </div>

        <div className="p-4">
          <p className="line-clamp-2 text-sm text-muted-foreground">{tagline}</p>
          <div className="mt-3 flex items-center justify-between">
            <div className="flex gap-3">
              {stats.slice(0, 2).map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-lg font-bold text-primary">
                    {stat.value.toLocaleString()}
                    {stat.suffix || ""}
                  </div>
                  <div className="text-[10px] text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
            <ArrowRight className="h-4 w-4 text-primary opacity-0 transition group-hover:opacity-100" />
          </div>
        </div>
      </MotionDiv>
    </Link>
  );
}
