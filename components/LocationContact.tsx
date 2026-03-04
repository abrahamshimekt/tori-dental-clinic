"use client";

const contactItems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
          clipRule="evenodd"
        />
      </svg>
    ),
    label: "Address",
    value: "BMA Plaza 4th Floor, Gerji Mariam\nAddis Ababa, Ethiopia",
    href: "https://maps.google.com/?q=BMA+Plaza+Gerji+Mariam+Addis+Ababa",
    color: "bg-dental-light text-dental-blue",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
    ),
    label: "Phone",
    value: "091 106 9547",
    href: "tel:0911069547",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "Chat with us on WhatsApp",
    href: "https://wa.me/251911069547",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
          clipRule="evenodd"
        />
      </svg>
    ),
    label: "Working Hours",
    value: "Open 24 Hours\n7 Days a Week",
    href: null,
    color: "bg-amber-50 text-amber-600",
  },
];

export default function LocationContact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-dental-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-dental-light text-dental-blue px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <span>📍</span> Find Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-dental-navy mb-4">
            Visit Us or{" "}
            <span className="gradient-text">Get in Touch</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Located at the heart of Addis Ababa. Walk in anytime — we&apos;re open
            24/7.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Contact info column */}
          <div className="lg:col-span-2 space-y-4">
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl p-5 shadow-sm border border-sky-50 hover:shadow-md hover:border-dental-blue/20 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-dental-navy font-medium hover:text-dental-blue transition-colors whitespace-pre-line text-sm leading-relaxed"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-dental-navy font-medium whitespace-pre-line text-sm leading-relaxed">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Quick action buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href="tel:0911069547"
                className="flex items-center justify-center gap-2 bg-dental-blue text-white py-3.5 rounded-2xl font-semibold text-sm hover:bg-dental-blue-dark transition-all shadow-lg shadow-sky-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Now
              </a>
              <a
                href="https://wa.me/251911069547"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 text-white py-3.5 rounded-2xl font-semibold text-sm hover:bg-green-600 transition-all shadow-lg shadow-green-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Map column */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-sky-50 h-full min-h-80">
              {/* Map header */}
              <div className="bg-dental-navy px-5 py-4 flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                <div>
                  <p className="text-white font-semibold text-sm">
                    Tori Speciality Dental Clinic
                  </p>
                  <p className="text-sky-400 text-xs">
                    BMA Plaza 4th Floor, Gerji Mariam, Addis Ababa
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=BMA+Plaza+Gerji+Mariam+Addis+Ababa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto text-sky-400 hover:text-white text-xs font-medium transition-colors"
                >
                  Open in Maps →
                </a>
              </div>

              {/* Embedded map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d38.7685!3d9.0215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b857c3c33e1c5%3A0x0!2sBMA%20Plaza%2C%20Gerji%20Mariam%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1"
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
