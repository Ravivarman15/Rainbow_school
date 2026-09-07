import React from "react";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { InteractiveEligibility } from "@/components/sections/InteractiveEligibility";
import { AcademicsPreview } from "@/components/sections/AcademicsPreview";
import { DayInLife } from "@/components/sections/DayInLife";
import { CampusHighlights } from "@/components/sections/CampusHighlights";
import { NoticeBoard } from "@/components/sections/NoticeBoard";
import { AdmissionEnquiryForm } from "@/components/sections/AdmissionEnquiryForm";
import { Badge } from "@/components/ui/Badge";
import { Phone, Compass, ShieldCheck } from "lucide-react";
import { schoolData } from "@/data/school";

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* 1. Luminous Light Hero with Real Photography Preview */}
      <Hero />

      {/* 2. Trust Credentials Bar */}
      <TrustBar />

      {/* 3. Interactive Admission Grade & Eligibility Explorer */}
      <InteractiveEligibility />

      {/* 4. Interactive Academics & Curriculum Stages */}
      <AcademicsPreview />

      {/* 5. Interactive Day in the Life Timeline */}
      <DayInLife />

      {/* 6. Verified Campus Facilities with UDISE Badges */}
      <CampusHighlights />

      {/* 7. Parent Notice Board & Circulars */}
      <NoticeBoard />

      {/* 8. Admissions & Enquiry Conversion Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-indigo-50/30 to-slate-50 relative overflow-hidden border-t border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <Badge variant="rainbow" size="md">
                Admissions 2026–2027
              </Badge>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                Give Your Child the Foundation for a Bright Future
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Admissions are currently underway for Pre-KG, LKG, UKG, and Classes 1 through 6. Connect with our Orathi campus office for an appointment or tour.
              </p>

              <div className="space-y-3 rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span>Admissions Desk & Direct Contact</span>
                </div>
                <div className="text-slate-600">
                  📍 {schoolData.address.village}, {schoolData.address.block} Block, Tamil Nadu {schoolData.address.pincode}
                </div>
                <div className="text-slate-600">
                  🕒 Working Hours: {schoolData.contact.workingHours.officeTimings} (Mon–Sat)
                </div>
                <div className="pt-2 flex flex-wrap gap-2.5">
                  <a
                    href={`tel:${schoolData.contact.directoryPhone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3.5 py-2 text-xs font-semibold text-white hover:bg-indigo-700 shadow-sm transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span>Call {schoolData.contact.directoryPhone}</span>
                  </a>
                  <a
                    href={schoolData.coordinates.googleMapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
                  >
                    <Compass className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Google Maps Directions</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Interactive Form */}
            <div className="lg:col-span-7">
              <AdmissionEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
