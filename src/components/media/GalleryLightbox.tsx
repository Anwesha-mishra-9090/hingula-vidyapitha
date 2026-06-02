"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryLightboxProps {
  images: { src: string; title: string; category?: string }[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

export function GalleryLightbox({
  images,
  initialIndex = 0,
  isOpen,
  onClose,
}: GalleryLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft")
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setCurrentIndex((prev) => (prev + 1) % images.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, images.length, onClose]);

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <button className="absolute top-4 right-4 text-white/70 hover:text-white" onClick={onClose}>
          <X className="h-6 w-6" />
        </button>

        <button
          className="absolute left-4 text-white/70 hover:text-white"
          onClick={(e) => {
            e.stopPropagation();
            setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
          }}
        >
          <ChevronLeft className="h-8 w-8" />
        </button>

        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-h-[85vh] max-w-[85vw]"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={currentImage.src}
            alt={currentImage.title}
            className="max-h-[80vh] max-w-[80vw] object-contain rounded-lg"
          />
          <div className="mt-4 text-center text-white">
            <p className="text-sm">{currentImage.title}</p>
            {currentImage.category && (
              <p className="text-xs text-white/60">{currentImage.category}</p>
            )}
          </div>
        </motion.div>

        <button
          className="absolute right-4 text-white/70 hover:text-white"
          onClick={(e) => {
            e.stopPropagation();
            setCurrentIndex((prev) => (prev + 1) % images.length);
          }}
        >
          <ChevronRight className="h-8 w-8" />
        </button>

        <div className="absolute bottom-4 text-white/50 text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
