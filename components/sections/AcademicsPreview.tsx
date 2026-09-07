"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, BookOpen, Layers, Target } from "lucide-react";
import { academicStages, academicValues } from "@/data/academics";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

export const AcademicsPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const currentStage = academicStages[activeTab];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-y border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="rainbow" size="md">
            Academic Excellence & Values
          </Badge>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">
            A Nurturing Learning Path from Kindergarten to Class 6
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Our curriculum blends Tamil Nadu Matriculation Board academic standards with activity-based inquiry, strong bilingual communication, and holistic values.
          </p>
        </div>

        {/* Interactive Grade Level Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-4">
          {academicStages.map((stage, idx) => (
            <button
              key={stage.id}
              onClick={() => setActiveTab(idx)}
              className={cn(
                "rounded-xl px-5 py-3 text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer",
                activeTab === idx
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20 scale-[1.02]"
                  : "bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
              )}
            >
              <div className="flex items-center gap-2">
                <span>{stage.stageName}</span>
                <span
                  className={cn(
                    "rounded-md px-1.5 py-0.5 text-[10px]",
                    activeTab === idx ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                  )}
                >
                  {stage.grades}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Active Stage Card */}
        <div className="mt-8">
          <Card className="p-6 sm:p-10 border-indigo-100 shadow-xl bg-white">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-center">
              {/* Stage Info */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <Badge variant="verified" size="sm">
                    Age Group: {currentStage.ageGroup}
                  </Badge>
                  <Badge variant="secondary" size="sm">
                    {currentStage.grades}
                  </Badge>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  {currentStage.focus}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {currentStage.description}
                </p>

                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Curriculum Highlights:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentStage.curriculumHighlights.slice(0, 4).map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <Button variant="primary" size="md" href="/academics" className="gap-2">
                    <span>View Complete Syllabus</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Subject Matrix Box */}
              <div className="lg:col-span-5 rounded-2xl bg-indigo-950 p-6 text-white shadow-inner space-y-4">
                <div className="flex items-center gap-2 border-b border-indigo-800/80 pb-3">
                  <BookOpen className="h-5 w-5 text-indigo-400" />
                  <span className="font-heading font-bold text-sm text-indigo-100">
                    Core Instructional Subjects
                  </span>
                </div>

                <div className="space-y-2">
                  {currentStage.subjects.map((sub, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between rounded-xl bg-indigo-900/50 px-3.5 py-2 text-xs sm:text-sm text-indigo-100 border border-indigo-800/40"
                    >
                      <span>{sub}</span>
                      <span className="text-[10px] text-emerald-400 font-medium">Bilingual</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-center text-xs text-indigo-300">
                  Continuous Comprehensive Evaluation (CCE) Standard
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* 4 Academic Pillars */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {academicValues.map((val, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Sparkles className="h-5 w-5" />
              </div>
              <h4 className="font-heading text-base font-bold text-slate-900">{val.title}</h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
