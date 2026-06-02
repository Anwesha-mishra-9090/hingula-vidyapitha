export interface FacilityStat {
  label: string;
  value: number;
  suffix?: string;
}

export interface FacilityMilestone {
  year: number;
  title: string;
  body: string;
}

export interface FacilityHighlight {
  title: string;
  body: string;
  icon: string;
}

export interface FacilityGallery {
  src: string;
  caption: string;
}

export interface Facility {
  slug: string;
  name: string;
  category: FacilityCategory;
  tagline: string;
  hero: string;
  icon: string;
  accent: string;
  intro: string;
  longDescription: string[];
  highlights: FacilityHighlight[];
  stats: FacilityStat[];
  gallery: FacilityGallery[];
  timeline: FacilityMilestone[];
  departments: string[];
}

export type FacilityCategory =
  | "Academic"
  | "Sports"
  | "Cultural"
  | "Administrative"
  | "Ecological"
  | "Defence";

export const facilityCategories: FacilityCategory[] = [
  "Academic",
  "Sports",
  "Cultural",
  "Administrative",
  "Ecological",
  "Defence",
];

export interface FacilityCategoryInfo {
  id: FacilityCategory;
  label: string;
  icon: string;
  description: string;
}
