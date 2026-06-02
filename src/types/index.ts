export * from './faculty';
export * from './alumni';
export * from './gallery';
export * from './notices';
export * from './facilities';

// Common types used across the application
export interface BaseEntity {
  id: string | number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export type Status = 'active' | 'inactive' | 'pending' | 'archived';
export type Priority = 'high' | 'medium' | 'low';
export type Category = 
  | 'Academics' 
  | 'Administration' 
  | 'NCC' 
  | 'Sports' 
  | 'Events' 
  | 'Examination'
  | 'Cultural'
  | 'Environment';