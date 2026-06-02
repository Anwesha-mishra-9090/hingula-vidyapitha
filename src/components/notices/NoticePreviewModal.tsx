"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download } from "lucide-react";
import type { NoticeRecord } from "@/data/notices";

interface NoticePreviewModalProps {
  notice: NoticeRecord | null;
  onClose: () => void;
  onDownload: () => void;
}

export function NoticePreviewModal({ notice, onClose, onDownload }: NoticePreviewModalProps) {
  if (!notice) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative max-h-[85vh] w-full max-w-2xl overflow-auto rounded-xl bg-card shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-lg p-1 hover:bg-accent"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="p-6">
            <div className="mb-4 flex items-center gap-2 text-xs">
              <span className="font-semibold uppercase text-primary">{notice.category}</span>
              <span>•</span>
              <span className="text-muted-foreground">{notice.referenceNo}</span>
              <span>•</span>
              <span className="text-muted-foreground">
                {new Date(notice.date).toLocaleDateString()}
              </span>
            </div>

            <h3 className="font-display text-2xl font-bold">{notice.attachment.title}</h3>

            <div className="mt-4 space-y-2 border-t border-border pt-4">
              {notice.attachment.meta.map((m) => (
                <div key={m.label} className="flex text-sm">
                  <span className="w-32 font-medium">{m.label}:</span>
                  <span className="text-muted-foreground">{m.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 whitespace-pre-line text-sm leading-relaxed">
              {notice.attachment.body}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={onDownload}
                className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
