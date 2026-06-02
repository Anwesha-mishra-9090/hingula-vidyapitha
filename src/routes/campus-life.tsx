import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Library,
  FlaskConical,
  Presentation,
  Trophy,
  Shield,
  Leaf,
  Music,
  Building2,
} from "lucide-react";

const FACILITIES = [
  {
    slug: "library",
    name: "Central Library",
    category: "Academic",
    icon: Library,
    tagline: "A quiet chamber of knowledge.",
  },
  {
    slug: "science-laboratory",
    name: "Science Laboratory",
    category: "Academic",
    icon: FlaskConical,
    tagline: "Where the syllabus becomes an experiment.",
  },
  {
    slug: "smart-classroom",
    name: "Smart Classroom",
    category: "Academic",
    icon: Presentation,
    tagline: "Digital learning at its best.",
  },
  {
    slug: "sports-ground",
    name: "Sports Ground",
    category: "Sports",
    icon: Trophy,
    tagline: "Open field, open lungs.",
  },
  {
    slug: "ncc-ground",
    name: "NCC Parade Ground",
    category: "Defence",
    icon: Shield,
    tagline: "Where discipline is rehearsed.",
  },
  {
    slug: "eco-garden",
    name: "Eco Garden",
    category: "Ecological",
    icon: Leaf,
    tagline: "A living classroom.",
  },
  {
    slug: "activity-hall",
    name: "Activity Hall",
    category: "Cultural",
    icon: Music,
    tagline: "The stage of memories.",
  },
  {
    slug: "administrative-office",
    name: "Administrative Office",
    category: "Administrative",
    icon: Building2,
    tagline: "The quiet engine.",
  },
];

function CampusLifePage() {
  return (
    <div className="container py-8">
      <header className="mb-8">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">Infrastructure</div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-1">Campus Life</h1>
        <p className="text-muted-foreground mt-3 max-w-2xl">
          Explore our facilities — library to laboratory, ground to garden.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FACILITIES.map((facility) => {
          const Icon = facility.icon;
          return (
            <Link
              key={facility.slug}
              to="/campus-life/$slug"
              params={{ slug: facility.slug }}
              className="group block rounded-xl overflow-hidden border border-border bg-card hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={`https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80`}
                  alt={facility.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[9px] font-bold uppercase text-white bg-primary/80">
                    <Icon className="h-3 w-3" />
                    {facility.category}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-display text-lg font-bold text-white">{facility.name}</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground line-clamp-2">{facility.tagline}</p>
                <div className="mt-3 flex items-center justify-end">
                  <div className="text-xs font-semibold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export const Route = createFileRoute("/campus-life")({
  component: CampusLifePage,
});

export default CampusLifePage;
