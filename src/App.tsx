import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { Toaster } from 'sonner@2.0.3';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { ScrollToTop } from './components/ScrollToTop';
import { SEOHead } from './components/SEOHead';

// Lazy load service pages for better performance
const Reinigung = lazy(() => import('./components/services/Reinigung'));
const Anlagenpflege = lazy(() => import('./components/services/Anlagenpflege'));
const Rauchmelder = lazy(() => import('./components/services/Rauchmelder'));
const Wartung = lazy(() => import('./components/services/Wartung'));
const Impressum = lazy(() => import('./components/Impressum'));
const Datenschutz = lazy(() => import('./components/Datenschutz'));

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-pink-500 border-r-transparent"></div>
        <p className="mt-4 text-gray-600">Lädt...</p>
      </div>
    </div>
  );
}

function HomePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "amplius Cleantech UG (haftungsbeschränkt)",
    "image": "https://amplius-cleantech.de/logo.png",
    "description": "Professioneller Facility Service in Kiel für Mehrfamilienhäuser, Hausverwaltungen und Gewerbe. Gebäudereinigung, Anlagenpflege, Rauchmelder-Wartung und Hausmeisterservice.",
    "@id": "https://amplius-cleantech.de",
    "url": "https://amplius-cleantech.de",
    "telephone": "+4915233195642",
    "email": "info@cleantech-services.de",
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Strandstraße 55",
      "addressLocality": "Strande",
      "postalCode": "24229",
      "addressCountry": "DE",
      "addressRegion": "Schleswig-Holstein"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 54.4082,
      "longitude": 10.1784
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Kiel",
        "sameAs": "https://de.wikipedia.org/wiki/Kiel"
      },
      {
        "@type": "City",
        "name": "Strande"
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Facility Management Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gebäudereinigung",
            "description": "Professionelle Reinigung für Mehrfamilienhäuser, Treppenhäuser und Gewerbeflächen in Kiel",
            "serviceType": "Cleaning Service",
            "areaServed": "Kiel"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Anlagenpflege",
            "description": "Grünflächenpflege, Winterdienst und Außenanlagenpflege für Immobilien in Kiel",
            "serviceType": "Facility Maintenance",
            "areaServed": "Kiel"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Rauchmelder Service",
            "description": "Installation, Wartung und Austausch von Rauchmeldern nach DIN 14676",
            "serviceType": "Safety Equipment Service",
            "areaServed": "Kiel"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wartung und Reparatur",
            "description": "Hausmeisterservice und technische Wartung für Wohn- und Gewerbeimmobilien",
            "serviceType": "Maintenance Service",
            "areaServed": "Kiel"
          }
        }
      ]
    },
    "paymentAccepted": ["Cash", "Invoice", "Bank Transfer"],
    "currenciesAccepted": "EUR",
    "slogan": "Smart Facility Service - Digital. Transparent. Zuverlässig."
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "amplius Cleantech UG (haftungsbeschränkt)",
    "legalName": "amplius Cleantech UG (haftungsbeschränkt)",
    "url": "https://amplius-cleantech.de",
    "logo": "https://amplius-cleantech.de/logo.png",
    "description": "amplius Cleantech ist Ihr professioneller Partner für Facility Management in Kiel. Wir bieten Gebäudereinigung, Anlagenpflege, Rauchmelder-Wartung und Hausmeisterservice mit digitaler Dokumentation und transparenten Preisen.",
    "email": "info@cleantech-services.de",
    "telephone": "+4915233195642",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Strandstraße 55",
      "addressLocality": "Strande",
      "postalCode": "24229",
      "addressCountry": "DE",
      "addressRegion": "Schleswig-Holstein"
    },
    "areaServed": {
      "@type": "City",
      "name": "Kiel",
      "sameAs": "https://de.wikipedia.org/wiki/Kiel"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 54.3233,
        "longitude": 10.1394
      },
      "geoRadius": "30000"
    },
    "foundingDate": "2024",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "5-10"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Facility Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Reinigungsdienstleistungen",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Treppenhausreinigung",
                "description": "Regelmäßige Reinigung von Treppenhäusern in Mehrfamilienhäusern"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Unterhaltsreinigung",
                "description": "Regelmäßige Reinigung von Büros und Gewerbeflächen"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Facility Management",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Winterdienst",
                "description": "Schneeräumung und Streudienst für Wohnanlagen"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Grünpflege",
                "description": "Rasenpflege, Heckenschnitt und Außenanlagenpflege"
              }
            }
          ]
        }
      ]
    }
  };

  return (
    <>
      <SEOHead
        title="amplius Cleantech - Facility Service Kiel | Reinigung, Hausmeisterservice & Rauchmelder"
        description="Professioneller Facility Service in Kiel für Mehrfamilienhäuser, Hausverwaltungen und Gewerbe. Treppenhausreinigung, Anlagenpflege, Rauchmelder-Wartung nach DIN 14676 und Hausmeisterservice. Regional, zuverlässig, digital dokumentiert."
        keywords="Facility Management Kiel, Gebäudereinigung Kiel, Hausmeisterservice Kiel, Rauchmelder Wartung Kiel, Treppenhausreinigung, Anlagenpflege, Mehrfamilienhäuser, DIN 14676"
        canonical="https://amplius-cleantech.de"
        schema={[localBusinessSchema, organizationSchema]}
      />
      <Hero />
      <Services />
      <Features />
      <CTA />
      <Footer />
      <CookieBanner />
    </>
  );
}

function ImpressumPage() {
  return (
    <>
      <SEOHead
        title="Impressum - amplius Cleantech UG"
        description="Impressum und rechtliche Informationen der amplius Cleantech UG (haftungsbeschränkt), Facility Service in Kiel."
        noindex={true}
      />
      <Suspense fallback={<LoadingFallback />}>
        <Impressum />
      </Suspense>
    </>
  );
}

function DatenschutzPage() {
  return (
    <>
      <SEOHead
        title="Datenschutz - amplius Cleantech UG"
        description="Datenschutzerklärung der amplius Cleantech UG (haftungsbeschränkt)."
        noindex={true}
      />
      <Suspense fallback={<LoadingFallback />}>
        <Datenschutz />
      </Suspense>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" richColors />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="/datenschutz" element={<DatenschutzPage />} />
        <Route 
          path="/reinigung" 
          element={
            <Suspense fallback={<LoadingFallback />}>
              <Reinigung />
            </Suspense>
          } 
        />
        <Route 
          path="/anlagenpflege" 
          element={
            <Suspense fallback={<LoadingFallback />}>
              <Anlagenpflege />
            </Suspense>
          } 
        />
        <Route 
          path="/rauchmelder" 
          element={
            <Suspense fallback={<LoadingFallback />}>
              <Rauchmelder />
            </Suspense>
          } 
        />
        <Route 
          path="/wartung" 
          element={
            <Suspense fallback={<LoadingFallback />}>
              <Wartung />
            </Suspense>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}