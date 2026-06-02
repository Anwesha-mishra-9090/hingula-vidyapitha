import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Search, MapPin, Briefcase, GraduationCap, Users, Calendar, Award, Mail, Phone } from "lucide-react";
import { ALUMNI_ALL, BATCH_YEARS, ALUMNI_CURATED } from "@/data/alumni";

export const Route = createFileRoute("/alumni")({
  component: AlumniPage,
});

function AlumniPage() {
  const [search, setSearch] = useState("");
  const [batch, setBatch] = useState<number | "all">("all");
  const [profession, setProfession] = useState<string>("all");

  const professions = useMemo(() => {
    const profs = new Set(ALUMNI_ALL.map(a => a.profession));
    return ["all", ...Array.from(profs).sort()];
  }, []);

  const filtered = useMemo(() => {
    let result = ALUMNI_ALL;
    if (batch !== "all") result = result.filter(a => a.batch === batch);
    if (profession !== "all") result = result.filter(a => a.profession === profession);
    if (search.trim()) {
      const term = search.toLowerCase();
      result = result.filter(a => 
        a.name.toLowerCase().includes(term) || 
        a.profession.toLowerCase().includes(term) ||
        a.workplace?.toLowerCase().includes(term)
      );
    }
    return result;
  }, [batch, profession, search]);

  const byBatch = useMemo(() => {
    const map = new Map<number, typeof filtered>();
    filtered.forEach(a => {
      if (!map.has(a.batch)) map.set(a.batch, []);
      map.get(a.batch)!.push(a);
    });
    return Array.from(map.entries()).sort((a, b) => b[0] - a[0]);
  }, [filtered]);

  const stats = [
    { label: "Total Alumni", value: ALUMNI_ALL.length, icon: Users, color: "text-blue-500" },
    { label: "Batches", value: BATCH_YEARS.length, icon: GraduationCap, color: "text-green-500" },
    { label: "Professions", value: professions.length - 1, icon: Briefcase, color: "text-purple-500" },
    { label: "Years", value: new Date().getFullYear() - 1994, icon: Calendar, color: "text-amber-500", suffix: "+" },
  ];

  return (
    <div className="container py-8 space-y-8">
      {/* Header */}
      <header className="relative overflow-hidden rounded-2xl border border-border shadow-elegant bg-gradient-to-br from-card via-card to-primary/10 p-8 md:p-12">
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-[10px] uppercase tracking-wider text-primary font-semibold">
            <Users className="h-3 w-3" /> Alumni Wall · 1994 – 2025
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold mt-4">
            Alumni <span className="text-gradient-gold">Network</span>
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl leading-relaxed">
            Three decades of outgoing batches. Teachers in our own villages, officers on national borders,
            engineers in city offices, farmers tending family land, scientists in Delhi laboratories —
            the alumni of Hingula Vidya Pitha live their lives quietly and well.
          </p>
        </div>
      </header>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-4 text-center"
            >
              <Icon className={`h-5 w-5 mx-auto ${stat.color}`} />
              <div className="font-display text-2xl font-bold mt-2">{stat.value}{stat.suffix || ""}</div>
              <div className="text-[10px] text-muted-foreground uppercase mt-1">{stat.label}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Featured Alumni */}
      <section>
        <h2 className="font-display text-2xl font-bold mb-4">Featured Alumni</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ALUMNI_CURATED.slice(0, 6).map((alumni, i) => (
            <motion.div
              key={alumni.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card p-4 hover:shadow-md transition"
            >
              <div className="flex items-start gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center font-display text-lg font-bold text-primary">
                  {alumni.name.split(" ").slice(-2).map(n => n[0]).join("")}
                </div>
                <div className="flex-1">
                  <div className="font-semibold">{alumni.name}</div>
                  <div className="text-xs text-muted-foreground">Batch of {alumni.batch}</div>
                  <div className="mt-2 flex items-center gap-1 text-xs">
                    <Briefcase className="h-3 w-3 text-primary" />
                    <span>{alumni.profession}</span>
                  </div>
                  {alumni.location && (
                    <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span>{alumni.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Filters */}
      <section>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <h2 className="font-display text-2xl font-bold">Alumni Directory</h2>
          <div className="text-xs text-muted-foreground">
            Showing {filtered.length} of {ALUMNI_ALL.length} alumni
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, profession, or workplace..."
              className="w-full h-10 pl-9 pr-3 rounded-lg border border-border bg-card text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <select
            value={batch === "all" ? "all" : String(batch)}
            onChange={(e) => setBatch(e.target.value === "all" ? "all" : Number(e.target.value))}
            className="px-3 py-2 rounded-lg border border-border bg-card text-sm outline-none focus:border-primary"
          >
            <option value="all">All Batches</option>
            {BATCH_YEARS.map(y => (
              <option key={y} value={y}>Batch {y}</option>
            ))}
          </select>
          <select
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            className="px-3 py-2 rounded-lg border border-border bg-card text-sm outline-none focus:border-primary"
          >
            {professions.map(p => (
              <option key={p} value={p}>
                {p === "all" ? "All Professions" : p}
              </option>
            ))}
          </select>
        </div>

        {/* Alumni Grid by Batch */}
        {byBatch.length === 0 ? (
          <div className="py-12 text-center text-muted-foreground border border-dashed border-border rounded-lg">
            No alumni found matching your criteria.
          </div>
        ) : (
          <div className="space-y-8">
            {byBatch.map(([year, alumni]) => (
              <div key={year}>
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-display text-2xl font-bold text-primary">{year}</h3>
                  <div className="flex-1 h-px bg-border" />
                  <span className="text-xs text-muted-foreground">{alumni.length} alumni</span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {alumni.map((a, i) => (
                    <div key={`${a.name}-${i}`} className="rounded-lg border border-border bg-card p-3 hover:shadow-md transition">
                      <div className="font-medium truncate">{a.name}</div>
                      <div className="text-xs text-muted-foreground mt-1">{a.profession}</div>
                      {a.workplace && (
                        <div className="text-[10px] text-muted-foreground/80 mt-0.5 truncate">{a.workplace}</div>
                      )}
                      {a.location && (
                        <div className="flex items-center gap-1 text-[10px] text-muted-foreground mt-1">
                          <MapPin className="h-3 w-3" />
                          <span className="truncate">{a.location}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Stay Connected CTA */}
      <section className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-card to-primary/5 p-8 text-center">
        <div className="relative">
          <h3 className="font-display text-2xl font-bold">Stay Connected</h3>
          <p className="text-muted-foreground mt-2 max-w-md mx-auto">
            An alumnus of Hingula Vidya Pitha? Share your batch, your current work and a way to reach you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <a
              href="tel:8260191483"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition"
            >
              <Phone className="h-4 w-4" />
              Call Head Master
            </a>
            <a
              href="mailto:hingulavidyapitha@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card font-medium hover:bg-accent transition"
            >
              <Mail className="h-4 w-4" />
              Email the School
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}