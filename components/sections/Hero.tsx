"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  GraduationCap,
  BookOpen,
  Users,
  MapPin,
  CheckCircle2,
  Phone,
  Heart,
} from "lucide-react";
import { schoolData } from "@/data/school";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50/60 via-white to-slate-50/50 py-12 sm:py-16 lg:py-20 border-b border-slate-200/70">
      {/* Soft luminous ambient glows (Light & Warm) */}
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-indigo-200/40 blur-[100px]" />
      <div className="pointer-events-none absolute top-1/2 left-0 h-96 w-96 rounded-full bg-emerald-100/50 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-amber-100/40 blur-[90px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Trust Headline & Direct Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-1.5 text-xs font-semibold text-indigo-900 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Admissions Open 2026–2027</span>
              <span className="text-slate-300">•</span>
              <span className="text-emerald-700 font-bold">Pre-KG to Class 6</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-slate-900 leading-tight">
              Where Curiosity Begins. <br />
              <span className="text-indigo-600">
                Where Every Child Grows.
              </span>
            </h1>

            {/* Sub-text */}
            <p className="mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600 lg:mx-0">
              Welcome to <strong className="text-slate-900 font-semibold">{schoolData.name}</strong>, Orathi. A caring, disciplined English-medium institution fostering bilingual fluency, moral values, and academic confidence since 2009.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2 lg:justify-start">
              <Button
                variant="primary"
                size="lg"
                href="/admissions"
                className="gap-2 shadow-md bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3.5"
              >
                <span>Admission Enquiry</span>
                <ArrowRight className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                href="/academics"
                className="border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 px-6 py-3.5 font-semibold"
              >
                Explore Curriculum
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-xs text-slate-600 lg:justify-start">
              <div className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>UDISE: <strong className="text-slate-900">{schoolData.udiseCode}</strong></span>
              </div>
              <span className="hidden sm:inline text-slate-300">•</span>
              <div className="flex items-center gap-1.5 font-medium">
                <GraduationCap className="h-4 w-4 text-indigo-600" />
                <span>Est. <strong className="text-slate-900">{schoolData.establishedYear}</strong> (15+ Years)</span>
              </div>
              <span className="hidden sm:inline text-slate-300">•</span>
              <div className="flex items-center gap-1.5 font-medium">
                <MapPin className="h-4 w-4 text-amber-600" />
                <span>Orathi, Chengalpattu Dist</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Photo Card with Real School Life Experience */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image Container */}
              <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-3 shadow-xl">
                <div className="relative h-72 sm:h-80 w-full overflow-hidden rounded-2xl">
                  <img
                    src="/images/academics-classroom.jpg"
                    alt="Active classroom learning at Rainbow Matriculation School, Orathi"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                  
                  {/* Image Overlay Pill */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center justify-between">
                      <span className="rounded-md bg-white/90 px-2.5 py-1 text-xs font-bold text-slate-900 shadow-sm backdrop-blur-md">
                        Joyful Learning Environment
                      </span>
                      <span className="text-xs font-medium text-slate-200">
                        13 Classrooms • 14 Teachers
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs text-slate-100 font-medium line-clamp-1">
                      Bilingual education, structured numeracy & activity-based inquiry
                    </p>
                  </div>
                </div>

                {/* Sub-card Row */}
                <div className="grid grid-cols-2 gap-2 pt-3">
                  <Link
                    href="/student-life"
                    className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50 p-2.5 hover:bg-indigo-50/60 transition-colors"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Tamil Culture</div>
                      <div className="text-[10px] text-slate-500">Pongal & Arts</div>
                    </div>
                  </Link>

                  <Link
                    href="/campus"
                    className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50 p-2.5 hover:bg-indigo-50/60 transition-colors"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700">
                      <BookOpen className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Campus Library</div>
                      <div className="text-[10px] text-slate-500">Reading Room</div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Floating Verified Badge */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3.5 shadow-xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Govt. UDISE Verified</div>
                  <div className="text-[11px] text-slate-500">Code: 33031003604</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
