"use client";

import { LazyPresence } from "@/components/animations/LazyPresence";
import { X, Phone, Mail, Briefcase, GraduationCap, Calendar, BookOpen } from "lucide-react";
import { type Faculty } from "@/data/school";

interface FacultyModalProps {
  faculty: Faculty | null;
  onClose: () => void;
}

export function FacultyModal({ faculty, onClose }: FacultyModalProps) {
  if (!faculty) return null;

  return (
    <LazyPresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
        onClick={onClose}
      >
        <div
          className="relative max-h-[90vh] w-full max-w-md overflow-auto rounded-xl bg-card shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-lg p-1 hover:bg-accent"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br from-primary to-blue-900">
                {faculty.photo ? (
                  <img
                    src={faculty.photo}
                    alt={faculty.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-white text-3xl font-bold">
                    {faculty.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                )}
              </div>

              <h3 className="mt-4 font-display text-xl font-bold">{faculty.name}</h3>
              <p className="text-sm text-muted-foreground">{faculty.designation}</p>
              {faculty.badge && (
                <span className="mt-1 rounded-full bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold text-amber-600">
                  {faculty.badge}
                </span>
              )}
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 rounded-lg bg-muted p-3 text-sm">
                <Briefcase className="h-4 w-4 text-muted-foreground" />
                <span>{faculty.department}</span>
              </div>

              {faculty.qualification && (
                <div className="flex items-center gap-3 rounded-lg bg-muted p-3 text-sm">
                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                  <span>{faculty.qualification}</span>
                </div>
              )}

              {faculty.experience && (
                <div className="flex items-center gap-3 rounded-lg bg-muted p-3 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{faculty.experience} years of experience</span>
                </div>
              )}

              {faculty.subjects && faculty.subjects.length > 0 && (
                <div className="flex items-center gap-3 rounded-lg bg-muted p-3 text-sm">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                  <span>{faculty.subjects.join(", ")}</span>
                </div>
              )}

              <a
                href={`tel:${faculty.phone}`}
                className="flex items-center justify-center gap-2 rounded-lg bg-primary p-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
              >
                <Phone className="h-4 w-4" />
                {faculty.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </LazyPresence>
  );
}
