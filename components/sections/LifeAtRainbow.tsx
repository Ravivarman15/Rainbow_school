"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  BookOpen,
  Users,
  Sparkles,
  Trophy,
  Building2,
  GraduationCap,
  Maximize2,
  ArrowRight,
  ShieldCheck,
  Camera,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  lifeSubSections,
  storyCategories,
  LifeSubSection,
  GalleryPhotoItem,
} from "@/data/gallery";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Lightbox, LightboxItem } from "@/components/ui/Lightbox";
import { cn } from "@/lib/utils";

interface LifeAtRainbowProps {
  showAdmissionsCta?: boolean;
}

export const LifeAtRainbow: React.FC<LifeAtRainbowProps> = ({
  showAdmissionsCta = true,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedPhoto, setSelectedPhoto] = useState<LightboxItem | null>(null);
  const [lightboxItems, setLightboxItems] = useState<LightboxItem[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const iconMap = {
    BookOpen,
    Users,
    Sparkles,
    Trophy,
    Building2,
    GraduationCap,
  };

  const filteredSections =
    activeCategory === "All"
      ? lifeSubSections
      : lifeSubSections.filter(
          (section) =>
            section.categoryName === activeCategory ||
            (activeCategory === "Academics" && section.id === "academics-excellence") ||
            (activeCategory === "Teacher Bonding" && section.id === "student-teacher-bonding") ||
            (activeCategory === "Celebrations" && section.id === "celebrations-events") ||
            (activeCategory === "Sports" && section.id === "sports-athletics") ||
            (activeCategory === "Campus & Library" && section.id === "campus-library-facilities") ||
            (activeCategory === "Kindergarten" && section.id === "kindergarten-discovery")
        );

  const openLightboxWithPhoto = (
    photo: GalleryPhotoItem,
    sectionPhotos: GalleryPhotoItem[]
  ) => {
    const allFormatted: LightboxItem[] = sectionPhotos.map((p) => ({
      id: p.id,
      title: p.title,
      category: p.category,
      description: p.description,
      imageSrc: p.imageSrc,
      tag: p.tag,
      date: p.date,
    }));

    const idx = allFormatted.findIndex((i) => i.id === photo.id);
    setLightboxItems(allFormatted);
    setLightboxIndex(idx >= 0 ? idx : 0);
    setSelectedPhoto(allFormatted[idx >= 0 ? idx : 0]);
  };

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 sm:mb-12">
          <div className="max-w-2xl space-y-2.5">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3.5 py-1 text-xs font-bold text-indigo-900 shadow-2xs">
              <Camera className="h-3.5 w-3.5 text-indigo-600" />
              <span>LIFE AT RAINBOW</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Where Learning Inspires Every Possibility
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Explore authentic photographs of classroom mentorship, Tamil cultural celebrations, track athletics, and joyful kindergarten discovery at Rainbow Matriculation School, Orathi.
            </p>
          </div>

          <div className="flex items-center gap-2.5 self-start md:self-auto">
            <Link href="/admissions">
              <Button
                variant="primary"
                size="sm"
                className="gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-xs"
              >
                <span>Admission Enquiry 2026–27</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Category Filter Pills (Smooth, Scrollbar-Free) */}
        <div className="mb-10 border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {storyCategories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "shrink-0 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2",
                    isActive
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                      : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                  )}
                >
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 6 Structured Subsections with Mobile Horizontal Scrollable Rows */}
        <div className="space-y-14 sm:space-y-18">
          {filteredSections.map((section) => {
            const Icon = iconMap[section.iconName] || BookOpen;

            return (
              <div key={section.id} className="space-y-4 sm:space-y-5">
                {/* Subsection Header: Icon + Two-Tone Title + Tamil Badge + Subtitle + Mobile Swipe Hint */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                  <div className="space-y-1.5 max-w-4xl">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-700 shadow-2xs">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                        {section.titlePrefix}
                        <span className={cn(section.highlightColor, "ml-1")}>
                          {section.titleHighlight}
                        </span>
                      </h3>
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-600">
                        {section.tamilTitle}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {section.description}
                    </p>
                  </div>

                  {/* Mobile swipe hint */}
                  <span className="text-[11px] font-semibold text-indigo-600 lg:hidden flex items-center gap-1 self-end sm:self-auto shrink-0 pb-0.5">
                    <span>Swipe to explore</span>
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>

                {/* Horizontal Scrollable Row on Mobile/Tablet & 4-Column Grid on Desktop */}
                <div className="flex gap-4 sm:gap-5 overflow-x-auto pb-3 snap-x snap-mandatory no-scrollbar lg:grid lg:grid-cols-4 lg:gap-5 lg:overflow-visible">
                  {section.photos.map((photo) => (
                    <div
                      key={photo.id}
                      onClick={() => openLightboxWithPhoto(photo, section.photos)}
                      className="w-[270px] sm:w-[300px] lg:w-auto shrink-0 snap-start group cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-2xs hover:border-indigo-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                    >
                      {/* Photo Container */}
                      <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-950">
                        <img
                          src={photo.imageSrc}
                          alt={photo.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />

                        {/* Badges on image */}
                        <div className="absolute top-3 left-3">
                          <span className="rounded-md bg-white/95 px-2 py-0.5 text-[10px] font-bold text-slate-900 shadow-2xs backdrop-blur-md">
                            {photo.tag}
                          </span>
                        </div>

                        <div className="absolute bottom-3 right-3 rounded-full bg-slate-950/70 p-1.5 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          <Maximize2 className="h-3.5 w-3.5" />
                        </div>
                      </div>

                      {/* Text Information */}
                      <div className="p-4 sm:p-5 space-y-2 flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="font-heading text-sm sm:text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2 leading-snug">
                            {photo.title}
                          </h4>
                          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mt-1">
                            {photo.description}
                          </p>
                        </div>

                        <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-indigo-600 font-semibold">
                          <span>View photo</span>
                          <Maximize2 className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Admissions Connection Banner */}
        {showAdmissionsCta && (
          <div className="mt-16 sm:mt-24 rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50/80 via-white to-slate-50 p-6 sm:p-10 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                  START YOUR CHILD'S JOURNEY
                </span>
                <h3 className="font-heading text-xl sm:text-3xl font-bold text-slate-900">
                  See Your Child's Journey Begin at Rainbow
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                  Want to learn more about our bilingual curriculum, dedicated educators, and admissions for Pre-KG through Class 6?
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Link href="/admissions">
                  <Button
                    variant="primary"
                    size="md"
                    className="gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-xs"
                  >
                    <span>Admission Enquiry</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="md"
                    className="border-slate-300 bg-white text-slate-700 hover:bg-slate-50 font-semibold shadow-2xs"
                  >
                    <span>Contact Campus</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={!!selectedPhoto}
        item={selectedPhoto}
        items={lightboxItems}
        currentIndex={lightboxIndex}
        onNavigate={(newIdx) => {
          setLightboxIndex(newIdx);
          setSelectedPhoto(lightboxItems[newIdx]);
        }}
        onClose={() => setSelectedPhoto(null)}
      />
    </section>
  );
};
