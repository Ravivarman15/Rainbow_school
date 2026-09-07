import React from "react";
import type { Metadata } from "next";
import { ShieldCheck, CheckCircle2, Building, BookOpen, Layers } from "lucide-react";
import { schoolData } from "@/data/school";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Mandatory Public Disclosure | UDISE 33031003604",
  description: "Official public disclosure information for Rainbow Matriculation School, Orathi in compliance with government education portal norms.",
};

export default function DisclosurePage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <Badge variant="verified" size="md">
            Statutory Transparency
          </Badge>
          <h1 className="mt-3 font-heading text-3xl font-bold text-slate-900">
            Mandatory Public Disclosure & Compliance
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Official educational baseline for Rainbow Matriculation School, Orathi (Chengalpattu District, Tamil Nadu).
          </p>
        </div>

        <Card className="p-8 bg-white border-slate-200 shadow-md space-y-6">
          <h2 className="font-heading text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
            A. General Institutional Information
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200/80">
              <span className="text-slate-500 font-medium">School Name:</span>
              <div className="font-bold text-slate-900 mt-0.5">{schoolData.name}</div>
            </div>
            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200/80">
              <span className="text-slate-500 font-medium">UDISE Code:</span>
              <div className="font-bold text-emerald-700 mt-0.5">{schoolData.udiseCode}</div>
            </div>
            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200/80">
              <span className="text-slate-500 font-medium">Founding Year:</span>
              <div className="font-bold text-slate-900 mt-0.5">{schoolData.establishedYear}</div>
            </div>
            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200/80">
              <span className="text-slate-500 font-medium">School Board:</span>
              <div className="font-bold text-slate-900 mt-0.5">Tamil Nadu Matriculation System</div>
            </div>
            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200/80">
              <span className="text-slate-500 font-medium">Management:</span>
              <div className="font-bold text-slate-900 mt-0.5">Private Unaided</div>
            </div>
            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200/80">
              <span className="text-slate-500 font-medium">School Structure:</span>
              <div className="font-bold text-slate-900 mt-0.5">Co-educational Day School</div>
            </div>
          </div>
        </Card>

        <Card className="p-8 bg-white border-slate-200 shadow-md space-y-6">
          <h2 className="font-heading text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
            B. Physical Infrastructure Details
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200/80 text-center">
              <span className="text-2xl font-bold text-indigo-600 block">13</span>
              <span className="text-slate-600 font-medium">Instructional Classrooms</span>
            </div>
            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200/80 text-center">
              <span className="text-2xl font-bold text-emerald-600 block">Yes</span>
              <span className="text-slate-600 font-medium">Dedicated Playground</span>
            </div>
            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200/80 text-center">
              <span className="text-2xl font-bold text-blue-600 block">Functional</span>
              <span className="text-slate-600 font-medium">Tap Drinking Water & Sanitation</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
