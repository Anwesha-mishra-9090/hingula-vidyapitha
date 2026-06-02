import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Bell, BookOpen, Calendar, GraduationCap, Phone, Shield, Trophy, Users } from "lucide-react";
import { SCHOOL, STATS, NOTICES, ACHIEVEMENTS, FACULTY } from "@/data/school";

export const Route = createFileRoute("/")({
  component: IndexPage,
});

function IndexPage() {
  return (
    <div className="container py-8 space-y-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/90 to-primary/60 text-white p-8 md:p-12">
        <div className="relative z-10">
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold">
            {SCHOOL.name}
          </h1>
          <p className="text-white/90 text-lg mt-3 max-w-2xl">
            {SCHOOL.motto}
          </p>
          <p className="text-white/70 text-sm mt-1">
            Established {SCHOOL.established} • {SCHOOL.affiliation}
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a href="/about" className="px-5 py-2 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition">
              Learn More
            </a>
            <a href="/contact" className="px-5 py-2 rounded-lg bg-white/20 text-white font-semibold hover:bg-white/30 transition">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 -mt-12 relative z-20">
        {[
          { icon: GraduationCap, label: "Admissions", href: "/academics", desc: "Apply for 2026-27" },
          { icon: BookOpen, label: "Academics", href: "/academics", desc: "Curriculum & calendar" },
          { icon: Calendar, label: "Events", href: "/notices", desc: "Upcoming schedule" },
          { icon: Phone, label: "Contact", href: "/contact", desc: "Get in touch" },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              className="group bg-card rounded-xl border border-border p-4 text-center hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <Icon className="h-6 w-6 mx-auto text-primary mb-2" />
              <div className="font-semibold text-sm">{item.label}</div>
              <div className="text-[10px] text-muted-foreground">{item.desc}</div>
            </a>
          );
        })}
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center p-4 rounded-xl bg-card border border-border">
            <div className="font-display text-3xl font-bold text-primary">{stat.value}{stat.suffix}</div>
            <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Latest Notices */}
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl font-bold flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" /> Latest Notices
            </h2>
            <a href="/notices" className="text-xs text-primary hover:underline">View all →</a>
          </div>
          <div className="space-y-3">
            {NOTICES.slice(0, 4).map((notice) => (
              <a key={notice.id} href="/notices" className="flex items-start gap-3 p-2 rounded hover:bg-accent/50 transition">
                <span className={`mt-1 h-2 w-2 rounded-full ${notice.priority === "high" ? "bg-red-500" : notice.priority === "medium" ? "bg-amber-500" : "bg-green-500"}`} />
                <div className="flex-1">
                  <div className="text-sm font-medium line-clamp-1">{notice.title}</div>
                  <div className="text-[10px] text-muted-foreground">{notice.category} · {new Date(notice.date).toLocaleDateString()}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Faculty Spotlight */}
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl font-bold flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" /> Faculty Spotlight
            </h2>
            <a href="/faculty" className="text-xs text-primary hover:underline">View all →</a>
          </div>
          <div className="space-y-3">
            {FACULTY.slice(0, 3).map((faculty) => (
              <div key={faculty.id} className="flex items-center gap-3 p-2 rounded hover:bg-accent/50 transition">
                <div className="h-10 w-10 rounded-full overflow-hidden bg-gradient-to-br from-primary to-blue-900 flex-shrink-0">
                  {faculty.photo ? (
                    <img src={faculty.photo} alt={faculty.name} className="h-full w-full object-cover" />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center text-white text-sm font-bold">
                      {faculty.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <div className="font-medium text-sm">{faculty.name}</div>
                  <div className="text-[10px] text-muted-foreground">{faculty.designation}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-xl font-bold flex items-center gap-2">
            <Trophy className="h-5 w-5 text-gold" /> Recent Achievements
          </h2>
          <a href="/achievements" className="text-xs text-primary hover:underline">View all →</a>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {ACHIEVEMENTS.slice(0, 4).map((achievement, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <Trophy className="h-4 w-4 text-gold" />
              <div>
                <div className="text-sm font-medium">{achievement.title}</div>
                <div className="text-[10px] text-muted-foreground">{achievement.year} · {achievement.category}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid sm:grid-cols-2 gap-4">
        <a href="/ncc" className="group flex items-center justify-between p-5 rounded-xl border border-border bg-card hover:shadow-md transition">
          <div className="flex items-center gap-3">
            <Shield className="h-8 w-8 text-primary" />
            <div>
              <div className="font-semibold">NCC Unit</div>
              <div className="text-xs text-muted-foreground">4(O) CTC NCC, Cuttack</div>
            </div>
          </div>
          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition" />
        </a>
        <a href="/campus-life" className="group flex items-center justify-between p-5 rounded-xl border border-border bg-card hover:shadow-md transition">
          <div className="flex items-center gap-3">
            <Trophy className="h-8 w-8 text-primary" />
            <div>
              <div className="font-semibold">Campus Life</div>
              <div className="text-xs text-muted-foreground">Facilities & Activities</div>
            </div>
          </div>
          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition" />
        </a>
      </div>
    </div>
  );
}

export default IndexPage;