"use client";

import { useEffect, useState } from "react";
import { Link } from "next/navigation";
import { Bell, Pause, Play } from "lucide-react";
import { NOTICE_RECORDS } from "@/data/notices";

export function NoticeTicker() {
  const [paused, setPaused] = useState(false);
  const [offset, setOffset] = useState(0);
  const notices = NOTICE_RECORDS.slice(0, 6);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % notices.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [paused, notices.length]);

  return (
    <div className="relative overflow-hidden border-y border-border bg-primary/5">
      <div className="flex items-center">
        <div className="flex items-center gap-2 bg-primary px-4 py-2 text-white">
          <Bell className="h-4 w-4" />
          <span className="text-xs font-semibold uppercase tracking-wider">Latest</span>
        </div>

        <div className="flex-1 overflow-hidden px-4 py-2">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${offset * 100}%)` }}
          >
            {notices.map((notice) => (
              <Link
                key={notice.id}
                href="/notices"
                className="flex w-full flex-shrink-0 items-center gap-3 text-sm"
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    notice.priority === "high"
                      ? "bg-red-500"
                      : notice.priority === "medium"
                        ? "bg-amber-500"
                        : "bg-green-500"
                  }`}
                />
                <span className="font-medium">{notice.title}</span>
                <span className="text-xs text-muted-foreground">
                  {new Date(notice.date).toLocaleDateString()}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <button
          onClick={() => setPaused(!paused)}
          className="px-3 py-2 hover:bg-primary/10 transition"
        >
          {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}
