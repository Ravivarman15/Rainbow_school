"use client";

import React from "react";
import { LifeAtRainbow } from "@/components/sections/LifeAtRainbow";
import { ShieldCheck, Camera, MapPin } from "lucide-react";
import { schoolData } from "@/data/school";

export default function GalleryPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Light, Crisp Header */}
      <section className="bg-gradient-to-b from-indigo-50/70 via-white to-slate-50 py-10 sm:py-16 border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3.5 py-1 text-xs font-bold text-indigo-900 shadow-2xs mb-4">
            <Camera className="h-3.5 w-3.5 text-indigo-600" />
            <span>VISUAL ARCHIVE & STORIES</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Life at Rainbow Matriculation School
          </h1>
          <p className="mt-3 max-w-3xl text-sm sm:text-base text-slate-600 leading-relaxed">
            Explore authentic photographs of daily classroom learning, Tamil cultural festivals (Pongal Vizha), track athletics, reading library sessions, and kindergarten discovery circles at our Orathi campus.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-500 justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 font-medium text-slate-700">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              UDISE Verified: {schoolData.udiseCode}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-indigo-600" />
              Veppankaranai Campus, Orathi
            </span>
            <span>•</span>
            <span className="font-medium text-slate-600">
              Pre-KG to Class 6
            </span>
          </div>
        </div>
      </section>

      {/* Main Interactive LifeAtRainbow Component */}
      <div className="pb-16 sm:pb-24">
        <LifeAtRainbow showAdmissionsCta={true} />
      </div>
    </div>
  );
}
