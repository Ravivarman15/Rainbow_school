import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Rainbow Matriculation School",
  description: "Privacy policy for Rainbow Matriculation School, Orathi web portal.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <h1 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-500">Last updated: Academic Year 2026–2027</p>

        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            Rainbow Matriculation School, Orathi is committed to safeguarding the personal privacy of our students, parents, and prospective applicants.
          </p>
          <h2 className="font-bold text-slate-900 text-base pt-2">1. Collection of Enquiry Information</h2>
          <p>
            When you submit an admission enquiry or contact message via this portal, we collect basic identifying information such as parent name, student name, contact phone number, and optional email address.
          </p>
          <h2 className="font-bold text-slate-900 text-base pt-2">2. Use of Information</h2>
          <p>
            Submitted contact information is used strictly by our Orathi administrative staff for follow-up admissions counseling, circular dissemination, and direct communication. We never sell, lease, or share personal data with external third parties or advertisers.
          </p>
          <h2 className="font-bold text-slate-900 text-base pt-2">3. Contact Office</h2>
          <p>
            For any queries regarding data security, please visit our school administrative office in Veppankaranai, Orathi, Tamil Nadu.
          </p>
        </div>
      </div>
    </div>
  );
}
