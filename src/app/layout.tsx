import type { Metadata } from 'next';
import { Geist, Geist_Mono } from "next/font/google";
import './globals.css';
import Header from './Header';
import Footer from './Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Lighthouse Atlanta - African Church in Atlanta, GA | RCCG Church',
  description: 'Join Lighthouse Atlanta, a vibrant African church in Atlanta, GA. Experience authentic worship, powerful preaching, and a welcoming community. Sunday services at 10:00 AM. RCCG church serving the African community in Atlanta.',
  keywords: 'African church Atlanta, RCCG church Atlanta, Nigerian church Atlanta, African worship Atlanta, Atlanta African church, Lighthouse Atlanta, Braselton church, African community Atlanta, Christian church Atlanta, Sunday service Atlanta',
  authors: [{ name: 'Lighthouse Atlanta Church' }],
  creator: 'Lighthouse Atlanta Church',
  publisher: 'Lighthouse Atlanta Church',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lighthouseatlanta.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Lighthouse Atlanta - African Church in Atlanta, GA',
    description: 'Join our vibrant African church community in Atlanta. Experience authentic worship, powerful preaching, and a welcoming family atmosphere. Sunday services at 10:00 AM.',
    url: 'https://lighthouseatlanta.com',
    siteName: 'Lighthouse Atlanta Church',
    images: [
      {
        url: '/church photo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Lighthouse Atlanta Church - African Church in Atlanta',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lighthouse Atlanta - African Church in Atlanta, GA',
    description: 'Join our vibrant African church community in Atlanta. Experience authentic worship and powerful preaching.',
    images: ['/church photo.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
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
        <link rel="icon" href="/Unknown.png" type="image/png" />
        <link rel="apple-touch-icon" href="/Unknown.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data for Church */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Church",
              "name": "Lighthouse Atlanta",
              "alternateName": "Lighthouse Atlanta Church",
              "description": "A vibrant African church in Atlanta, GA, serving the African community with authentic worship and powerful preaching.",
              "url": "https://lighthouseatlanta.com",
              "logo": "https://lighthouseatlanta.com/Unknown.png",
              "image": "https://lighthouseatlanta.com/church photo.jpeg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "925 Highway 124",
                "addressLocality": "Braselton",
                "addressRegion": "GA",
                "postalCode": "30517",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 34.1206571805736,
                "longitude": -83.8198576847936
              },
              "telephone": "(943) 264-9644",
              "email": "info@lighthouseatlanta.com",
              "openingHours": "Su 10:00-12:00",
              "serviceType": "Sunday Service",
              "religiousAffiliation": "Redeemed Christian Church of God (RCCG)",
              "sameAs": [
                "https://www.youtube.com/@RedeemedChristianChurchofGod",
                "https://facebook.com/lighthouseatlanta"
              ],
              "areaServed": {
                "@type": "City",
                "name": "Atlanta",
                "addressRegion": "GA"
              },
              "audience": {
                "@type": "Audience",
                "audienceType": "African Community, Nigerian Community, Christian Community"
              }
            })
          }}
        />
        
        {/* Local Business Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Lighthouse Atlanta Church",
              "description": "African church serving the Atlanta community with Sunday services and spiritual guidance.",
              "url": "https://lighthouseatlanta.com",
              "telephone": "(943) 264-9644",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "925 Highway 124",
                "addressLocality": "Braselton",
                "addressRegion": "GA",
                "postalCode": "30517",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 34.1206571805736,
                "longitude": -83.8198576847936
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Sunday",
                "opens": "10:00",
                "closes": "12:00"
              },
              "priceRange": "Free",
              "paymentAccepted": "Donations accepted"
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
