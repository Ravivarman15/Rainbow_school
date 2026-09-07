"use client";

import React, { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Sparkles, MapPin, ShieldCheck } from "lucide-react";
import { Badge } from "./Badge";

export interface LightboxItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  tag: string;
  date?: string;
  statValue?: string;
}

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  item: LightboxItem | null;
  items?: LightboxItem[];
  currentIndex?: number;
  onNavigate?: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  item,
  items = [],
  currentIndex = 0,
  onNavigate,
}) => {
  const hasMultiple = items.length > 1 && onNavigate !== undefined;

  const handlePrev = useCallback(() => {
    if (!hasMultiple) return;
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onNavigate(prevIndex);
  }, [hasMultiple, currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (!hasMultiple) return;
    const nextIndex = (currentIndex + 1) % items.length;
    onNavigate(nextIndex);
  }, [hasMultiple, currentIndex, items.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Touch swipe support for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  if (!isOpen || !item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 animate-in fade-in duration-200"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Backdrop Blur */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Main Lightbox Card */}
      <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl transition-all border border-slate-200/80 flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-4 sm:px-6 py-3 bg-slate-50/95">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-indigo-50 border border-indigo-200/80 px-3 py-0.5 text-xs font-bold text-indigo-700">
              {item.category}
            </span>
            {hasMultiple && (
              <span className="rounded-full bg-slate-200 px-2.5 py-0.5 text-[11px] font-semibold text-slate-700">
                {String(currentIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
              </span>
            )}
            <span className="text-xs text-slate-500 font-medium hidden sm:inline">
              Rainbow Matriculation School • Orathi
            </span>
          </div>

          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-slate-700 hover:bg-slate-300 hover:text-slate-950 transition-colors cursor-pointer"
            aria-label="Close photo view"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Visual Stage */}
        <div className="relative w-full bg-slate-950 flex-1 min-h-[260px] sm:min-h-[380px] max-h-[58vh] flex items-center justify-center overflow-hidden">
          {item.imageSrc ? (
            <img
              src={item.imageSrc}
              alt={item.title}
              className="h-full w-full object-contain max-h-[58vh]"
            />
          ) : (
            <div className="p-8 text-center text-white space-y-3">
              <Sparkles className="h-10 w-10 mx-auto text-amber-400" />
              <h4 className="text-xl font-bold">{item.title}</h4>
            </div>
          )}

          {/* Navigation Arrows */}
          {hasMultiple && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-slate-900/80 text-white hover:bg-slate-900 shadow-lg border border-white/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-slate-900/80 text-white hover:bg-slate-900 shadow-lg border border-white/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Next photo"
              >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </>
          )}
        </div>

        {/* Caption & Metadata Footer */}
        <div className="p-4 sm:p-6 bg-white space-y-2 overflow-y-auto no-scrollbar">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-heading text-base sm:text-xl font-bold text-slate-900 leading-snug">
              {item.title}
            </h3>
            <Badge variant="verified" size="sm">
              {item.tag}
            </Badge>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {item.description}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-[11px] text-slate-500 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-indigo-600 shrink-0" />
                Orathi Campus, Chengalpattu Dist
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                UDISE: 33031003604
              </span>
            </div>
            {item.date && (
              <span className="font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                {item.date}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
