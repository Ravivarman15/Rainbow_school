import React from "react";
import type { Metadata } from "next";
import {
  Sparkles,
  Trophy,
  Calendar,
  Flag,
  Heart,
  Palette,
  Award,
  Users,
  Compass,
  ArrowRight,
} from "lucide-react";
import { schoolEvents, academicCalendarHighlights } from "@/data/events";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Student Life & Culture | Celebrations, Sports & Activities",
  description:
    "Discover student life at Rainbow Matriculation School in Orathi, featuring sports meets, Pongal vizha, national celebrations, and talent exhibitions.",
};

export default function StudentLifePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Light, Airy Header */}
      <section className="bg-gradient-to-b from-indigo-50/70 via-white to-slate-50 py-12 sm:py-16 border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <Badge variant="rainbow" size="md">
            Holistic Student Experience
          </Badge>
          <h1 className="mt-4 font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Vibrant Student Life & Tamil Cultural Celebrations
          </h1>
          <p className="mt-4 max-w-3xl text-sm sm:text-base text-slate-600 leading-relaxed">
            Education extends beyond textbooks. Our students cultivate team spirit, creative expression, leadership, and cultural roots through traditional festivals, playground sports, and national day observances.
          </p>
        </div>
      </section>

      {/* Dual Photo Feature Spotlight: Pongal & Sports Day */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pongal Vizha Card */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md">
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src="/images/culture-pongal.jpg"
                alt="Pongal celebration at Rainbow Matriculation School, Orathi"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6 space-y-2">
              <Badge variant="verified" size="sm">
                Tamil Cultural Heritage
              </Badge>
              <h3 className="font-heading text-xl font-bold text-slate-900">
                Pongal Cultural Festival (பொங்கல் விழா)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Traditional Pongal cooking in decorated mud pots, colorful Rangoli Kolam, ethnic festive attire, traditional songs, and community sweets sharing.
              </p>
            </div>
          </div>

          {/* Sports Day Card */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md">
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src="/images/sports-track.jpg"
                alt="Annual Sports Day track events at Rainbow Matriculation School, Orathi"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6 space-y-2">
              <Badge variant="primary" size="sm">
                Athletics & Physical Training
              </Badge>
              <h3 className="font-heading text-xl font-bold text-slate-900">
                Annual Track & Field Sports Meet
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Sprints, lemon-and-spoon races for kindergarten, house march-pasts, relay events, and sportsmanship awards on our open playground.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Student Life */}
      <section className="py-12 sm:py-16 bg-white border-y border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 shadow-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-700 mb-4">
                <Flag className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-base font-bold text-slate-900">National Pride</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Flag hoisting, march-pasts, and civic awareness assemblies on Independence Day & Republic Day.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 shadow-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700 mb-4">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-base font-bold text-slate-900">Tamil Heritage</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Traditional Pongal Vizha (பொங்கல் விழா) with ethnic attire, traditional games, and folk arts.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 shadow-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 mb-4">
                <Trophy className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-base font-bold text-slate-900">Playground Sports</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Daily physical training, athletics, Kho-Kho, sprints, and annual track meet on our open playground.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 shadow-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700 mb-4">
                <Palette className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-base font-bold text-slate-900">Creative Expression</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Drawing competitions, storytelling sessions, handwriting contests, and science project displays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Timeline */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <Badge variant="rainbow" size="sm">
              Annual Calendar & Highlights
            </Badge>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
              Celebrations Across the Academic Year
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {schoolEvents.map((ev) => (
              <Card
                key={ev.id}
                className="flex flex-col justify-between p-6 sm:p-7 border-slate-200 bg-white hover:shadow-lg transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="primary" size="sm">
                      {ev.category}
                    </Badge>
                    <span className="flex items-center gap-1 text-xs font-semibold text-indigo-700">
                      <Calendar className="h-3.5 w-3.5" />
                      {ev.date}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-slate-900">
                    {ev.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {ev.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Event Highlights:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {ev.highlights.map((hl, i) => (
                      <span
                        key={i}
                        className="rounded-md bg-slate-50 px-2 py-1 text-[11px] text-slate-700 border border-slate-200 font-medium"
                      >
                        {hl}
                      </span>
                    ))}
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
