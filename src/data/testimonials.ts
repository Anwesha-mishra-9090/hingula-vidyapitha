export type Testimonial = {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar?: string;
  year?: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ramesh Chandra Khuntia",
    role: "Head Master",
    content:
      "Hingula Vidya Pitha has stood in Bhotaka for thirty four years, quietly shaping generations of students. We believe a school's measure is not in its walls but in the character of the children who walk through them.",
  },
  {
    id: 2,
    name: "Parent of Class X Student",
    role: "Parent",
    content:
      "The dedicated teachers and disciplined environment have transformed my child's academic journey.",
  },
  {
    id: 3,
    name: "Alumni Batch 2015",
    role: "Software Engineer",
    content:
      "The values and education I received here laid the foundation for my career. Grateful to my teachers.",
  },
  {
    id: 4,
    name: "Local Community Member",
    role: "Panchayat Member",
    content:
      "This school has been a pillar of our community for over three decades, shaping generations of students.",
  },
];
