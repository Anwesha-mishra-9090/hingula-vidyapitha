import {
  LayoutDashboard,
  Landmark,
  BookOpen,
  Users,
  Trophy,
  Network,
  Shield,
  Leaf,
  Zap,
  Sparkles,
  Bell,
  Award,
  Phone,
  Images,
} from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon: any;
  group: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export const navigation: NavGroup[] = [
  {
    label: "Campus",
    items: [
      {
        label: "Dashboard",
        href: "/",
        icon: LayoutDashboard,
        group: "Campus",
        description: "Live overview of school activities and announcements",
      },
      {
        label: "About",
        href: "/about",
        icon: Landmark,
        group: "Campus",
        description: "History, mission, vision and leadership",
      },
      {
        label: "Academics",
        href: "/academics",
        icon: BookOpen,
        group: "Campus",
        description: "Curriculum, subjects and academic calendar",
      },
    ],
  },
  {
    label: "People",
    items: [
      {
        label: "Faculty",
        href: "/faculty",
        icon: Users,
        group: "People",
        description: "Directory of teachers and staff",
      },
      {
        label: "Excellence",
        href: "/excellence",
        icon: Trophy,
        group: "People",
        description: "Student achievements and toppers",
      },
      {
        label: "Alumni",
        href: "/alumni",
        icon: Network,
        group: "People",
        description: "Alumni network 1994–2025",
      },
    ],
  },
  {
    label: "Life",
    items: [
      {
        label: "NCC Unit",
        href: "/ncc",
        icon: Shield,
        group: "Life",
        description: "National Cadet Corps activities",
      },
      {
        label: "Eco Club",
        href: "/eco-club",
        icon: Leaf,
        group: "Life",
        description: "Environmental awareness and plantation",
      },
      {
        label: "Energy Club",
        href: "/energy-club",
        icon: Zap,
        group: "Life",
        description: "Renewable energy and conservation",
      },
      {
        label: "Campus Life",
        href: "/campus-life",
        icon: Sparkles,
        group: "Life",
        description: "Facilities and infrastructure",
      },
      {
        label: "Gallery",
        href: "/gallery",
        icon: Images,
        group: "Life",
        description: "Photo and video archive",
      },
    ],
  },
  {
    label: "Information",
    items: [
      {
        label: "Notices",
        href: "/notices",
        icon: Bell,
        group: "Information",
        description: "Official announcements and circulars",
      },
      {
        label: "Achievements",
        href: "/achievements",
        icon: Award,
        group: "Information",
        description: "Institutional recognitions",
      },
      {
        label: "Contact",
        href: "/contact",
        icon: Phone,
        group: "Information",
        description: "Get in touch with us",
      },
    ],
  },
];

export const getAllNavItems = (): NavItem[] => {
  return navigation.flatMap((group) => group.items);
};

export const getNavItemByHref = (href: string): NavItem | undefined => {
  return getAllNavItems().find((item) => item.href === href);
};

export const getNavGroupByHref = (href: string): NavGroup | undefined => {
  return navigation.find((group) => group.items.some((item) => item.href === href));
};
