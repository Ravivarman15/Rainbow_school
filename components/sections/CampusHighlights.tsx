import React from "react";
import Link from "next/link";
import {
  Building2,
  BookOpen,
  Trophy,
  Droplets,
  ShieldCheck,
  MapPin,
  ArrowRight,
  Zap,
  CheckCircle,
  Bus,
} from "lucide-react";
import { campusFacilities } from "@/data/facilities";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

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

export const CampusHighlights: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <Badge variant="verified" size="md">
              100% Verified Campus Infrastructure
            </Badge>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Safe, Structured & Purpose-Built Learning Spaces
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Every facility listed is backed by official government UDISE verification records for the Orathi campus.
            </p>
          </div>

          <Button variant="outline" size="md" href="/campus" className="self-start md:self-auto gap-2">
            <span>Explore All Facilities</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Facilities Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {campusFacilities.map((fac) => {
            const Icon = iconMap[fac.iconName] || Building2;
            return (
              <Card
                key={fac.id}
                hoverEffect
                className="flex flex-col justify-between border-slate-200 bg-slate-50/50 p-6 sm:p-7"
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

                  <h3 className="font-heading text-lg font-bold text-slate-900">
                    {fac.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {fac.description}
                  </p>

                  <div className="rounded-xl bg-white p-3 border border-slate-200/80 text-xs text-slate-700">
                    <div className="font-semibold text-indigo-900 mb-1">Key Features:</div>
                    <ul className="space-y-1">
                      {fac.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                          <CheckCircle className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 text-[11px] text-slate-500 font-medium">
                  {fac.verifiedData}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Campus Transparency Note */}
        <div className="mt-12 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-6 text-center text-xs text-slate-600 max-w-3xl mx-auto">
          <p>
            <strong>Campus Authenticity Guarantee:</strong> Rainbow Matriculation School strictly presents verified infrastructure data. Unverified claims, exaggerated facilities, or fabricated amenities are never represented on this website.
          </p>
        </div>
      </div>
    </section>
  );
};
