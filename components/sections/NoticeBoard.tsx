import React from "react";
import Link from "next/link";
import { Bell, FileText, ArrowRight, Download, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export const NoticeBoard: React.FC = () => {
  const notices = [
    {
      title: "Admissions Open for Academic Year 2026–2027",
      date: "Current Notification",
      tag: "Admissions",
      description: "Applications are invited for Pre-KG, LKG, UKG and Grades 1 through 6. Prospective parents may visit the school office or submit online enquiry.",
      isImportant: true,
    },
    {
      title: "Quarterly & Term Academic Progress Evaluation",
      date: "Term Routine",
      tag: "Academics",
      description: "Continuous evaluation and formative assessments are held in accordance with Tamil Nadu Matriculation Board guidelines.",
      isImportant: false,
    },
    {
      title: "School Timings & Attendance Regularity",
      date: "Office Circular",
      tag: "General",
      description: "Instructional hours commence promptly at 8:45 AM. Parents are requested to ensure students arrive by 8:35 AM for morning assembly.",
      isImportant: false,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <Badge variant="rainbow" size="md">
              Parent Notice Board
            </Badge>
            <h2 className="mt-2 font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Latest Circulars & Administrative Notices
            </h2>
          </div>

          <Link
            href="/parents"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
          >
            <span>View All Circulars & Calendar</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {notices.map((notice, idx) => (
            <Card
              key={idx}
              className={`flex flex-col justify-between p-6 ${
                notice.isImportant ? "border-indigo-300 ring-1 ring-indigo-200 bg-white" : "bg-white"
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant={notice.isImportant ? "primary" : "secondary"} size="sm">
                    {notice.tag}
                  </Badge>
                  <span className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                    <Calendar className="h-3 w-3 text-indigo-500" />
                    {notice.date}
                  </span>
                </div>

                <h3 className="font-heading text-base font-bold text-slate-900 leading-snug">
                  {notice.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {notice.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">Official Notice</span>
                <Link
                  href="/parents"
                  className="text-xs font-semibold text-indigo-600 hover:underline flex items-center gap-1"
                >
                  <span>Details</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
