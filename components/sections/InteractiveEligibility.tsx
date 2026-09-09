"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  BookOpen,
  ArrowRight,
  Sparkles,
  Calendar,
  FileCheck2,
  GraduationCap,
  Baby,
  Palette,
  Compass,
  Award,
  Layers,
  ShieldCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface GradeGuide {
  grade: string;
  shortLabel: string;
  category: "Early Childhood" | "Primary Wing" | "Upper Primary" | "Middle School";
  categoryBadge: string;
  icon: React.ElementType;
  ageLimit: string;
  focus: string;
  subjects: string[];
  keySkill: string;
  docHighlight: string;
  admissionStatus: string;
}

const gradesData: GradeGuide[] = [
  {
    grade: "Nursery / Pre-KG",
    shortLabel: "Pre-KG",
    category: "Early Childhood",
    categoryBadge: "🌱 Early Childhood Foundation",
    icon: Baby,
    ageLimit: "2.5 – 3.5 Years",
    focus: "Joyful sensory learning, shape and color recognition, spoken Tamil & English nursery rhymes, and social play.",
    subjects: [
      "Oral English Phonics & Rhymes",
      "Tamil Nursery Songs (பாடல்)",
      "Color & Shape Sorting Blocks",
      "Fine Motor Sensory Play",
    ],
    keySkill: "Verbal expression, self-comfort & fine motor pencil grip",
    docHighlight: "Birth Certificate & Aadhaar Copy",
    admissionStatus: "Admissions Open • Limited Seats",
  },
  {
    grade: "LKG",
    shortLabel: "LKG",
    category: "Early Childhood",
    categoryBadge: "🎨 Lower Kindergarten",
    icon: Palette,
    ageLimit: "3.5 – 4.5 Years",
    focus: "Alphabet stroke formation, basic counting (1–20), phonics sound blends, and bilingual conversational songs.",
    subjects: [
      "English Alphabet & Sound Blends",
      "Tamil Basic Letters (அ, ஆ)",
      "Number Concepts & Counting 1-20",
      "Freehand Drawing & Action Rhymes",
    ],
    keySkill: "Pencil control, counting recognition & group sharing",
    docHighlight: "Birth Certificate & 3 Passport Photos",
    admissionStatus: "Admissions Open",
  },
  {
    grade: "UKG",
    shortLabel: "UKG",
    category: "Early Childhood",
    categoryBadge: "📘 Upper Kindergarten",
    icon: BookOpen,
    ageLimit: "4.5 – 5.5 Years",
    focus: "Early two-letter reading, simple addition concepts, Tamil vowel mastery (உயிர் எழுத்துக்கள்), and nature exploration.",
    subjects: [
      "Sight Words & Early Reading",
      "Tamil Uyir Ezhuthukkal (உயிர் எழுத்துக்கள்)",
      "Basic Addition & Counting 1-50",
      "General Awareness & Nature Study",
    ],
    keySkill: "Fluent two-letter reading & foundational numeracy",
    docHighlight: "Birth Certificate & Immunization Record Copy",
    admissionStatus: "Admissions Open",
  },
  {
    grade: "Class 1",
    shortLabel: "Class 1",
    category: "Primary Wing",
    categoryBadge: "🎒 Primary Matriculation Foundation",
    icon: Layers,
    ageLimit: "5.5 – 6.5 Years",
    focus: "Formal matriculation schooling: bilingual sentence construction, addition & subtraction, and Environmental Studies (EVS).",
    subjects: [
      "English Language & Handwriting",
      "Tamil First Language (தமிழ்)",
      "Mathematics (Addition/Subtraction)",
      "Environmental Studies (EVS)",
      "Physical Education & Art",
    ],
    keySkill: "Independent sentence formation & mental arithmetic",
    docHighlight: "Birth Certificate, Aadhaar Copy & Photos",
    admissionStatus: "Admissions Open",
  },
  {
    grade: "Class 2 & 3",
    shortLabel: "Class 2 & 3",
    category: "Primary Wing",
    categoryBadge: "📐 Primary Subject Exploration",
    icon: Compass,
    ageLimit: "7 – 9 Years",
    focus: "Bilingual reading comprehension, multiplication tables, foundational science curiosity, and moral science principles.",
    subjects: [
      "English Prose & Grammar",
      "Tamil Literature & Poetry",
      "Mathematics (Multiplication & Word Problems)",
      "General Science & Social Basics",
      "Moral Science & Life Skills",
    ],
    keySkill: "Multiplication mastery & fluent bilingual reading",
    docHighlight: "Transfer Certificate (if applicable) & Birth Certificate",
    admissionStatus: "Admissions Open",
  },
  {
    grade: "Class 4 & 5",
    shortLabel: "Class 4 & 5",
    category: "Primary Wing",
    categoryBadge: "🔬 Primary Upper Stage",
    icon: Award,
    ageLimit: "9 – 11 Years",
    focus: "Analytical problem solving, bilingual essay writing, Tamil Nadu history, practical science demonstrations, and structured exams.",
    subjects: [
      "Advanced English Comprehension",
      "Tamil Language & Grammar",
      "Mathematics (Fractions, Geometry, Decimals)",
      "General Science & Nature Inquiry",
      "Social Science & Map Reading",
    ],
    keySkill: "Critical thinking, essay writing & disciplined exam habits",
    docHighlight: "Transfer Certificate (TC) & Previous Marksheet",
    admissionStatus: "Admissions Open",
  },
  {
    grade: "Class 6",
    shortLabel: "Class 6",
    category: "Middle School",
    categoryBadge: "🎓 Middle School Foundation",
    icon: GraduationCap,
    ageLimit: "11 – 12 Years",
    focus: "Upper primary & middle transition with distinct disciplines in Physics, Chemistry, Biology, History, Algebra, and Computer fundamentals.",
    subjects: [
      "English Literature & Composition",
      "Tamil Language (இரண்டாம் மொழி)",
      "Mathematics (Algebra, Integers & Geometry)",
      "General Science (Physics, Chemistry, Biology)",
      "Social Science (History, Civics & Geography)",
      "Computer Fundamentals & Coding Basics",
    ],
    keySkill: "Subject specialization, analytical science & abstract math",
    docHighlight: "Transfer Certificate (TC), Conduct Certificate & Marksheet",
    admissionStatus: "Admissions Open",
  },
  {
    grade: "Class 7",
    shortLabel: "Class 7",
    category: "Middle School",
    categoryBadge: "📚 Middle School Intermediate",
    icon: BookOpen,
    ageLimit: "12 – 13 Years",
    focus: "Advanced science experiments, geometric proofs, algebraic equations, Tamil & English literature analysis, and historical inquiry.",
    subjects: [
      "Advanced English Prose & Poetry",
      "Tamil Grammar & Literature",
      "Mathematics (Linear Equations, Geometry, Percentages)",
      "Science (Practical Demonstrations & Lab Concepts)",
      "Social Science (Medieval History & Geography)",
      "Computer Applications & Digital Skills",
    ],
    keySkill: "Scientific reasoning, essay formulation & computational logic",
    docHighlight: "Transfer Certificate (TC) & Class 6 Marksheet",
    admissionStatus: "Admissions Open",
  },
  {
    grade: "Class 8",
    shortLabel: "Class 8",
    category: "Middle School",
    categoryBadge: "🏆 Middle School Graduation Stage",
    icon: Award,
    ageLimit: "13 – 14 Years",
    focus: "Preparation for secondary board standards: rigorous science concepts, higher algebra & geometry, essay writing, and public speaking.",
    subjects: [
      "English Language & Public Speaking",
      "Tamil Advanced Literature & Grammar",
      "Mathematics (Algebraic Identities, Mensuration, Statistics)",
      "Physical & Biological Sciences",
      "Social Science (Modern History, Constitution & Economics)",
      "Computer Science & Applied Projects",
    ],
    keySkill: "High school readiness, analytical problem solving & leadership",
    docHighlight: "Transfer Certificate (TC) & Class 7 Marksheet",
    admissionStatus: "Admissions Open",
  },
];

