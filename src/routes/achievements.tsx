import { createFileRoute } from "@tanstack/react-router";
import { Award, Trophy } from "lucide-react";
import { ACHIEVEMENTS } from "@/data/school";

export const Route = createFileRoute("/achievements")({
  component: AchievementsPage,
});

function AchievementsPage() {
  const byYear = ACHIEVEMENTS.reduce<Record<number, typeof ACHIEVEMENTS>>((acc, a) => {
    (acc[a.year] ??= []).push(a);
    return acc;
  }, {});
  const years = Object.keys(byYear).map(Number).sort((a, b) => b - a);

  return (
    <div className="container py-8">
      <header className="mb-8">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">Recognition</div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-1">Achievements</h1>
        <p className="text-muted-foreground mt-3 max-w-2xl">
          A record of institutional honours, district awards, and academic milestones.
        </p>
      </header>

      <div className="space-y-8">
        {years.map((y) => (
          <section key={y}>
            <div className="flex items-baseline gap-4 mb-4">
              <h2 className="font-display text-4xl font-bold text-gradient-gold">{y}</h2>
              <div className="flex-1 h-px bg-border" />
              <Trophy className="h-5 w-5 text-gold" />
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {byYear[y].map((a, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card">
                  <Award className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">{a.title}</div>
                    <div className="text-[10px] uppercase text-muted-foreground mt-1">{a.category}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}