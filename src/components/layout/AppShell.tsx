'use client';

import { ReactNode, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { MobileNav } from './MobileNav';
import { Footer } from './Footer';
import { BackToTop } from '@/components/shared/BackToTop';
import { NoticeTicker } from '@/components/shared/NoticeTicker';
import { ScrollProgress } from '@/components/shared/ScrollProgress';
import { FloatingWhatsApp } from '@/components/shared/FloatingWhatsApp';
import { CommandPalette } from '@/components/shared/CommandPalette';

export function AppShell({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const pathname = usePathname();

  // Close sidebar on route change
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  // Keyboard shortcut for command palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile Navigation */}
      <MobileNav isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header onMenuClick={() => setSidebarOpen(true)} onSearchClick={() => setCommandOpen(true)} />
        <NoticeTicker />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>

      {/* Global Components */}
      <ScrollProgress />
      <BackToTop />
      <FloatingWhatsApp />
      <CommandPalette open={commandOpen} onOpenChange={setCommandOpen} />
    </div>
  );
}