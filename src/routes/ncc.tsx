import { createFileRoute } from "@tanstack/react-router";
// framer-motion deferred; use non-animated blocks for lists
import {
  Shield,
  Flag,
  Award,
  Users,
  Calendar,
  Target,
  Compass,
  HeartHandshake,
  BookOpen,
  Mountain,
  Trophy,
  ArrowRight,
} from "lucide-react";
import { NCC_HIGHLIGHTS } from "@/data/gallery";

export const Route = createFileRoute("/ncc")({
  component: NCCPage,
});

const HERO = "/gallery/ncc/ncc-05.jpg";

const timeline = [
  {
    year: 2012,
    event: "NCC Unit Inauguration",
    detail: "Affiliated to 4(O) Composite Technical Coy NCC, Cuttack.",
  },
  {
    year: 2019,
    event: "First Republic Day Parade",
    detail: "Cadet contingent of 24 marches at the Jajpur district function.",
  },
  {
    year: 2021,
    event: "First Combined Annual Training Camp",
    detail: "30 cadets participated at the district HQ.",
  },
  {
    year: 2022,
    event: "Best NCC Unit — Jajpur District",
    detail: "Awarded for discipline and parade excellence.",
  },
  { year: 2024, event: "Combined Annual Training Camp", detail: "19–28 June 2024 at Bhubaneswar." },
];

const trainingPillars = [
  { icon: Compass, title: "Drill & Parade", desc: "Weekly parade practice on the school ground." },
  {
    icon: Target,
    title: "Weapon Training",
    desc: "Familiarisation with .22 rifle under supervised conditions.",
  },
  {
    icon: MapPin,
    title: "Map Reading",
    desc: "Direction-finding, contour reading, field signals.",
  },
  {
    icon: Mountain,
    title: "Adventure Activities",
    desc: "Trekking, obstacle course and rock-climbing.",
  },
  {
    icon: HeartHandshake,
    title: "Social Service",
    desc: "Swachh Bharat drives, plantation, awareness campaigns.",
  },
  {
    icon: BookOpen,
    title: "Institutional Training",
    desc: "Theory on NCC organisation and leadership.",
  },
];

const stats = [
  { icon: Users, label: "Active Cadets", value: "50" },
  { icon: Award, label: "District Awards", value: "8" },
  { icon: Flag, label: "Camps Attended", value: "18" },
  { icon: Trophy, label: "Best Cadet Honours", value: "6" },
  { icon: Calendar, label: "Established", value: "2012" },
  { icon: Shield, label: "Parent Unit", value: "4(O) CTC" },
];

function NCCPage() {
  return (
    <div className="container py-8 space-y-10">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0">
          <img src={HERO} alt="NCC Unit" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
        </div>
        <div className="relative p-8 md:p-12 text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-xs uppercase tracking-wider text-gold font-semibold">
            <Shield className="h-3 w-3" /> NCC Unit · 4(O) CTC NCC, Cuttack
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold mt-4">एकता और अनुशासन</h1>
          <p className="text-white/80 text-lg mt-2">Unity & Discipline</p>
          <p className="mt-4 text-white/70 max-w-2xl">
            The cadet wing of Hingula Vidya Pitha. Affiliated to 4(O) CTC NCC, Cuttack since 2012 —
            training young citizens in discipline, service and leadership.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
            return (
            <div
              key={stat.label}
              className="rounded-lg border border-border bg-card p-4 text-center"
            >
              <Icon className="h-5 w-5 mx-auto text-gold" />
              <div className="font-display text-xl font-bold mt-2">{stat.value}</div>
              <div className="text-[10px] text-muted-foreground">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* ANO Profile - Without image */}
      <div className="rounded-xl border border-border bg-gradient-to-r from-primary/10 to-gold/10 p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">
              Associate NCC Officer
            </div>
            <h2 className="font-display text-2xl font-bold">F/O Ranjan Kumar Mishra</h2>
            <div className="text-sm text-muted-foreground">TGT Sanskrit & Odia · NCC ANO</div>
            <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
              Leading the cadet wing with focus on discipline, physical fitness, and the values of
              service before self.
            </p>
            <a
              href="tel:9777386536"
              className="inline-block mt-3 text-sm text-primary hover:underline"
            >
              Contact: 9777386536
            </a>
          </div>
        </div>
      </div>

      {/* Training Pillars */}
      <div>
        <h2 className="font-display text-2xl font-bold mb-6">Training Pillars</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trainingPillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="rounded-lg border border-border bg-card p-4"
              >
                <Icon className="h-6 w-6 text-gold" />
                <h3 className="font-semibold mt-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Timeline */}
      <div>
        <h2 className="font-display text-2xl font-bold mb-6">Unit History</h2>
        <div className="relative pl-6">
          <div className="absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-gold to-transparent" />
          <div className="space-y-6">
            {timeline.map((event, i) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="relative"
              >
                <span className="absolute -left-[22px] top-1 h-3 w-3 rounded-full bg-gold ring-4 ring-background" />
                <div className="font-display text-xl font-bold text-gold">{event.year}</div>
                <div className="font-semibold mt-1">{event.event}</div>
                <p className="text-sm text-muted-foreground mt-1">{event.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Strip */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-2xl font-bold">Cadet Life Gallery</h2>
          <a
            href="/gallery"
            className="text-sm text-primary hover:underline inline-flex items-center gap-1"
          >
            View Full Gallery <ArrowRight className="h-3 w-3" />
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {NCC_HIGHLIGHTS.slice(0, 12).map((img) => (
            <a
              key={img.src}
              href="/gallery"
              className="group relative aspect-square overflow-hidden rounded-lg border border-border bg-muted"
            >
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-2">
                <span className="text-[10px] text-white font-medium line-clamp-2">{img.title}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NCCPage;
