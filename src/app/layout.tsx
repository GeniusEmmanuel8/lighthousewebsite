import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './Header';
import Footer from './Footer';
import GoogleAnalytics from './GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lighthouse Atlanta - Church in Atlanta, GA | RCCG Church',
  description: 'Join Lighthouse Atlanta, a vibrant church in Atlanta, GA. Experience authentic worship, powerful preaching, and a welcoming community. Sunday services at 10:00 AM. RCCG church serving the community in Atlanta.',
  keywords: 'church Atlanta, RCCG church Atlanta, Nigerian church Atlanta, worship Atlanta, Atlanta church, Lighthouse Atlanta, Braselton church, community Atlanta, Christian church Atlanta, Sunday service Atlanta',
  openGraph: {
    title: 'Lighthouse Atlanta - Church in Atlanta, GA',
    description: 'Join our vibrant church community in Atlanta. Experience authentic worship, powerful preaching, and a welcoming family atmosphere. Sunday services at 10:00 AM.',
    url: 'https://rccgthelighthouse.org',
    siteName: 'Lighthouse Atlanta',
    images: [
      {
        url: '/logo4.jpeg',
        width: 1200,
        height: 630,
        alt: 'Lighthouse Atlanta Church - Church in Atlanta',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lighthouse Atlanta - Church in Atlanta, GA',
    description: 'Join our vibrant church community in Atlanta. Experience authentic worship and powerful preaching.',
    images: ['/logo4.jpeg'],
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
  alternates: {
    canonical: 'https://rccgthelighthouse.org',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo4.jpeg" />
        <meta name="theme-color" content="#181e29" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Church",
              "name": "Lighthouse Atlanta",
              "description": "A vibrant church in Atlanta, GA, serving the community with authentic worship and powerful preaching.",
              "url": "https://rccgthelighthouse.org",
              "logo": "https://rccgthelighthouse.org/logo4.jpeg",
              "image": "https://rccgthelighthouse.org/logo4.jpeg",
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
                "latitude": 34.1093,
                "longitude": -83.7627
              },
              "telephone": "(943) 264-9644",
              "email": "info@lighthouseatlanta.com",
              "openingHours": "Su 10:00-12:00",
              "serviceType": "Sunday Service",
              "audienceType": "Community, Nigerian Community, Christian Community",
              "sameAs": [
                "https://www.facebook.com/people/RCCG-Lighthouse-Atlanta/61567409593107/"
              ],
              "hasMap": "https://maps.google.com/?q=925+Highway+124,+Braselton,+GA+30517",
              "priceRange": "Free",
              "currenciesAccepted": "USD",
              "paymentAccepted": "Cash, Check, Online",
              "areaServed": "Atlanta, Braselton, Georgia",
              "description": "Church serving the Atlanta community with Sunday services and spiritual guidance."
            })
          }}
        />
        
        {/* Additional Meta Tags */}
        <meta name="author" content="Lighthouse Atlanta" />
        <meta name="copyright" content="Lighthouse Atlanta" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="coverage" content="worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Open Graph Additional Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Lighthouse Atlanta" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Additional Tags */}
        <meta name="twitter:site" content="@lighthouseatl" />
        <meta name="twitter:creator" content="@lighthouseatl" />
        
        {/* Additional SEO Tags */}
        <meta name="geo.region" content="US-GA" />
        <meta name="geo.placename" content="Braselton, Georgia" />
        <meta name="geo.position" content="34.1093;-83.7627" />
        <meta name="ICBM" content="34.1093, -83.7627" />
        
        {/* Mobile App Tags */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Lighthouse Atlanta" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/logo4.jpeg" />
        <link rel="apple-touch-icon" sizes="152x152" href="/logo4.jpeg" />
        <link rel="apple-touch-icon" sizes="144x144" href="/logo4.jpeg" />
        <link rel="apple-touch-icon" sizes="120x120" href="/logo4.jpeg" />
        <link rel="apple-touch-icon" sizes="114x114" href="/logo4.jpeg" />
        <link rel="apple-touch-icon" sizes="76x76" href="/logo4.jpeg" />
        <link rel="apple-touch-icon" sizes="72x72" href="/logo4.jpeg" />
        <link rel="apple-touch-icon" sizes="60x60" href="/logo4.jpeg" />
        <link rel="apple-touch-icon" sizes="57x57" href="/logo4.jpeg" />
        
        {/* Microsoft Tiles */}
        <meta name="msapplication-TileColor" content="#181e29" />
        <meta name="msapplication-TileImage" content="/logo4.jpeg" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#181e29" />
        <meta name="msapplication-navbutton-color" content="#181e29" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
