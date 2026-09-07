"use client";

import React, { useState } from "react";
import { Clock, Sun, BookOpen, Utensils, Trophy, Heart, Bell, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

interface TimelineSlot {
  time: string;
  period: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const daySchedule: TimelineSlot[] = [
  {
    time: "8:45 AM",
    period: "Morning Assembly",
    title: "Prayer, Tamil Thai Valthu & Pledge",
    description: "Daily morning assembly fostering discipline, moral thoughts, news recitation, and national anthem on our open ground.",
    icon: Sun,
    color: "bg-amber-100 text-amber-700 border-amber-200",
  },
  {
    time: "9:15 AM",
    period: "Session 1",
    title: "English Literacy & Phonics Mastery",
    description: "Active phonics blends, reading comprehension, handwriting practice, and vocabulary building.",
    icon: BookOpen,
    color: "bg-indigo-100 text-indigo-700 border-indigo-200",
  },
  {
    time: "10:45 AM",
    period: "Short Break",
    title: "Hydration & Nutritional Snack Break",
    description: "Clean functional tap drinking water break, healthy snack, and supervised peer socialization.",
    icon: Bell,
    color: "bg-emerald-100 text-emerald-700 border-emerald-200",
  },
  {
    time: "11:00 AM",
    period: "Session 2",
    title: "Mathematics & Analytical Thinking",
    description: "Numeracy concepts, counting blocks for kindergarten, mental arithmetic, and geometry exercises.",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-700 border-blue-200",
  },
  {
    time: "12:30 PM",
    period: "Lunch Hour",
    title: "Nutritious Lunch & Guided Play",
    description: "Supervised dining etiquette, handwashing at dedicated water bays, and outdoor leisure on the playground.",
    icon: Utensils,
    color: "bg-orange-100 text-orange-700 border-orange-200",
  },
  {
    time: "1:30 PM",
    period: "Session 3",
    title: "Tamil Language, Science & EVS Discovery",
    description: "Tamil literature, nature charts, plant biology models, and environmental curiosity projects.",
    icon: Heart,
    color: "bg-rose-100 text-rose-700 border-rose-200",
  },
  {
    time: "3:00 PM",
    period: "Co-Curricular",
    title: "Sports, Library Reading & Arts",
    description: "Outdoor games, athletic drills, library storybook reading, drawing, or moral science.",
    icon: Trophy,
    color: "bg-purple-100 text-purple-700 border-purple-200",
  },
  {
    time: "3:45 PM",
    period: "Dismissal",
    title: "Safe Dispersal & Parent Handover",
    description: "Orderly dispersal through all-weather road entrance with teacher supervision.",
    icon: Bell,
    color: "bg-slate-100 text-slate-700 border-slate-200",
  },
];

export const DayInLife: React.FC = () => {
  const [selectedSlot, setSelectedSlot] = useState(0);
  const current = daySchedule[selectedSlot];
  const CurrentIcon = current.icon;

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <Badge variant="rainbow" size="md">
            Daily Student Routine
          </Badge>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">
            A Day at Rainbow Matriculation School
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            From morning assembly to evening dismissal, our school day is balanced with academic focus, bilingual reading, physical activity, and character formation.
          </p>
        </div>

        {/* Interactive Timeline Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-8">
          {daySchedule.map((slot, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedSlot(idx)}
              className={cn(
                "flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition-all cursor-pointer",
                selectedSlot === idx
                  ? "bg-indigo-600 text-white border-indigo-600 shadow-md scale-105"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
              )}
            >
              <span className="text-[11px] font-bold tracking-tight">{slot.time}</span>
              <span
                className={cn(
                  "text-[10px] line-clamp-1 mt-0.5",
                  selectedSlot === idx ? "text-indigo-100" : "text-slate-500"
                )}
              >
                {slot.period}
              </span>
            </button>
          ))}
        </div>

        {/* Selected Slot Showcase Card */}
        <div className="max-w-3xl mx-auto">
          <Card className="p-6 sm:p-8 bg-white border-slate-200 shadow-lg">
            <div className="flex items-start gap-4 sm:gap-6">
              <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border ${current.color} shadow-xs`}>
                <CurrentIcon className="h-7 w-7" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge variant="primary" size="sm">
                    {current.time}
                  </Badge>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {current.period}
                  </span>
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  {current.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {current.description}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
