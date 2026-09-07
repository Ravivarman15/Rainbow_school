import React from "react";
import type { Metadata } from "next";
import {
  Clock,
  Calendar,
  Bell,
  HelpCircle,
  FileText,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { schoolData } from "@/data/school";
import { schoolFAQs } from "@/data/faq";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Parent Information | Timings, Circulars & FAQs",
  description:
    "Essential information for parents of Rainbow Matriculation School in Orathi: school hours, circulars, term calendar, and frequently asked questions.",
};

export default function ParentsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Light Header */}
      <section className="bg-gradient-to-b from-indigo-50/70 via-white to-slate-50 py-12 sm:py-16 border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <Badge variant="rainbow" size="md">
            Parent Hub & Communication
          </Badge>
          <h1 className="mt-4 font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Parent Information & Guidelines
          </h1>
          <p className="mt-4 max-w-3xl text-sm sm:text-base text-slate-600 leading-relaxed">
            We value strong, transparent partnership with parents. Find daily school timings, academic term milestones, circular guidelines, and frequently asked questions below.
          </p>
        </div>
      </section>

      {/* Timings & Helpline */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* School Hours */}
            <Card className="p-6 sm:p-8 bg-white border-slate-200 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900">
                Instructional School Hours
              </h3>
              <p className="mt-2 text-2xl font-bold text-indigo-600">
                {schoolData.contact.workingHours.schoolTimings}
              </p>
              <p className="mt-2 text-xs text-slate-600">
                Monday to Saturday. Morning assembly begins promptly at 8:45 AM. Pre-Primary sections have relaxed dismissal hours.
              </p>
            </Card>

            {/* Office Hours */}
            <Card className="p-6 sm:p-8 bg-white border-slate-200 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900">
                Administrative Office Hours
              </h3>
              <p className="mt-2 text-2xl font-bold text-emerald-600">
                {schoolData.contact.workingHours.officeTimings}
              </p>
              <p className="mt-2 text-xs text-slate-600">
                Open Monday to Saturday for fee payments, TC requests, admission inquiries, and principal consultations.
              </p>
            </Card>

            {/* Direct Helpline */}
            <Card className="p-6 sm:p-8 bg-white border-slate-200 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900">
                School Office Helpline
              </h3>
              <p className="mt-2 text-2xl font-bold text-slate-900">
                {schoolData.contact.directoryPhone}
              </p>
              <p className="mt-2 text-xs text-slate-600">
                Call during office hours for emergency messages, student leave notices, or transport coordination.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <Badge variant="rainbow" size="sm">
              Parent FAQs
            </Badge>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Find quick answers regarding admissions, curriculum, facilities, and campus operations.
            </p>
          </div>

          <Accordion>
            {schoolFAQs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                title={faq.question}
                category={faq.category}
                defaultOpen={idx === 0}
              >
                <p className="pt-2 text-slate-600 leading-relaxed">{faq.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
