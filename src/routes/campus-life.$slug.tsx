import { createFileRoute, Link } from "@tanstack/react-router";
// framer-motion deferred; use non-animated hero image
import { useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, X, ZoomIn, Building2 } from "lucide-react";
import { FACILITIES, type Facility } from "@/data/facilities";

export const Route = createFileRoute("/campus-life/$slug")({
  component: FacilityDetailPage,
  loader: ({ params }) => {
    const facility = FACILITIES.find((f) => f.slug === params.slug);
    if (!facility) throw new Error("Facility not found");
    return { facility };
  },
});

function FacilityDetailPage() {
  const { facility: f } = Route.useLoaderData() as { facility: Facility };
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div className="container py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/campus-life" className="hover:text-primary transition">
          Campus Life
        </Link>
        <span>/</span>
        <span className="text-foreground">{f.name}</span>
      </div>

      {/* Hero */}
      <div className="relative h-[40vh] min-h-[300px] rounded-2xl overflow-hidden mb-8">
        <img src={f.hero} alt={f.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Building2 className="h-4 w-4 text-gold" />
            <span className="text-xs uppercase tracking-wider text-gold">{f.category}</span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold">{f.name}</h1>
          <p className="text-white/80 mt-2 max-w-2xl">{f.tagline}</p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Overview */}
          <div>
            <h2 className="font-display text-2xl font-bold mb-3">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">{f.intro}</p>
            {f.longDescription.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mt-3">
                {p}
              </p>
            ))}
          </div>

          {/* Stats */}
          <div>
            <h2 className="font-display text-2xl font-bold mb-4">At a Glance</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {f.stats.map((stat, i) => (
                <div key={i} className="text-center p-4 rounded-lg bg-muted/50">
                  <div className="font-display text-2xl font-bold text-primary">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          {f.highlights.length > 0 && (
            <div>
              <h2 className="font-display text-2xl font-bold mb-4">Key Features</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {f.highlights.map((h, i) => (
                  <div key={i} className="p-4 rounded-lg border border-border bg-card">
                    <div className="font-semibold">{h.title}</div>
                    <p className="text-sm text-muted-foreground mt-1">{h.body}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Timeline */}
          {f.timeline.length > 0 && (
            <div>
              <h2 className="font-display text-2xl font-bold mb-4">Milestones</h2>
              <div className="space-y-4">
                {f.timeline.map((t, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-20 flex-shrink-0 font-display text-xl font-bold text-primary">
                      {t.year}
                    </div>
                    <div>
                      <div className="font-semibold">{t.title}</div>
                      <p className="text-sm text-muted-foreground">{t.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="p-5 rounded-xl border border-border bg-card">
            <h3 className="font-semibold mb-3">Departments</h3>
            <div className="flex flex-wrap gap-2">
              {f.departments.map((d) => (
                <span key={d} className="px-2 py-1 rounded-full text-xs bg-muted">
                  {d}
                </span>
              ))}
            </div>
          </div>
          <div className="p-5 rounded-xl border border-border bg-card">
            <h3 className="font-semibold mb-3">Category</h3>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-primary/10 text-primary">
              <Building2 className="h-3 w-3" />
              {f.category}
            </span>
          </div>
          <Link
            to="/campus-life"
            className="flex items-center justify-center gap-2 p-3 rounded-lg border border-border hover:bg-accent transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Campus Life
          </Link>
        </div>
      </div>

      {/* Gallery Section */}
      {f.gallery.length > 0 && (
        <div className="mt-12">
          <h2 className="font-display text-2xl font-bold mb-6">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {f.gallery.slice(0, 8).map((img, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className="group relative aspect-square overflow-hidden rounded-lg border border-border bg-muted"
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <ZoomIn className="h-6 w-6 text-white" />
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white"
            onClick={() => setLightbox(null)}
          >
            <X className="h-6 w-6" />
          </button>
          <button
            className="absolute left-4 text-white/70 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox - 1 + f.gallery.length) % f.gallery.length);
            }}
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <img
            src={f.gallery[lightbox].src}
            alt={f.gallery[lightbox].caption}
            className="max-h-[85vh] max-w-[85vw] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 text-white/70 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % f.gallery.length);
            }}
          >
            <ChevronRight className="h-8 w-8" />
          </button>
          <div className="absolute bottom-4 text-white/50 text-sm">
            {lightbox + 1} / {f.gallery.length}
          </div>
        </div>
      )}
    </div>
  );
}
