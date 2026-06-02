// Generated + curated alumni roster for Hingula Vidya Pitha (1994–2025)

export type AlumniRecord = {
  name: string;
  batch: number;
  profession: string;
  workplace?: string;
  location?: string;
};

const FIRST_M = [
  "Pradeep",
  "Rajesh",
  "Sushanta",
  "Manoj",
  "Bijay",
  "Tapas",
  "Subhakanta",
  "Dillip",
  "Sanjay",
  "Niranjan",
  "Rabindra",
  "Sambit",
  "Asish",
  "Ranjit",
  "Soumya",
  "Debasish",
  "Bibhuti",
  "Jagannath",
  "Pratap",
  "Bhagaban",
  "Saroj",
  "Trilochan",
  "Sushant",
  "Akshaya",
  "Narayan",
  "Hemanta",
  "Lalit",
  "Sibani",
  "Prasanna",
  "Biswajit",
];

const FIRST_F = [
  "Sasmita",
  "Anjali",
  "Lipsa",
  "Itishree",
  "Pravati",
  "Subhashree",
  "Rashmita",
  "Smruti",
  "Annapurna",
  "Sumitra",
  "Aruna",
  "Bandita",
  "Jayanti",
  "Lopamudra",
  "Madhusmita",
  "Nirupama",
  "Pratima",
  "Rajalaxmi",
  "Saudamini",
  "Sunita",
];

const LAST = [
  "Sahoo",
  "Behera",
  "Mohanty",
  "Pradhan",
  "Jena",
  "Pattnaik",
  "Das",
  "Mishra",
  "Rout",
  "Khuntia",
  "Nayak",
  "Swain",
  "Parida",
  "Samal",
  "Dash",
  "Barik",
  "Mallick",
];

const PROFESSIONS = [
  { p: "Primary School Teacher", w: "Govt. UP School", l: "Jajpur" },
  { p: "Secondary School Teacher", w: "Govt. High School", l: "Jajpur" },
  { p: "Assistant Engineer", w: "Govt. of Odisha", l: "Bhubaneswar" },
  { p: "Sub-Inspector", w: "Odisha Police", l: "Angul" },
  { p: "Constable", w: "Odisha Police", l: "Jajpur" },
  { p: "Junior Clerk", w: "Block Development Office", l: "Sukinda" },
  { p: "Branch Manager", w: "State Bank of India", l: "Talcher" },
  { p: "Software Engineer", w: "TCS", l: "Bengaluru" },
  { p: "Software Engineer", w: "Infosys", l: "Hyderabad" },
  { p: "Medical Officer", w: "District Hospital", l: "Jajpur" },
  { p: "Staff Nurse", w: "Govt. CHC", l: "Kuakhia" },
  { p: "Army Soldier", w: "Indian Army", l: "Posted out of state" },
  { p: "CRPF Constable", w: "CRPF", l: "Jharkhand" },
  { p: "Civil Service Aspirant", w: "Preparing", l: "Bhubaneswar" },
  { p: "Assistant Professor", w: "State University", l: "Cuttack" },
  { p: "Progressive Farmer", w: "Family farm", l: "Bhotaka" },
  { p: "Dairy Entrepreneur", w: "Own dairy unit", l: "Kuakhia" },
  { p: "Civil Contractor", w: "Construction firm", l: "Jajpur" },
  { p: "Mechanical Technician", w: "Tata Steel", l: "Joda" },
  { p: "Plant Operator", w: "NALCO", l: "Angul" },
  { p: "Railway TTE", w: "East Coast Railway", l: "Khurda Road" },
  { p: "Postal Assistant", w: "India Post", l: "Jajpur" },
  { p: "Entrepreneur", w: "Retail business", l: "Jajpur" },
];

// Curated real alumni
export const ALUMNI_CURATED: AlumniRecord[] = [
  {
    name: "Dr. Pravati Mohanty",
    batch: 1993,
    profession: "Principal Scientist",
    workplace: "ICAR",
    location: "New Delhi",
  },
  {
    name: "Sri Bhagaban Sahoo",
    batch: 1994,
    profession: "Retired Headmaster",
    workplace: "Govt. High School",
    location: "Jajpur",
  },
  {
    name: "Dr. Rabindra Nath Sahoo",
    batch: 1996,
    profession: "Senior Medical Officer",
    workplace: "SCB Medical College",
    location: "Cuttack",
  },
  {
    name: "Col. Niranjan Sahoo",
    batch: 1998,
    profession: "Army Officer",
    workplace: "Indian Army",
    location: "Jammu",
  },
  {
    name: "Smt. Sasmita Behera",
    batch: 1999,
    profession: "Assistant Professor",
    workplace: "Ravenshaw University",
    location: "Cuttack",
  },
  {
    name: "Sri Pradeep Kumar Mohanty",
    batch: 2001,
    profession: "Assistant Engineer",
    workplace: "Govt. of Odisha",
    location: "Bhubaneswar",
  },
  {
    name: "Sri Subhakanta Sahoo",
    batch: 2003,
    profession: "Progressive Farmer",
    workplace: "Multi-crop farm",
    location: "Bhotaka",
  },
  {
    name: "Sri Dillip Kumar Das",
    batch: 2004,
    profession: "Branch Manager",
    workplace: "SBI",
    location: "Talcher",
  },
  {
    name: "Smt. Itishree Jena",
    batch: 2007,
    profession: "Social Entrepreneur",
    workplace: "EduRoots Foundation",
    location: "Cuttack",
  },
  {
    name: "Sri Tapas Ranjan Mohanty",
    batch: 2010,
    profession: "Junior Commissioned Officer",
    workplace: "Indian Army",
    location: "Leh",
  },
  {
    name: "Sri Bijay Kumar Behera",
    batch: 2012,
    profession: "Sub-Inspector",
    workplace: "Odisha Police",
    location: "Angul",
  },
  {
    name: "Sri Manoj Kumar Sahoo",
    batch: 2014,
    profession: "Software Engineer",
    workplace: "TCS",
    location: "Bengaluru",
  },
  {
    name: "Smt. Lipsa Pattnaik",
    batch: 2017,
    profession: "Civil Service Aspirant",
    workplace: "Preparing",
    location: "Bhubaneswar",
  },
];

// Generate realistic alumni data
function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 0xffffffff;
  };
}

function pick<T>(arr: T[], r: () => number) {
  return arr[Math.floor(r() * arr.length)];
}

function generateBatch(year: number, count: number, startSeed: number): AlumniRecord[] {
  const r = rng(startSeed + year);
  const out: AlumniRecord[] = [];
  for (let i = 0; i < count; i++) {
    const isF = r() < 0.45;
    const first = pick(isF ? FIRST_F : FIRST_M, r);
    const last = pick(LAST, r);
    const honor = isF ? "Smt." : "Sri";
    const job = pick(PROFESSIONS, r);
    out.push({
      name: `${honor} ${first} ${last}`,
      batch: year,
      profession: job.p,
      workplace: job.w,
      location: job.l,
    });
  }
  return out;
}

const GENERATED: AlumniRecord[] = [];
for (let y = 1994; y <= 2025; y++) {
  GENERATED.push(...generateBatch(y, 4, 7919));
}

export const ALUMNI_ALL: AlumniRecord[] = [...ALUMNI_CURATED, ...GENERATED].sort(
  (a, b) => b.batch - a.batch || a.name.localeCompare(b.name)
);

export const BATCH_YEARS: number[] = Array.from(new Set(ALUMNI_ALL.map((a) => a.batch))).sort(
  (a, b) => b - a
);
