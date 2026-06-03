import { createFileRoute } from "@tanstack/react-router";
import { MotionDiv } from "@/components/animations/LazyMotion";
import {
  Landmark,
  Target,
  Eye,
  Award,
  Users,
  BookOpen,
  Shield,
  Leaf,
  Calendar,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { SCHOOL } from "@/data/school";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  const milestones = [
    {
      year: 1992,
      title: "School Established",
      description: "Founded under Board of Secondary Education, Odisha",
      icon: Calendar,
    },
    {
      year: 2008,
      title: "Science Laboratory",
      description: "Dedicated science lab with equipment",
      icon: BookOpen,
    },
    {
      year: 2012,
      title: "NCC Unit",
      description: "Affiliated to 4(O) CTC NCC, Cuttack",
      icon: Shield,
    },
    {
      year: 2018,
      title: "Eco Club",
      description: "Environmental awareness initiatives launched",
      icon: Leaf,
    },
    {
      year: 2022,
      title: "Best NCC Unit",
      description: "Awarded Best NCC Unit in Jajpur District",
      icon: Award,
    },
    {
      year: 2024,
      title: "Smart Classroom",
      description: "Digital learning facilities installed",
      icon: Users,
    },
  ];

  const stats = [
    { value: "34+", label: "Years of Excellence", icon: Award },
    { value: "125+", label: "Students", icon: Users },
    { value: "9", label: "Dedicated Faculty", icon: BookOpen },
    { value: "100%", label: "Pass Rate", icon: Target },
  ];

  return (
    <div className="container py-8 space-y-12">
      {/* Header Section */}
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/90 to-primary/60 text-white p-8 md:p-12"
      >
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs uppercase tracking-wider mb-4">
            <Landmark className="h-3 w-3" /> About Institution
          </div>
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold">{SCHOOL.name}</h1>
          <p className="text-white/90 text-lg md:text-xl mt-4 max-w-3xl italic">"{SCHOOL.motto}"</p>
          <p className="text-white/80 mt-4 max-w-2xl">
            Established in {SCHOOL.established} • {SCHOOL.affiliation}
          </p>
        </div>
      </MotionDiv>

      {/* Stats Section */}
      <section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-5 rounded-xl bg-card border border-border"
              >
                <Icon className="h-8 w-8 mx-auto text-primary mb-2" />
                <div className="font-display text-2xl md:text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Vision & Mission */}
      <section>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-xl border border-border bg-card p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold">Our Vision</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To be a center of educational excellence that nurtures holistic development, fostering
              responsible citizens who contribute meaningfully to society while preserving our
              cultural heritage and embracing modern values.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-xl border border-border bg-card p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To provide quality education accessible to all, empowering students with knowledge,
              skills, and values. We strive to create a supportive learning environment that
              encourages critical thinking, creativity, and character development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Landmark className="h-6 w-6 text-primary" />
          <h2 className="font-display text-2xl md:text-3xl font-bold">Our History</h2>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 md:p-8">
          <p className="text-muted-foreground leading-relaxed mb-4">
            Hingula Vidya Pitha was established in 1992 with a vision to provide quality education
            to the children of Bhotaka and surrounding villages in Kuakhia block, Jajpur district.
            What started as a small institution with humble beginnings has grown into a respected
            government aided high school serving over 125 students annually.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Over the past three decades, the school has consistently achieved 100% pass rate in the
            BSE Odisha High School Certificate Examination. The institution has expanded its
            facilities to include a science laboratory, NCC unit, Eco Club, Energy Club, and smart
            classroom facilities, continuously evolving to meet modern educational needs while
            maintaining its core values of discipline, dedication, and service.
          </p>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section>
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-center">
          Key Milestones
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-gold to-transparent hidden md:block" />
          <div className="space-y-6">
            {milestones.map((milestone, i) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative md:flex items-center gap-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="hidden md:block w-1/2" />
                  <div className="relative z-10 flex justify-center md:w-auto mb-4 md:mb-0">
                    <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div
                    className={`flex-1 rounded-xl border border-border bg-card p-5 ${
                      i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="h-5 w-5 text-gold" />
                      <h3 className="font-display text-lg font-semibold">{milestone.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="h-5 w-5 text-primary" />
              <h3 className="font-display text-xl font-bold">Location</h3>
            </div>
            <p className="text-muted-foreground">{SCHOOL.location}</p>
            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm font-medium">Nearby Landmarks:</p>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li>• Bhotaka Bus Stop - 500m</li>
                <li>• Kuakhia Block Office - 3km</li>
                <li>• Jajpur Road Railway Station - 12km</li>
              </ul>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <Phone className="h-5 w-5 text-primary" />
              <h3 className="font-display text-xl font-bold">Contact Information</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a
                  href="tel:8260191483"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  8260191483 (Head Master)
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a
                  href="mailto:hingulavidyapitha@gmail.com"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  hingulavidyapitha@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Mon-Sat: 10:00 AM - 4:00 PM</span>
              </div>
            </div>
            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm font-medium">Office Hours:</p>
              <p className="text-sm text-muted-foreground mt-1">
                Monday to Saturday: 9:00 AM - 5:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section>
        <div className="rounded-xl overflow-hidden border border-border h-[300px] md:h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.456789012345!2d86.12345678901234!3d20.98765432109876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDU5JzE1LjYiTiA4NsKwMDcnMjguNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="School Location Map"
          />
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
