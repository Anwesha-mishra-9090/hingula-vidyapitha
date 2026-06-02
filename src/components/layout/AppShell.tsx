import { ReactNode } from 'react';
import { Link } from '@tanstack/react-router';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Theme toggle
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const isDarkMode = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navItems = [
    { label: 'Dashboard', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Academics', href: '/academics' },
    { label: 'Faculty', href: '/faculty' },
    { label: 'Excellence', href: '/excellence' },
    { label: 'Alumni', href: '/alumni' },
    { label: 'NCC', href: '/ncc' },
    { label: 'Eco Club', href: '/eco-club' },
    { label: 'Energy Club', href: '/energy-club' },
    { label: 'Campus Life', href: '/campus-life' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Notices', href: '/notices' },
    { label: 'Achievements', href: '/achievements' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white text-sm font-bold">HVP</span>
            </div>
            <span className="font-display font-semibold text-lg hidden sm:inline">Hingula Vidya Pitha</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            {navItems.slice(0, 6).map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm text-muted-foreground hover:text-primary transition"
                activeProps={{ className: 'text-primary font-semibold' }}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/notices" className="text-sm text-muted-foreground hover:text-primary transition">
              Notices
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-accent transition"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-accent transition md:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm md:hidden" onClick={() => setIsMenuOpen(false)}>
          <nav className="container py-4 space-y-2" onClick={(e) => e.stopPropagation()}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 text-center text-muted-foreground hover:text-primary transition border-b border-border"
                activeProps={{ className: 'text-primary font-semibold' }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-12">
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About */}
            <div>
              <h3 className="font-display text-lg font-bold mb-3">Hingula Vidya Pitha</h3>
              <p className="text-sm text-muted-foreground">
                Government aided high school under BSE Odisha, established in 1992. 
                Located at Bhotaka, Kuakhia, Jajpur district, Odisha.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-display text-lg font-bold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/about" className="text-muted-foreground hover:text-primary transition">About Us</a></li>
                <li><a href="/academics" className="text-muted-foreground hover:text-primary transition">Academics</a></li>
                <li><a href="/faculty" className="text-muted-foreground hover:text-primary transition">Faculty</a></li>
                <li><a href="/contact" className="text-muted-foreground hover:text-primary transition">Contact</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-display text-lg font-bold mb-3">Contact Info</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>📞 <a href="tel:8260191483" className="hover:text-primary">8260191483</a></li>
                <li>📧 <a href="mailto:hingulavidyapitha@gmail.com" className="hover:text-primary">hingulavidyapitha@gmail.com</a></li>
                <li>📍 AT/PO-Bhotaka, Kuakhia, Dist-Jajpur, Odisha</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Hingula Vidya Pitha. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}