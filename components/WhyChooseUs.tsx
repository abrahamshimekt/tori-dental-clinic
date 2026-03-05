"use client";

import { useEffect, useRef, useState } from "react";

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, inView };
}

const features = [
  {
    icon: "⭐",
    title: "5.0 Rated by 381+ Patients",
    description:
      "Consistently rated 5 stars by hundreds of patients on Google. Our commitment to excellence shows in every smile.",
    stat: "381",
    statLabel: "Reviews",
    bg: "bg-amber-50",
    border: "border-amber-100",
    iconBg: "bg-amber-100",
  },
  {
    icon: "🕒",
    title: "Open 24 Hours, 7 Days",
    description:
      "Dental emergencies don't wait for business hours. We're always open — nights, weekends, and holidays.",
    stat: "24/7",
    statLabel: "Availability",
    bg: "bg-gray-50",
    border: "border-gray-100",
    iconBg: "bg-gray-100",
  },
  {
    icon: "🔬",
    title: "Modern Dental Technology",
    description:
      "Equipped with the latest dental equipment for precise diagnostics, painless procedures, and superior results.",
    stat: "100%",
    statLabel: "Modern Tech",
    bg: "bg-violet-50",
    border: "border-violet-100",
    iconBg: "bg-violet-100",
  },
  {
    icon: "🤝",
    title: "Warm & Professional Staff",
    description:
      "Our caring team makes every visit comfortable. We listen, explain, and ensure you feel at ease from the moment you walk in.",
    stat: "100%",
    statLabel: "Satisfaction",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    iconBg: "bg-emerald-100",
  },
];

export default function WhyChooseUs() {
  const { ref, inView } = useInView();

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-dental-light text-dental-blue px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <span>💡</span> Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-dental-navy mb-4">
            The Tori Dental{" "}
            <span className="gradient-text">Difference</span>
          </h2>
          <p className="text-gray-500 text-lg">
            We combine medical excellence with genuine care to deliver an
            experience that keeps patients coming back.
          </p>
        </div>

        {/* Feature cards */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`group relative ${feature.bg} border ${feature.border} rounded-3xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 ${feature.iconBg} rounded-2xl flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform shadow-sm`}
              >
                {feature.icon}
              </div>

              {/* Stat badge */}
              <div className="absolute top-5 right-5 bg-white/80 backdrop-blur-sm rounded-xl px-2.5 py-1 shadow-sm">
                <p className="font-bold text-dental-navy text-sm leading-none">
                  {feature.stat}
                </p>
                <p className="text-gray-400 text-[10px]">{feature.statLabel}</p>
              </div>

              <h3 className="font-bold text-dental-navy text-lg mb-3 leading-tight">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust badges row */}
        <div className="mt-14 flex flex-wrap justify-center gap-4">
          {[
            { icon: "🛡️", label: "Safe & Hygienic" },
            { icon: "💊", label: "Painless Procedures" },
            { icon: "📋", label: "Transparent Pricing" },
            { icon: "🌍", label: "Serving All Nationalities" },
            { icon: "🚗", label: "Easy Parking Access" },
          ].map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 bg-dental-gray border border-gray-100 px-4 py-2.5 rounded-full text-sm font-medium text-gray-600 hover:border-dental-blue/40 hover:text-dental-blue transition-colors"
            >
              <span>{badge.icon}</span>
              {badge.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
