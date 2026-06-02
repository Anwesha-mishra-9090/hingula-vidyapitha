import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { ArrowRight, Layers, Library, FlaskConical, Presentation, Trophy, Shield, Leaf, Music, Building2 } from "lucide-react";
import { FACILITIES, FACILITY_CATEGORIES } from "@/data/facilities";

export const Route = createFileRoute("/campus-life")({
  component: CampusLifePage,
});

const categoryIcons: Record<string, any> = {
  Academic: Library,
  Sports: Trophy,
  Cultural: Music,
  Administrative: Building2,
  Ecological: Leaf,
  Defence: Shield,
};

function CampusLifePage() {
  const [category, setCategory] = useState<string>("All");

  const filtered = useMemo(() => {
    if (category === "All") return FACILITIES;
    return FACILITIES.filter(f => f.category === category);
  }, [category]);

  return (
    <div className="container py-8">
      {/* Header */}
      <header className="relative overflow-hidden rounded-2xl border border-border shadow-elegant mb-8">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=2000&q=80"
            alt="Campus"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
        </div>
        <div className="relative p-8 md:p-12 text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-[10px] uppercase tracking-wider text-gold font-semibold">
            <Layers className="h-3 w-3" /> Infrastructure Ecosystem
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold mt-4">Campus Life</h1>
          <p className="mt-4 text-white/80 max-w-2xl">
            Twelve spaces, one institution. Walk through each facility — library to laboratory, 
            ground to garden — and read the history, statistics, and student stories.
          </p>
        </div>
      </header>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {FACILITY_CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-3.5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition ${
              category === cat
                ? "bg-primary text-primary-foreground shadow-elegant"
                : "bg-card border border-border hover:bg-accent"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Facilities Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((facility, i) => {
          const Icon = categoryIcons[facility.category] || Building2;
          return (
            <motion.div
              key={facility.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 6) * 0.05 }}
            >
              <Link
                to="/campus-life/$slug"
                params={{ slug: facility.slug }}
                className="group block rounded-xl overflow-hidden border border-border bg-card hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={facility.hero}
                    alt={facility.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider text-white backdrop-blur-sm"
                      style={{ backgroundColor: `${facility.accent}cc` }}
                    >
                      <Icon className="h-3 w-3" />
                      {facility.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="font-display text-xl font-bold text-white">{facility.name}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">{facility.tagline}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex gap-3">
                      {facility.stats.slice(0, 2).map(stat => (
                        <div key={stat.label}>
                          <div className="font-display text-lg font-bold text-primary">
                            {stat.value.toLocaleString()}{stat.suffix || ""}
                          </div>
                          <div className="text-[10px] text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition" />
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}