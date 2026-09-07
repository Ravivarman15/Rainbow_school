"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Phone, User, BookOpen, Mail, MessageSquare, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Toast } from "@/components/ui/Toast";
import { schoolData } from "@/data/school";

export const AdmissionEnquiryForm: React.FC<{ isCard?: boolean }> = ({ isCard = true }) => {
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    applyingClass: "LKG",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ show: boolean; title: string; message: string; type: "success" | "error" }>({
    show: false,
    title: "",
    message: "",
    type: "success",
  });

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.parentName.trim()) newErrors.parentName = "Parent / Guardian name is required.";
    if (!formData.studentName.trim()) newErrors.studentName = "Student name is required.";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9+ -]{10,14}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate instantaneous, reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setToast({
        show: true,
        type: "success",
        title: "Enquiry Submitted Successfully!",
        message: `Thank you, ${formData.parentName}. Our admissions desk in Orathi has received your enquiry for ${formData.studentName} (${formData.applyingClass}). We will call ${formData.phone} shortly.`,
      });
      setFormData({
        parentName: "",
        studentName: "",
        applyingClass: "LKG",
        phone: "",
        email: "",
        message: "",
      });
      setErrors({});
    }, 600);
  };

  return (
    <div className={isCard ? "rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl" : ""}>
      <div className="mb-6 space-y-1">
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
          Admission Enquiry (2026–2027)
        </h3>
        <p className="text-xs sm:text-sm text-slate-600">
          Submit your child&apos;s details to request an admission counseling appointment or school visit in Orathi.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Parent Name */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
              Parent / Guardian Name <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={formData.parentName}
                onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                placeholder="e.g. S. Murugan"
                className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:bg-white focus:outline-none"
              />
              <User className="absolute right-3 top-3 h-4 w-4 text-slate-400 pointer-events-none" />
            </div>
            {errors.parentName && (
              <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.parentName}
              </p>
            )}
          </div>

          {/* Student Name */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
              Student Full Name <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={formData.studentName}
                onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                placeholder="e.g. M. Kavin"
                className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:bg-white focus:outline-none"
              />
              <User className="absolute right-3 top-3 h-4 w-4 text-slate-400 pointer-events-none" />
            </div>
            {errors.studentName && (
              <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.studentName}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Applying Grade */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
              Class Applying For <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <select
                value={formData.applyingClass}
                onChange={(e) => setFormData({ ...formData, applyingClass: e.target.value })}
                className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-900 focus:border-indigo-600 focus:bg-white focus:outline-none"
              >
                <option value="Nursery / Pre-KG">Nursery / Pre-KG</option>
                <option value="LKG">LKG (Lower Kindergarten)</option>
                <option value="UKG">UKG (Upper Kindergarten)</option>
                <option value="Class 1">Class 1</option>
                <option value="Class 2">Class 2</option>
                <option value="Class 3">Class 3</option>
                <option value="Class 4">Class 4</option>
                <option value="Class 5">Class 5</option>
                <option value="Class 6">Class 6 (Upper Primary)</option>
              </select>
              <BookOpen className="absolute right-3 top-3 h-4 w-4 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Contact Phone */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
              Contact Phone Number <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. 98420 43815"
                className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:bg-white focus:outline-none"
              />
              <Phone className="absolute right-3 top-3 h-4 w-4 text-slate-400 pointer-events-none" />
            </div>
            {errors.phone && (
              <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Email Address (Optional) */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
            Email Address <span className="text-slate-400 lowercase font-normal">(optional)</span>
          </label>
          <div className="relative">
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="parent@example.com"
              className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:bg-white focus:outline-none"
            />
            <Mail className="absolute right-3 top-3 h-4 w-4 text-slate-400 pointer-events-none" />
          </div>
          {errors.email && (
            <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {errors.email}
            </p>
          )}
        </div>

        {/* Message / Query */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
            Queries or Special Remarks <span className="text-slate-400 lowercase font-normal">(optional)</span>
          </label>
          <div className="relative">
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Mention any queries regarding transport from your village, admission timings, or sibling admissions..."
              className="w-full rounded-xl border border-slate-300 bg-slate-50/50 p-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:bg-white focus:outline-none"
            />
            <MessageSquare className="absolute right-3 top-3 h-4 w-4 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Submit button */}
        <Button
          type="submit"
          variant="rainbow"
          size="lg"
          disabled={isSubmitting}
          className="w-full justify-center gap-2 mt-4"
        >
          {isSubmitting ? (
            <span>Submitting Enquiry...</span>
          ) : (
            <>
              <span>Submit Admission Enquiry</span>
              <Send className="h-4 w-4" />
            </>
          )}
        </Button>

        <p className="text-center text-[11px] text-slate-500 pt-2">
          🔒 Your contact information is kept strictly confidential and only used for school admission follow-up.
        </p>
      </form>

      <Toast
        show={toast.show}
        type={toast.type}
        title={toast.title}
        message={toast.message}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </div>
  );
};
