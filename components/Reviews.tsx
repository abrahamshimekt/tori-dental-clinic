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

const reviews = [
  {
    name: "Salifou Issoufou",
    avatar: "S",
    avatarColor: "bg-blue-500",
    date: "2 weeks ago",
    rating: 5,
    review:
      "Absolutely outstanding clinic! The staff are incredibly professional and welcoming. Dr. Betty explained everything clearly before the procedure. The facility is spotless and modern. I had a root canal done and felt zero pain. Highly recommend to anyone in Addis Ababa!",
    service: "Root Canal Treatment",
  },
  {
    name: "Elizabeth Debebe",
    avatar: "E",
    avatarColor: "bg-pink-500",
    date: "1 month ago",
    rating: 5,
    review:
      "I came in at 2am with severe tooth pain and they were open and ready to help immediately! The emergency service is exceptional. The doctor was calm, professional and sorted my problem quickly. This clinic is a lifesaver. Thank you Tori Dental!",
    service: "Emergency Dental Care",
  },
  {
    name: "Aman Hsy",
    avatar: "A",
    avatarColor: "bg-emerald-500",
    date: "3 weeks ago",
    rating: 5,
    review:
      "Best dental clinic I have ever visited in Ethiopia. The equipment is modern, the environment is clean and comfortable, and the doctors are truly skilled. My teeth cleaning was done perfectly. Already recommended to my whole family!",
    service: "Teeth Cleaning",
  },
  {
    name: "Miriam Tadesse",
    avatar: "M",
    avatarColor: "bg-violet-500",
    date: "1 month ago",
    rating: 5,
    review:
      "Dr. Betty is phenomenal! She made my daughter feel so comfortable during her first dental visit. The pediatric care here is world-class. Patient, gentle, and thorough. We will definitely be coming back!",
    service: "Pediatric Dentistry",
  },
  {
    name: "Yonas Bekele",
    avatar: "Y",
    avatarColor: "bg-amber-500",
    date: "2 months ago",
    rating: 5,
    review:
      "Got dental implants done here and the result is perfect! You cannot tell the difference from natural teeth. The procedure was smooth, the follow-up care was excellent. Worth every penny. Thank you Tori Speciality Clinic!",
    service: "Dental Implants",
  },
  {
    name: "Fatima Al-Hassan",
    avatar: "F",
    avatarColor: "bg-teal-500",
    date: "3 months ago",
    rating: 5,
    review:
      "Located at BMA Plaza and so convenient! The 4th floor clinic is beautifully designed. I went for cosmetic dentistry — teeth whitening and veneers — and the results exceeded my expectations. I smile with confidence now!",
    service: "Cosmetic Dentistry",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-amber-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const { ref, inView } = useInView();
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-dental-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-white/10 text-sky-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <span>⭐</span> Patient Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What Our Patients{" "}
            <span className="text-dental-blue">Are Saying</span>
          </h2>
          <p className="text-sky-200/70 text-lg">
            Rated 5.0 stars by 381+ patients on Google. Here&apos;s what some of
            them have to say.
          </p>

          {/* Overall rating display */}
          <div className="inline-flex items-center gap-4 mt-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-3">
            <div className="text-center">
              <p className="text-4xl font-bold text-white">5.0</p>
              <StarRating rating={5} />
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="text-left">
              <p className="text-white font-semibold">381 Reviews</p>
              <p className="text-sky-300 text-sm">on Google Maps</p>
            </div>
          </div>
        </div>

        {/* Reviews scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div
            ref={ref}
            className="flex gap-5"
            style={{ minWidth: "max-content" }}
          >
            {reviews.map((review, i) => (
              <div
                key={review.name}
                className={`snap-start w-80 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 flex-shrink-0 hover:bg-white/10 hover:border-dental-blue/40 transition-all duration-300 ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 ${review.avatarColor} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                  >
                    {review.avatar}
                  </div>
                  <div className="min-w-0">
                    <p className="text-white font-semibold text-sm truncate">
                      {review.name}
                    </p>
                    <p className="text-sky-400/60 text-xs">{review.date}</p>
                  </div>
                  {/* Google icon */}
                  <svg
                    className="w-5 h-5 ml-auto flex-shrink-0"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                </div>

                {/* Stars */}
                <StarRating rating={review.rating} />

                {/* Service tag */}
                <span className="inline-block mt-2 mb-3 bg-dental-blue/20 text-dental-blue text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {review.service}
                </span>

                {/* Review text */}
                <p className="text-sky-100/70 text-sm leading-relaxed line-clamp-4">
                  &ldquo;{review.review}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* View all button */}
        <div className="text-center mt-10">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
          >
            View All 381 Reviews on Google
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
