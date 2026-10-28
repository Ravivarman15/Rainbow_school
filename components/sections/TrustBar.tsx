import React from "react";
import { ShieldCheck, Calendar, BookOpen, Users, Building, Layers } from "lucide-react";
import { schoolData } from "@/data/school";

export const TrustBar: React.FC = () => {
  const trustItems = [
    {
      label: "UDISE National ID",
      value: schoolData.udiseCode,
      subtext: "Ministry of Education Registry",
      icon: ShieldCheck,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    },
    {
      label: "Founded In",
      value: "2009",
      subtext: "Over 15+ Years in Orathi",
      icon: Calendar,
      color: "text-indigo-600 bg-indigo-50 border-indigo-200",
    },
    {
      label: "Medium of Instruction",
      value: "English",
      subtext: "Bilingual English & Tamil",
      icon: BookOpen,
      color: "text-blue-600 bg-blue-50 border-blue-200",
    },
    {
      label: "Campus Scope",
      value: "Pre-KG – Class 8",
      subtext: "Foundational & Middle Wing",
      icon: Layers,
      color: "text-amber-600 bg-amber-50 border-amber-200",
    },
    {
      label: "Classrooms",
      value: "13 Units",
      subtext: "Well-Ventilated Infrastructure",
      icon: Building,
      color: "text-purple-600 bg-purple-50 border-purple-200",
    },
  ];

  return (
    <section className="relative z-20 -mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
        {/* Trust Affiliation Strip */}
        <div className="mb-5 pb-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            <span className="text-slate-500 font-medium">Institutional Governance:</span>
            <strong className="text-indigo-950 font-bold sm:text-sm">
              Run under Chendhur Murugar Charitable Trust
            </strong>
          </div>
          <span className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider bg-slate-100 rounded-md px-2.5 py-1">
            Private Unaided • Matriculation
          </span>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center sm:items-start sm:text-left transition-transform hover:-translate-y-0.5"
              >
                <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl border ${item.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {item.label}
                </span>
                <span className="font-heading text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                  {item.value}
                </span>
                <span className="text-[11px] text-slate-500 mt-0.5">
                  {item.subtext}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
