'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface GalleryImage {
  src: string;
  caption: string;
}

interface FacilityGalleryProps {
  images: GalleryImage[];
}

export function FacilityGallery({ images }: FacilityGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images.length) return null;

  return (
    <>
      <div>
        <h2 className="mb-6 font-display text-2xl font-bold">Gallery</h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {images.slice(0, 8).map((image, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => openLightbox(i)}
              className="group relative aspect-square overflow-hidden rounded-lg border border-border"
            >
              <img
                src={image.src}
                alt={image.caption}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition group-hover:opacity-100">
                <ZoomIn className="h-6 w-6 text-white" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute right-4 top-4 text-white/70 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-4 text-white/70 hover:text-white"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          
          <div className="max-h-[85vh] max-w-[85vw]">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].caption}
              className="max-h-[80vh] max-w-[80vw] rounded-lg object-contain"
            />
            <p className="mt-4 text-center text-sm text-white/80">
              {images[currentIndex].caption}
            </p>
          </div>
          
          <button
            onClick={nextImage}
            className="absolute right-4 text-white/70 hover:text-white"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
          
          <div className="absolute bottom-4 text-sm text-white/50">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}