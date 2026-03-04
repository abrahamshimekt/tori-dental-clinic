"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const targets = [381, 24, 5, 100];
    const durations = [2000, 1500, 1000, 2000];

    counterRefs.current.forEach((el, i) => {
      if (!el) return;
      const target = targets[i];
      const duration = durations[i];
      const start = performance.now();

      const tick = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target).toString();
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dental-navy via-[#0c2340] to-[#0a3d5c]" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-dental-blue/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-dental-blue/5 rounded-full blur-3xl" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(14,165,233,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.3) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-sky-300 px-4 py-1.5 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Open 24 Hours — Always Here for You
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Your Trusted{" "}
            <span className="text-dental-blue">24/7</span>
            <br />
            Dental Care in{" "}
            <span className="relative">
              <span className="text-sky-300">Addis Ababa</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
              >
                <path
                  d="M2 8C50 3 150 3 298 8"
                  stroke="#0ea5e9"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-sky-100/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Premium dental treatments with compassionate care. From routine
            check-ups to emergency care — we&apos;re here whenever you need us.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#appointment"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-dental-blue text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-dental-blue-dark transition-all shadow-2xl shadow-sky-500/30 hover:-translate-y-1 hover:shadow-sky-500/50"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              Book Appointment
            </a>
            <a
              href="tel:0911069547"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Now
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { value: 0, suffix: "+", label: "Happy Patients", icon: "⭐" },
              { value: 1, suffix: "/7", label: "Hours Open", icon: "🕒" },
              { value: 2, suffix: ".0", label: "Star Rating", icon: "🏆" },
              { value: 3, suffix: "%", label: "Satisfaction", icon: "💎" },
            ].map((stat, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-4 text-center hover:bg-white/25 transition-colors"
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-2xl font-bold text-white">
                  <span
                    ref={(el) => {
                      counterRefs.current[i] = el;
                    }}
                  >
                    0
                  </span>
                  {stat.suffix}
                </div>
                <div className="text-sky-300 text-xs font-medium mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-sky-400/60">
        <span className="text-xs font-medium tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-5 h-8 border-2 border-sky-400/40 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-sky-400/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
