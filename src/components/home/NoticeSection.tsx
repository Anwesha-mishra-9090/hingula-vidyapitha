"use client";

import Link from "next/link";
import { Bell, ChevronRight } from "lucide-react";
import { NOTICES } from "@/data/school";

export function NoticeSection() {
  const latestNotices = NOTICES.slice(0, 5);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-amber-500";
      default:
        return "bg-green-500";
    }
  };

  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-primary" />
          <h3 className="font-display text-lg font-semibold">Latest Notices</h3>
        </div>
        <Link
          href="/notices"
          className="flex items-center gap-1 text-xs text-primary hover:underline"
        >
          View all <ChevronRight className="h-3 w-3" />
        </Link>
      </div>

      <div className="space-y-3">
        {latestNotices.map((notice) => (
          <Link
            key={notice.id}
            href="/notices"
            className="flex items-start gap-3 rounded-lg p-2 transition hover:bg-accent/50"
          >
            <span className={`mt-1 h-2 w-2 rounded-full ${getPriorityColor(notice.priority)}`} />
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium line-clamp-1">{notice.title}</div>
              <div className="mt-0.5 flex items-center gap-2 text-[10px] text-muted-foreground">
                <span>{notice.category}</span>
                <span>•</span>
                <span>{new Date(notice.date).toLocaleDateString()}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
