"use client";

import { useState } from "react";

const services = [
  "General Dentistry",
  "Emergency Dental Care (24/7)",
  "Teeth Cleaning",
  "Root Canal Treatment",
  "Cosmetic Dentistry",
  "Tooth Extraction",
  "Dental Implants",
  "Pediatric Dentistry",
  "Other",
];

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  preferredDate: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  service?: string;
  preferredDate?: string;
  message?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = "Full name must be at least 2 characters";
  }
  if (!data.phone || data.phone.trim().length < 9) {
    errors.phone = "Please enter a valid phone number";
  }
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Invalid email address";
  }
  if (!data.service) {
    errors.service = "Please select a service";
  }
  if (!data.preferredDate) {
    errors.preferredDate = "Please select a preferred date";
  }
  return errors;
}

export default function AppointmentForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    preferredDate: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          service: "",
          preferredDate: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-xl border ${
      errors[field]
        ? "border-red-300 bg-red-50 focus:border-red-400"
        : "border-gray-200 bg-gray-50 focus:border-dental-blue"
    } focus:outline-none focus:ring-2 focus:ring-dental-blue/20 transition-all text-dental-navy placeholder-gray-400 text-sm`;

  if (status === "success") {
    return (
      <section id="appointment" className="py-20 lg:py-28 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-dental-navy mb-3">
            Appointment Requested!
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Thank you! We&apos;ll call you shortly to confirm your appointment.
            For urgent care, call us directly at{" "}
            <a href="tel:0911069547" className="text-dental-blue font-semibold">
              091 106 9547
            </a>
            .
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="bg-dental-blue text-white px-8 py-3.5 rounded-2xl font-semibold hover:bg-dental-blue-dark transition-all shadow-lg shadow-gray-200"
          >
            Book Another Appointment
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="appointment" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left info panel */}
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 bg-dental-light text-dental-blue px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
              <span>📅</span> Book Appointment
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-dental-navy mb-4 leading-tight">
              Schedule Your{" "}
              <span className="gradient-text">Visit Today</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Fill in the form and we&apos;ll confirm your appointment promptly.
              Emergency? Call us directly — we answer 24/7.
            </p>

            {/* Quick info */}
            <div className="space-y-4">
              {[
                {
                  icon: "🕒",
                  title: "Open 24/7",
                  desc: "No need to wait — book anytime",
                },
                {
                  icon: "📞",
                  title: "Quick Confirmation",
                  desc: "We call back within 30 minutes",
                },
                {
                  icon: "🚨",
                  title: "Emergency Care",
                  desc: "Call 091 106 9547 for urgent help",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-dental-light rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-dental-navy text-sm">
                      {item.title}
                    </p>
                    <p className="text-gray-400 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency CTA */}
            <div className="mt-8 bg-red-50 border border-red-100 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">🚨</span>
                <p className="font-bold text-red-700 text-sm">
                  Dental Emergency?
                </p>
              </div>
              <p className="text-red-600 text-sm mb-3">
                Don&apos;t wait — call us immediately for 24/7 emergency care.
              </p>
              <a
                href="tel:0911069547"
                className="inline-flex items-center gap-2 bg-red-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-red-600 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call 091 106 9547
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-dental-gray rounded-3xl p-7 border border-gray-50 shadow-sm">
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Row 1: Name + Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-dental-navy mb-1.5">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Abebe Bekele"
                      className={inputClass("fullName")}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-red-500 text-xs">{errors.fullName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-dental-navy mb-1.5">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 091 106 9547"
                      className={inputClass("phone")}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-red-500 text-xs">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Row 2: Email */}
                <div>
                  <label className="block text-sm font-semibold text-dental-navy mb-1.5">
                    Email Address{" "}
                    <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={inputClass("email")}
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-500 text-xs">{errors.email}</p>
                  )}
                </div>

                {/* Row 3: Service + Date */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-dental-navy mb-1.5">
                      Service Needed <span className="text-red-400">*</span>
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={inputClass("service")}
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-red-500 text-xs">{errors.service}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-dental-navy mb-1.5">
                      Preferred Date <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className={inputClass("preferredDate")}
                    />
                    {errors.preferredDate && (
                      <p className="mt-1 text-red-500 text-xs">
                        {errors.preferredDate}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-dental-navy mb-1.5">
                    Message{" "}
                    <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Describe your symptoms or any special requests..."
                    className={`${inputClass("message")} resize-none`}
                  />
                </div>

                {/* Error state */}
                {status === "error" && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-red-600 text-sm">
                    Something went wrong. Please call us directly at{" "}
                    <a href="tel:0911069547" className="font-bold underline">
                      091 106 9547
                    </a>
                    .
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-dental-blue text-white py-4 rounded-2xl font-bold text-base hover:bg-dental-blue-dark disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-lg shadow-gray-200 hover:-translate-y-0.5 hover:shadow-gray-300"
                >
                  {status === "loading" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending Request...
                    </span>
                  ) : (
                    "Book My Appointment →"
                  )}
                </button>

                <p className="text-center text-gray-400 text-xs">
                  By booking, you agree to be contacted by our team. Your
                  information is kept private.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
