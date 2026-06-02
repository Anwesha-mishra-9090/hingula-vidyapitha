'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Command } from 'cmdk';
import { Search, Users, Bell, Award, BookOpen, Shield, Leaf, Zap } from 'lucide-react';
import { FACULTY, NOTICES, ACHIEVEMENTS } from '@/data/school';

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const [search, setSearch] = useState('');
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [open, onOpenChange]);

  const handleNavigate = (href: string) => {
    router.push(href);
    onOpenChange(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-[20vh]">
      <Command className="w-full max-w-2xl rounded-xl bg-card border border-border shadow-2xl overflow-hidden">
        <div className="flex items-center gap-2 border-b border-border px-4">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Command.Input
            value={search}
            onValueChange={setSearch}
            placeholder="Search faculty, notices, pages..."
            className="flex-1 h-12 bg-transparent outline-none text-sm"
            autoFocus
          />
        </div>
        <Command.List className="max-h-[400px] overflow-y-auto p-2">
          <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
            No results found.
          </Command.Empty>

          <Command.Group heading="Pages" className="text-xs font-medium text-muted-foreground px-2 py-2">
            {[
              { label: 'Dashboard', href: '/', icon: Search },
              { label: 'About', href: '/about', icon: BookOpen },
              { label: 'Faculty', href: '/faculty', icon: Users },
              { label: 'NCC Unit', href: '/ncc', icon: Shield },
              { label: 'Eco Club', href: '/eco-club', icon: Leaf },
              { label: 'Energy Club', href: '/energy-club', icon: Zap },
              { label: 'Notices', href: '/notices', icon: Bell },
              { label: 'Achievements', href: '/achievements', icon: Award },
            ].map((page) => (
              <Command.Item
                key={page.href}
                value={page.label}
                onSelect={() => handleNavigate(page.href)}
                className="flex items-center gap-2 px-2 py-2 rounded-md cursor-pointer hover:bg-accent"
              >
                <page.icon className="h-4 w-4" />
                <span>{page.label}</span>
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading="Faculty" className="text-xs font-medium text-muted-foreground px-2 py-2">
            {FACULTY.slice(0, 5).map((faculty) => (
              <Command.Item
                key={faculty.id}
                value={faculty.name}
                onSelect={() => handleNavigate('/faculty')}
                className="flex items-center gap-2 px-2 py-2 rounded-md cursor-pointer hover:bg-accent"
              >
                <Users className="h-4 w-4" />
                <div>
                  <div className="text-sm">{faculty.name}</div>
                  <div className="text-xs text-muted-foreground">{faculty.designation}</div>
                </div>
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading="Notices" className="text-xs font-medium text-muted-foreground px-2 py-2">
            {NOTICES.slice(0, 5).map((notice) => (
              <Command.Item
                key={notice.id}
                value={notice.title}
                onSelect={() => handleNavigate('/notices')}
                className="flex items-center gap-2 px-2 py-2 rounded-md cursor-pointer hover:bg-accent"
              >
                <Bell className="h-4 w-4" />
                <span className="text-sm truncate">{notice.title}</span>
              </Command.Item>
            ))}
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
}