"use client";

import { useState, useEffect } from "react";
import { Menu, Search, Sun, Moon, Bell } from "lucide-react";
import { useTheme } from "next-themes";
import { LogoMark } from "@/components/shared/LogoMark";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onMenuClick: () => void;
  onSearchClick: () => void;
}

export function Header({ onMenuClick, onSearchClick }: HeaderProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        {/* Left Section */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={onMenuClick}>
            <Menu className="h-5 w-5" />
          </Button>
          <LogoMark size={32} />
          <div className="hidden lg:flex items-center gap-2">
            <span className="text-sm font-semibold">Hingula Vidya Pitha</span>
          </div>
        </div>

        {/* Center Section - Search */}
        <button
          onClick={onSearchClick}
          className="hidden md:flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm text-muted-foreground hover:bg-accent transition-colors min-w-[300px]"
        >
          <Search className="h-4 w-4" />
          <span>Search faculty, notices, gallery...</span>
          <kbd className="ml-auto hidden text-xs text-muted-foreground lg:inline-flex items-center gap-1">
            <span className="rounded border px-1">⌘</span>
            <span>K</span>
          </kbd>
        </button>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={onSearchClick}>
            <Search className="h-5 w-5" />
          </Button>

          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          )}

          <div className="hidden md:block text-right text-sm">
            <div className="font-mono tabular-nums">{time}</div>
            <div className="text-[10px] text-muted-foreground">Bhotaka, Jajpur</div>
          </div>
        </div>
      </div>
    </header>
  );
}
