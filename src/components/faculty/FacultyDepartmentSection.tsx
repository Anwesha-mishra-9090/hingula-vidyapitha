'use client';

import { motion } from 'framer-motion';
import { FacultyCard } from './FacultyCard';
import { type Faculty } from '@/data/school';

interface FacultyDepartmentSectionProps {
  department: string;
  faculty: Faculty[];
  onFacultyClick: (faculty: Faculty) => void;
}

export function FacultyDepartmentSection({ department, faculty, onFacultyClick }: FacultyDepartmentSectionProps) {
  if (faculty.length === 0) return null;

  return (
    <div className="mb-8">
      <h2 className="mb-4 font-display text-2xl font-bold text-primary">{department}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {faculty.map((f, i) => (
          <motion.div
            key={f.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <FacultyCard faculty={f} onClick={() => onFacultyClick(f)} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}