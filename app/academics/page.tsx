import React from "react";
import type { Metadata } from "next";
import {
  BookOpen,
  Sparkles,
  CheckCircle2,
  Layers,
  GraduationCap,
  Languages,
  Brain,
  Palette,
  Award,
  ArrowRight,
} from "lucide-react";
import { academicStages, academicValues } from "@/data/academics";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Academics & Curriculum | Pre-Primary to Grade 6",
  description:
    "Explore the comprehensive curriculum, bilingual literacy approach, and continuous assessment structure at Rainbow Matriculation School, Orathi.",
};

export default function AcademicsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Light Header */}
      <section className="bg-gradient-to-b from-indigo-50/70 via-white to-slate-50 py-12 sm:py-16 border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <Badge variant="rainbow" size="md">
            Tamil Nadu Matriculation Stream
          </Badge>
          <h1 className="mt-4 font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Comprehensive Academics from Kindergarten to Class 6
          </h1>
          <p className="mt-4 max-w-3xl text-sm sm:text-base text-slate-600 leading-relaxed">
            Our academic structure harmonizes foundational literacy, mathematical reasoning, bilingual communication, and activity-based learning to spark curiosity and build lifelong confidence.
          </p>
        </div>
      </section>

      {/* Classroom Photo Spotlight */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md p-4 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 rounded-2xl overflow-hidden aspect-[16/10]">
              <img
                src="/images/academics-classroom.jpg"
                alt="Classroom education at Rainbow Matriculation School, Orathi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-6 space-y-4">
              <Badge variant="verified" size="sm">
                Activity-Based Learning
              </Badge>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
                Engaging Classrooms with Dedicated Teacher Attention
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                With 14 qualified educators across 13 instructional rooms, our faculty provides personalized guidance, making learning approachable, interactive, and joyful.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="rounded-lg bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-800">
                  ✓ Phonics & Sentence Reading
                </span>
                <span className="rounded-lg bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-800">
                  ✓ Mental Math & Logic
                </span>
                <span className="rounded-lg bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-800">
                  ✓ Tamil Literary Heritage
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stages Section */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <Badge variant="primary" size="sm">
              Pedagogical Framework
            </Badge>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-slate-900">
              The Three Core Stages of Learning
            </h2>
          </div>

          <div className="space-y-12">
            {academicStages.map((stage, idx) => (
              <Card
                key={stage.id}
                className="p-8 sm:p-10 border-slate-200 bg-white shadow-md overflow-hidden relative"
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white font-bold text-sm">
                        {idx + 1}
                      </span>
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                        {stage.stageName}
                      </h3>
                      <Badge variant="verified" size="sm">
                        {stage.grades}
                      </Badge>
                    </div>

                    <p className="text-xs font-semibold text-indigo-700 uppercase tracking-wider">
                      Target Age: {stage.ageGroup}
                    </p>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {stage.description}
                    </p>

                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Key Curriculum Methodologies:
                      </h4>
                      <ul className="space-y-2">
                        {stage.curriculumHighlights.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Learning Outcomes Achieved:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {stage.keyOutcomes.map((out, i) => (
                          <span
                            key={i}
                            className="rounded-lg bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-800 border border-indigo-100"
                          >
                            ✓ {out}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Subject Matrix Panel */}
                  <div className="lg:col-span-5 rounded-2xl bg-slate-900 p-6 text-white shadow-xl space-y-4">
                    <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                      <BookOpen className="h-5 w-5 text-emerald-400" />
                      <span className="font-heading font-bold text-sm text-white">
                        Curriculum Subjects & Disciplines
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {stage.subjects.map((sub, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between rounded-xl bg-slate-800/80 px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 border border-slate-700/60"
                        >
                          <span>{sub}</span>
                          <span className="text-[10px] text-emerald-400 font-medium">Included</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 text-xs text-slate-400 border-t border-slate-800">
                      Standard syllabus mapped to Tamil Nadu Directorate of Matriculation Schools.
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
