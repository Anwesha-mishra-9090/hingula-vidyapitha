import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Search, MapPin, Briefcase, GraduationCap, Users, Calendar } from "lucide-react";

const ALUMNI_ALL = [
  { name: "Dr. Pravati Mohanty", batch: 1993, profession: "Principal Scientist", location: "New Delhi" },
  { name: "Sri Bhagaban Sahoo", batch: 1994, profession: "Retired Headmaster", location: "Jajpur" },
  { name: "Dr. Rabindra Nath Sahoo", batch: 1996, profession: "Senior Medical Officer", location: "Cuttack" },
  { name: "Col. Niranjan Sahoo", batch: 1998, profession: "Army Officer", location: "Jammu" },
  { name: "Smt. Sasmita Behera", batch: 1999, profession: "Assistant Professor", location: "Cuttack" },
  { name: "Sri Pradeep Kumar Mohanty", batch: 2001, profession: "Assistant Engineer", location: "Bhubaneswar" },
  { name: "Sri Subhakanta Sahoo", batch: 2003, profession: "Progressive Farmer", location: "Bhotaka" },
  { name: "Sri Dillip Kumar Das", batch: 2004, profession: "Branch Manager", location: "Talcher" },
  { name: "Smt. Itishree Jena", batch: 2007, profession: "Social Entrepreneur", location: "Cuttack" },
  { name: "Sri Tapas Ranjan Mohanty", batch: 2010, profession: "JCO Indian Army", location: "Leh" },
  { name: "Sri Bijay Kumar Behera", batch: 2012, profession: "Sub-Inspector", location: "Angul" },
  { name: "Sri Manoj Kumar Sahoo", batch: 2014, profession: "Software Engineer", location: "Bengaluru" },
  { name: "Smt. Lipsa Pattnaik", batch: 2017, profession: "Civil Service Aspirant", location: "Bhubaneswar" },
];

function AlumniPage() {
  const [search, setSearch] = useState("");
  const [batch, setBatch] = useState<number | "all">("all");
  const [profession, setProfession] = useState<string>("all");

  const batches = useMemo(() => [...new Set(ALUMNI_ALL.map(a => a.batch))].sort((a, b) => b - a), []);
  const professions = useMemo(() => ["all", ...new Set(ALUMNI_ALL.map(a => a.profession))], []);

  const filtered = useMemo(() => {
    let result = ALUMNI_ALL;
    if (batch !== "all") result = result.filter(a => a.batch === batch);
    if (profession !== "all") result = result.filter(a => a.profession === profession);
    if (search) result = result.filter(a => a.name.toLowerCase().includes(search.toLowerCase()));
    return result;
  }, [batch, profession, search]);

  return (
    <div className="container py-8 space-y-8">
      <header>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">Network</div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-1">Alumni Network</h1>
        <p className="text-muted-foreground mt-3 max-w-2xl">
          Connecting past and present — a growing community of Hingula Vidya Pitha graduates.
        </p>
      </header>

      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Total Alumni", value: ALUMNI_ALL.length, icon: Users },
          { label: "Batches", value: batches.length, icon: GraduationCap },
          { label: "Professions", value: professions.length - 1, icon: Briefcase },
        ].map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="text-center p-4 rounded-xl bg-card border border-border">
              <Icon className="h-5 w-5 mx-auto text-primary mb-2" />
              <div className="font-display text-2xl font-bold">{stat.value}</div>
              <div className="text-[10px] text-muted-foreground">{stat.label}</div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by name..." className="w-full h-10 pl-9 pr-3 rounded-lg border border-border bg-card text-sm outline-none focus:border-primary" />
        </div>
        <select value={batch === "all" ? "all" : String(batch)} onChange={(e) => setBatch(e.target.value === "all" ? "all" : Number(e.target.value))} className="px-3 py-2 rounded-lg border border-border bg-card text-sm">
          <option value="all">All Batches</option>
          {batches.map(y => <option key={y} value={y}>Batch {y}</option>)}
        </select>
        <select value={profession} onChange={(e) => setProfession(e.target.value)} className="px-3 py-2 rounded-lg border border-border bg-card text-sm">
          {professions.map(p => <option key={p} value={p}>{p === "all" ? "All Professions" : p}</option>)}
        </select>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">No alumni found.</div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a, i) => (
            <div key={i} className="rounded-lg border border-border bg-card p-3 hover:shadow-md transition">
              <div className="font-medium">{a.name}</div>
              <div className="text-xs text-muted-foreground mt-1">{a.profession}</div>
              <div className="flex items-center gap-2 mt-1 text-[10px] text-muted-foreground">
                <Calendar className="h-3 w-3" /> Batch {a.batch}
                {a.location && <><span>•</span><MapPin className="h-3 w-3" /> {a.location}</>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export const Route = createFileRoute("/alumni")({
  component: AlumniPage,
});

export default AlumniPage;