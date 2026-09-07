import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { schoolData } from "@/data/school";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Rainbow Matriculation School | Orathi, Tamil Nadu (UDISE 33031003604)",
    template: "%s | Rainbow Matriculation School, Orathi",
  },
  description:
    "Official website of Rainbow Matriculation School, Orathi (Chengalpattu/Kancheepuram District, Tamil Nadu). Established 2009. English medium co-educational schooling from Pre-KG to Class 6.",
  keywords: [
    "Rainbow Matriculation School",
    "Rainbow School Orathi",
    "Schools in Orathi",
    "Matriculation School Acharapakkam",
    "Schools in Madurantakam",
    "UDISE 33031003604",
    "Pre-KG to Class 6 Orathi",
    "Tamil Nadu Matriculation School",
  ],
  authors: [{ name: "Rainbow Matriculation School Administration" }],
  creator: "Rainbow Matriculation School",
  publisher: "Rainbow Matriculation School, Orathi",
  metadataBase: new URL("https://rainboworathi.edu.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rainbow Matriculation School — Orathi, Tamil Nadu",
    description:
      "English medium foundational and primary matriculation school in Orathi. Established in 2009. UDISE: 33031003604.",
    url: "https://rainboworathi.edu.in",
    siteName: "Rainbow Matriculation School, Orathi",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rainbow Matriculation School — Orathi, Tamil Nadu",
    description:
      "English medium school in Orathi from Pre-KG to Class 6. Verified UDISE: 33031003604.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured JSON-LD Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: schoolData.name,
    alternateName: ["Rainbow Matriculation School Orathi", "ரெயின்போ மெட்ரிகுலேஷன் பள்ளி ஒரத்தி"],
    identifier: schoolData.udiseCode,
    url: "https://rainboworathi.edu.in",
    foundingDate: "2009",
    address: {
      "@type": "PostalAddress",
      streetAddress: schoolData.address.village,
      addressLocality: "Orathi",
      addressRegion: "Tamil Nadu",
      postalCode: schoolData.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: schoolData.coordinates.latitude,
      longitude: schoolData.coordinates.longitude,
    },
    telephone: schoolData.contact.directoryPhone,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Academic Programs",
      itemListElement: [
        {
          "@type": "Course",
          name: "Pre-Primary Kindergarten Education",
          description: "Play-way foundational learning for Nursery, LKG, and UKG",
        },
        {
          "@type": "Course",
          name: "Primary School Education",
          description: "Matriculation curriculum for Grades 1 through 5",
        },
        {
          "@type": "Course",
          name: "Upper Primary Middle Transition",
          description: "Comprehensive subject mastery for Grade 6",
        },
      ],
    },
  };

  return (
    <html lang="en" className={`${jakarta.variable} font-sans`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-indigo-600 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
