"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Sun, BookOpen, Utensils, Trophy, Heart, Bell, Music } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface TimelineSlot {
  time: string;
  period: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  bgGradient: string;
  emoji: string;
}

const daySchedule: TimelineSlot[] = [
  {
    time: "8:45 AM",
    period: "Morning Assembly",
    title: "Prayer, Tamil Thai Valthu & Pledge",
    description:
      "Daily morning assembly fostering discipline, moral thoughts, news recitation, and national anthem on our open ground.",
    icon: Sun,
    color: "text-amber-600",
    bgGradient: "from-amber-50 to-orange-50 border-amber-200",
    emoji: "🌅",
  },
  {
    time: "9:15 AM",
    period: "Session 1",
    title: "English Literacy & Phonics Mastery",
    description:
      "Active phonics blends, reading comprehension, handwriting practice, and vocabulary building.",
    icon: BookOpen,
    color: "text-indigo-600",
    bgGradient: "from-indigo-50 to-blue-50 border-indigo-200",
    emoji: "📖",
  },
  {
    time: "10:45 AM",
    period: "Short Break",
    title: "Hydration & Nutritional Snack Break",
    description:
      "Clean functional tap drinking water break, healthy snack, and supervised peer socialization.",
    icon: Bell,
    color: "text-emerald-600",
    bgGradient: "from-emerald-50 to-teal-50 border-emerald-200",
    emoji: "🥤",
  },
  {
    time: "11:00 AM",
    period: "Session 2",
    title: "Mathematics & Analytical Thinking",
    description:
      "Numeracy concepts, counting blocks for kindergarten, mental arithmetic, and geometry exercises.",
    icon: BookOpen,
    color: "text-blue-600",
    bgGradient: "from-blue-50 to-sky-50 border-blue-200",
    emoji: "🔢",
  },
  {
    time: "12:30 PM",
    period: "Lunch Hour",
    title: "Nutritious Lunch & Guided Play",
    description:
      "Supervised dining etiquette, handwashing at dedicated water bays, and outdoor leisure on the playground.",
    icon: Utensils,
    color: "text-orange-600",
    bgGradient: "from-orange-50 to-amber-50 border-orange-200",
    emoji: "🍱",
  },
  {
    time: "1:30 PM",
    period: "Session 3",
    title: "Tamil Language, Science & EVS Discovery",
    description:
      "Tamil literature, nature charts, plant biology models, and environmental curiosity projects.",
    icon: Heart,
    color: "text-rose-600",
    bgGradient: "from-rose-50 to-pink-50 border-rose-200",
    emoji: "🔬",
  },
  {
    time: "3:00 PM",
    period: "Co-Curricular",
    title: "Sports, Library Reading & Arts",
    description:
      "Outdoor games, athletic drills, library storybook reading, drawing, or moral science.",
    icon: Trophy,
    color: "text-purple-600",
    bgGradient: "from-purple-50 to-violet-50 border-purple-200",
    emoji: "🏆",
  },
  {
    time: "3:45 PM",
    period: "Dismissal",
    title: "Safe Dispersal & Parent Handover",
    description:
      "Orderly dispersal through all-weather road entrance with teacher supervision.",
    icon: Music,
    color: "text-slate-600",
    bgGradient: "from-slate-50 to-gray-50 border-slate-200",
    emoji: "🏠",
  },
];

