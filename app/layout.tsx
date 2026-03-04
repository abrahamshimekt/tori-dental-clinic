import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tori Speciality Dental Clinic | 24/7 Dental Care in Addis Ababa",
  description:
    "Tori Speciality Dental Clinic offers 24-hour emergency dental care in Addis Ababa. Rated 5.0 by 381+ patients. Book your appointment today.",
  keywords: [
    "Dental clinic Addis Ababa",
    "24 hour dentist Ethiopia",
    "Emergency dental Addis Ababa",
    "Dr Betty Dentist",
    "Tori Dental",
    "tooth extraction Addis Ababa",
    "dental implants Ethiopia",
  ],
  openGraph: {
    title: "Tori Speciality Dental Clinic | 24/7 Dental Care in Addis Ababa",
    description:
      "Premium dental treatments with compassionate care. Rated 5.0 by 381+ happy patients. Open 24 hours.",
    type: "website",
    locale: "en_US",
    siteName: "Tori Speciality Dental Clinic",
  },
  other: {
    "geo.region": "ET-AA",
    "geo.placename": "Addis Ababa",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Tori Speciality Dental Clinic",
  image: "",
  address: {
    "@type": "PostalAddress",
    streetAddress: "BMA Plaza 4th Floor, Gerji Mariam",
    addressLocality: "Addis Ababa",
    addressCountry: "ET",
  },
  telephone: "+251911069547",
  openingHours: "Mo-Su 00:00-23:59",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "381",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
