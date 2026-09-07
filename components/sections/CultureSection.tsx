"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Trophy, BookOpen, Flag, ArrowRight, Maximize2, Users, Heart } from "lucide-react";
import { galleryItems, GalleryItem } from "@/data/gallery";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Lightbox } from "@/components/ui/Lightbox";

export const CultureSection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <Badge variant="rainbow" size="md">
              Cultural Heritage & Student Life
            </Badge>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Rooted in Tradition, Prepared for Tomorrow
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              At Rainbow Matriculation School, children celebrate Tamil culture, national pride, sportsmanship, and the sheer joy of hands-on discovery.
            </p>
          </div>

          <Link href="/gallery" className="self-start md:self-auto">
            <Button variant="outline" size="md" className="gap-2 border-slate-300 bg-white text-slate-800 hover:bg-slate-50 font-semibold shadow-xs">
              <span>View Complete Gallery</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Feature Grid with Real Photographic Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group cursor-pointer overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl flex flex-col justify-between"
            >
              {/* Photo Area */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Badges on image */}
                <div className="absolute top-3 left-3">
                  <span className="rounded-md bg-white/95 px-2.5 py-1 text-[11px] font-bold text-slate-900 shadow-sm backdrop-blur-md">
                    {item.category}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 rounded-full bg-slate-950/70 p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="h-4 w-4" />
                </div>
              </div>

              {/* Text Area */}
              <div className="p-5 sm:p-6 space-y-2.5 flex-1 flex flex-col justify-between">
                <div>
                  <Badge variant="verified" size="sm" className="mb-2">
                    {item.tag}
                  </Badge>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mt-1.5">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-indigo-600 font-semibold">
                  <span>View Details</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Cultural Pillars */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <Sparkles className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-slate-900">Tamil Heritage & Festivals</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Celebrating Pongal (பொங்கல்), Thirukkural recitations, folk music, and traditional games with deep cultural reverence.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-slate-900">Bilingual Fluency</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Equal emphasis on spoken English confidence, reading comprehension, and rich Tamil language mastery.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <Trophy className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-slate-900">Sports & Team Athletics</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Physical education, running sprints, team games, and annual sports meet on our open campus grounds.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Trigger */}
      <Lightbox
        isOpen={!!selectedPhoto}
        item={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />
    </section>
  );
};
