"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function About() {
  const { ref, inView } = useInView();

  const stats = [
    { value: "10+", label: "Years of Experience" },
    { value: "381+", label: "Happy Patients" },
    { value: "24/7", label: "Available" },
    { value: "5.0★", label: "Google Rating" },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left: Image Column */}
          <div
            className={`relative transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Main card */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-dental-light to-sky-100 aspect-[4/3] shadow-2xl shadow-sky-100">
              {/* Dental room illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">🦷</div>
                  <p className="text-dental-navy font-semibold text-lg">
                    Modern Dental Suite
                  </p>
                  <p className="text-sky-600 text-sm mt-1">
                    Equipped with latest technology
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-16 h-16 bg-dental-blue/10 rounded-2xl" />
              <div className="absolute bottom-4 right-4 w-24 h-24 bg-dental-blue/10 rounded-3xl" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl shadow-sky-100 p-4 flex items-center gap-3 border border-sky-50">
              <div className="w-10 h-10 bg-dental-light rounded-xl flex items-center justify-center">
                <span className="text-xl">⭐</span>
              </div>
              <div>
                <p className="font-bold text-dental-navy text-sm">5.0 Rating</p>
                <p className="text-gray-500 text-xs">381 Reviews</p>
              </div>
            </div>

            {/* Second floating badge */}
            <div className="absolute -top-5 -left-5 bg-dental-blue rounded-2xl shadow-xl p-4 text-white">
              <p className="font-bold text-lg leading-none">24/7</p>
              <p className="text-sky-200 text-xs mt-0.5">Always Open</p>
            </div>
          </div>

          {/* Right: Text Column */}
          <div
            className={`transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-dental-light text-dental-blue px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              About Us
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-dental-navy mb-5 leading-tight">
              Addis Ababa&apos;s Most Trusted{" "}
              <span className="gradient-text">Dental Clinic</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Tori Speciality Dental Clinic has been serving Addis Ababa with
              world-class dental care. Located at{" "}
              <strong className="text-dental-navy">
                BMA Plaza 4th Floor, Gerji Mariam
              </strong>
              , we combine advanced technology with warm, patient-focused care.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Our experienced team, led by{" "}
              <strong className="text-dental-blue">Dr. Betty</strong>, is
              committed to delivering painless, efficient, and beautiful dental
              outcomes. Whether it&apos;s a routine check-up or an emergency, we
              are open <strong>24 hours a day, 7 days a week</strong> — because
              dental emergencies don&apos;t follow office hours.
            </p>

            {/* Bullet points */}
            <ul className="space-y-3 mb-8">
              {[
                "State-of-the-art dental equipment",
                "Experienced & compassionate doctors",
                "Painless procedures with modern anesthesia",
                "Affordable pricing, transparent billing",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700">
                  <div className="w-5 h-5 bg-dental-light rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-dental-blue"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-dental-gray rounded-2xl p-3 text-center border border-sky-50 hover:border-dental-blue/30 hover:bg-dental-light/50 transition-colors"
                >
                  <p className="font-bold text-dental-navy text-xl">{stat.value}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
