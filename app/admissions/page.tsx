import React from "react";
import type { Metadata } from "next";
import {
  CheckCircle2,
  FileText,
  Clock,
  Phone,
  Compass,
  AlertCircle,
  ShieldCheck,
  GraduationCap,
  Bus,
  MapPin,
} from "lucide-react";
import { schoolData } from "@/data/school";
import { AdmissionEnquiryForm } from "@/components/sections/AdmissionEnquiryForm";
import { InteractiveEligibility } from "@/components/sections/InteractiveEligibility";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Admissions 2026–2027 | Process, Eligibility & Enquiry",
  description:
    "Apply for admission at Rainbow Matriculation School in Orathi for Pre-KG to Class 6. View admission steps, required documents, and submit an online enquiry.",
};

export default function AdmissionsPage() {
  const steps = [
    {
      number: "01",
      title: "Submit Online Enquiry / Visit Campus",
      desc: "Fill out the enquiry form on this website or visit our administrative office in Veppankaranai, Orathi between 8:30 AM and 4:30 PM.",
    },
    {
      number: "02",
      title: "Parent Counseling & Interaction",
      desc: "Meet with our educators to understand our bilingual teaching methodology, textbooks, daily routines, and school transport options.",
    },
    {
      number: "03",
      title: "Document Submission & Verification",
      desc: "Submit student's birth certificate, Aadhaar copies, photographs, and previous school transfer certificate (for Class 1 and above).",
    },
    {
      number: "04",
      title: "Enrollment & Orientation",
      desc: "Complete registration paperwork, receive student books & uniform guidelines, and prepare for joyful schooling.",
    },
  ];

  const documents = [
    "Original & Photocopy of Student Birth Certificate (DOB proof)",
    "Photocopy of Student Aadhaar Card",
    "Photocopy of Parent / Guardian Aadhaar Card",
    "3 Recent Passport-Size Photographs of the Student",
    "Transfer Certificate (TC) from recognized previous school (for Class 1 to 6)",
    "Community Certificate (photocopy, if applicable)",
    "Immunization & Health Record copy (for Kindergarten applicants)",
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Light, Crisp Header */}
      <section className="bg-gradient-to-b from-indigo-50/70 via-white to-slate-50 py-12 sm:py-16 border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <Badge variant="rainbow" size="md">
            Enrolment Guide 2026–2027
          </Badge>
          <h1 className="mt-4 font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Admissions for Pre-KG to Class 6
          </h1>
          <p className="mt-4 max-w-3xl text-sm sm:text-base text-slate-600 leading-relaxed">
            Join the Rainbow family in Orathi. We provide a disciplined, caring, and values-rooted English medium education for children aged 3 to 12.
          </p>
        </div>
      </section>

      {/* Interactive Grade Level Explorer */}
      <InteractiveEligibility />

      {/* Main Grid: Info + Form */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left Column: Process & Requirements */}
            <div className="lg:col-span-6 space-y-10">
              <div className="space-y-4">
                <Badge variant="primary" size="sm">
                  4-Step Enrollment Flow
                </Badge>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
                  How to Enrol Your Child
                </h2>

                <div className="space-y-4 pt-2">
                  {steps.map((step) => (
                    <div
                      key={step.number}
                      className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-xs"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white font-bold text-sm shadow-sm">
                        {step.number}
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-slate-900">{step.title}</h4>
                        <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Documents Checklist */}
              <Card className="p-6 sm:p-8 bg-white border-slate-200 shadow-md">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="h-5 w-5 text-indigo-600" />
                  <h3 className="font-heading text-lg font-bold text-slate-900">
                    Required Documents Checklist
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {documents.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* School Transport Facility */}
              <Card className="p-6 sm:p-8 bg-gradient-to-br from-indigo-50/60 via-white to-sky-50/60 border-indigo-200/80 shadow-md">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm">
                      <Bus className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-slate-900">
                      School Transport & Van Facility
                    </h3>
                  </div>
                  <Badge variant="verified" size="sm">Available</Badge>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Rainbow provides safe, dependable school van and bus transit services for students from Pre-KG to Class 6 across Orathi and neighboring rural habitations.
                </p>
                <div className="space-y-2 rounded-xl bg-white/80 p-3.5 border border-indigo-100 text-xs text-slate-700">
                  <div className="font-semibold text-indigo-950 flex items-center gap-1.5 mb-1.5">
                    <MapPin className="h-3.5 w-3.5 text-indigo-600" />
                    <span>Coverage Areas & Surrounding Routes:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="rounded-md bg-indigo-50 px-2 py-1 text-[11px] font-medium text-indigo-700 border border-indigo-100">Orathi & Veppankaranai</span>
                    <span className="rounded-md bg-indigo-50 px-2 py-1 text-[11px] font-medium text-indigo-700 border border-indigo-100">Acharapakkam Block</span>
                    <span className="rounded-md bg-indigo-50 px-2 py-1 text-[11px] font-medium text-indigo-700 border border-indigo-100">Madurantakam Rural</span>
                    <span className="rounded-md bg-indigo-50 px-2 py-1 text-[11px] font-medium text-indigo-700 border border-indigo-100">Adjacent Villages</span>
                  </div>
                  <ul className="space-y-1.5 pt-2 text-[11px] text-slate-600">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                      <span>Experienced and verified drivers with student care assistants</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                      <span>Dedicated morning pick-up and safe evening drop-off schedules</span>
                    </li>
                  </ul>
                </div>
              </Card>

              {/* Transparent Fee Notice */}
              <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-6 space-y-2">
                <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
                  <AlertCircle className="h-4 w-4 text-amber-700" />
                  <span>Official Fee Schedule Information</span>
                </div>
                <p className="text-xs text-amber-800 leading-relaxed">
                  In accordance with state educational regulatory standards and our institutional policy, official fee structures and transport fee details are provided directly by our admissions office. Please visit our office in Orathi or contact us directly.
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-6">
              <div className="sticky top-28">
                <AdmissionEnquiryForm isCard={true} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
