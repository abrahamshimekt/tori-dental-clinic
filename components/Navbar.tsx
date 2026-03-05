"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ToriLogo from "./ToriLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-gray-100/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="group-hover:scale-105 transition-transform">
              <ToriLogo size={42} color={scrolled ? "#111111" : "#ffffff"} />
            </div>
            <div className="leading-tight">
              <p
                className={`font-bold text-lg leading-none transition-colors ${
                  scrolled ? "text-dental-navy" : "text-white"
                }`}
              >
                Tori Dental
              </p>
              <p
                className={`text-xs transition-colors ${
                  scrolled ? "text-gray-500" : "text-gray-200"
                }`}
              >
                Speciality Clinic
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-dental-blue ${
                  scrolled ? "text-gray-600" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:0911069547"
              className={`flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-dental-blue ${
                scrolled ? "text-dental-navy" : "text-white"
              }`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              091 106 9547
            </a>
            <a
              href="#appointment"
              className="bg-dental-blue text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-dental-blue-dark transition-all shadow-lg shadow-gray-200/60 hover:shadow-gray-300/70 hover:-translate-y-0.5"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? "text-dental-navy hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-5 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-gray-700 font-medium py-3 px-3 rounded-xl hover:bg-gray-50 hover:text-dental-blue transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 space-y-2">
              <a
                href="#appointment"
                className="block bg-dental-blue text-white px-5 py-3.5 rounded-2xl text-center font-semibold shadow-lg shadow-gray-200"
                onClick={() => setMobileOpen(false)}
              >
                Book Appointment
              </a>
              <a
                href="tel:0911069547"
                className="block border-2 border-dental-blue text-dental-blue px-5 py-3.5 rounded-2xl text-center font-semibold"
              >
                Call: 091 106 9547
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
