import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Sparkles, Home, Building2, Phone, Mail, CheckCircle2, ChevronDown } from 'lucide-react';
import logo from '@/assets/logo.png';
import cleaningImg from '@/assets/service-reinigung.png';
import { useEffect, useState } from 'react';
import { Footer } from '../Footer';
import { SEOHead } from '../SEOHead';
import { Breadcrumb } from '../Breadcrumb';
import { RelatedServices } from '../RelatedServices';
import { WhyChooseUs } from '../WhyChooseUs';

export function Reinigung() {
  const navigate = useNavigate();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://amplius-cleantech.de"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Gebäudereinigung",
        "item": "https://amplius-cleantech.de/reinigung"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Gebäudereinigung",
    "name": "Gebäudereinigung Kiel",
    "description": "Professionelle Treppenhausreinigung und Gebäudereinigung für Mehrfamilienhäuser, Hausverwaltungen und Gewerbeflächen in Kiel. Unterhaltsreinigung, Büroreinigung und Glasreinigung.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "amplius Cleantech UG (haftungsbeschränkt)",
      "telephone": "+4915233195642",
      "email": "info@cleantech-services.de",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Strandstraße 55",
        "addressLocality": "Strande",
        "postalCode": "24229",
        "addressCountry": "DE"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Kiel"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Was kostet eine Treppenhausreinigung in Kiel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die Kosten für eine Treppenhausreinigung hängen von der Größe des Objekts und der Reinigungshäufigkeit ab. Wir erstellen Ihnen gerne ein individuelles, transparentes Angebot basierend auf Ihren spezifischen Anforderungen. Kontaktieren Sie uns für eine kostenlose Besichtigung und Kalkulation."
        }
      },
      {
        "@type": "Question",
        "name": "Wie oft sollte ein Treppenhaus gereinigt werden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Für Mehrfamilienhäuser empfehlen wir eine wöchentliche oder 14-tägige Treppenhausreinigung. Die optimale Frequenz hängt von der Nutzungsintensität, Anzahl der Bewohner und Jahreszeit ab. Wir beraten Sie gerne zur passenden Reinigungsfrequenz."
        }
      },
      {
        "@type": "Question",
        "name": "Welche Reinigungsleistungen bieten Sie in Kiel an?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wir bieten Treppenhausreinigung, Büroreinigung, Unterhaltsreinigung, Glasreinigung und Spezialreinigungen für Mehrfamilienhäuser und Gewerbeobjekte in Kiel. Alle Leistungen werden digital dokumentiert mit Fotodokumentation und transparenter Abrechnung."
        }
      },
      {
        "@type": "Question",
        "name": "Arbeiten Sie auch am Wochenende?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wir bieten flexible Reinigungszeiten an, auch am Wochenende und außerhalb der regulären Geschäftszeiten. Dies ist besonders für Büroreinigungen oder stark frequentierte Objekte sinnvoll. Sprechen Sie uns auf Ihre Wunschzeiten an."
        }
      },
      {
        "@type": "Question",
        "name": "Ist die Reinigung digital dokumentiert?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, alle Reinigungen werden bei amplius Cleantech digital dokumentiert. Sie erhalten Fotodokumentation, Zeiterfassung und transparente Berichte über die durchgeführten Arbeiten. So haben Sie jederzeit volle Transparenz und Qualitätskontrolle."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Gebäudereinigung Kiel | Treppenhausreinigung für Mehrfamilienhäuser - amplius Cleantech"
        description="Professionelle Gebäudereinigung in Kiel ✓ Treppenhausreinigung ✓ Büroreinigung ✓ Unterhaltsreinigung für Mehrfamilienhäuser ✓ Digital dokumentiert ✓ Transparente Preise → Jetzt Angebot anfordern!"
        keywords="Gebäudereinigung Kiel, Treppenhausreinigung Kiel, Büroreinigung Kiel, Unterhaltsreinigung, Glasreinigung, Mehrfamilienhäuser Reinigung, Hausverwaltung Kiel"
        canonical="https://amplius-cleantech.de/reinigung"
        ogImage="https://amplius-cleantech.de/og-reinigung.jpg"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* Navigation - Exact copy from Hero */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-1 lg:px-8 bg-white border-b border-gray-200 shadow-sm">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="amplius Cleantech - Facility Service Kiel Logo" 
              className="h-20 lg:h-24 scale-150 transition-all duration-300 hover:scale-[1.65] hover:drop-shadow-lg cursor-pointer"
              onClick={() => navigate('/')}
              fetchpriority="high"
            />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => navigate('/')} className="text-gray-600 hover:text-pink-600 transition-colors">
              Startseite
            </button>
            <button 
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="text-gray-600 hover:text-pink-600 transition-colors"
            >
              Leistungen
            </button>
            <button 
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="text-gray-600 hover:text-pink-600 transition-colors"
            >
              Kontakt
            </button>
            <button 
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="bg-pink-500 text-white px-6 py-2.5 rounded-full hover:bg-pink-600 transition-colors"
            >
              Gebäudereinigung anfragen
            </button>
          </div>
        </div>
      </nav>

      <Breadcrumb items={[{ label: 'Gebäudereinigung' }]} />

      {/* Hero Content */}
      <div className="mx-auto max-w-7xl px-6 pt-32 lg:pt-36 pb-12 lg:pb-16 lg:px-8">
        <div className="mb-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Zurück zur Startseite</span>
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Text */}
          <div>
            <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full mb-4 text-sm">
              Professionelle Gebäudereinigung
            </div>
            <h1 className="text-5xl lg:text-6xl mb-6 text-gray-900 leading-tight tracking-tight">
              Reinigung für <span className="text-pink-500">Mehrfamilienhäuser</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Professionelle Treppenhausreinigung, Unterhaltsreinigung und Büroreinigung für Hausverwaltungen, 
              Vermieter und Gewerbetreibende in Kiel und Umgebung. Zuverlässig, termingerecht und mit transparenter digitaler Dokumentation.
            </p>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={cleaningImg} 
                alt="Professionelle Treppenhausreinigung in Kiel - Mehrfamilienhäuser Gebäudereinigung" 
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid - Exact style from Features */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full mb-4 text-sm">
              Leistungsübersicht
            </div>
            <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
              Unsere Reinigungsleistungen
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Maßgeschneiderte Lösungen für jeden Bedarf
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4 p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-xl hover:border-pink-300 transition-all">
              <div className="flex-shrink-0">
                <div className="p-3 bg-pink-100 rounded-xl">
                  <Building2 className="h-6 w-6 text-pink-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2 text-gray-900">Treppenhausreinigung</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Unterhaltsreinigung für Treppenhäuser in Mehrfamilienhäusern
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Treppen & Handläufe</li>
                  <li>• Gemeinschaftsflächen</li>
                  <li>• Eingangsbereiche</li>
                  <li>• Kellerflure</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4 p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-xl hover:border-pink-300 transition-all">
              <div className="flex-shrink-0">
                <div className="p-3 bg-pink-100 rounded-xl">
                  <Home className="h-6 w-6 text-pink-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2 text-gray-900">Büro- & Gewerbereinigung</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Professionelle Büroreinigung und Gewerbereinigung
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Büroräume & Arbeitsflächen</li>
                  <li>• Sanitäranlagen</li>
                  <li>• Eingangsbereiche</li>
                  <li>• Gemeinschaftsräume</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4 p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-xl hover:border-pink-300 transition-all">
              <div className="flex-shrink-0">
                <div className="p-3 bg-pink-100 rounded-xl">
                  <Sparkles className="h-6 w-6 text-pink-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2 text-gray-900">Glasreinigung</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Glasreinigung für streifenfreien Durchblick
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Fenster innen & außen</li>
                  <li>• Schaufenster</li>
                  <li>• Glastüren</li>
                  <li>• Glasfassaden</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4 p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-xl hover:border-pink-300 transition-all">
              <div className="flex-shrink-0">
                <div className="p-3 bg-pink-100 rounded-xl">
                  <CheckCircle2 className="h-6 w-6 text-pink-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2 text-gray-900">Bauendreinigung</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Bauendreinigung nach DIN-Vorgaben
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Grobe Endreinigung</li>
                  <li>• Feine Endreinigung</li>
                  <li>• Entfernung von Bauschmutz</li>
                  <li>• Baustellen-Reinigung</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4 p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-xl hover:border-pink-300 transition-all md:col-span-2 lg:col-span-1">
              <div className="flex-shrink-0">
                <div className="p-3 bg-pink-100 rounded-xl">
                  <Sparkles className="h-6 w-6 text-pink-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2 text-gray-900">Sonderreinigungen</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Sonderreinigungen für Hausverwaltungen
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Grundreinigung</li>
                  <li>• Umzugsreinigung</li>
                  <li>• Wohnungsübergabe</li>
                  <li>• Individuelle Anfragen</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Why Choose Us Section */}
      <WhyChooseUs 
        serviceName="Gebäudereinigung in Kiel"
        serviceKeywords={['Treppenhausreinigung', 'Büroreinigung', 'Unterhaltsreinigung']}
      />

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full mb-4 text-sm">
              Häufig gestellte Fragen
            </div>
            <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
              Ihre Fragen zur Gebäudereinigung
            </h2>
            <p className="text-xl text-gray-600">
              Antworten auf die wichtigsten Fragen
            </p>
          </div>

          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg text-gray-900 pr-8">{faq.name}</span>
                  <ChevronDown 
                    className={`h-5 w-5 text-pink-600 flex-shrink-0 transition-transform duration-300 ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openFAQ === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-8 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-6">
                    {faq.acceptedAnswer.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Exact copy from CTA component */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-pink-500 via-pink-600 to-pink-700 rounded-3xl p-12 lg:p-16">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 text-center text-white">
              <h2 className="text-4xl lg:text-5xl mb-6">
                Bereit für makellose Sauberkeit?
              </h2>
              <p className="text-xl text-pink-100 mb-8 leading-relaxed max-w-2xl mx-auto">
                Kontaktieren Sie uns noch heute für ein unverbindliches Angebot. 
                Wir beraten Sie gerne und finden die perfekte Lösung für Ihre Anforderungen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button 
                  onClick={() => {
                    navigate('/');
                    setTimeout(() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="bg-white text-pink-600 px-8 py-4 rounded-full hover:bg-gray-50 transition-all hover:shadow-lg"
                >
                  Gebäudereinigung Kiel anfragen
                </button>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <div className="flex items-center justify-center gap-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-pink-100">Telefon</div>
                    <a href="tel:+4915233195642" className="text-lg hover:underline">+49 (0) 152 33 195642</a>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-pink-100">E-Mail</div>
                    <a href="mailto:info@cleantech-services.de" className="text-lg hover:underline">info@cleantech-services.de</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Related Services Section */}
      <RelatedServices currentService="reinigung" />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Reinigung;
