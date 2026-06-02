"use client";

import { FileText, Download } from "lucide-react";
import type { NoticeRecord } from "@/data/notices";

interface NoticeCardProps {
  notice: NoticeRecord;
  onPreview: () => void;
  onDownload: () => void;
}

export function NoticeCard({ notice, onPreview, onDownload }: NoticeCardProps) {
  const priorityColors = {
    high: "border-l-4 border-l-red-500",
    medium: "border-l-4 border-l-amber-500",
    low: "border-l-4 border-l-green-500",
  };

  return (
    <div
      className={`rounded-lg border border-border bg-card p-4 transition hover:shadow-md ${priorityColors[notice.priority]}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-semibold uppercase text-muted-foreground">
              {notice.category}
            </span>
            <span className="text-[10px] text-muted-foreground">{notice.referenceNo}</span>
            {notice.pinned && (
              <span className="rounded-full bg-amber-500/20 px-1.5 py-0.5 text-[9px] font-bold text-amber-600">
                PINNED
              </span>
            )}
          </div>
          <h3 className="mt-1 font-semibold">{notice.title}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{notice.summary}</p>
          <div className="mt-2 flex items-center gap-3">
            <button
              onClick={onPreview}
              className="flex items-center gap-1 text-xs text-primary hover:underline"
            >
              <FileText className="h-3 w-3" /> Preview
            </button>
            <button
              onClick={onDownload}
              className="flex items-center gap-1 text-xs text-primary hover:underline"
            >
              <Download className="h-3 w-3" /> Download PDF
            </button>
          </div>
        </div>
        <div className="text-right text-xs text-muted-foreground">
          {new Date(notice.date).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
}
