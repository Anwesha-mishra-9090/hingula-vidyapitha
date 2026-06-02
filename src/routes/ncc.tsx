import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Shield, Flag, Award, Users, Calendar, Target, Compass, HeartHandshake, BookOpen, Mountain, Trophy, ArrowRight } from "lucide-react";
import { NCC_HIGHLIGHTS } from "@/data/gallery";
import anoPortrait from "@/assets/ncc-ano.jpg";

export const Route = createFileRoute("/ncc")({
  component: NCCPage,
});

const HERO = "/gallery/ncc/ncc-05.jpg";

const timeline = [
  { year: 2012, event: "NCC Unit Inauguration", detail: "Affiliated to 4(O) Composite Technical Coy NCC, Cuttack. Inaugurated by Lt. Col. M.S Dash, Commanding Officer." },
  { year: 2019, event: "First Republic Day Parade", detail: "Cadet contingent of 24 marches at the Jajpur district function." },
  { year: 2021, event: "First Combined Annual Training Camp", detail: "30 cadets participated at the district HQ — drill, map-reading, weapon training and adventure activities." },
  { year: 2022, event: "Best NCC Unit — Jajpur District", detail: "Awarded for discipline, attendance and parade excellence at the district NCC Day." },
  { year: 2024, event: "Combined Annual Training Camp · Bhubaneswar", detail: "19–28 June 2024 · Dept. of Technical Education and Research." },
];

const trainingPillars = [
  { icon: Footprints, title: "Drill & Parade", desc: "Weekly parade practice on the school ground. Foot drill, arms drill and ceremonial movements." },
  { icon: Target, title: "Weapon Training", desc: "Familiarisation with .22 rifle under supervised range conditions during ATCs." },
  { icon: Compass, title: "Map Reading & Field Craft", desc: "Direction-finding, contour reading, field signals and concealment." },
  { icon: Mountain, title: "Adventure Activities", desc: "Trekking, obstacle course and rock-climbing through state-level adventure camps." },
  { icon: HeartHandshake, title: "Social Service", desc: "Swachh Bharat drives, plantation, blood donation awareness and road-safety campaigns." },
  { icon: BookOpen, title: "Institutional Training", desc: "Theory on NCC organisation, national integration, leadership and disaster management." },
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
            The cadet wing of Hingula Vidya Pitha. Affiliated to 4(O) CTC NCC, Cuttack
            since 2012 — training young citizens in discipline, service and leadership.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-lg border border-border bg-card p-4 text-center"
            >
              <Icon className="h-5 w-5 mx-auto text-gold" />
              <div className="font-display text-xl font-bold mt-2">{stat.value}</div>
              <div className="text-[10px] text-muted-foreground">{stat.label}</div>
            </motion.div>
          );
        })}
      </div>

      {/* ANO Profile */}
      <div className="grid lg:grid-cols-[1fr,1.5fr] gap-6">
        <div className="rounded-xl overflow-hidden border border-border">
          <img src={anoPortrait} alt="ANO Ranjan Kumar Mishra" className="w-full h-auto object-cover" />
        </div>
        <div className="space-y-4">
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Officer Commanding</div>
          <h2 className="font-display text-3xl font-bold">F/O Ranjan Kumar Mishra</h2>
          <p className="text-muted-foreground leading-relaxed">
            Associate NCC Officer (ANO) and TGT Sanskrit & Odia at Hingula Vidya Pitha.
            Commissioned through the Officers Training Academy, Kamptee, F/O Mishra leads
            the cadet wing with focus on discipline, physical fitness, and the values of
            service before self.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-muted">
              <div className="text-[10px] uppercase text-muted-foreground">Rank</div>
              <div className="font-semibold mt-1">First Officer (ANO)</div>
            </div>
            <a href="tel:9777386536" className="p-3 rounded-lg bg-muted hover:bg-accent transition text-center">
              <div className="text-[10px] uppercase text-muted-foreground">Contact</div>
              <div className="font-mono font-semibold mt-1 text-primary">9777386536</div>
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
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="rounded-lg border border-border bg-card p-4"
              >
                <Icon className="h-6 w-6 text-gold" />
                <h3 className="font-semibold mt-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{pillar.desc}</p>
              </motion.div>
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
          <Link to="/gallery" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
            View Full Gallery <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {NCC_HIGHLIGHTS.slice(0, 12).map((img) => (
            <Link
              key={img.src}
              to="/gallery"
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}