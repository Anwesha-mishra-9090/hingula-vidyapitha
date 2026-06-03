"use client";

import { useState } from "react";
import { ScrollReveal } from "../animations/ScrollReveal";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";

interface ClubGalleryProps {
  photos: string[];
  title: string;
  accentColor: string;
}

export function ClubGallery({ photos, title, accentColor }: ClubGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  if (!photos.length) return null;

  return (
    <>
      <div>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-display text-2xl font-bold">{title}</h2>
          <span className="text-sm text-muted-foreground">{photos.length} photos</span>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {photos.slice(0, 12).map((src, i) => (
            <ScrollReveal key={src} delay={i * 0.05} className="group relative aspect-video overflow-hidden rounded-lg border border-border">
              <button onClick={() => openLightbox(i)} className="h-full w-full">
                <img
                  src={src}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition group-hover:opacity-100">
                  <Camera className="h-5 w-5 text-white" />
                </div>
              </button>
            </ScrollReveal>
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
            onClick={() => setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length)}
            className="absolute left-4 text-white/70 hover:text-white"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <img
            src={photos[currentIndex]}
            alt=""
            className="max-h-[85vh] max-w-[85vw] rounded-lg object-contain"
          />
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % photos.length)}
            className="absolute right-4 text-white/70 hover:text-white"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
          <div className="absolute bottom-4 text-white/50">
            {currentIndex + 1} / {photos.length}
          </div>
        </div>
      )}
    </>
  );
}
