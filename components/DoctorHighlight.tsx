"use client";

import { useEffect, useRef, useState } from "react";

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, inView };
}

const credentials = [
  { icon: "🎓", label: "Doctor of Dental Surgery (DDS)" },
  { icon: "🏥", label: "10+ Years Clinical Experience" },
  { icon: "🌍", label: "International Training & Certifications" },
  { icon: "💉", label: "Specialist in Painless Procedures" },
];

export default function DoctorHighlight() {
  const { ref, inView } = useInView();

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-dental-light via-white to-sky-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Right: Text (first on mobile) */}
          <div
            className={`order-2 lg:order-1 transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-dental-light text-dental-blue px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
              <span>👩‍⚕️</span> Meet Our Doctor
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-dental-navy mb-3 leading-tight">
              Dr. Betty
              <span className="block text-xl font-medium text-sky-500 mt-1">
                Lead Dental Surgeon
              </span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Dr. Betty is the heart of Tori Speciality Dental Clinic. With over
              a decade of experience and a passion for transforming smiles, she
              has built a reputation for{" "}
              <strong className="text-dental-navy">
                painless, precise, and compassionate care
              </strong>
              .
            </p>

            <p className="text-gray-500 leading-relaxed mb-8">
              Trained to international standards and constantly staying updated
              with the latest dental advancements, Dr. Betty treats every patient
              like family. Her gentle approach has earned her the trust of
              hundreds of patients — from young children to the elderly.
            </p>

            {/* Credentials */}
            <ul className="space-y-3 mb-8">
              {credentials.map((cred) => (
                <li
                  key={cred.label}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <div className="w-9 h-9 bg-white rounded-xl shadow-sm flex items-center justify-center text-lg flex-shrink-0">
                    {cred.icon}
                  </div>
                  <span className="font-medium">{cred.label}</span>
                </li>
              ))}
            </ul>

            {/* Quote */}
            <blockquote className="border-l-4 border-dental-blue pl-5 bg-white rounded-r-2xl py-4 pr-4 shadow-sm">
              <p className="text-gray-600 italic text-lg leading-relaxed">
                &ldquo;Every patient deserves a smile they love and a dental
                experience they don&apos;t fear. That&apos;s our promise at Tori
                Dental.&rdquo;
              </p>
              <footer className="mt-2 text-dental-blue font-semibold text-sm">
                — Dr. Betty
              </footer>
            </blockquote>
          </div>

          {/* Left: Image Column */}
          <div
            className={`order-1 lg:order-2 relative transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Doctor illustration card */}
            <div className="relative mx-auto max-w-sm">
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-dental-blue to-dental-blue-dark rounded-3xl overflow-hidden shadow-2xl shadow-sky-300/40 aspect-[3/4]">
                {/* Background pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />

                {/* Doctor illustration */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                  <div className="w-28 h-28 bg-white/20 rounded-full flex items-center justify-center text-7xl mb-6 border-4 border-white/30">
                    👩‍⚕️
                  </div>
                  <h3 className="text-2xl font-bold text-center">Dr. Betty</h3>
                  <p className="text-sky-200 text-sm mt-1 text-center">
                    Lead Dental Surgeon
                  </p>
                  <p className="text-sky-200 text-sm mt-0.5 text-center">
                    Tori Speciality Dental Clinic
                  </p>

                  {/* Decorative line */}
                  <div className="w-12 h-0.5 bg-white/40 my-4" />

                  <div className="flex gap-4 text-center">
                    <div>
                      <p className="text-xl font-bold">10+</p>
                      <p className="text-sky-200 text-xs">Years Exp</p>
                    </div>
                    <div className="w-px bg-white/20" />
                    <div>
                      <p className="text-xl font-bold">500+</p>
                      <p className="text-sky-200 text-xs">Patients</p>
                    </div>
                    <div className="w-px bg-white/20" />
                    <div>
                      <p className="text-xl font-bold">5.0</p>
                      <p className="text-sky-200 text-xs">Rating</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge: availability */}
              <div className="absolute -bottom-4 left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-2.5">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <div>
                  <p className="font-bold text-dental-navy text-sm leading-none">
                    Available Now
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">Open 24/7</p>
                </div>
              </div>

              {/* Floating badge: specialization */}
              <div className="absolute -top-4 -right-4 bg-dental-navy rounded-2xl shadow-xl p-3 text-center">
                <p className="text-white font-bold text-sm">Specialist</p>
                <p className="text-sky-400 text-xs">Dental Surgery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
