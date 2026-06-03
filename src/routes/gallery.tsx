import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { LazyPresence } from "@/components/animations/LazyPresence";
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react";
import { GALLERY_IMAGES, GALLERY_CATEGORIES } from "@/data/gallery";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
});

function GalleryPage() {
  const [category, setCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (category === "All") return GALLERY_IMAGES;
    return GALLERY_IMAGES.filter((img) => img.cat === category);
  }, [category]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: GALLERY_IMAGES.length };
    GALLERY_CATEGORIES.forEach((cat) => {
      if (cat !== "All") {
        counts[cat] = GALLERY_IMAGES.filter((img) => img.cat === cat).length;
      }
    });
    return counts;
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (lightboxIndex === null) return;
    if (e.key === "Escape") setLightboxIndex(null);
    if (e.key === "ArrowLeft") {
      setLightboxIndex((prev) => (prev! - 1 + filtered.length) % filtered.length);
    }
    if (e.key === "ArrowRight") {
      setLightboxIndex((prev) => (prev! + 1) % filtered.length);
    }
  };

  useState(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const currentImage = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <div className="container py-8">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
          <Images className="h-3 w-3" /> Media Archive
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-1">Campus Gallery</h1>
        <p className="text-muted-foreground mt-3 max-w-2xl">
          {GALLERY_IMAGES.length} curated moments from our parade ground, classrooms, cultural
          stages, camps and community drives.
        </p>
      </header>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {GALLERY_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors inline-flex items-center gap-2 ${
              category === cat
                ? "bg-primary text-primary-foreground"
                : "bg-card border border-border hover:bg-accent"
            }`}
          >
            {cat}
            <span
              className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                category === cat ? "bg-primary-foreground/20" : "bg-muted text-muted-foreground"
              }`}
            >
              {categoryCounts[cat]}
            </span>
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      {filtered.length === 0 ? (
        <div className="py-12 text-center text-muted-foreground">
          No images found in this category.
        </div>
      ) : (
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {filtered.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setLightboxIndex(i)}
              className="group relative w-full overflow-hidden rounded-xl border border-border bg-muted block break-inside-avoid"
            >
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <div className="text-white">
                  <div className="text-[10px] uppercase tracking-wider text-gold font-semibold">
                    {img.cat}
                    {img.date ? ` · ${img.date}` : ""}
                  </div>
                  <div className="text-sm font-medium leading-snug">{img.title}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      <LazyPresence>
        {lightboxIndex !== null && currentImage && (
          <div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white"
              onClick={() => setLightboxIndex(null)}
            >
              <X className="h-6 w-6" />
            </button>

            <button
              className="absolute left-4 text-white/70 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev! - 1 + filtered.length) % filtered.length);
              }}
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <img
              key={lightboxIndex}
              src={currentImage.src}
              alt={currentImage.title}
              className="max-h-[85vh] max-w-[85vw] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="absolute right-4 text-white/70 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev! + 1) % filtered.length);
              }}
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white">
              <div className="text-[10px] uppercase tracking-wider text-gold font-semibold">
                {currentImage.cat}
                {currentImage.date ? ` · ${currentImage.date}` : ""}
              </div>
              <div className="text-sm">
                {currentImage.title} · {lightboxIndex + 1} / {filtered.length}
              </div>
            </div>
          </div>
        )}
      </LazyPresence>
    </div>
  );
}
export default GalleryPage;
