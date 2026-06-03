import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/admissions")({
  component: AdmissionsPage,
});

export function AdmissionsPage() {
  return (
    <div className="container py-12">
      <div className="rounded-2xl border border-border bg-card p-8">
        <h1 className="font-display text-3xl font-bold mb-4">Admissions</h1>
        <p className="text-muted-foreground mb-4">
          Hingula Vidya Pitha welcomes students of all backgrounds. Admissions for the academic year
          are open — please contact the office for details or use the contact page for enquiries.
        </p>

        <h2 className="font-semibold mt-6 mb-2">How to apply</h2>
        <ol className="list-decimal ml-5 text-sm text-muted-foreground">
          <li>Collect the application form from the school office or download the PDF.</li>
          <li>Fill the form and attach required documents (birth certificate, previous marksheets).</li>
          <li>Submit at the office during working hours or mail to the address listed on Contact.</li>
        </ol>

        <div className="mt-6 flex gap-3">
          <Link to="/contact" className="px-4 py-2 rounded bg-primary text-primary-foreground">
            Contact Office
          </Link>
          <a href="/pdfs/admission-form.pdf" className="px-4 py-2 rounded bg-accent">
            Download Form
          </a>
        </div>
      </div>
    </div>
  );
}

export default AdmissionsPage;
