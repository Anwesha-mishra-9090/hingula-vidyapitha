'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface NCCGalleryStripProps {
  images: { src: string; title: string }[];
}

export function NCCGalleryStrip({ images }: NCCGalleryStripProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div>
        <h2 className="mb-6 font-display text-2xl font-bold">Gallery</h2>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {images.slice(0, 12).map((img, i) => (
            <button
              key={img.src}
              onClick={() => openLightbox(i)}
              className="group relative aspect-square overflow-hidden rounded-lg border border-border"
            >
              <img
                src={img.src}
                alt={img.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition group-hover:opacity-100">
                <span className="text-xs text-white">View</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute right-4 top-4 text-white/70 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
            className="absolute left-4 text-white/70 hover:text-white"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].title}
            className="max-h-[85vh] max-w-[85vw] rounded-lg object-contain"
          />
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
            className="absolute right-4 text-white/70 hover:text-white"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
          <div className="absolute bottom-4 text-white/50">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}