export const InteractiveEligibility: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(1); // Default to LKG
  const current = gradesData[selectedIndex];

  return (
    <section className="py-14 sm:py-24 bg-gradient-to-b from-white via-indigo-50/20 to-slate-50 border-y border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3.5 py-1 text-xs font-bold text-indigo-900 shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
            <span>PARENT DECISION GUIDE • ADMISSIONS OPEN</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Admission Eligibility & Grade Level Explorer
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Select your child&apos;s target grade to instantly check age requirements, syllabus coverage, key skills, and document checklist.
          </p>
        </div>

        {/* Grade Selector Pills with Dedicated Icons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-4xl mx-auto mb-10">
          {gradesData.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = selectedIndex === idx;

            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedIndex(idx)}
                className={cn(
                  "flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer",
                  isSelected
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/25 scale-105"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-2xs hover:border-indigo-200"
                )}
              >
                <Icon className={cn("h-4 w-4", isSelected ? "text-white" : "text-indigo-600")} />
                <span>{item.grade}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Card with High Polish */}
        <div className="max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-3xl border border-indigo-100/90 bg-white shadow-xl shadow-slate-200/50">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Left Column: Stage Details, Milestones & Direct CTA */}
              <div className="p-6 sm:p-10 lg:col-span-7 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Category & Age Badges */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-indigo-50 border border-indigo-200 px-3 py-1 text-xs font-bold text-indigo-700">
                      {current.categoryBadge}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-800">
                      <Calendar className="h-3.5 w-3.5 text-emerald-600" />
                      <span>{current.ageLimit}</span>
                    </span>
                  </div>

                  {/* Title & Overview */}
                  <div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {current.grade} Curriculum Overview
                    </h3>
                    <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                      {current.focus}
                    </p>
                  </div>

                  {/* Key Development Milestone Callout */}
                  <div className="rounded-2xl border border-amber-200/80 bg-gradient-to-r from-amber-50/60 to-orange-50/40 p-4 space-y-1 shadow-2xs">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800">
                      <Sparkles className="h-4 w-4 text-amber-600" />
                      <span>Key Developmental Milestone:</span>
                    </div>
                    <div className="text-sm sm:text-base font-bold text-slate-900">
                      {current.keySkill}
                    </div>
                  </div>
                </div>

                {/* Direct Action Hub */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link href={`/admissions?class=${encodeURIComponent(current.grade)}`}>
                    <Button
                      variant="primary"
                      size="md"
                      className="gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-md shadow-indigo-600/20 px-6 py-3"
                    >
                      <span>Apply for {current.grade}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>

                  <Link
                    href="/academics"
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors px-3 py-2"
                  >
                    <span>View Full Syllabus Details</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Core Subjects Matrix & Document Checklist (Sleek Dark Theme) */}
              <div className="bg-slate-950 p-6 sm:p-8 lg:col-span-5 flex flex-col justify-between space-y-5 text-white">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-indigo-400" />
                      <span className="font-heading font-bold text-sm text-white">
                        Core Subjects & Skills
                      </span>
                    </div>
                    <span className="rounded bg-indigo-900/60 px-2 py-0.5 text-[10px] font-bold text-indigo-300">
                      Matriculation
                    </span>
                  </div>

                  {/* Subject List */}
                  <ul className="space-y-2">
                    {current.subjects.map((sub, i) => (
                      <li
                        key={i}
                        className="flex items-center justify-between rounded-xl bg-slate-900/90 px-3.5 py-2.5 text-xs text-slate-200 border border-slate-800/80 shadow-2xs"
                      >
                        <span className="font-medium">{sub}</span>
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 ml-2" />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Document Checklist Footer */}
                <div className="rounded-xl bg-slate-900/90 p-3.5 border border-slate-800 text-xs space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-amber-400">
                    <FileCheck2 className="h-4 w-4 shrink-0 text-amber-400" />
                    <span>Required Documents for Admission:</span>
                  </div>
                  <div className="text-[11px] text-slate-300 leading-relaxed">
                    {current.docHighlight}
                  </div>
                  <div className="pt-1 flex items-center gap-1 text-[10px] text-emerald-400 font-semibold border-t border-slate-800/80">
                    <ShieldCheck className="h-3 w-3" />
                    <span>Verified UDISE 33031003604 • Orathi Campus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
