import React from "react";
import Link from "next/link";
import { Phone, MapPin, Clock, ShieldCheck, Sparkles, Building2 } from "lucide-react";
import { schoolData } from "@/data/school";

export const QuickBar: React.FC = () => {
  return (
    <div className="border-b border-slate-200/80 bg-slate-50/90 px-4 py-1.5 text-xs text-slate-600 transition-colors">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
        {/* Left: Location, Trust & UDISE */}
        <div className="flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs">
          <div className="flex items-center gap-1.5 text-slate-700 font-medium">
            <MapPin className="h-3.5 w-3.5 text-indigo-600 shrink-0" />
            <span>Orathi, Chengalpattu (PIN 603307)</span>
          </div>
          <div className="hidden md:flex items-center gap-1.5 text-indigo-900 font-semibold border-l border-slate-300 pl-3">
            <Building2 className="h-3.5 w-3.5 text-indigo-600 shrink-0" />
            <span>Run by Chendhur Murugar Charitable Trust</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-slate-500 border-l border-slate-300 pl-3">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
            <span>UDISE: <strong className="text-slate-800 font-semibold">{schoolData.udiseCode}</strong></span>
          </div>
        </div>

        {/* Right: Admission Status & Direct Phone */}
        <div className="flex items-center gap-4 text-[11px] sm:text-xs">
          <div className="flex items-center gap-1.5 font-semibold text-emerald-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600"></span>
            </span>
            <span>Admissions Open</span>
          </div>

          <a
            href={`tel:${schoolData.contact.directoryPhone.replace(/\s+/g, "")}`}
            className="flex items-center gap-1.5 rounded-full bg-white px-3 py-0.5 text-slate-800 font-semibold border border-slate-200 shadow-xs hover:border-indigo-300 hover:text-indigo-600 transition-all"
          >
            <Phone className="h-3 w-3 text-indigo-600" />
            <span>{schoolData.contact.directoryPhone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
