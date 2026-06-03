import { createFileRoute, Link } from "@tanstack/react-router";
// Deferred framer-motion; use non-animated blocks for lists
import {
  Zap,
  Sun,
  Wind,
  Lightbulb,
  Atom,
  Cpu,
  BatteryCharging,
  Gauge,
  ArrowRight,
  Camera,
} from "lucide-react";
import { ENERGY_PHOTOS } from "@/data/media";

export const Route = createFileRoute("/energy-club")({
  component: EnergyClubPage,
});

const heroImage = ENERGY_PHOTOS[0] || "/gallery/energy/energy-01.jpg";

const projects = [
  {
    icon: Sun,
    title: "Solar Literacy Programme",
    desc: "Hands-on solar cookers, demonstration of photovoltaic panels and a yearly solar-day science fair.",
    tag: "Solar",
  },
  {
    icon: Wind,
    title: "Renewable Survey",
    desc: "Mapping renewable resources of coastal Odisha — a student research module.",
    tag: "Research",
  },
  {
    icon: BatteryCharging,
    title: "Energy Audit",
    desc: "Annual classroom-by-classroom audit of lighting, fans and lab equipment.",
    tag: "Audit",
  },
  {
    icon: Lightbulb,
    title: "LED Retrofit Drive",
    desc: "Replacement of incandescent bulbs with LED equivalents across the campus.",
    tag: "Conservation",
  },
  {
    icon: Atom,
    title: "Innovation Models",
    desc: "Student-built prototypes — solar street lights, wind turbine demonstrators.",
    tag: "Innovation",
  },
  {
    icon: Cpu,
    title: "Digital Sustainability",
    desc: "Computer lab sessions on energy-efficient computing and e-waste awareness.",
    tag: "Digital",
  },
];

const principles = [
  {
    num: "01",
    title: "Conserve First",
    body: "Every watt saved is greener than every watt generated.",
  },
  {
    num: "02",
    title: "Learn by Building",
    body: "Every concept must end in a working student prototype.",
  },
  {
    num: "03",
    title: "Measure Honestly",
    body: "We track real classroom data — units consumed, units saved.",
  },
  {
    num: "04",
    title: "Share Widely",
    body: "Every project is presented to the school and parents.",
  },
];

const stats = [
  { v: "22%", l: "Annual electricity saved", icon: Gauge },
  { v: "16", l: "Student innovation models", icon: Zap },
  { v: "4", l: "District-level selections", icon: Award },
  { v: "45", l: "Active members", icon: Users },
];

function EnergyClubPage() {
  return (
    <div className="container py-8 space-y-10">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Energy Club" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-cyan-900/70" />
        </div>
        <div className="relative p-8 md:p-12 text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-xs uppercase tracking-wider text-cyan-300 font-semibold">
            <Zap className="h-3 w-3" /> Energy Club · STEM Initiative
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold mt-4">Watts of Wisdom</h1>
          <p className="mt-4 text-white/80 max-w-2xl">
            A scientific student ecosystem — committed to renewable energy literacy, conservation
            engineering, and the quiet revolution of measuring before consuming.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link
              to="/academics"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-white text-blue-800 font-semibold hover:bg-white/90 transition"
            >
              Science Curriculum <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-white/20 text-white font-semibold hover:bg-white/30 transition"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
            return (
            <div
                key={stat.l}
                className="rounded-xl border border-border bg-card p-4 text-center"
              >
              <Icon className="h-6 w-6 mx-auto text-blue-500" />
              <div className="font-display text-2xl font-bold mt-2">{stat.v}</div>
              <div className="text-[10px] text-muted-foreground">{stat.l}</div>
            </div>
          );
        })}
      </div>

      {/* Faculty In-charge */}
      <div className="rounded-xl border border-border bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-blue-600 flex items-center justify-center">
            <Zap className="h-8 w-8 text-white" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">
              Faculty In-charge
            </div>
            <h3 className="font-display text-xl font-bold">Tushar Kanti Dutta</h3>
            <div className="text-sm text-muted-foreground">TGT Science · Mathematics</div>
            <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
              The Energy Club operates alongside the Eco Club under the science department, with a
              sharper focus on physics, electricity and the engineering of energy systems.
            </p>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div>
        <h2 className="font-display text-2xl font-bold mb-6">Projects & Programmes</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className="rounded-xl border border-border bg-card p-4 hover:shadow-md transition"
              >
                <div className="flex items-start justify-between">
                  <Icon className="h-6 w-6 text-blue-500" />
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                    {project.tag}
                  </span>
                </div>
                <h3 className="font-semibold mt-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{project.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Operating Principles */}
      <div>
        <h2 className="font-display text-2xl font-bold mb-6">Operating Principles</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle) => (
            <div
              key={principle.num}
              className="rounded-xl border border-border bg-card p-4 relative overflow-hidden"
            >
              <div className="absolute -top-4 -right-4 text-6xl font-bold text-blue-500/10">
                {principle.num}
              </div>
              <h3 className="font-semibold relative">{principle.title}</h3>
              <p className="text-sm text-muted-foreground mt-1 relative">{principle.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-2xl font-bold">Inside the Lab — Energy in Motion</h2>
          <Link
            to="/gallery"
            className="text-sm text-primary hover:underline inline-flex items-center gap-1"
          >
            View All <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {ENERGY_PHOTOS.slice(0, 8).map((src, i) => (
            <Link
              key={src}
              to="/gallery"
              className="group relative aspect-square overflow-hidden rounded-lg border border-border bg-muted"
            >
              <img
                src={src}
                alt="Energy Club Activity"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-2">
                <Camera className="h-4 w-4 text-white" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default EnergyClubPage;
