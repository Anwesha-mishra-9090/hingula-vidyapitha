"use client";

import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";

export function CTASection() {
  return (
    <div className="rounded-xl bg-gradient-to-r from-primary to-primary/80 p-8 text-center text-white">
      <h3 className="font-display text-2xl font-bold">Join Our Community</h3>
      <p className="mt-2 text-white/80">
        Admissions open for the academic year 2026-27. Contact us for more information.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2 font-semibold text-primary transition hover:bg-white/90"
        >
          Contact Us
          <ArrowRight className="h-4 w-4" />
        </Link>
        <a
          href="tel:8260191483"
          className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-2 font-semibold text-white transition hover:bg-white/10"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </a>
        <a
          href="mailto:hingulavidyapitha@gmail.com"
          className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-2 font-semibold text-white transition hover:bg-white/10"
        >
          <Mail className="h-4 w-4" />
          Email Us
        </a>
      </div>
    </div>
  );
}
