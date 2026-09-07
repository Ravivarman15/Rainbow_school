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
    setTimeout(() => {
      setIsSubmitting(false);
      setToast({
        show: true,
        type: "success",
        title: "Message Sent Successfully!",
        message: `Thank you, ${formData.name}. Our Orathi campus administrative office has received your message and will respond via ${formData.phone}.`,
      });
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});
    }, 600);
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
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send className="h-4 w-4" />
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
