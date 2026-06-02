export type Topper = {
  year: number;
  name: string;
  marks: number;
};

export const TOPPERS: Topper[] = [
  { year: 1995, name: "Ghanashyama Pati", marks: 489 },
  { year: 1996, name: "Meghamala Pati", marks: 540 },
  { year: 1997, name: "Ramesh Ch. Das", marks: 506 },
  { year: 1998, name: "Sunamani Pati", marks: 512 },
  { year: 1999, name: "Gitanjali Sahoo", marks: 499 },
  { year: 2000, name: "Debashish Das", marks: 555 },
  { year: 2001, name: "Subasish Das", marks: 508 },
  { year: 2002, name: "Sabyasachi Balabantaray", marks: 548 },
  { year: 2003, name: "Subhakanta Sahoo", marks: 569 },
  { year: 2004, name: "Archana Sahoo", marks: 573 },
  { year: 2005, name: "Swarnnalaxmi Sahoo", marks: 542 },
  { year: 2006, name: "Sankarshan Sahoo", marks: 580 },
  { year: 2007, name: "Smruti Rekha Kar", marks: 550 },
  { year: 2008, name: "Pradeep Ku Rana", marks: 452 },
  { year: 2009, name: "Sushanta Ku Behera", marks: 438 },
  { year: 2010, name: "Subhranshu Sekhar Barik", marks: 549 },
  { year: 2011, name: "Subhranshu Sekhar Aich", marks: 530 },
  { year: 2012, name: "Sagnika Mohanty", marks: 517 },
  { year: 2013, name: "Ashutosh Sahoo", marks: 530 },
  { year: 2014, name: "Soumya Ranjan Sahoo", marks: 492 },
  { year: 2015, name: "Subhasmita Priyadarshini Das", marks: 513 },
  { year: 2015, name: "Sumarani Rout", marks: 513 },
  { year: 2016, name: "Jyoti Ranjita Mohanty", marks: 497 },
  { year: 2017, name: "Rudra Narayan Panda", marks: 483 },
  { year: 2017, name: "Parbati Sahoo", marks: 483 },
  { year: 2018, name: "Chinmay Panda", marks: 463 },
  { year: 2019, name: "Santosh Das", marks: 485 },
  { year: 2020, name: "Udit Narayan Jena", marks: 471 },
  { year: 2021, name: "Swaraj Swagatam Sahu", marks: 489 },
  { year: 2022, name: "Subham Sahu", marks: 483 },
  { year: 2023, name: "Subha Ranjan Sahu", marks: 521 },
  { year: 2024, name: "Ankita Sahu", marks: 531 },
  { year: 2024, name: "Tushar Kanti Behera", marks: 493 },
  { year: 2025, name: "Namita Khuntia", marks: 482 },
];

export const TOPPER_STATS = {
  totalYears: new Set(TOPPERS.map((t) => t.year)).size,
  totalToppers: TOPPERS.length,
  highestScore: Math.max(...TOPPERS.map((t) => t.marks)),
  highestScorer: TOPPERS.find((t) => t.marks === Math.max(...TOPPERS.map((x) => x.marks)))!,
  averageScore: Math.round(TOPPERS.reduce((s, t) => s + t.marks, 0) / TOPPERS.length),
  earliestYear: Math.min(...TOPPERS.map((t) => t.year)),
  latestYear: Math.max(...TOPPERS.map((t) => t.year)),
};