/* ─── Animated Kid SVG Characters ─── */
const AnimatedKid: React.FC<{ variant: number; className?: string }> = ({ variant, className }) => {
  // Simple bouncing kid silhouettes
  const kids = [
    // Kid reading a book
    <svg key="read" viewBox="0 0 80 80" fill="none" className={className}>
      <motion.g
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Body */}
        <circle cx="40" cy="22" r="12" fill="#818CF8" />
        <circle cx="36" cy="20" r="2" fill="white" />
        <circle cx="44" cy="20" r="2" fill="white" />
        <path d="M36 26 Q40 30 44 26" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <rect x="28" y="34" width="24" height="28" rx="8" fill="#818CF8" />
        {/* Book */}
        <motion.g
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ originX: "40px", originY: "50px" }}
        >
          <rect x="52" y="40" width="16" height="12" rx="2" fill="#FCD34D" />
          <line x1="60" y1="42" x2="60" y2="50" stroke="#D97706" strokeWidth="1" />
        </motion.g>
        {/* Legs */}
        <rect x="32" y="60" width="6" height="14" rx="3" fill="#818CF8" />
        <rect x="42" y="60" width="6" height="14" rx="3" fill="#818CF8" />
        <ellipse cx="35" cy="75" rx="5" ry="3" fill="#6366F1" />
        <ellipse cx="45" cy="75" rx="5" ry="3" fill="#6366F1" />
      </motion.g>
    </svg>,
    // Kid waving
    <svg key="wave" viewBox="0 0 80 80" fill="none" className={className}>
      <motion.g
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      >
        {/* Head */}
        <circle cx="40" cy="22" r="12" fill="#F472B6" />
        <circle cx="36" cy="20" r="2" fill="white" />
        <circle cx="44" cy="20" r="2" fill="white" />
        <path d="M36 26 Q40 30 44 26" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* Hair */}
        <path d="M28 18 Q30 8 40 10 Q50 8 52 18" fill="#BE185D" />
        {/* Body */}
        <rect x="28" y="34" width="24" height="26" rx="8" fill="#F472B6" />
        {/* Waving arm */}
        <motion.g
          animate={{ rotate: [-15, 15, -15] }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
          style={{ originX: "52px", originY: "38px" }}
        >
          <rect x="52" y="34" width="6" height="20" rx="3" fill="#F472B6" />
          <circle cx="55" cy="32" r="4" fill="#F9A8D4" />
        </motion.g>
        {/* Legs */}
        <rect x="32" y="58" width="6" height="14" rx="3" fill="#F472B6" />
        <rect x="42" y="58" width="6" height="14" rx="3" fill="#F472B6" />
        <ellipse cx="35" cy="73" rx="5" ry="3" fill="#EC4899" />
        <ellipse cx="45" cy="73" rx="5" ry="3" fill="#EC4899" />
      </motion.g>
    </svg>,
    // Kid jumping
    <svg key="jump" viewBox="0 0 80 80" fill="none" className={className}>
      <motion.g
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      >
        {/* Head */}
        <circle cx="40" cy="20" r="11" fill="#34D399" />
        <circle cx="36" cy="18" r="2" fill="white" />
        <circle cx="44" cy="18" r="2" fill="white" />
        <path d="M35 24 Q40 28 45 24" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* Body */}
        <rect x="29" y="31" width="22" height="24" rx="8" fill="#34D399" />
        {/* Arms up */}
        <motion.rect
          x="18" y="28" width="6" height="16" rx="3" fill="#34D399"
          animate={{ rotate: [-10, -30, -10] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ originX: "24px", originY: "36px" }}
        />
        <motion.rect
          x="56" y="28" width="6" height="16" rx="3" fill="#34D399"
          animate={{ rotate: [10, 30, 10] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ originX: "56px", originY: "36px" }}
        />
        {/* Legs spread */}
        <rect x="30" y="53" width="6" height="14" rx="3" fill="#34D399" transform="rotate(-8 33 60)" />
        <rect x="44" y="53" width="6" height="14" rx="3" fill="#34D399" transform="rotate(8 47 60)" />
      </motion.g>
      {/* Shadow */}
      <motion.ellipse
        cx="40" cy="76" rx="14" ry="3" fill="#D1FAE5"
        animate={{ rx: [14, 10, 14], opacity: [0.6, 0.3, 0.6] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />
    </svg>,
  ];
  return kids[variant % kids.length];
};

/* ─── Animated Sun/Clock Widget ─── */
const AnimatedClock: React.FC<{ progress: number }> = ({ progress }) => (
  <div className="relative w-16 h-16 sm:w-20 sm:h-20">
    <svg viewBox="0 0 80 80" className="w-full h-full">
      {/* Clock face */}
      <circle cx="40" cy="40" r="36" fill="white" stroke="#E2E8F0" strokeWidth="2" />
      {/* Progress arc */}
      <motion.circle
        cx="40" cy="40" r="36"
        fill="none"
        stroke="#6366F1"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray={`${2 * Math.PI * 36}`}
        strokeDashoffset={2 * Math.PI * 36 * (1 - progress)}
        style={{ rotate: "-90deg", transformOrigin: "center" }}
        initial={false}
        animate={{ strokeDashoffset: 2 * Math.PI * 36 * (1 - progress) }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      {/* Clock hand */}
      <motion.line
        x1="40" y1="40" x2="40" y2="14"
        stroke="#4F46E5"
        strokeWidth="2.5"
        strokeLinecap="round"
        animate={{ rotate: progress * 360 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformOrigin: "40px 40px" }}
      />
      {/* Center dot */}
      <circle cx="40" cy="40" r="3" fill="#4F46E5" />
      {/* Hour markers */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
        <line
          key={deg}
          x1="40" y1="8" x2="40" y2="12"
          stroke="#CBD5E1"
          strokeWidth="1.5"
          strokeLinecap="round"
          transform={`rotate(${deg} 40 40)`}
        />
      ))}
    </svg>
  </div>
);

