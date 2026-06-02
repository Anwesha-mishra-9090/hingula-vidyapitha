"use client";

import Link from "next/link";
import { Trophy, ChevronRight } from "lucide-react";
import { ACHIEVEMENTS } from "@/data/school";

export function AchievementSection() {
  const recentAchievements = ACHIEVEMENTS.slice(0, 4);

  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-gold" />
          <h3 className="font-display text-lg font-semibold">Recent Achievements</h3>
        </div>
        <Link
          href="/achievements"
          className="flex items-center gap-1 text-xs text-primary hover:underline"
        >
          View all <ChevronRight className="h-3 w-3" />
        </Link>
      </div>

      <div className="space-y-3">
        {recentAchievements.map((achievement, i) => (
          <div key={i} className="flex items-start gap-3 rounded-lg p-2">
            <Trophy className="mt-0.5 h-4 w-4 text-gold" />
            <div className="flex-1">
              <div className="text-sm font-medium">{achievement.title}</div>
              <div className="mt-0.5 flex items-center gap-2 text-[10px] text-muted-foreground">
                <span>{achievement.year}</span>
                <span>•</span>
                <span>{achievement.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
