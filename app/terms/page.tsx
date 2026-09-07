import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Rainbow Matriculation School",
  description: "Terms of website use for Rainbow Matriculation School, Orathi.",
};

export default function TermsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <h1 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
          Terms of Website Use
        </h1>
        <p className="text-xs text-slate-500">Last updated: Academic Year 2026–2027</p>

        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            Welcome to the official web portal of Rainbow Matriculation School, Orathi (UDISE: 33031003604). By browsing this website, you agree to comply with and be bound by the following terms of use.
          </p>
          <h2 className="font-bold text-slate-900 text-base pt-2">1. Institutional Accuracy</h2>
          <p>
            The content provided on this portal is intended for general informational purposes relating to Rainbow Matriculation School in Orathi, Tamil Nadu. Official admissions, syllabus, and administrative fee structures are finalized directly at the school office.
          </p>
          <h2 className="font-bold text-slate-900 text-base pt-2">2. Intellectual Property</h2>
          <p>
            The design, text, and educational materials published herein are the property of Rainbow Matriculation School and may not be reproduced without written permission.
          </p>
        </div>
      </div>
    </div>
  );
}