export const DayInLife: React.FC = () => {
  const [selectedSlot, setSelectedSlot] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);
  const current = daySchedule[selectedSlot];
  const CurrentIcon = current.icon;
  const progress = (selectedSlot + 1) / daySchedule.length;

  // Auto-play through the timeline
  const advanceSlot = useCallback(() => {
    setDirection(1);
    setSelectedSlot((prev) => (prev + 1) % daySchedule.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(advanceSlot, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, advanceSlot]);

  const handleSlotClick = (idx: number) => {
    setDirection(idx > selectedSlot ? 1 : -1);
    setSelectedSlot(idx);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0, scale: 0.95 }),
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/60 to-white border-t border-slate-200/80 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header with Animated Kids */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16 relative">
          {/* Floating animated kids on sides — hidden on mobile */}
          <div className="hidden lg:block absolute -left-32 top-0 w-20 h-20 opacity-70">
            <AnimatedKid variant={0} className="w-full h-full" />
          </div>
          <div className="hidden lg:block absolute -right-32 top-0 w-20 h-20 opacity-70">
            <AnimatedKid variant={1} className="w-full h-full" />
          </div>

          <Badge variant="rainbow" size="md">
            Daily Student Routine
          </Badge>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">
            A Day at Rainbow Matriculation School
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            From morning assembly to evening dismissal, our school day is balanced with academic focus,
            bilingual reading, physical activity, and character formation.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mb-6">
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
              animate={{ width: `${progress * 100}%` }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </div>
          <div className="flex justify-between mt-1.5 text-[10px] font-medium text-slate-400">
            <span>8:45 AM</span>
            <span>3:45 PM</span>
          </div>
        </div>

        {/* Interactive Timeline Pills */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-2 no-scrollbar snap-x snap-mandatory">
            {daySchedule.map((slot, idx) => {
              const SlotIcon = slot.icon;
              const isActive = selectedSlot === idx;
              const isPast = idx < selectedSlot;
              return (
                <motion.button
                  key={idx}
                  onClick={() => handleSlotClick(idx)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "relative flex flex-col items-center justify-center min-w-[5.5rem] sm:min-w-[6.5rem] p-2.5 sm:p-3 rounded-2xl border text-center transition-all cursor-pointer snap-center shrink-0",
                    isActive
                      ? "bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-200"
                      : isPast
                      ? "bg-indigo-50 text-indigo-700 border-indigo-100"
                      : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                  )}
                >
                  {/* Active indicator dot */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-indigo-400 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}

                  <SlotIcon
                    className={cn(
                      "h-4 w-4 mb-1",
                      isActive ? "text-white" : isPast ? "text-indigo-500" : "text-slate-400"
                    )}
                  />
                  <span className="text-[11px] font-bold tracking-tight">{slot.time}</span>
                  <span
                    className={cn(
                      "text-[9px] sm:text-[10px] line-clamp-1 mt-0.5 font-medium",
                      isActive ? "text-indigo-100" : isPast ? "text-indigo-400" : "text-slate-400"
                    )}
                  >
                    {slot.period}
                  </span>

                  {/* Completion checkmark */}
                  {isPast && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center"
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5L4 7L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Selected Slot Showcase */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={selectedSlot}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={cn(
                "rounded-3xl border p-6 sm:p-8 lg:p-10 bg-gradient-to-br shadow-lg",
                current.bgGradient
              )}
            >
              <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-10">
                {/* Left: Clock + Emoji */}
                <div className="flex flex-row lg:flex-col items-center gap-4 lg:gap-3 shrink-0">
                  <AnimatedClock progress={progress} />
                  <motion.div
                    key={`emoji-${selectedSlot}`}
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.15 }}
                    className="text-3xl sm:text-4xl"
                  >
                    {current.emoji}
                  </motion.div>
                </div>

                {/* Right: Content */}
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <Badge variant="primary" size="sm" className="shadow-sm">
                        <Clock className="h-3 w-3 mr-1" />
                        {current.time}
                      </Badge>
                    </motion.div>
                    <motion.span
                      initial={{ x: -15, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.15 }}
                      className="text-xs font-bold uppercase tracking-wider text-slate-500"
                    >
                      {current.period}
                    </motion.span>
                  </div>

                  <motion.h3
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900"
                  >
                    {current.title}
                  </motion.h3>

                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.25 }}
                    className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl"
                  >
                    {current.description}
                  </motion.p>

                  {/* Animated feature chips */}
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap gap-2 pt-2"
                  >
                    {current.period === "Morning Assembly" && (
                      <>
                        <Chip>🙏 Prayer</Chip>
                        <Chip>🇮🇳 National Anthem</Chip>
                        <Chip>📰 News Recitation</Chip>
                      </>
                    )}
                    {current.period === "Session 1" && (
                      <>
                        <Chip>🔤 Phonics</Chip>
                        <Chip>📝 Handwriting</Chip>
                        <Chip>📚 Comprehension</Chip>
                      </>
                    )}
                    {current.period === "Short Break" && (
                      <>
                        <Chip>💧 Hydration</Chip>
                        <Chip>🍎 Healthy Snack</Chip>
                        <Chip>👫 Socialization</Chip>
                      </>
                    )}
                    {current.period === "Session 2" && (
                      <>
                        <Chip>🧮 Mental Math</Chip>
                        <Chip>📐 Geometry</Chip>
                        <Chip>🧩 Problem Solving</Chip>
                      </>
                    )}
                    {current.period === "Lunch Hour" && (
                      <>
                        <Chip>🍽️ Dining Etiquette</Chip>
                        <Chip>🤲 Handwashing</Chip>
                        <Chip>🎈 Outdoor Play</Chip>
                      </>
                    )}
                    {current.period === "Session 3" && (
                      <>
                        <Chip>📜 Tamil Literature</Chip>
                        <Chip>🌱 Nature Study</Chip>
                        <Chip>🧪 Science Projects</Chip>
                      </>
                    )}
                    {current.period === "Co-Curricular" && (
                      <>
                        <Chip>⚽ Sports</Chip>
                        <Chip>📖 Library</Chip>
                        <Chip>🎨 Arts & Drawing</Chip>
                      </>
                    )}
                    {current.period === "Dismissal" && (
                      <>
                        <Chip>✅ Safe Dispersal</Chip>
                        <Chip>👨‍👩‍👧 Parent Handover</Chip>
                        <Chip>👩‍🏫 Teacher Supervised</Chip>
                      </>
                    )}
                  </motion.div>
                </div>

                {/* Animated Kid Character */}
                <div className="hidden lg:block w-24 h-24 shrink-0 self-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`kid-${selectedSlot}`}
                      initial={{ scale: 0, opacity: 0, rotate: -10 }}
                      animate={{ scale: 1, opacity: 1, rotate: 0 }}
                      exit={{ scale: 0, opacity: 0, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <AnimatedKid variant={selectedSlot} className="w-full h-full" />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Auto-play controls */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={() => {
                setDirection(-1);
                setSelectedSlot((prev) => (prev - 1 + daySchedule.length) % daySchedule.length);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 10000);
              }}
              className="flex items-center justify-center w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all shadow-xs cursor-pointer"
              aria-label="Previous slot"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={cn(
                "flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer shadow-xs",
                isAutoPlaying
                  ? "bg-indigo-600 text-white hover:bg-indigo-700"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
              )}
            >
              {isAutoPlaying ? (
                <>
                  <motion.span
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-1.5 h-1.5 bg-white rounded-full"
                  />
                  Auto-playing
                </>
              ) : (
                <>
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                  Paused
                </>
              )}
            </button>

            <button
              onClick={() => {
                setDirection(1);
                setSelectedSlot((prev) => (prev + 1) % daySchedule.length);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 10000);
              }}
              className="flex items-center justify-center w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all shadow-xs cursor-pointer"
              aria-label="Next slot"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Dot indicators */}
            <div className="hidden sm:flex items-center gap-1 ml-2">
              {daySchedule.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => handleSlotClick(idx)}
                  className={cn(
                    "rounded-full transition-all cursor-pointer",
                    selectedSlot === idx ? "bg-indigo-600" : "bg-slate-300 hover:bg-slate-400"
                  )}
                  animate={{
                    width: selectedSlot === idx ? 20 : 6,
                    height: 6,
                  }}
                  transition={{ duration: 0.3 }}
                  aria-label={`Go to ${daySchedule[idx].period}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── Chip Sub-component ─── */
const Chip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/60 text-xs font-medium text-slate-700 shadow-xs">
    {children}
  </span>
);
