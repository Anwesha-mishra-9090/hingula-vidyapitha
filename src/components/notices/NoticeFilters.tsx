'use client';

import { Search } from 'lucide-react';

interface NoticeFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  category: string;
  onCategoryChange: (value: string) => void;
  categories: string[];
}

export function NoticeFilters({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  categories,
}: NoticeFiltersProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search notices..."
          className="h-10 w-full rounded-lg border border-border bg-background pl-9 pr-4 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>
      
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition ${
              category === cat
                ? 'bg-primary text-primary-foreground'
                : 'border border-border bg-card hover:bg-accent'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}