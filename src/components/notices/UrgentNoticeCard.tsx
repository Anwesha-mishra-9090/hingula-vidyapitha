"use client";

import { AlertTriangle } from "lucide-react";
import type { NoticeRecord } from "@/data/notices";

interface UrgentNoticeCardProps {
  notice: NoticeRecord;
  onClick: () => void;
}

export function UrgentNoticeCard({ notice, onClick }: UrgentNoticeCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-lg border border-red-200 bg-red-50 p-4 text-left transition hover:shadow-md dark:border-red-900 dark:bg-red-950/30"
    >
      <div className="flex items-start gap-3">
        <AlertTriangle className="h-5 w-5 text-red-500" />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase text-red-600">Urgent</span>
            <span className="text-xs text-muted-foreground">{notice.category}</span>
          </div>
          <h3 className="mt-1 font-semibold">{notice.title}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{notice.summary}</p>
          <div className="mt-2 text-xs text-muted-foreground">
            {new Date(notice.date).toLocaleDateString()}
          </div>
        </div>
      </div>
    </button>
  );
}
