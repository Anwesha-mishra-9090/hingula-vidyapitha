export type FacilityStat = { label: string; value: number; suffix?: string };
export type FacilityMilestone = { year: number; title: string; body: string };

export type Facility = {
  slug: string;
  name: string;
  category: "Academic" | "Sports" | "Cultural" | "Administrative" | "Ecological" | "Defence";
  tagline: string;
  hero: string;
  icon: string;
  accent: string;
  intro: string;
  longDescription: string[];
  highlights: { title: string; body: string; icon: string }[];
  stats: FacilityStat[];
  gallery: { src: string; caption: string }[];
  timeline: FacilityMilestone[];
  departments: string[];
};

const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const FACILITIES: Facility[] = [
  {
    slug: "library",
    name: "Central Library",
    category: "Academic",
    tagline: "A quiet chamber of knowledge, open to every learner.",
    hero: u("1521587760476-6c12a4b040da"),
    icon: "BookOpen",
    accent: "var(--saffron)",
    intro: "The Central Library is the academic heart of the institution — a curated, government-supported reading sanctuary.",
    longDescription: [
      "Established in 1992, the Central Library has grown from a single wooden almirah into a multi-section reading hall.",
      "Beyond books, the library is a habit. Students rotate through structured reading periods scheduled into the weekly timetable.",
    ],
    highlights: [
      { icon: "BookOpen", title: "5,200+ volumes", body: "Textbooks, references, and literature." },
      { icon: "Users", title: "Reading periods", body: "Two scheduled library periods per week." },
    ],
    stats: [
      { label: "Volumes", value: 5200, suffix: "+" },
      { label: "Seating capacity", value: 48 },
    ],
    gallery: [
      { src: u("1521587760476-6c12a4b040da"), caption: "Reading hall" },
      { src: u("1507842217343-583bb7270b66"), caption: "Reference shelving" },
    ],
    timeline: [
      { year: 1992, title: "Founded", body: "Single almirah of donated textbooks." },
      { year: 2004, title: "Dedicated reading hall", body: "Library moved to its own room." },
    ],
    departments: ["English", "Odia", "Sanskrit", "Social Science"],
  },
  {
    slug: "science-laboratory",
    name: "Science Laboratory",
    category: "Academic",
    tagline: "Where the syllabus becomes an experiment.",
    hero: u("1532094349884-543bc11b234d"),
    icon: "FlaskConical",
    accent: "oklch(0.6 0.16 200)",
    intro: "A combined physics-chemistry-biology laboratory equipped to deliver the full Class IX-X practical syllabus.",
    longDescription: [
      "The Science Laboratory is purpose-built around the Board of Secondary Education's practical examination calendar.",
      "The lab follows a safety-first protocol with aprons, goggles, and an eye-wash station.",
    ],
    highlights: [
      { icon: "TestTube2", title: "100% syllabus", body: "Every prescribed experiment is performed." },
      { icon: "Microscope", title: "8 microscopes", body: "Used for biology slide observation." },
    ],
    stats: [
      { label: "Work benches", value: 12 },
      { label: "Microscopes", value: 8 },
    ],
    gallery: [
      { src: u("1532094349884-543bc11b234d"), caption: "Chemistry bench" },
      { src: u("1576086213369-97a306d36557"), caption: "Microscopy session" },
    ],
    timeline: [
      { year: 1998, title: "First lab set up", body: "Basic chemistry table installed." },
      { year: 2010, title: "Biology section added", body: "Microscopes procured via state grant." },
    ],
    departments: ["Science", "Mathematics", "Eco Club", "Energy Club"],
  },
  {
    slug: "sports-ground",
    name: "Sports Ground",
    category: "Sports",
    tagline: "Open field, open lungs — the daily dose of discipline.",
    hero: u("1517649763962-0c623066013b"),
    icon: "Trophy",
    accent: "oklch(0.6 0.16 30)",
    intro: "A multi-use open ground hosting annual sports meet, daily PT, kabaddi, football, and athletics.",
    longDescription: [
      "Spread over the rear half of the campus, configured for athletics with marked lanes for sprints.",
      "Every academic year opens with the annual sports meet — a two-day festival of track events.",
    ],
    highlights: [
      { icon: "Flag", title: "Annual sports meet", body: "Two-day festival of athletics." },
      { icon: "Trophy", title: "District champions", body: "Inter-school kabaddi champions 2025." },
    ],
    stats: [
      { label: "Ground area", value: 4200, suffix: "sqm" },
      { label: "Events per year", value: 18 },
    ],
    gallery: [
      { src: u("1517649763962-0c623066013b"), caption: "Sports meet" },
      { src: u("1546519638-68e109498ffc"), caption: "Kabaddi court" },
    ],
    timeline: [
      { year: 1994, title: "Ground levelled", body: "Block grant levelled the rear plot." },
      { year: 2013, title: "Kabaddi court", body: "Permanent court demarcated." },
    ],
    departments: ["Physical Education", "NCC", "Inter-house Sports"],
  },
  {
    slug: "ncc-ground",
    name: "NCC Parade Ground",
    category: "Defence",
    tagline: "Where discipline is rehearsed before it is lived.",
    hero: "/gallery/ncc/ncc-09.jpg",
    icon: "Shield",
    accent: "oklch(0.38 0.07 130)",
    intro: "Dedicated drill ground for the school's NCC cadet wing.",
    longDescription: [
      "A flat, well-compacted square marked with permanent cadet positions and a saluting dais.",
      "Hosts daily drill, fall-in, weapon-handling demonstrations, and Independence/Republic Day rehearsals.",
    ],
    highlights: [
      { icon: "Flag", title: "Daily drill", body: "Cadets fall in every morning." },
      { icon: "Users", title: "Active cadets", body: "Boys and girls wing train together." },
    ],
    stats: [
      { label: "Active cadets", value: 56 },
      { label: "Drill sessions", value: 6, suffix: "/week" },
    ],
    gallery: [
      { src: "/gallery/ncc/ncc-09.jpg", caption: "Parade" },
      { src: "/gallery/ncc/ncc-05.jpg", caption: "Unit photograph" },
    ],
    timeline: [
      { year: 2007, title: "NCC affiliated", body: "Affiliated to 4(O) CTC NCC." },
      { year: 2018, title: "Permanent dais", body: "Concrete saluting dais constructed." },
    ],
    departments: ["NCC"],
  },
];

export const FACILITY_CATEGORIES = ["All", "Academic", "Sports", "Cultural", "Administrative", "Ecological", "Defence"] as const;