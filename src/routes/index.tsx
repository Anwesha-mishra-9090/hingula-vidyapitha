import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/home/HeroSection";
import { QuickAccess } from "@/components/home/QuickAccess";
import { StatsSection } from "@/components/home/StatsSection";
import { NoticeSection } from "@/components/home/NoticeSection";
import { FacultySpotlight } from "@/components/home/FacultySpotlight";
import { AchievementSection } from "@/components/home/AchievementSection";
import { CampusPreview } from "@/components/home/CampusPreview";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { CTASection } from "@/components/home/CTASection";

export const Route = createFileRoute("/")({
  component: Dashboard,
});

function Dashboard() {
  return (
    <div className="container py-8 space-y-8">
      <HeroSection />
      <QuickAccess />
      <StatsSection />
      
      <div className="grid gap-8 lg:grid-cols-2">
        <NoticeSection />
        <FacultySpotlight />
      </div>
      
      <div className="grid gap-8 lg:grid-cols-2">
        <AchievementSection />
        <CampusPreview />
      </div>
      
      <TestimonialSection />
      <CTASection />
    </div>
  );
}