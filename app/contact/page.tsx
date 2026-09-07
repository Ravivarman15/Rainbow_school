"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Send,
  Compass,
  ExternalLink,
  ShieldCheck,
  Building,
  User,
  MessageSquare,
  AlertCircle,
} from "lucide-react";
import { schoolData } from "@/data/school";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Toast } from "@/components/ui/Toast";
import { buildContactMessage, openWhatsApp } from "@/lib/whatsapp";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    title: "",
    message: "",
    type: "success" as const,
  });

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Your name is required.";
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required.";
    } else if (!/^[0-9+ -]{10,14}$/.test(formData.phone.trim())) {
      errs.phone = "Please enter a valid 10-digit phone number.";
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) errs.message = "Message cannot be empty.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Build WhatsApp message and redirect
    const whatsappMessage = buildContactMessage({
      name: formData.name,
      phone: formData.phone,
      email: formData.email || undefined,
      subject: formData.subject || undefined,
      message: formData.message,
    });

    openWhatsApp(whatsappMessage);

    // Show success toast and reset form
    setTimeout(() => {
      setIsSubmitting(false);
      setToast({
        show: true,
        type: "success",
        title: "Redirected to WhatsApp!",
        message: `Your message has been prepared. Please send it on WhatsApp to reach our school office.`,
      });
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});
    }, 500);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Light, Crisp Header */}
      <section className="bg-gradient-to-b from-indigo-50/70 via-white to-slate-50 py-12 sm:py-16 border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <Badge variant="rainbow" size="md">
            Administrative Office & Visit
          </Badge>
          <h1 className="mt-4 font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Contact & Campus Location
          </h1>
          <p className="mt-4 max-w-3xl text-sm sm:text-base text-slate-600 leading-relaxed">
            Reach out to Rainbow Matriculation School in Orathi for admissions, school tours, fee inquiries, or general administrative assistance.
          </p>
        </div>
      </section>

      {/* Main Grid: Details + Contact Form */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left Column: Office Contacts & Location */}
            <div className="lg:col-span-5 space-y-6">
              <Card className="p-6 sm:p-8 bg-white border-slate-200 shadow-md space-y-6">
                <div>
                  <h3 className="font-heading text-xl font-bold text-slate-900">
                    Campus Office Address
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Rainbow Matriculation School (UDISE: {schoolData.udiseCode})
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 shrink-0 text-emerald-600 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">Postal Location:</strong>
                      <span>{schoolData.address.village},</span><br />
                      <span>{schoolData.address.block} Block, {schoolData.address.taluk} Taluk,</span><br />
                      <span>{schoolData.address.district} District,</span><br />
                      <span>Tamil Nadu, PIN: {schoolData.address.pincode}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 shrink-0 text-indigo-600 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">Office Telephone:</strong>
                      <a
                        href={`tel:${schoolData.contact.directoryPhone.replace(/\s+/g, "")}`}
                        className="text-indigo-600 font-semibold hover:underline text-sm"
                      >
                        {schoolData.contact.directoryPhone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">Office Hours:</strong>
                      <span>{schoolData.contact.workingHours.days}</span><br />
                      <span>{schoolData.contact.workingHours.officeTimings}</span>
                    </div>
                  </div>
                </div>

                {/* Direct Directions Action */}
                <div className="pt-2">
                  <Button
                    variant="primary"
                    size="md"
                    href={schoolData.coordinates.googleMapsSearchUrl}
                    external
                    className="w-full justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold"
                  >
                    <Compass className="h-4 w-4" />
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </Card>

              {/* Geographic Coordinates Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 text-xs text-slate-600 space-y-1.5 shadow-xs">
                <div className="font-bold text-slate-800">Geographic Coordinates</div>
                <div>Latitude: ~12.3807° N | Longitude: ~79.6928° E</div>
                <div className="text-[11px] text-slate-500">
                  Approach via Tindivanam-Orathi-Acharapakkam road corridor.
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <Card className="p-6 sm:p-10 bg-white border-slate-200 shadow-xl">
                <div className="mb-6 space-y-1">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                    Send a Message to the School Office
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    For transport enquiries, transfer certificate procedures, fee queries, or general assistance.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. R. Selvan"
                        className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-900 focus:border-indigo-600 focus:bg-white focus:outline-none"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-rose-600">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 98420 43815"
                        className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-900 focus:border-indigo-600 focus:bg-white focus:outline-none"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-rose-600">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        Email Address <span className="text-slate-400 font-normal lowercase">(optional)</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@domain.com"
                        className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-900 focus:border-indigo-600 focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Transport Enquiry from Nedungal"
                        className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-900 focus:border-indigo-600 focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full rounded-xl border border-slate-300 bg-slate-50/50 p-3.5 text-sm text-slate-900 focus:border-indigo-600 focus:bg-white focus:outline-none"
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-rose-600">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full justify-center gap-2 mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold"
                  >
                    {isSubmitting ? (
                      <span>Preparing WhatsApp...</span>
                    ) : (
                      <>
                        <span>Send Message via WhatsApp</span>
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Toast
        show={toast.show}
        type={toast.type}
        title={toast.title}
        message={toast.message}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </div>
  );
}
