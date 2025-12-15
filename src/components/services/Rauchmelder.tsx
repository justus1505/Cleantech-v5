import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, CheckCircle, Bell, AlertTriangle, Phone, Mail, ChevronDown } from 'lucide-react';
import logo from '@/assets/dcb51da292ff54aef6e88b5901410915a0793c7.png';
import smokeDetectorImg from '@/assets/dd94190b4bdb5216d98939f3b6db7a91474fbe48.png';
import { useEffect, useState } from 'react';
import { Footer } from '../Footer';
import { SEOHead } from '../SEOHead';
import { Breadcrumb } from '../Breadcrumb';
import { RelatedServices } from '../RelatedServices';
import { WhyChooseUs } from '../WhyChooseUs';

export function Rauchmelder() {
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
        "name": "Rauchmelder Service",
        "item": "https://amplius-cleantech.de/rauchmelder"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Rauchmelder Service",
    "name": "Rauchmelder Service Kiel nach DIN 14676",
    "description": "Zertifizierter Rauchmelder Service in Kiel: Installation, Wartung und Austausch von Rauchmeldern nach DIN 14676 für Mehrfamilienhäuser und Wohnanlagen.",
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
        "name": "Wie oft müssen Rauchmelder gewartet werden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nach DIN 14676 müssen Rauchmelder mindestens einmal jährlich gewartet werden. Die Wartung umfasst Funktionsprüfung, Sicht- und Alarmprüfung sowie Dokumentation. Wir erinnern Sie rechtzeitig an die Wartungstermine und dokumentieren alle Prüfungen digital."
        }
      },
      {
        "@type": "Question",
        "name": "Wer ist für Rauchmelder in Mietwohnungen verantwortlich?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In Schleswig-Holstein ist der Eigentümer bzw. Vermieter für die Installation und Wartung der Rauchmelder verantwortlich (Landesbauordnung). Als Hausverwaltung oder Vermieter können Sie diese Pflicht an uns als zertifizierten Fachbetrieb delegieren."
        }
      },
      {
        "@type": "Question",
        "name": "Was kostet die Rauchmelder-Wartung in Kiel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die Kosten für die Rauchmelder-Wartung hängen von der Anzahl der Rauchmelder und dem Objekt ab. Für Mehrfamilienhäuser bieten wir attraktive Pauschalpreise. Kontaktieren Sie uns für ein individuelles, transparentes Angebot für Ihre Immobilie in Kiel."
        }
      },
      {
        "@type": "Question",
        "name": "Wann müssen Rauchmelder ausgetauscht werden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rauchmelder haben eine Lebensdauer von 10 Jahren ab Herstellungsdatum. Aktuell steht die große Austauschperiode 2026/2027 an, da viele Rauchmelder zwischen 2016-2017 installiert wurden. Wir prüfen bei der Wartung automatisch das Alter und informieren Sie rechtzeitig über notwendige Austausche."
        }
      },
      {
        "@type": "Question",
        "name": "Erhalte ich eine Dokumentation der Rauchmelder-Wartung?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, Sie erhalten nach jeder Wartung eine digitale Dokumentation gemäß DIN 14676 mit Wartungsprotokoll, Prüfbescheinigung und bei Bedarf Fotodokumentation. Diese Nachweise sind wichtig für Versicherungen und erfüllen alle gesetzlichen Anforderungen."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Rauchmelder Service Kiel nach DIN 14676 | Wartung & Installation - amplius Cleantech"
        description="Zertifizierter Rauchmelder Service in Kiel ✓ Installation nach DIN 14676 ✓ Wartung ✓ Austausch 2026/2027 ✓ Für Mehrfamilienhäuser ✓ Dokumentation ✓ Gesetzeskonform → Jetzt Angebot sichern!"
        keywords="Rauchmelder Wartung Kiel, Rauchmelder Installation Kiel, DIN 14676, Rauchwarnmelder, Rauchmelder Austausch, Mehrfamilienhäuser, Rauchmelder Service, Wartung 2026"
        canonical="https://amplius-cleantech.de/rauchmelder"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-1 lg:px-8 bg-white border-b border-gray-200 shadow-sm">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="CleanTech Smart Facility Service" 
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
              Angebot anfragen
            </button>
          </div>
        </div>
      </nav>
      <Breadcrumb items={[{ label: 'Rauchmelder Service' }]} />

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
              Rauchmelder Service nach DIN 14676
            </div>
            <h1 className="text-5xl lg:text-6xl mb-6 text-gray-900 leading-tight tracking-tight">
              Rauchmelder für <span className="text-pink-500">Mehrfamilienhäuser</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Professioneller Rauchmelder Service nach DIN 14676 für Vermieter und Hausverwaltungen in Kiel und Umgebung. 
              Installation, Wartung und Ferninspektion von Q-zertifizierten Rauchmeldern – gesetzeskonform und digital dokumentiert.
            </p>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={smokeDetectorImg} 
                alt="Rauchmelder Service nach DIN 14676" 
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full mb-4 text-sm">
              Leistungsübersicht
            </div>
            <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
              Unsere Rauchmelder-Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Komplett-Service für maximale Sicherheit
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4 p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-xl hover:border-pink-300 transition-all">
              <div className="flex-shrink-0">
                <div className="p-3 bg-pink-100 rounded-xl">
                  <Shield className="h-6 w-6 text-pink-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2 text-gray-900">Installation</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Fachgerechte Montage nach DIN 14676 und Landesbauordnung
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Bedarfsanalyse vor Ort</li>
                  <li>• Optimale Platzierung</li>
                  <li>• Hochwertige Geräte</li>
                  <li>• Inbetriebnahme & Test</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4 p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-xl hover:border-pink-300 transition-all">
              <div className="flex-shrink-0">
                <div className="p-3 bg-pink-100 rounded-xl">
                  <Bell className="h-6 w-6 text-pink-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2 text-gray-900">Wartung & Prüfung</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Jährliche Inspektion gemäß DIN 14676 mit Protokoll
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Funktionsprüfung</li>
                  <li>• Sichtprüfung</li>
                  <li>• Batteriewechsel</li>
                  <li>• Prüfprotokoll</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4 p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-xl hover:border-pink-300 transition-all">
              <div className="flex-shrink-0">
                <div className="p-3 bg-pink-100 rounded-xl">
                  <CheckCircle className="h-6 w-6 text-pink-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2 text-gray-900">Dokumentation</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Lückenlose digitale Dokumentation aller Leistungen
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Montageprotokoll</li>
                  <li>• Wartungsnachweise</li>
                  <li>• Prüfbescheinigung</li>
                  <li>• Online-Zugang</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4 p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-xl hover:border-pink-300 transition-all">
              <div className="flex-shrink-0">
                <div className="p-3 bg-pink-100 rounded-xl">
                  <AlertTriangle className="h-6 w-6 text-pink-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2 text-gray-900">Sondermelder</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Spezielle Lösungen für besondere Anforderungen
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Funkvernetzte Melder</li>
                  <li>• Melder für Gehörlose</li>
                  <li>• Küchen-/Badmelder</li>
                  <li>• Smart Home Integration</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4 p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-xl hover:border-pink-300 transition-all">
              <div className="flex-shrink-0">
                <div className="p-3 bg-pink-100 rounded-xl">
                  <Phone className="h-6 w-6 text-pink-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2 text-gray-900">Vermieterservice</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Komplettservice für Vermieter und Hausverwaltungen
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Objektbetreuung</li>
                  <li>• Mieterkommunikation</li>
                  <li>• Terminkoordination</li>
                  <li>• Sammelabrechnung</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4 p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-xl hover:border-pink-300 transition-all">
              <div className="flex-shrink-0">
                <div className="p-3 bg-pink-100 rounded-xl">
                  <Mail className="h-6 w-6 text-pink-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2 text-gray-900">Notfall-Service</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Schnelle Hilfe bei Störungen und Defekten
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 24/7 Erreichbarkeit</li>
                  <li>• Kurzfristige Termine</li>
                  <li>• Ersatzgeräte</li>
                  <li>• Reparatur vor Ort</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Why Choose Us Section */}
      <WhyChooseUs 
        serviceName="Rauchmelder Service in Kiel"
        serviceKeywords={['Rauchmelder Wartung', 'Installation', 'DIN 14676']}
      />

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full mb-4 text-sm">
              Häufig gestellte Fragen
            </div>
            <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
              Ihre Fragen zum Rauchmelder Service
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

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-pink-500 via-pink-600 to-pink-700 rounded-3xl p-12 lg:p-16">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 text-center text-white">
              <h2 className="text-4xl lg:text-5xl mb-6">
                Sichern Sie sich jetzt ab!
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
                  Rauchmelder Service Kiel anfragen
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
      <RelatedServices currentService="rauchmelder" />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Rauchmelder;
