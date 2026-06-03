import { createFileRoute } from "@tanstack/react-router";
import { MotionDiv } from "@/components/animations/LazyMotion";
import { useState, useMemo } from "react";
import { Trophy, Star, TrendingUp, Crown, Award, Search } from "lucide-react";
import { TOPPERS, TOPPER_STATS } from "@/data/toppers";
import { ACHIEVEMENTS } from "@/data/school";

export const Route = createFileRoute("/excellence")({
  component: ExcellencePage,
});

function ExcellencePage() {
  const [query, setQuery] = useState("");
  const [decade, setDecade] = useState<string | "all">("all");

  const sorted = useMemo(
    () => [...TOPPERS].sort((a, b) => b.year - a.year || b.marks - b.marks),
    []
  );

  const filtered = useMemo(() => {
    return sorted.filter((t) => {
      const matchQ =
        !query ||
        t.name.toLowerCase().includes(query.toLowerCase()) ||
        String(t.year).includes(query);
      const decadeOf = `${Math.floor(t.year / 10) * 10}s`;
      const matchD = decade === "all" || decadeOf === decade;
      return matchQ && matchD;
    });
  }, [sorted, query, decade]);

  const decades = useMemo(
    () => Array.from(new Set(TOPPERS.map((t) => `${Math.floor(t.year / 10) * 10}s`))).sort(),
    []
  );

  const stats = [
    {
      icon: Crown,
      label: "Highest Score",
      value: TOPPER_STATS.highestScore,
      sub: `${TOPPER_STATS.highestScorer.name} · ${TOPPER_STATS.highestScorer.year}`,
    },
    {
      icon: TrendingUp,
      label: "Years of Toppers",
      value: TOPPER_STATS.totalYears,
      sub: `${TOPPER_STATS.earliestYear} – ${TOPPER_STATS.latestYear}`,
    },
    {
      icon: Award,
      label: "Toppers Recorded",
      value: TOPPER_STATS.totalToppers,
      sub: "Across three decades",
    },
    {
      icon: Star,
      label: "Average Score",
      value: TOPPER_STATS.averageScore,
      sub: "Out of 600 marks",
    },
  ];

  return (
    <div className="container py-8 space-y-8">
      {/* Header */}
      <header className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card via-card to-accent/40 p-8">
        <div className="relative">
          <div className="text-xs uppercase tracking-wider text-muted-foreground">
            Institutional Legacy · {TOPPER_STATS.earliestYear} – {TOPPER_STATS.latestYear}
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold mt-3">
            A Legacy of <span className="text-gradient-gold">Excellence</span>
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl leading-relaxed">
            For more than three decades, Hingula Vidya Pitha has carried forward an unbroken
            tradition of academic distinction. The Batch Toppers Legacy Archive honours every
            student who stood at the top of their cohort in the BSE Odisha High School Certificate
            Examination.
          </p>
        </div>
      </header>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <MotionDiv
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-6 text-center"
            >
              <Icon className="h-5 w-5 text-gold mx-auto mb-3" />
              <div className="font-display text-3xl font-bold">{s.value}</div>
              <div className="text-xs text-muted-foreground uppercase mt-2">{s.label}</div>
              <div className="text-xs text-muted-foreground/80 mt-1">{s.sub}</div>
            </MotionDiv>
          );
        })}
      </div>

      {/* Top Toppers Spotlight */}
      <section>
        <h2 className="font-display text-2xl font-bold mb-4">Top Performers</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...TOPPERS]
            .sort((a, b) => b.marks - a.marks)
            .slice(0, 6)
            .map((t, i) => (
              <MotionDiv
                key={`${t.year}-${t.name}`}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <div className="flex items-center justify-between">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    Batch of {t.year}
                  </div>
                  <Trophy className="h-4 w-4 text-gold" />
                </div>
                <div className="font-display text-xl font-semibold mt-2">{t.name}</div>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-display text-3xl font-bold text-gradient-gold">
                    {t.marks}
                  </span>
                  <span className="text-xs text-muted-foreground">/ 600 · BSE Odisha</span>
                </div>
              </MotionDiv>
            ))}
        </div>
      </section>

      {/* Search and Filter */}
      <section>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <h2 className="font-display text-2xl font-bold">Batch Toppers Archive</h2>
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search name or year"
                className="pl-9 pr-3 py-2 rounded-lg border border-border bg-card text-sm outline-none focus:border-primary"
              />
            </div>
            <div className="flex gap-1 rounded-lg border border-border bg-card p-1">
              <button
                onClick={() => setDecade("all")}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition ${
                  decade === "all" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                }`}
              >
                All
              </button>
              {decades.map((d) => (
                <button
                  key={d}
                  onClick={() => setDecade(d)}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition ${
                    decade === d ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          <div className="grid grid-cols-[80px,1fr,100px] md:grid-cols-[100px,1fr,120px] gap-4 px-5 py-3 border-b border-border bg-muted/30 text-[10px] uppercase text-muted-foreground font-semibold">
            <div>Year</div>
            <div>Scholar</div>
            <div className="text-right">Marks / 600</div>
          </div>
          <div className="divide-y divide-border">
            {filtered.map((t) => (
              <div
                key={`${t.year}-${t.name}`}
                className="grid grid-cols-[80px,1fr,100px] md:grid-cols-[100px,1fr,120px] gap-4 px-5 py-3 items-center hover:bg-accent/40 transition"
              >
                <div className="font-display font-bold text-gradient-gold">{t.year}</div>
                <div>
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">BSE Odisha · HSC</div>
                </div>
                <div className="text-right font-display font-bold">{t.marks}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Achievements */}
      <section>
        <h2 className="font-display text-2xl font-bold mb-4">Institutional Honours</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {ACHIEVEMENTS.map((a, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card"
            >
              <div className="font-display text-2xl font-bold text-gradient-gold w-16">
                {a.year}
              </div>
              <div>
                <div className="font-semibold">{a.title}</div>
                <div className="text-[10px] uppercase text-muted-foreground mt-1">{a.category}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ExcellencePage;
