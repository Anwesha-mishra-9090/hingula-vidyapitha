export interface AlumniRecord {
  name: string;
  batch: number;
  profession: string;
  workplace?: string;
  location?: string;
  photo?: string;
  email?: string;
  phone?: string;
  story?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
}

export interface AlumniBatch {
  year: number;
  count: number;
  alumni: AlumniRecord[];
}

export type AlumniProfession = 
  | 'Teacher'
  | 'Engineer'
  | 'Doctor'
  | 'Police Officer'
  | 'Army Soldier'
  | 'Government Officer'
  | 'Entrepreneur'
  | 'Farmer'
  | 'Scientist'
  | 'Software Engineer'
  | 'Banker'
  | 'Lawyer'
  | 'Artist'
  | 'Other';

export interface AlumniStats {
  totalAlumni: number;
  totalBatches: number;
  uniqueProfessions: number;
  uniqueLocations: number;
  alumniByDecade: Record<string, number>;
  alumniByProfession: Record<string, number>;
}