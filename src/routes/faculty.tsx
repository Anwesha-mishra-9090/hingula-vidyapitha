import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Search, Shield, X, Briefcase, GraduationCap, Calendar, Mail } from "lucide-react";
import { FACULTY, type Faculty } from "@/data/school";

export const Route = createFileRoute("/faculty")({
  component: FacultyPage,
});

function FacultyPage() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState<string>("all");
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);

  const departments = useMemo(() => {
    const depts = new Set(FACULTY.map((f) => f.department));
    return ["all", ...Array.from(depts).sort()];
  }, []);

  const filtered = useMemo(() => {
    let result = FACULTY;
    if (department !== "all") {
      result = result.filter((f) => f.department === department);
    }
    if (search.trim()) {
      const term = search.toLowerCase();
      result = result.filter(
        (f) =>
          f.name.toLowerCase().includes(term) ||
          f.designation.toLowerCase().includes(term) ||
          f.department.toLowerCase().includes(term)
      );
    }
    return result;
  }, [search, department]);

  return (
    <div className="container py-8">
      {/* Header */}
      <header className="mb-8">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">Directory</div>
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-1">Faculty & Staff</h1>
        <p className="text-muted-foreground mt-3 max-w-2xl">
          The dedicated educators and staff of Hingula Vidya Pitha — guiding students across
          academics, sports, and the NCC wing with commitment and care.
        </p>
      </header>

      {/* Department Filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        {departments.map((dept) => (
          <button
            key={dept}
            onClick={() => setDepartment(dept)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition ${
              department === dept
                ? "bg-primary text-primary-foreground"
                : "bg-card border border-border hover:bg-accent"
            }`}
          >
            {dept === "all" ? "All Departments" : dept}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative mb-6 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, designation, department..."
          className="w-full h-11 pl-10 pr-3 rounded-lg border border-border bg-card text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>

      {/* Faculty Grid */}
      {filtered.length === 0 ? (
        <div className="py-12 text-center text-muted-foreground">
          No faculty members found matching your criteria.
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((faculty, i) => (
            <motion.button
              key={faculty.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.03, 0.5) }}
              onClick={() => setSelectedFaculty(faculty)}
              className="group text-left rounded-xl border border-border bg-card p-4 transition-all hover:shadow-md hover:border-primary/30"
            >
              <div className="flex items-start gap-3">
                <div className="relative h-14 w-14 rounded-full overflow-hidden bg-gradient-to-br from-primary to-blue-900 flex-shrink-0">
                  {faculty.photo ? (
                    <img
                      src={faculty.photo}
                      alt={faculty.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center text-white font-bold text-lg">
                      {faculty.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                  )}
                  {faculty.badge && (
                    <span className="absolute -bottom-0.5 -right-0.5 px-1 py-0.5 rounded-full text-[8px] font-bold bg-amber-500 text-black">
                      {faculty.badge}
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold truncate">{faculty.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{faculty.designation}</div>
                  <div className="text-[10px] uppercase text-muted-foreground mt-1">
                    {faculty.department}
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs text-primary">
                <Phone className="h-3 w-3" />
                <span>{faculty.phone}</span>
              </div>
            </motion.button>
          ))}
        </div>
      )}

      {/* Faculty Modal */}
      <AnimatePresence>
        {selectedFaculty && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={() => setSelectedFaculty(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-h-[90vh] w-full max-w-md overflow-auto rounded-xl bg-card shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedFaculty(null)}
                className="absolute right-4 top-4 rounded-lg p-1 hover:bg-accent"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-24 w-24 rounded-full overflow-hidden bg-gradient-to-br from-primary to-blue-900">
                    {selectedFaculty.photo ? (
                      <img
                        src={selectedFaculty.photo}
                        alt={selectedFaculty.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-white text-3xl font-bold">
                        {selectedFaculty.name
                          .split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")}
                      </div>
                    )}
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold">{selectedFaculty.name}</h3>
                  <p className="text-sm text-muted-foreground">{selectedFaculty.designation}</p>
                  {selectedFaculty.badge && (
                    <span className="mt-1 rounded-full bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold text-amber-600">
                      {selectedFaculty.badge}
                    </span>
                  )}
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 rounded-lg bg-muted p-3 text-sm">
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                    <span>{selectedFaculty.department}</span>
                  </div>
                  {selectedFaculty.qualification && (
                    <div className="flex items-center gap-3 rounded-lg bg-muted p-3 text-sm">
                      <GraduationCap className="h-4 w-4 text-muted-foreground" />
                      <span>{selectedFaculty.qualification}</span>
                    </div>
                  )}
                  {selectedFaculty.experience && (
                    <div className="flex items-center gap-3 rounded-lg bg-muted p-3 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{selectedFaculty.experience} years of experience</span>
                    </div>
                  )}
                  {selectedFaculty.subjects && selectedFaculty.subjects.length > 0 && (
                    <div className="flex items-center gap-3 rounded-lg bg-muted p-3 text-sm flex-wrap">
                      <span className="font-medium">Subjects:</span>
                      <span>{selectedFaculty.subjects.join(", ")}</span>
                    </div>
                  )}
                  <a
                    href={`tel:${selectedFaculty.phone}`}
                    className="flex items-center justify-center gap-2 rounded-lg bg-primary p-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
                  >
                    <Phone className="h-4 w-4" />
                    {selectedFaculty.phone}
                  </a>
                  {selectedFaculty.email && (
                    <a
                      href={`mailto:${selectedFaculty.email}`}
                      className="flex items-center justify-center gap-2 rounded-lg border border-border p-3 text-sm font-medium transition hover:bg-accent"
                    >
                      <Mail className="h-4 w-4" />
                      {selectedFaculty.email}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default FacultyPage;
