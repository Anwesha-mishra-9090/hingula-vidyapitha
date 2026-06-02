'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface MediaStripProps {
  photos: string[];
  accent?: string;
  columns?: 3 | 4 | 5;
}

export function MediaStrip({ photos, accent = 'var(--primary)', columns = 4 }: MediaStripProps) {
  const [open, setOpen] = useState<number | null>(null);

  const gridClass = {
    3: 'grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
    5: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
  }[columns];

  return (
    <>
      <div className={`grid ${gridClass} gap-3`}>
        {photos.slice(0, 12).map((src, i) => (
          <motion.button
            key={src}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 8) * 0.03 }}
            onClick={() => setOpen(i)}
            className="group relative aspect-video overflow-hidden rounded-lg border border-border bg-muted"
          >
            <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span className="text-white text-xs">View</span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      {open !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4" onClick={() => setOpen(null)}>
          <button className="absolute top-4 right-4 text-white/70 hover:text-white" onClick={() => setOpen(null)}>
            <X className="h-6 w-6" />
          </button>
          <button className="absolute left-4 text-white/70 hover:text-white" onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + photos.length) % photos.length); }}>
            <ChevronLeft className="h-8 w-8" />
          </button>
          <img src={photos[open]} alt="" className="max-h-[85vh] max-w-[85vw] object-contain" onClick={(e) => e.stopPropagation()} />
          <button className="absolute right-4 text-white/70 hover:text-white" onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % photos.length); }}>
            <ChevronRight className="h-8 w-8" />
          </button>
          <div className="absolute bottom-4 text-white/60 text-sm">
            {open + 1} / {photos.length}
          </div>
        </div>
      )}
    </>
  );
}