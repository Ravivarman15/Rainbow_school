"use client";

import React, { useState } from "react";
import { Calendar, Tag, Sparkles, Filter, CheckCircle2 } from "lucide-react";
import { schoolEvents } from "@/data/events";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

const categories = ["All", "Celebration", "Academic", "Sports", "Cultural"] as const;

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredEvents =
    activeCategory === "All"
      ? schoolEvents
      : schoolEvents.filter((e) => e.category === activeCategory);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Light Header */}
      <section className="bg-gradient-to-b from-indigo-50/70 via-white to-slate-50 py-12 sm:py-16 border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <Badge variant="rainbow" size="md">
            School Calendar & Happenings
          </Badge>
          <h1 className="mt-4 font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Events & Celebrations
          </h1>
          <p className="mt-4 max-w-3xl text-sm sm:text-base text-slate-600 leading-relaxed">
            Stay updated with school events, national days, cultural festivals, sports tournaments, and academic showcases at Rainbow Matriculation School, Orathi.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-slate-500" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Filter By:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-xl px-4 py-2 text-xs font-semibold transition-all cursor-pointer",
                  activeCategory === cat
                    ? "bg-indigo-600 text-white shadow-sm shadow-indigo-500/30"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((ev) => (
            <Card
              key={ev.id}
              hoverEffect
              className="flex flex-col justify-between p-6 sm:p-7 bg-white border-slate-200 shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="primary" size="sm">
                    {ev.category}
                  </Badge>
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-indigo-700">
                    <Calendar className="h-3.5 w-3.5" />
                    {ev.date}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-slate-900 leading-snug">
                  {ev.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {ev.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Key Highlights:
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
      </section>
    </div>
  );
}
