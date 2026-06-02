import { createFileRoute } from "@tanstack/react-router";
import { Landmark, Target, Eye, Award } from "lucide-react";
import { SCHOOL } from "@/data/school";
import headmaster from "@/assets/headmaster.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="container py-8 space-y-12">
      <header>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">Institution</div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-1">
          About Hingula Vidya Pitha
        </h1>
        <p className="text-muted-foreground mt-3 max-w-3xl text-lg italic">
          {SCHOOL.motto}
        </p>
      </header>

      {/* Headmaster's Message */}
      <section className="grid lg:grid-cols-[340px,1fr] gap-8 items-start">
        <div className="rounded-2xl overflow-hidden border border-border shadow-elegant">
          <div className="aspect-[4/5] relative">
            <img
              src={headmaster}
              alt="Headmaster Ramesh Chandra Khuntia"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="p-5 bg-card">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
              Head Master
            </div>
            <div className="font-display text-lg font-semibold mt-1">Ramesh Chandra Khuntia</div>
          </div>
        </div>
        
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">A message from the</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-1">Head Master's Desk</h2>
          <div className="mt-5 space-y-4 text-foreground/85 leading-relaxed">
            <p>
              Hingula Vidya Pitha has stood in Bhotaka for thirty four years, quietly shaping generations 
              of students from across the Kuakhia region. We are a New Aided high school under the Board 
              of Secondary Education, Odisha — and we believe a school's measure is not in its walls but 
              in the character of the children who walk through them.
            </p>
            <p>
              Our faculty, our NCC unit, and our community of parents share one commitment: to give every 
              student — regardless of background — a fair and rigorous education, a sense of discipline, 
              and the confidence to serve the nation.
            </p>
            <p className="font-display italic text-foreground/70">— Ramesh Chandra Khuntia</p>
          </div>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="grid md:grid-cols-3 gap-5">
        {[
          { icon: Landmark, title: "Heritage", body: `Established in 1992, serving thirty four years of academic continuity in Jajpur district.` },
          { icon: Target, title: "Mission", body: "Holistic education combining academic rigour, physical fitness, and civic responsibility for every enrolled student." },
          { icon: Eye, title: "Vision", body: "A government school that competes with the best — where merit, discipline and service to nation define our graduates." },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="rounded-2xl border border-border bg-card p-6">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.body}</p>
            </div>
          );
        })}
      </section>

      {/* Milestones */}
      <section>
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Key Milestones</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { y: 1992, t: "School established under BSE Odisha" },
            { y: 2008, t: "Science laboratory wing added" },
            { y: 2012, t: "NCC unit inaugurated by 4(O) CTC Cuttack" },
            { y: 2022, t: "Best NCC Unit — Jajpur District" },
          ].map((m) => (
            <div key={m.y} className="rounded-xl border border-border bg-card p-5">
              <Award className="h-4 w-4 text-gold" />
              <div className="font-display text-3xl font-bold mt-3 text-gradient-gold">{m.y}</div>
              <div className="text-sm text-muted-foreground mt-2 leading-snug">{m.t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-gold/5 p-8">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-center">School at a Glance</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {[
            { label: "Students", value: "125+", icon: "👨‍🎓" },
            { label: "Faculty", value: "9", icon: "👨‍🏫" },
            { label: "Pass Rate", value: "100%", icon: "📚" },
            { label: "Years", value: "34+", icon: "📅" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="font-display text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}