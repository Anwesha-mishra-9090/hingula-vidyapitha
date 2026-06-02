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
  | "Energy"
  | "All";

export interface GalleryImage {
  src: string;
  category: GalleryCategory;
  title: string;
  date?: string;
  description?: string;
  photographer?: string;
  location?: string;
}

export interface GalleryCategoryInfo {
  id: GalleryCategory;
  label: string;
  icon: string;
  description: string;
  count: number;
}

export const galleryCategories: GalleryCategoryInfo[] = [
  { id: "NCC", label: "NCC", icon: "Shield", description: "NCC activities and parades", count: 0 },
  {
    id: "NCC Field",
    label: "NCC Field",
    icon: "Compass",
    description: "Field training and recce drills",
    count: 0,
  },
  {
    id: "Ceremonial",
    label: "Ceremonial",
    icon: "Award",
    description: "Felicitation and ceremonies",
    count: 0,
  },
  {
    id: "Cultural",
    label: "Cultural",
    icon: "Music",
    description: "Cultural programs and events",
    count: 0,
  },
  {
    id: "Sports",
    label: "Sports",
    icon: "Trophy",
    description: "Sports meets and competitions",
    count: 0,
  },
  {
    id: "Academics",
    label: "Academics",
    icon: "BookOpen",
    description: "Classroom and lab activities",
    count: 0,
  },
  {
    id: "Events",
    label: "Events",
    icon: "Calendar",
    description: "School events and functions",
    count: 0,
  },
  {
    id: "Campus",
    label: "Campus",
    icon: "Building",
    description: "Campus infrastructure",
    count: 0,
  },
  { id: "Eco", label: "Eco", icon: "Leaf", description: "Eco club activities", count: 0 },
  { id: "Energy", label: "Energy", icon: "Zap", description: "Energy club activities", count: 0 },
];
