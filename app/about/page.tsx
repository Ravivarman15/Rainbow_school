import React from "react";
import type { Metadata } from "next";
import {
  Sparkles,
  Target,
  Compass,
  Heart,
  ShieldCheck,
  Building,
  GraduationCap,
  Users,
  Award,
  BookOpen,
} from "lucide-react";
import { schoolData } from "@/data/school";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us | Heritage, Vision & Values",
  description:
    "Learn about Rainbow Matriculation School in Orathi, established in 2009 to deliver values-centric, disciplined English-medium education.",
};

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Light, Airy Page Header */}
      <section className="bg-gradient-to-b from-indigo-50/70 via-white to-slate-50 py-12 sm:py-16 border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <Badge variant="rainbow" size="md">
            About Our Institution
          </Badge>
          <h1 className="mt-4 font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Nurturing Character & Knowledge in Orathi Since 2009
          </h1>
          <p className="mt-4 max-w-3xl text-sm sm:text-base text-slate-600 leading-relaxed">
            Rainbow Matriculation School was established to provide children in Orathi and surrounding villages with high-quality English-medium education rooted in moral integrity and cultural pride.
          </p>
        </div>
      </section>

      {/* Verified Profile Card */}
      <section className="mx-auto -mt-6 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-md">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="border-r border-slate-100 last:border-0 pr-4">
              <span className="text-xs font-semibold text-slate-400 uppercase">National Code</span>
              <div className="font-heading text-lg sm:text-xl font-bold text-slate-900 mt-1">
                UDISE {schoolData.udiseCode}
              </div>
            </div>
            <div className="border-r border-slate-100 last:border-0 pr-4">
              <span className="text-xs font-semibold text-slate-400 uppercase">Founding Year</span>
              <div className="font-heading text-lg sm:text-xl font-bold text-indigo-600 mt-1">
                2009 (15+ Years)
              </div>
            </div>
            <div className="border-r border-slate-100 last:border-0 pr-4">
              <span className="text-xs font-semibold text-slate-400 uppercase">Educational Wing</span>
              <div className="font-heading text-lg sm:text-xl font-bold text-slate-900 mt-1">
                Pre-KG to Class 8
              </div>
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase">School Board</span>
              <div className="font-heading text-lg sm:text-xl font-bold text-emerald-600 mt-1">
                TN Matriculation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story with Image */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <Badge variant="primary" size="sm">
                  Our Story & Heritage
                </Badge>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                  Building Strong Foundations in Rural Tamil Nadu
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Founded in 2009 in the rural belt of Orathi (Acharapakkam Block), Rainbow Matriculation School emerged to bridge the gap in accessible, quality English-medium education for local families.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Operating in a private, well-maintained building with 13 functional classrooms, our school offers a structured, supportive learning environment where each child receives individual attention, builds strong English and Tamil communication skills, and learns the timeless values of kindness and discipline.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5 shadow-xs">
                  <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span className="text-xs font-semibold text-slate-800">Pvt. Unaided Matriculation</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5 shadow-xs">
                  <Users className="h-5 w-5 text-indigo-600 shrink-0" />
                  <span className="text-xs font-semibold text-slate-800">14 Dedicated Staff Members</span>
                </div>
              </div>
            </div>

            {/* Visual Photo Card */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
                <img
                  src="/images/academics-classroom.jpg"
                  alt="Students in classroom at Rainbow Matriculation School, Orathi"
                  className="h-72 w-full object-cover"
                />
                <div className="p-6 bg-white space-y-2">
                  <h3 className="font-heading text-lg font-bold text-slate-900">
                    Our Educational Commitment
                  </h3>
                  <blockquote className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                    &ldquo;Education is not merely preparing for tests; it is the daily awakening of curiosity, the nurturing of empathy, and the cultivation of character that will guide a child for life.&rdquo;
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="p-8 border-indigo-100 bg-gradient-to-br from-white via-indigo-50/20 to-white shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm mb-6">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                Our Vision
              </h3>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                To be a benchmark of foundational and primary excellence in the Acharapakkam region, shaping self-reliant, morally upright, and intellectually curious young citizens who are confident in their global communication while rooted in cultural values.
              </p>
            </Card>

            <Card className="p-8 border-emerald-100 bg-gradient-to-br from-white via-emerald-50/20 to-white shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm mb-6">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                Our Mission
              </h3>
              <ul className="mt-3 space-y-2.5 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Deliver rigorous English language literacy and bilingual proficiency from early kindergarten.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Foster concept-focused math, science, and environmental curiosity through practical activity.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Provide safe, hygienic, and disciplined campus infrastructure supporting physical and mental wellness.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <Badge variant="rainbow" size="md">
              The Guiding Compass
            </Badge>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
              Our Five Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                title: "Discipline",
                desc: "Punctuality, neatness, and structured study routines forming daily habits.",
                icon: ShieldCheck,
              },
              {
                title: "Curiosity",
                desc: "Encouraging children to observe, question, explore, and discover joy in learning.",
                icon: Sparkles,
              },
              {
                title: "Integrity",
                desc: "Honesty in action, respect for truth, and moral character in every interaction.",
                icon: Heart,
              },
              {
                title: "Inclusivity",
                desc: "Equal love, dedicated care, and equal opportunity for every student from all backgrounds.",
                icon: Users,
              },
              {
                title: "Excellence",
                desc: "Striving for continuous improvement in academics, sports, and personal conduct.",
                icon: Award,
              },
            ].map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs text-center transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-heading text-base font-bold text-slate-900">{val.title}</h4>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Desk */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-8 sm:p-12">
            <div className="max-w-3xl space-y-4">
              <Badge variant="outline" size="sm" className="bg-white border-slate-300">
                School Leadership & Administration
              </Badge>
              <h3 className="font-heading text-2xl font-bold text-slate-900">
                Message from the Desk of Administration
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Rainbow Matriculation School is guided by an unwavering commitment to child welfare, progressive pedagogy, and institutional transparency. Our faculty and administrative staff work in close partnership with parents to ensure every child is nurtured in a safe, inspiring environment.
              </p>
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-xs text-slate-500">
                <em>Note: Formal personal messages from the Correspondent and Headmaster will be published in this section upon administrative submission.</em>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
