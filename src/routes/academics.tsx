import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Beaker, Calculator, Globe2, Languages, Palette, Clock, Calendar } from "lucide-react";

const subjects = [
  { icon: Languages, name: "Odia / Hindi / English", desc: "Three-language formula per BSE Odisha curriculum." },
  { icon: Calculator, name: "Mathematics", desc: "Algebra, geometry, trigonometry, statistics — Class VIII to X." },
  { icon: Beaker, name: "Science", desc: "Physics, chemistry, biology with practical laboratory sessions." },
  { icon: Globe2, name: "Social Science", desc: "History, geography, civics, economics — preparing informed citizens." },
  { icon: BookOpen, name: "Sanskrit", desc: "Classical Sanskrit as third language under TGT specialised faculty." },
  { icon: Palette, name: "Work Experience & Art", desc: "Creative expression and vocational basics across all classes." },
];

function AcademicsPage() {
  return (
    <div className="container py-8 space-y-10">
      <header>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">Curriculum</div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-1">Academics</h1>
        <p className="text-muted-foreground mt-3 max-w-2xl">
          Hingula Vidya Pitha offers Classes VIII to X under the Board of Secondary Education, Odisha syllabus — 
          with a balanced emphasis on language, science, mathematics, and civics awareness.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {subjects.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.name} className="rounded-2xl border border-border bg-card p-6 hover:shadow-md transition-all">
              <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold">{s.name}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
            </div>
          );
        })}
      </div>

      <section className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-gold/5 p-8">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="h-5 w-5 text-primary" />
          <h2 className="font-display text-2xl font-bold">Academic Calendar 2026-27</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { term: "Term I", dates: "April - September", focus: "Foundation modules · Unit tests" },
            { term: "Term II", dates: "October - December", focus: "Half-yearly examination · Projects" },
            { term: "Term III", dates: "January - March", focus: "Revision · Annual / Board examinations" },
          ].map((t) => (
            <div key={t.term} className="border-l-2 border-primary pl-4">
              <div className="text-xs uppercase tracking-wider text-primary font-semibold">{t.term}</div>
              <div className="font-display text-lg font-semibold mt-1">{t.dates}</div>
              <div className="text-sm text-muted-foreground mt-1">{t.focus}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-card p-6">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="h-5 w-5 text-primary" />
          <h2 className="font-display text-2xl font-bold">School Timings</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-muted/50">
            <div className="font-semibold">Morning Session</div>
            <div className="text-sm text-muted-foreground">10:00 AM - 1:00 PM</div>
          </div>
          <div className="p-4 rounded-lg bg-muted/50">
            <div className="font-semibold">Afternoon Session</div>
            <div className="text-sm text-muted-foreground">1:30 PM - 4:00 PM</div>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-muted-foreground">Monday to Saturday · Sunday closed</div>
      </section>
    </div>
  );
}

export const Route = createFileRoute("/academics")({
  component: AcademicsPage,
});

export default AcademicsPage;