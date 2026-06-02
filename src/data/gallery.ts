export type GalleryCategory =
  | "NCC"
  | "NCC Field"
  | "Ceremonial"
  | "Cultural"
  | "Campus"
  | "Academics"
  | "Sports"
  | "Events"
  | "Eco"
  | "Energy";

export type GalleryImage = {
  src: string;
  cat: GalleryCategory;
  title: string;
  date?: string;
};

// NCC Archive
const NCC_ARCHIVE: GalleryImage[] = Array.from({ length: 50 }, (_, i) => ({
  src: `/gallery/ncc/ncc-${String(i + 1).padStart(2, "0")}.jpg`,
  cat: "NCC",
  title: `NCC activity ${i + 1}`,
}));

// NCC Field Training
const NCC_FIELD: GalleryImage[] = Array.from({ length: 38 }, (_, i) => ({
  src: `/gallery/ncc-field/field-${String(i + 1).padStart(2, "0")}.jpg`,
  cat: "NCC Field",
  title: "Field training & direction drill",
  date: "May 2026",
}));

// Ceremonial
const CEREMONIAL: GalleryImage[] = Array.from({ length: 17 }, (_, i) => ({
  src: `/gallery/farewell/farewell-${String(i + 1).padStart(2, "0")}.jpg`,
  cat: "Ceremonial",
  title: "Farewell ceremony",
  date: "May 2026",
}));

// Eco Club
const ECO: GalleryImage[] = Array.from({ length: 33 }, (_, i) => ({
  src: `/gallery/eco/eco-${String(i + 1).padStart(2, "0")}.jpg`,
  cat: "Eco",
  title: "Eco Club activity",
}));

// Energy Club
const ENERGY: GalleryImage[] = Array.from({ length: 33 }, (_, i) => ({
  src: `/gallery/energy/energy-${String(i + 1).padStart(2, "0")}.jpg`,
  cat: "Energy",
  title: "Energy Club activity",
}));

// Placeholders for new categories (add actual images here)
const CULTURAL: GalleryImage[] = [
  { src: "/gallery/cultural/annual-function-01.jpg", cat: "Cultural", title: "Annual Function" },
];
const SPORTS: GalleryImage[] = [
  { src: "/gallery/sports/sports-meet-01.jpg", cat: "Sports", title: "Sports Meet" },
];
const ACADEMICS: GalleryImage[] = [
  { src: "/gallery/academics/classroom-01.jpg", cat: "Academics", title: "Classroom Session" },
];
const EVENTS: GalleryImage[] = [
  { src: "/gallery/events/independence-day.jpg", cat: "Events", title: "Independence Day" },
];
const CAMPUS: GalleryImage[] = [
  { src: "/gallery/campus/school-building.jpg", cat: "Campus", title: "School Building" },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  ...NCC_ARCHIVE,
  ...NCC_FIELD,
  ...CEREMONIAL,
  ...ECO,
  ...ENERGY,
  ...CULTURAL,
  ...SPORTS,
  ...ACADEMICS,
  ...EVENTS,
  ...CAMPUS,
];

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  "All",
  "NCC",
  "NCC Field",
  "Ceremonial",
  "Cultural",
  "Campus",
  "Academics",
  "Sports",
  "Events",
  "Eco",
  "Energy",
];

export const NCC_HIGHLIGHTS = [...NCC_ARCHIVE, ...NCC_FIELD];
export const CEREMONIAL_HIGHLIGHTS = CEREMONIAL;