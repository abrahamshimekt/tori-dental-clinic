"use client";

import { useEffect, useRef, useState } from "react";

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, inView };
}

const services = [
  {
    icon: "🦷",
    title: "General Dentistry",
    description:
      "Comprehensive oral exams, cleanings, fillings, and preventive care to keep your smile healthy for life.",
    color: "from-sky-50 to-blue-50",
    border: "border-sky-100",
    tag: "Most Popular",
  },
  {
    icon: "🚨",
    title: "Emergency Dental Care",
    description:
      "24/7 emergency services for toothaches, broken teeth, and urgent dental issues. We&apos;re always here.",
    color: "from-red-50 to-orange-50",
    border: "border-red-100",
    tag: "24/7 Available",
  },
  {
    icon: "✨",
    title: "Teeth Cleaning",
    description:
      "Professional scaling and polishing to remove plaque, tartar, and stains for a brighter, healthier smile.",
    color: "from-emerald-50 to-teal-50",
    border: "border-emerald-100",
    tag: null,
  },
  {
    icon: "🔬",
    title: "Root Canal Treatment",
    description:
      "Painless root canal therapy using modern techniques to save your natural tooth and relieve pain.",
    color: "from-violet-50 to-purple-50",
    border: "border-violet-100",
    tag: null,
  },
  {
    icon: "💎",
    title: "Cosmetic Dentistry",
    description:
      "Teeth whitening, veneers, bonding and smile makeovers to give you the confident smile you deserve.",
    color: "from-pink-50 to-rose-50",
    border: "border-pink-100",
    tag: "Popular",
  },
  {
    icon: "🩺",
    title: "Tooth Extraction",
    description:
      "Safe and gentle tooth extractions, including wisdom teeth, performed under proper anesthesia.",
    color: "from-amber-50 to-yellow-50",
    border: "border-amber-100",
    tag: null,
  },
  {
    icon: "🔩",
    title: "Dental Implants",
    description:
      "Permanent, natural-looking tooth replacements that restore full function and aesthetics.",
    color: "from-cyan-50 to-sky-50",
    border: "border-cyan-100",
    tag: "Premium",
  },
  {
    icon: "👶",
    title: "Pediatric Dentistry",
    description:
      "Gentle, child-friendly dental care in a welcoming environment that makes kids feel safe and comfortable.",
    color: "from-lime-50 to-green-50",
    border: "border-lime-100",
    tag: null,
  },
];

export default function Services() {
  const { ref, inView } = useInView();

  return (
    <section id="services" className="py-20 lg:py-28 bg-dental-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-dental-light text-dental-blue px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <span>🦷</span> Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-dental-navy mb-4">
            Comprehensive Dental{" "}
            <span className="gradient-text">Care for All</span>
          </h2>
          <p className="text-gray-500 text-lg">
            From routine check-ups to complex procedures, we offer a full range
            of dental services with the latest technology.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group relative bg-gradient-to-br ${service.color} border ${service.border} rounded-3xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Tag */}
              {service.tag && (
                <span className="absolute top-4 right-4 bg-dental-blue text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {service.tag}
                </span>
              )}

              {/* Icon */}
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-sm group-hover:scale-110 transition-transform">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="font-bold text-dental-navy text-lg mb-2 leading-tight">
                {service.title}
              </h3>
              <p
                className="text-gray-500 text-sm leading-relaxed mb-4"
                dangerouslySetInnerHTML={{ __html: service.description }}
              />

              {/* Learn more */}
              <a
                href="#appointment"
                className="inline-flex items-center gap-1 text-dental-blue text-sm font-semibold hover:gap-2 transition-all"
              >
                Book Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">
            Not sure which service you need?
          </p>
          <a
            href="#appointment"
            className="inline-flex items-center gap-2 bg-dental-blue text-white px-8 py-3.5 rounded-full font-semibold hover:bg-dental-blue-dark transition-all shadow-lg shadow-sky-200"
          >
            Book a Free Consultation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
