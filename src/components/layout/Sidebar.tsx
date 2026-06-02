'use client';

import { usePathname, Link } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Landmark,
  BookOpen,
  Users,
  Trophy,
  Network,
  Shield,
  Leaf,
  Zap,
  Sparkles,
  Bell,
  Award,
  Phone,
  Images,
} from 'lucide-react';
import { LogoMark } from '@/components/shared/LogoMark';
import { cn } from '@/lib/utils';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
  { icon: Landmark, label: 'About', href: '/about' },
  { icon: BookOpen, label: 'Academics', href: '/academics' },
  { icon: Users, label: 'Faculty', href: '/faculty' },
  { icon: Trophy, label: 'Excellence', href: '/excellence' },
  { icon: Network, label: 'Alumni', href: '/alumni' },
  { icon: Shield, label: 'NCC Unit', href: '/ncc' },
  { icon: Leaf, label: 'Eco Club', href: '/eco-club' },
  { icon: Zap, label: 'Energy Club', href: '/energy-club' },
  { icon: Sparkles, label: 'Campus Life', href: '/campus-life' },
  { icon: Images, label: 'Gallery', href: '/gallery' },
  { icon: Bell, label: 'Notices', href: '/notices' },
  { icon: Award, label: 'Achievements', href: '/achievements' },
  { icon: Phone, label: 'Contact', href: '/contact' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-border bg-card">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center gap-2 border-b border-border px-4">
          <LogoMark size={36} />
          <div>
            <div className="font-display text-sm font-semibold leading-tight">Hingula Vidya Pitha</div>
            <div className="text-[9px] text-muted-foreground">BSE Odisha · Est. 1992</div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all',
                      isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="active-indicator"
                        className="ml-auto h-1.5 w-1.5 rounded-full bg-primary-foreground"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="border-t border-border p-4">
          <div className="rounded-lg bg-muted p-3 text-center">
            <div className="text-[10px] text-muted-foreground">Government Aided School</div>
            <div className="text-[9px] text-muted-foreground">AT/PO-Bhotaka, Kuakhia, Dist-Jajpur</div>
          </div>
        </div>
      </div>
    </aside>
  );
}