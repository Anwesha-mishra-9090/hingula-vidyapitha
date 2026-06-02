import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Leaf, Trees, Sprout, Droplets, Sun, Recycle, Globe2, Users, Calendar, Award, ArrowRight, Camera } from "lucide-react";
import { ECO_PHOTOS } from "@/data/media";

export const Route = createFileRoute("/eco-club")({
  component: EcoClubPage,
});

const ecoHero = ECO_PHOTOS[0] || "/gallery/eco/eco-01.jpg";

const initiatives = [
  { icon: Trees, title: "Plantation Drives", desc: "Annual saplings programme across the campus boundary and adopted village commons under World Environment Day." },
  { icon: Droplets, title: "Water Stewardship", desc: "Rainwater harvesting awareness, pond restoration shramdaan and groundwater conservation lessons." },
  { icon: Recycle, title: "Waste Segregation", desc: "Wet / dry / e-waste sorting at every classroom block and a no-single-use-plastic rule on campus." },
  { icon: Sprout, title: "Kitchen Garden", desc: "Student-tended organic patch behind the activity hall — seasonal vegetables grown without chemical inputs." },
  { icon: Sun, title: "Climate Literacy", desc: "Weekly reading circle on climate science and Odisha-specific climate impact talks." },
  { icon: Globe2, title: "Community Outreach", desc: "Door-to-door cleanliness drives and awareness rallies in Bhotaka and surrounding hamlets." },
];

const timeline = [
  { year: 2018, title: "Eco Club formally constituted", body: "Set up under TGT Science Tushar Kanti Dutta with 24 founder members." },
  { year: 2019, title: "First mass plantation drive", body: "300 saplings planted on World Environment Day." },
  { year: 2022, title: "Prakruti Mitra Award", body: "District-level institutional award for sustained environmental activity." },
  { year: 2023, title: "Plastic-free campus declaration", body: "Single-use plastic banned at the canteen and classrooms." },
];

const stats = [
  { icon: Trees, label: "Trees Planted", value: "1,400+", sub: "since 2019" },
  { icon: Users, label: "Active Members", value: "60", sub: "across classes VIII–X" },
  { icon: Calendar, label: "Drives Held", value: "32", sub: "plantation + awareness" },
  { icon: Award, label: "Recognitions", value: "4", sub: "block / district level" },
];

function EcoClubPage() {
  return (
    <div className="container py-8 space-y-10">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0">
          <img src={ecoHero} alt="Eco Club" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/70" />
        </div>
        <div className="relative p-8 md:p-12 text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-xs uppercase tracking-wider text-green-300 font-semibold">
            <Leaf className="h-3 w-3" /> Eco Club · Est. 2018
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold mt-4">For a Greener Hingula</h1>
          <p className="mt-4 text-white/80 max-w-2xl">
            The Eco Club is a student-led movement for environmental stewardship — rooted in the soil of Bhotaka, 
            growing in the consciousness of every cadet of green. Plantation, conservation, awareness and quiet, 
            sustained care for the campus and the village around it.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link to="/gallery" className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-white text-green-800 font-semibold hover:bg-white/90 transition">
              View Gallery <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:9937708405" className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-white/20 text-white font-semibold hover:bg-white/30 transition">
              Contact In-charge
            </a>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card p-4 text-center"
            >
              <Icon className="h-6 w-6 mx-auto text-green-600" />
              <div className="font-display text-2xl font-bold mt-2">{stat.value}</div>
              <div className="text-[10px] text-muted-foreground">{stat.label}</div>
              <div className="text-[9px] text-muted-foreground/70 mt-0.5">{stat.sub}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Faculty In-charge */}
      <div className="rounded-xl border border-border bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-green-600 flex items-center justify-center">
            <Leaf className="h-8 w-8 text-white" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Faculty In-charge</div>
            <h3 className="font-display text-xl font-bold">Tushar Kanti Dutta</h3>
            <div className="text-sm text-muted-foreground">TGT Science · Eco Club Convenor</div>
            <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
              The Eco Club is convened by Tushar Kanti Dutta, who has woven environmental
              stewardship into the school's science curriculum since 2018.
            </p>
          </div>
        </div>
      </div>

      {/* Initiatives */}
      <div>
        <h2 className="font-display text-2xl font-bold mb-6">Initiatives</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {initiatives.map((initiative, i) => {
            const Icon = initiative.icon;
            return (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl border border-border bg-card p-4 hover:shadow-md transition"
              >
                <Icon className="h-6 w-6 text-green-600" />
                <h3 className="font-semibold mt-2">{initiative.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{initiative.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="rounded-xl border border-border bg-green-50 dark:bg-green-950/20 p-6">
        <h3 className="font-display text-xl font-bold text-center mb-4">Environmental Impact</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { v: "1,400+", l: "Trees Planted" },
            { v: "100%", l: "Plastic-Free Campus" },
            { v: "12+", l: "Awareness Rallies" },
            { v: "480 kg", l: "Compost / Year" },
            { v: "38", l: "Plant Species" },
            { v: "4", l: "Awards Received" },
          ].map((metric) => (
            <div key={metric.l} className="text-center">
              <div className="font-display text-2xl font-bold text-green-600">{metric.v}</div>
              <div className="text-[10px] text-muted-foreground">{metric.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div>
        <h2 className="font-display text-2xl font-bold mb-6">Green Milestones</h2>
        <div className="relative pl-6">
          <div className="absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-green-500 to-transparent" />
          <div className="space-y-6">
            {timeline.map((event, i) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="relative"
              >
                <span className="absolute -left-[22px] top-1 h-3 w-3 rounded-full bg-green-500 ring-4 ring-background" />
                <div className="font-display text-xl font-bold text-green-600">{event.year}</div>
                <div className="font-semibold mt-1">{event.title}</div>
                <p className="text-sm text-muted-foreground mt-1">{event.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-2xl font-bold">Green Moments Gallery</h2>
          <Link to="/gallery" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
            View All <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {ECO_PHOTOS.slice(0, 8).map((src, i) => (
            <Link
              key={src}
              to="/gallery"
              className="group relative aspect-square overflow-hidden rounded-lg border border-border bg-muted"
            >
              <img
                src={src}
                alt="Eco Club Activity"
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