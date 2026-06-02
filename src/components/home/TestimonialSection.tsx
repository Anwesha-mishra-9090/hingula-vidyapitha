"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Parent of Class X Student",
    role: "Parent",
    content:
      "The dedicated teachers and disciplined environment at Hingula Vidya Pitha have transformed my child's academic journey.",
  },
  {
    name: "Alumni Batch 2015",
    role: "Software Engineer",
    content:
      "The values and education I received here laid the foundation for my career. Grateful to my teachers.",
  },
  {
    name: "Local Community Member",
    role: "Panchayat Member",
    content:
      "This school has been a pillar of our community for over three decades, shaping generations of students.",
  },
];

export function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="rounded-xl border border-border bg-gradient-to-br from-primary/5 to-transparent p-6">
      <Quote className="mx-auto h-8 w-8 text-primary/30" />

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mt-4 text-center"
        >
          <p className="text-lg italic text-muted-foreground">"{testimonials[current].content}"</p>
          <div className="mt-4">
            <div className="font-semibold">{testimonials[current].name}</div>
            <div className="text-sm text-muted-foreground">{testimonials[current].role}</div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-6 flex items-center justify-center gap-2">
        <button onClick={prev} className="rounded-full p-1 hover:bg-accent">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex gap-1">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 w-1.5 rounded-full transition ${
                i === current ? "bg-primary w-3" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
        <button onClick={next} className="rounded-full p-1 hover:bg-accent">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
