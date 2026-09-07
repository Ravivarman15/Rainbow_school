import React from "react";
import Link from "next/link";
import { Sparkles, Trophy, Flag, HeartHandshake, ArrowRight, Calendar } from "lucide-react";
import { schoolEvents } from "@/data/events";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const StudentLifePreview: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute -bottom-20 right-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-[100px]" />
      <div className="pointer-events-none absolute top-0 left-0 h-96 w-96 rounded-full bg-emerald-600/15 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <Badge variant="rainbow" size="md" className="bg-slate-800 text-indigo-300 border-indigo-500/40">
              Vibrant Student Life
            </Badge>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Celebrations, Culture & Co-Curricular Growth
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              At Rainbow Matriculation School, childhood is celebrated through traditional festivals, national pride assemblies, sports meets, and artistic expression.
            </p>
          </div>

          <Button variant="outline" size="md" href="/student-life" className="self-start md:self-auto border-slate-700 bg-slate-800 text-white hover:bg-slate-700 gap-2">
            <span>All Activities & Timeline</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Events Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {schoolEvents.slice(0, 3).map((ev) => (
            <div
              key={ev.id}
              className="group rounded-2xl border border-slate-800 bg-slate-950/80 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <Badge variant="secondary" size="sm" className="bg-slate-800 text-slate-300 border-slate-700">
                  {ev.category}
                </Badge>
                <span className="flex items-center gap-1 text-xs text-emerald-400 font-medium">
                  <Calendar className="h-3 w-3" />
                  {ev.date}
                </span>
              </div>

              <h3 className="mt-4 font-heading text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                {ev.title}
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                {ev.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                {ev.highlights.map((hl, i) => (
                  <span
                    key={i}
                    className="rounded-lg bg-slate-900 px-2 py-1 text-[11px] text-slate-300 border border-slate-800"
                  >
                    {hl}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
