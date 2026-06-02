"use client";

import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  Calendar,
  Phone,
  Users,
  Trophy,
  Bell,
  Shield,
} from "lucide-react";

const quickLinks = [
  {
    icon: GraduationCap,
    label: "Admissions",
    href: "/academics",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  { icon: BookOpen, label: "Academics", href: "/academics", color: "bg-blue-500/10 text-blue-600" },
  { icon: Calendar, label: "Events", href: "/notices", color: "bg-amber-500/10 text-amber-600" },
  { icon: Users, label: "Faculty", href: "/faculty", color: "bg-purple-500/10 text-purple-600" },
  { icon: Trophy, label: "Excellence", href: "/excellence", color: "bg-gold/10 text-gold" },
  { icon: Bell, label: "Notices", href: "/notices", color: "bg-red-500/10 text-red-600" },
  { icon: Shield, label: "NCC", href: "/ncc", color: "bg-green-500/10 text-green-600" },
  { icon: Phone, label: "Contact", href: "/contact", color: "bg-slate-500/10 text-slate-600" },
];

export function QuickAccess() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-8">
      {quickLinks.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.label}
            href={link.href}
            className="group flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 text-center transition-all hover:shadow-md hover:-translate-y-0.5"
          >
            <div className={`rounded-full p-2 ${link.color}`}>
              <Icon className="h-5 w-5" />
            </div>
            <span className="text-xs font-medium">{link.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
