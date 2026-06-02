import { siteConfig } from "./site";

export interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
}

export const defaultSeo: SeoProps = {
  title: `${siteConfig.name} - ${siteConfig.motto}`,
  description: siteConfig.description,
  image:
    "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/74fb585c-6b46-4814-9da5-f122792b0feb",
  url: `https://${siteConfig.domain}`,
  type: "website",
};

export const generateSeo = (customSeo: Partial<SeoProps> = {}): SeoProps => {
  return {
    ...defaultSeo,
    ...customSeo,
    title: customSeo.title ? `${customSeo.title} | ${siteConfig.name}` : defaultSeo.title,
  };
};

export const seoPerPage: Record<string, SeoProps> = {
  "/": {
    title: `Dashboard | ${siteConfig.name}`,
    description: `Welcome to ${siteConfig.name}. ${siteConfig.description}`,
  },
  "/about": {
    title: `About Us | ${siteConfig.name}`,
    description: `Learn about ${siteConfig.name}'s history, mission, vision, and leadership. Established in ${siteConfig.established}.`,
  },
  "/academics": {
    title: `Academics | ${siteConfig.name}`,
    description: `Explore our curriculum, subjects, and academic calendar for Class VIII to X under BSE Odisha.`,
  },
  "/faculty": {
    title: `Faculty Directory | ${siteConfig.name}`,
    description: `Meet our dedicated teachers and staff at ${siteConfig.name}.`,
  },
  "/excellence": {
    title: `Student Excellence | ${siteConfig.name}`,
    description: `Celebrating student achievements and batch toppers from ${siteConfig.established} to present.`,
  },
  "/alumni": {
    title: `Alumni Network | ${siteConfig.name}`,
    description: `Connect with alumni from batches 1994 to 2025. Share your journey and stay connected.`,
  },
  "/ncc": {
    title: `NCC Unit | ${siteConfig.name}`,
    description: `National Cadet Corps (NCC) unit affiliated to 4(O) CTC NCC, Cuttack. Discipline, service and leadership.`,
  },
  "/eco-club": {
    title: `Eco Club | ${siteConfig.name}`,
    description: `Environmental awareness, plantation drives, and sustainability initiatives at ${siteConfig.name}.`,
  },
  "/energy-club": {
    title: `Energy Club | ${siteConfig.name}`,
    description: `Renewable energy awareness, conservation projects, and STEM innovation at ${siteConfig.name}.`,
  },
  "/campus-life": {
    title: `Campus Life | ${siteConfig.name}`,
    description: `Explore our facilities including library, science lab, sports ground, NCC parade ground, and more.`,
  },
  "/gallery": {
    title: `Gallery | ${siteConfig.name}`,
    description: `Photo and video archive of campus events, NCC camps, cultural programs, and student activities.`,
  },
  "/notices": {
    title: `Notice Center | ${siteConfig.name}`,
    description: `Official announcements, circulars, and updates from the Office of the Head Master.`,
  },
  "/achievements": {
    title: `Achievements | ${siteConfig.name}`,
    description: `Institutional recognitions, awards, and milestones achieved by ${siteConfig.name}.`,
  },
  "/contact": {
    title: `Contact Us | ${siteConfig.name}`,
    description: `Get in touch with ${siteConfig.name}. Phone, email, and location information.`,
  },
};

export const getPageSeo = (pathname: string): SeoProps => {
  return seoPerPage[pathname] || defaultSeo;
};
