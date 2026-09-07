"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Phone, User, BookOpen, Mail, MessageSquare, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Toast } from "@/components/ui/Toast";
import { schoolData } from "@/data/school";
import { buildAdmissionMessage, openWhatsApp } from "@/lib/whatsapp";

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

    // Build WhatsApp message and redirect
    const message = buildAdmissionMessage({
      parentName: formData.parentName,
      studentName: formData.studentName,
      applyingClass: formData.applyingClass,
      phone: formData.phone,
      email: formData.email || undefined,
      message: formData.message || undefined,
    });

    openWhatsApp(message);

    // Show success toast and reset form
    setTimeout(() => {
      setIsSubmitting(false);
      setToast({
        show: true,
        type: "success",
        title: "Redirected to WhatsApp!",
        message: `Your admission enquiry for ${formData.studentName} (${formData.applyingClass}) has been prepared. Please send the message on WhatsApp to complete your enquiry.`,
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
    }, 500);
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
            <span>Preparing WhatsApp...</span>
          ) : (
            <>
              <span>Send Enquiry via WhatsApp</span>
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
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
