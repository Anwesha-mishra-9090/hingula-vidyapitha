export interface FacultyMember {
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
  joiningDate?: string;
  bio?: string;
}

export interface FacultyDepartment {
  name: string;
  members: FacultyMember[];
  icon: string;
  description?: string;
}

export type FacultyDesignation = 
  | 'Head Master'
  | 'TGT Arts'
  | 'TGT Science'
  | 'TGT Sanskrit & Odia'
  | 'TGT Hindi'
  | 'P.E.T & History'
  | 'Office Clerk'
  | 'Science Attendant'
  | 'Office Attendant';

export type FacultyDepartmentName = 
  | 'ADMINISTRATION'
  | 'ENGLISH & GEOGRAPHY'
  | 'SCIENCE, MATH & ECO CLUB'
  | 'NCC'
  | 'HINDI'
  | 'PHYSICAL EDUCATION'
  | 'LABORATORY';