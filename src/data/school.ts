export const SCHOOL = {
  name: "Hingula Vidya Pitha",
  location: "Bhotaka, Kuakhia, Jajpur, Odisha",
  affiliation: "Board of Secondary Education, Odisha",
  established: 1992,
  motto: "विद्या ददाति विनयम् — Knowledge bestows humility",
};

export type Faculty = {
  id: string;
  name: string;
  designation: string;
  department: string;
  phone: string;
  badge?: string;
  photo?: string;
  qualification?: string;
  experience?: number;
  subjects?: string[];
  email?: string;
};

export const FACULTY: Faculty[] = [
  { 
    id: "rck", 
    name: "Ramesh Chandra Khuntia", 
    designation: "Head Master", 
    department: "ADMINISTRATION", 
    phone: "8260191483", 
    badge: "H.M.",
    photo: "/images/faculty/headmaster.webp",
    qualification: "M.A., B.Ed.",
    experience: 28,
    email: "rckhuntia@hingulavidyapitha.edu.in"
  },
  { 
    id: "anm", 
    name: "Ananta Narayan Mishra", 
    designation: "TGT Arts", 
    department: "ENGLISH & GEOGRAPHY", 
    phone: "9437438984",
    photo: "/images/faculty/ananta-mishra.webp",
    qualification: "M.A. (English), B.Ed.",
    experience: 22,
    subjects: ["English", "Geography"]
  },
  { 
    id: "tkd", 
    name: "Tushar Kanti Dutta", 
    designation: "TGT Science", 
    department: "SCIENCE, MATH & ECO CLUB", 
    phone: "9937708405",
    photo: "/images/faculty/tushar-dutta.webp",
    qualification: "M.Sc. (Physics), B.Ed.",
    experience: 18,
    subjects: ["Physics", "Chemistry", "Mathematics"]
  },
  { 
    id: "rkm", 
    name: "Ranjan Kumar Mishra", 
    designation: "TGT Sanskrit & Odia", 
    department: "NCC", 
    phone: "9777386536", 
    badge: "NCC ANO",
    photo: "/images/faculty/ranjan-mishra.webp",
    qualification: "M.A. (Sanskrit), B.Ed.",
    experience: 20,
    subjects: ["Sanskrit", "Odia"]
  },
  { 
    id: "skk", 
    name: "Suresh Kumar Kar", 
    designation: "TGT Hindi", 
    department: "HINDI", 
    phone: "8144024034",
    photo: "/images/faculty/suresh-kar.webp",
    qualification: "M.A. (Hindi), B.Ed.",
    experience: 32,
    subjects: ["Hindi"]
  },
  { 
    id: "nbs", 
    name: "Nabaghana Sahoo", 
    designation: "P.E.T & History", 
    department: "PHYSICAL EDUCATION", 
    phone: "9777100524",
    photo: "/images/faculty/nabaghana-sahoo.webp",
    qualification: "B.P.Ed., M.A. (History)",
    experience: 15,
    subjects: ["Physical Education", "History"]
  },
  { 
    id: "pkd", 
    name: "Prasanta Kumar Das", 
    designation: "Office Clerk", 
    department: "ADMINISTRATION", 
    phone: "7504855184",
    photo: "/images/faculty/prasanta-das.webp",
    qualification: "B.Com",
    experience: 12
  },
  { 
    id: "jbs", 
    name: "Jagabandhu Sahoo", 
    designation: "Science Attendant", 
    department: "LABORATORY", 
    phone: "7377141225",
    photo: "/images/faculty/jagabandhu-sahoo.webp",
    experience: 8
  },
  { 
    id: "skr", 
    name: "Sanjay Kumar Rout", 
    designation: "Office Attendant", 
    department: "ADMINISTRATION", 
    phone: "9040494436",
    photo: "/images/faculty/sanjay-rout.webp",
    experience: 5
  },
];

export const NAV_GROUPS = [
  {
    label: "Campus",
    items: [
      { to: "/", label: "Dashboard", icon: "LayoutDashboard" },
      { to: "/about", label: "About Institution", icon: "Landmark" },
      { to: "/academics", label: "Academics", icon: "BookOpen" },
    ],
  },
  {
    label: "People",
    items: [
      { to: "/faculty", label: "Faculty Directory", icon: "Users" },
      { to: "/excellence", label: "Student Excellence", icon: "Trophy" },
      { to: "/alumni", label: "Alumni Network", icon: "Network" },
    ],
  },
  {
    label: "Life",
    items: [
      { to: "/ncc", label: "NCC Unit", icon: "Shield" },
      { to: "/eco-club", label: "Eco Club", icon: "Leaf" },
      { to: "/energy-club", label: "Energy Club", icon: "Zap" },
      { to: "/campus-life", label: "Campus Life", icon: "Sparkles" },
      { to: "/gallery", label: "Gallery", icon: "Images" },
    ],
  },
  {
    label: "Information",
    items: [
      { to: "/notices", label: "Notice Center", icon: "Bell" },
      { to: "/achievements", label: "Achievements", icon: "Award" },
      { to: "/contact", label: "Contact", icon: "Phone" },
    ],
  },
];

export const NOTICES = [
  { id: 1, title: "Annual Examination Schedule 2026 Released", date: "2026-05-15", category: "Academics", pinned: true, priority: "high" },
  { id: 2, title: "NCC Annual Training Camp — Registration Open", date: "2026-05-12", category: "NCC", pinned: true, priority: "high" },
  { id: 3, title: "Mid-Day Meal Menu Revision Notice", date: "2026-05-10", category: "Administration", priority: "medium" },
  { id: 4, title: "Inter-School Sports Meet — Selection Trials", date: "2026-05-08", category: "Sports", priority: "medium" },
  { id: 5, title: "Parent-Teacher Meeting — Class X", date: "2026-05-05", category: "Academics", priority: "low" },
  { id: 6, title: "Plantation Drive on World Environment Day", date: "2026-05-01", category: "Events", priority: "low" },
];

export const ACHIEVEMENTS = [
  { year: 2025, title: "100% Pass Rate — Class X HSC Examination", category: "Academic" },
  { year: 2025, title: "District Champions — Inter-School Kabaddi", category: "Sports" },
  { year: 2022, title: "Best NCC Unit — Jajpur District", category: "NCC" },
  { year: 2022, title: "Prakruti Mitra Award", category: "Environment" },
  { year: 2023, title: "State Level Winner - Kabaddi", category: "Sports" },
];

export const STATS = [
  { label: "Students", value: 125, suffix: "+" },
  { label: "Faculty", value: 9 },
  { label: "Pass Rate", value: 100, suffix: "%" },
  { label: "Years of Legacy", value: 34, suffix: "+" },
];