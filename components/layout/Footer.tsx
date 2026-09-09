import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Award,
  ArrowRight,
  ExternalLink,
  Heart,
  Compass,
} from "lucide-react";
import { schoolData } from "@/data/school";
import { mainNavigation, footerQuickLinks, legalLinks } from "@/data/navigation";
import { Badge } from "@/components/ui/Badge";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      {/* Top Banner with Rainbow Accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 via-emerald-400 to-amber-400"></div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand & Overview Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full overflow-hidden bg-white shadow-lg border border-slate-700">
                <Image
                  src="/images/logo.png"
                  alt="Rainbow Matriculation School Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-heading text-lg sm:text-xl font-bold tracking-tight text-white">
                  RAINBOW MATRICULATION SCHOOL
                </h3>
                <p className="text-xs text-emerald-400 font-medium">
                  ரெயின்போ மெட்ரிகுலேஷன் பள்ளி, ஒரத்தி
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-slate-400 max-w-sm">
              Providing disciplined, value-centered English-medium education from Pre-Primary through Grade 8 in Orathi, Tamil Nadu since 2009.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <Badge variant="outline" size="sm" className="border-slate-700 bg-slate-900 text-slate-300">
                UDISE: {schoolData.udiseCode}
              </Badge>
              <Badge variant="outline" size="sm" className="border-slate-700 bg-slate-900 text-slate-300">
                Est. {schoolData.establishedYear}
              </Badge>
              <Badge variant="outline" size="sm" className="border-slate-700 bg-slate-900 text-slate-300">
                Co-educational
              </Badge>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Institutional Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {footerQuickLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 transition-colors hover:text-emerald-400 flex items-center gap-1.5"
                  >
                    <ArrowRight className="h-3 w-3 text-slate-600" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics & Portal Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Academics & Life
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/academics" className="text-slate-400 hover:text-emerald-400 flex items-center gap-1.5">
                  <ArrowRight className="h-3 w-3 text-slate-600" />
                  <span>Pre-Primary (Nursery, LKG, UKG)</span>
                </Link>
              </li>
              <li>
                <Link href="/academics" className="text-slate-400 hover:text-emerald-400 flex items-center gap-1.5">
                  <ArrowRight className="h-3 w-3 text-slate-600" />
                  <span>Primary (Grades 1 to 5)</span>
                </Link>
              </li>
              <li>
                <Link href="/academics" className="text-slate-400 hover:text-emerald-400 flex items-center gap-1.5">
                  <ArrowRight className="h-3 w-3 text-slate-600" />
                  <span>Middle School (Grades 6 to 8)</span>
                </Link>
              </li>
              <li>
                <Link href="/campus" className="text-slate-400 hover:text-emerald-400 flex items-center gap-1.5">
                  <ArrowRight className="h-3 w-3 text-slate-600" />
                  <span>13 Functional Classrooms</span>
                </Link>
              </li>
              <li>
                <Link href="/parents" className="text-slate-400 hover:text-emerald-400 flex items-center gap-1.5">
                  <ArrowRight className="h-3 w-3 text-slate-600" />
                  <span>Parent Circulars & Timings</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Location Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Campus Office
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                <span>
                  {schoolData.address.village}, {schoolData.address.block} Block, {schoolData.address.district}, TN – {schoolData.address.pincode}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-indigo-400" />
                <a
                  href={`tel:${schoolData.contact.directoryPhone.replace(/\s+/g, "")}`}
                  className="hover:text-white font-medium"
                >
                  {schoolData.contact.directoryPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="h-4 w-4 shrink-0 text-amber-400" />
                <a
                  href={schoolData.coordinates.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline flex items-center gap-1"
                >
                  <span>Google Maps Directions</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Mandatory Disclosure Bar */}
        <div className="mt-12 border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Rainbow Matriculation School, Orathi. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/admissions" className="hover:text-slate-300">
              Admissions Policy
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-300">
              Office Hours
            </Link>
            <span>•</span>
            <span className="text-slate-500">
              UDISE Code: 33031003604
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
