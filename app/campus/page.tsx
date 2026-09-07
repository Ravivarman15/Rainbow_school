import React from "react";
import type { Metadata } from "next";
import {
  Building2,
  BookOpen,
  Trophy,
  Droplets,
  ShieldCheck,
  MapPin,
  Zap,
  CheckCircle2,
  Info,
  Bus,
} from "lucide-react";
import { campusFacilities } from "@/data/facilities";
import { schoolData } from "@/data/school";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Campus & Facilities | Verified School Infrastructure",
  description:
    "Explore the verified physical campus facilities of Rainbow Matriculation School in Orathi, including 13 classrooms, playground, library, tap water, and sanitation.",
};

const iconMap: Record<string, React.ElementType> = {
  Building2,
  BookOpen,
  Trophy,
  Droplets,
  ShieldCheck,
  MapPin,
  Zap,
  Bus,
};

export const dynamic = "force-static";

export default function CampusPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Light, Airy Header */}
      <section className="bg-gradient-to-b from-indigo-50/70 via-white to-slate-50 py-12 sm:py-16 border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <Badge variant="verified" size="md">
            UDISE Verified Infrastructure • Code: 33031003604
          </Badge>
          <h1 className="mt-4 font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Campus Infrastructure & Verified Facilities
          </h1>
          <p className="mt-4 max-w-3xl text-sm sm:text-base text-slate-600 leading-relaxed">
            Our campus in Veppankaranai, Orathi is designed to provide clean, safe, well-ventilated spaces for learning, sports, reading, and healthy child development.
          </p>
        </div>
      </section>

      {/* Real Campus Library Photo Spotlight */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md p-4 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 rounded-2xl overflow-hidden aspect-[16/10]">
              <img
                src="/images/campus-library.jpg"
                alt="Reading room and library at Rainbow Matriculation School, Orathi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-6 space-y-4">
              <Badge variant="primary" size="sm">
                Curated Reading Room
              </Badge>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
                Fostering a Lifelong Love for Reading & Inquiry
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Our quiet reading corner is stocked with age-appropriate bilingual illustrated storybooks, reference charts, and moral literature, encouraging children to develop daily reading habits from an early age.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="rounded-lg bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-800">
                  ✓ Bilingual English & Tamil Books
                </span>
                <span className="rounded-lg bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-800">
                  ✓ Illustrated Picture Books
                </span>
                <span className="rounded-lg bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-800">
                  ✓ Science & Nature References
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {campusFacilities.map((fac) => {
              const Icon = iconMap[fac.iconName] || Building2;
              return (
                <Card
                  key={fac.id}
                  hoverEffect
                  className="flex flex-col justify-between p-6 sm:p-8 bg-white border-slate-200 shadow-sm"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-sm">
                        <Icon className="h-6 w-6" />
                      </div>
                      <Badge variant="verified" size="sm">
                        UDISE Verified
                      </Badge>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-slate-900">
                      {fac.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {fac.description}
                    </p>

                    <div className="space-y-2 rounded-xl bg-slate-50 p-4 border border-slate-200/80">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Facility Highlights:
                      </div>
                      <ul className="space-y-1.5">
                        {fac.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
                    🔍 <strong>Source:</strong> {fac.verifiedData}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safety & Hygiene */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <Badge variant="rainbow" size="sm">
              Health, Hygiene & Safety Protocol
            </Badge>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
              A Secure & Caring Environment for Every Child
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
                <Droplets className="h-5 w-5" />
              </div>
              <h4 className="font-heading font-bold text-slate-900">Functional Tap Water</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Safe, clean piped water supply maintained for drinking and student handwashing throughout school hours.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h4 className="font-heading font-bold text-slate-900">Segregated Restrooms</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Separate boys&apos; and girls&apos; functional sanitation blocks with continuous water flow and daily sanitation.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-600 text-white">
                <MapPin className="h-5 w-5" />
              </div>
              <h4 className="font-heading font-bold text-slate-900">All-Weather Road Access</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Located on the Tindivanam-Orathi route with direct pucca road frontage for safe daily drop-offs and pickups.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
