import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import { siteConfig } from "@/data/constants";
import { ScrollProgress } from "@/components/scroll-progress";
import { LoadingScreen } from "@/components/loading-screen";
import { CustomCursor } from "@/components/custom-cursor";
import { CookieConsent } from "@/components/cookie-consent";
import { BackToTop } from "@/components/back-to-top";
import { FloatingButtons } from "@/components/floating-buttons";
import PageLayout from "@/components/page-layout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "dermatologist",
    "cosmetic dermatologist",
    "skin clinic",
    "Jabalpur",
    "Dr. Anamika Mishra",
    "hair transplant",
    "laser treatment",
    "skin care",
    "acne treatment",
    "anti-aging",
    "PRP therapy",
    "Botox",
    "fillers",
  ],
  authors: [{ name: siteConfig.doctor.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: siteConfig.clinic.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.clinic.phone,
    email: siteConfig.clinic.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.clinic.address.line1}, ${siteConfig.clinic.address.line2}`,
      addressLocality: siteConfig.clinic.address.city,
      addressRegion: siteConfig.clinic.address.state,
      postalCode: siteConfig.clinic.address.zip,
      addressCountry: siteConfig.clinic.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.clinic.coordinates.lat,
      longitude: siteConfig.clinic.coordinates.lng,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "11:00",
      closes: "14:00",
    },
    doctor: {
      "@type": "Physician",
      name: siteConfig.doctor.name,
      jobTitle: "Dermatologist",
      description: siteConfig.doctor.specialization,
      yearsOfExperience: new Date().getFullYear() - siteConfig.doctor.experienceSince,
    },
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col bg-background text-foreground`}
      >
        <LoadingScreen />
        <CustomCursor />
        <ScrollProgress />
        <Providers>
          <PageLayout>{children}</PageLayout>
        </Providers>
        <CookieConsent />
        <BackToTop />
        <FloatingButtons />
      </body>
    </html>
  );
}
