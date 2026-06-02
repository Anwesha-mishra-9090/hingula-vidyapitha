export interface NoticeAttachment {
  filename: string;
  title: string;
  body: string;
  meta: { label: string; value: string }[];
}

export interface NoticeRecord {
  id: number;
  title: string;
  date: string;
  category: NoticeCategory;
  priority: NoticePriority;
  pinned?: boolean;
  summary: string;
  issuedBy: string;
  referenceNo: string;
  attachment: NoticeAttachment;
}

export type NoticeCategory = 
  | 'Academics'
  | 'Administration'
  | 'NCC'
  | 'Sports'
  | 'Events'
  | 'Examination';

export type NoticePriority = 'high' | 'medium' | 'low';

export interface NoticeFilters {
  category?: NoticeCategory | 'All';
  priority?: NoticePriority | 'All';
  search?: string;
  fromDate?: Date;
  toDate?: Date;
  showPinnedOnly?: boolean;
}

export const noticeCategoryColors: Record<NoticeCategory, string> = {
  Academics: 'bg-blue-500/10 text-blue-600',
  Administration: 'bg-slate-500/10 text-slate-600',
  NCC: 'bg-green-500/10 text-green-600',
  Sports: 'bg-orange-500/10 text-orange-600',
  Events: 'bg-purple-500/10 text-purple-600',
  Examination: 'bg-red-500/10 text-red-600',
};

export const noticePriorityColors: Record<NoticePriority, string> = {
  high: 'bg-red-500',
  medium: 'bg-amber-500',
  low: 'bg-green-500',
};