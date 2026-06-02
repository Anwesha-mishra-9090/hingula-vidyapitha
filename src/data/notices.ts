export type NoticeAttachment = {
  filename: string;
  title: string;
  body: string;
  meta: { label: string; value: string }[];
};

export type NoticeRecord = {
  id: number;
  title: string;
  date: string;
  category: "Academics" | "Administration" | "NCC" | "Sports" | "Events" | "Examination";
  priority: "high" | "medium" | "low";
  pinned?: boolean;
  summary: string;
  issuedBy: string;
  referenceNo: string;
  attachment: NoticeAttachment;
};

export const NOTICE_RECORDS: NoticeRecord[] = [
  {
    id: 1,
    title: "Annual Examination Schedule 2026",
    date: "2026-05-15",
    category: "Examination",
    priority: "high",
    pinned: true,
    summary: "The detailed datesheet for the Annual Examination 2026 is published.",
    issuedBy: "Examination Cell",
    referenceNo: "HVP/EXAM/2026/014",
    attachment: {
      filename: "HVP-AnnualExam-2026.pdf",
      title: "Annual Examination Schedule — 2026",
      body: "Theory papers: 02 June 2026 to 18 June 2026. Practical papers: 22 June 2026 to 26 June 2026.",
      meta: [
        { label: "Reference No.", value: "HVP/EXAM/2026/014" },
        { label: "Issued by", value: "Examination Cell" },
        { label: "Date of issue", value: "15 May 2026" },
      ],
    },
  },
  {
    id: 2,
    title: "NCC Annual Training Camp — Registration Open",
    date: "2026-05-12",
    category: "NCC",
    priority: "high",
    pinned: true,
    summary: "Cadets are invited to register for the Combined Annual Training Camp.",
    issuedBy: "Lt. Ranjan Kumar Mishra · ANO",
    referenceNo: "HVP/NCC/2026/007",
    attachment: {
      filename: "HVP-NCC-CATC-2026.pdf",
      title: "Combined Annual Training Camp 2026",
      body: "Camp will be conducted at Bhubaneswar from 22 June 2026 to 01 July 2026.",
      meta: [
        { label: "Reference No.", value: "HVP/NCC/2026/007" },
        { label: "ANO", value: "Lt. Ranjan Kumar Mishra" },
        { label: "Camp dates", value: "22 Jun – 01 Jul 2026" },
      ],
    },
  },
  {
    id: 3,
    title: "Mid-Day Meal — Revised Weekly Menu",
    date: "2026-05-10",
    category: "Administration",
    priority: "medium",
    summary: "The mid-day meal weekly menu has been revised.",
    issuedBy: "Office of the Head Master",
    referenceNo: "HVP/MDM/2026/021",
    attachment: {
      filename: "HVP-MDM-Menu-2026.pdf",
      title: "Mid-Day Meal — Revised Weekly Menu",
      body: "Effective 13 May 2026, the school will follow the revised menu.",
      meta: [
        { label: "Reference No.", value: "HVP/MDM/2026/021" },
        { label: "Effective from", value: "13 May 2026" },
      ],
    },
  },
  {
    id: 4,
    title: "Inter-School Sports Meet — Selection Trials",
    date: "2026-05-08",
    category: "Sports",
    priority: "medium",
    summary: "Selection trials for the District Inter-School Sports Meet will be held.",
    issuedBy: "Physical Education Department",
    referenceNo: "HVP/SPT/2026/009",
    attachment: {
      filename: "HVP-Sports-Trials-2026.pdf",
      title: "Sports Meet Selection Trials",
      body: "Trials will be conducted on 18 May 2026 from 7:00 AM onwards.",
      meta: [
        { label: "Reference No.", value: "HVP/SPT/2026/009" },
        { label: "Trial date", value: "18 May 2026" },
      ],
    },
  },
  {
    id: 5,
    title: "Parent-Teacher Meeting — Class X",
    date: "2026-05-05",
    category: "Academics",
    priority: "low",
    summary: "A parent-teacher meeting for Class X students will be held.",
    issuedBy: "Class X Coordinator",
    referenceNo: "HVP/PTM/2026/004",
    attachment: {
      filename: "HVP-PTM-ClassX-2026.pdf",
      title: "Parent-Teacher Meeting — Class X",
      body: "Meeting scheduled for 17 May 2026 from 10:00 AM to 1:00 PM.",
      meta: [
        { label: "Reference No.", value: "HVP/PTM/2026/004" },
        { label: "Date", value: "17 May 2026" },
      ],
    },
  },
  {
    id: 6,
    title: "Plantation Drive on World Environment Day",
    date: "2026-05-01",
    category: "Events",
    priority: "low",
    summary: "The Eco Club will conduct a plantation drive on 05 June 2026.",
    issuedBy: "Eco Club",
    referenceNo: "HVP/ECO/2026/003",
    attachment: {
      filename: "HVP-Plantation-2026.pdf",
      title: "World Environment Day — Plantation Drive",
      body: "Plantation drive on 05 June 2026 from 7:30 AM.",
      meta: [
        { label: "Reference No.", value: "HVP/ECO/2026/003" },
        { label: "Date", value: "05 June 2026" },
      ],
    },
  },
];
