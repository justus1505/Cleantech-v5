import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Leaf, Trees, Snowflake, Sprout, Trash2, Phone, Mail, ChevronDown } from 'lucide-react';
import logo from 'figma:asset/dcb51d1a292ff54aef6e88b5901410915a0793c7.png';
import facilityImg from 'figma:asset/59b9b2391260f1cd5b6613f9280a9e16e429125c.png';
import { useEffect, useState } from 'react';
import { Footer } from '../Footer';
import { SEOHead } from '../SEOHead';
import { Breadcrumb } from '../Breadcrumb';
import { RelatedServices } from '../RelatedServices';
import { WhyChooseUs } from '../WhyChooseUs';

export function Anlagenpflege() {
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
        "name": "Anlagenpflege",
        "item": "https://amplius-cleantech.de/anlagenpflege"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Anlagenpflege",
    "name": "Anlagenpflege und Grünflächenpflege Kiel",
    "description": "Professionelle Außenanlagenpflege, Grünpflege und Winterdienst für Mehrfamilienhäuser und Wohnanlagen in Kiel. Gartenpflege, Rasenpflege, Heckenschnitt und mehr.",
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
        "name": "Was gehört zur Anlagenpflege für Mehrfamilienhäuser?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zur Anlagenpflege gehören Rasenpflege und Rasenmähen, Heckenschnitt, Laubbeseitigung, Unkrautentfernung, Winterdienst mit Schneeräumung und Streudienst sowie Pflege von Grünflächen und Beeten. Wir bieten ganzjährige Betreuung Ihrer Außenanlagen in Kiel."
        }
      },
      {
        "@type": "Question",
        "name": "Wann sollte der Winterdienst beauftragt werden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Der Winterdienst sollte idealerweise vor Beginn der kalten Jahreszeit, spätestens im Oktober/November beauftragt werden. So sind Sie bei plötzlichem Schneefall abgesichert. Wir bieten Winterdienst-Verträge mit garantierter Verfügbarkeit und schnellen Reaktionszeiten."
        }
      },
      {
        "@type": "Question",
        "name": "Wie oft muss der Rasen gemäht werden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In der Hauptwachstumsphase von April bis Oktober empfehlen wir eine wöchentliche bis 14-tägige Rasenmahd. Die genaue Frequenz hängt von Wetter, Jahreszeit und Rasenwachstum ab. Wir passen den Rhythmus flexibel an die Bedürfnisse Ihrer Grünfläche an."
        }
      },
      {
        "@type": "Question",
        "name": "Bieten Sie auch Heckenschnitt und Strauchpflege an?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wir übernehmen professionellen Heckenschnitt, Strauchpflege und Formschnitt für Ihre Wohnanlage. Je nach Heckenart empfehlen wir 1-2 Schnitte pro Jahr (Frühjahr und Herbst). Auch Rückschnitte von Sträuchern und Zierpflanzen gehören zu unserem Leistungsumfang."
        }
      },
      {
        "@type": "Question",
        "name": "Wie funktioniert die Abrechnung bei Winterdienst?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wir bieten flexible Abrechnungsmodelle: Pauschale Winterdienst-Verträge für Planungssicherheit oder Abrechnung nach tatsächlichem Einsatz. Bei Bedarf erhalten Sie digitale Dokumentation jedes Einsatzes mit Zeitstempel und Fotodokumentation für vollste Transparenz."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Anlagenpflege Kiel | Grünpflege & Winterdienst für Mehrfamilienhäuser - amplius Cleantech"
        description="Professionelle Anlagenpflege in Kiel ✓ Grünflächenpflege ✓ Winterdienst ✓ Gartenpflege ✓ Rasenpflege ✓ Heckenschnitt für Wohnanlagen ✓ Ganzjährig zuverlässig → Jetzt Angebot anfordern!"
        keywords="Anlagenpflege Kiel, Grünpflege Kiel, Winterdienst Kiel, Gartenpflege Mehrfamilienhäuser, Rasenpflege, Heckenschnitt, Außenanlagenpflege, Wohnanlagen"
        canonical="https://amplius-cleantech.de/anlagenpflege"
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
      <Breadcrumb items={[{ label: 'Anlagenpflege' }]} />

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
              Professionelle Außenanlagenpflege
            </div>
            <h1 className="text-5xl lg:text-6xl mb-6 text-gray-900 leading-tight tracking-tight">
              Außenanlagenpflege für <span className="text-pink-500">Wohnanlagen</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Professionelle Grünpflege und Winterdienst für Mehrfamilienhäuser und Hausverwaltungen in Kiel und Umgebung. 
              Von Rasenpflege und Heckenschnitt bis Schneeräumung – ganzjährig zuverlässig und termingerecht.
            </p>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={facilityImg} 
                alt="Professionelle Außenanlagenpflege" 
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
              Unsere Pflegeleistungen
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ganzjährige Betreuung Ihrer Außenanlagen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4 p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-xl hover:border-pink-300 transition-all">
              <div className="flex-shrink-0">
                <div className="p-3 bg-pink-100 rounded-xl">
                  <Trees className="h-6 w-6 text-pink-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2 text-gray-900">Grünpflege</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Grünpflege für Wohnanlagen
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Rasenmähen</li>
                  <li>• Heckenschnitt</li>
                  <li>• Unkrautentfernung</li>
                  <li>• Laubentfernung</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4 p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-xl hover:border-pink-300 transition-all">
              <div className="flex-shrink-0">
                <div className="p-3 bg-pink-100 rounded-xl">
                  <Snowflake className="h-6 w-6 text-pink-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2 text-gray-900">Winterdienst</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Zuverlässiger Winterdienst mit Streupflicht
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Schneeräumung</li>
                  <li>• Streudienst</li>
                  <li>• Gehwege & Parkplätze</li>
                  <li>• Verkehrssicherung</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4 p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-xl hover:border-pink-300 transition-all">
              <div className="flex-shrink-0">
                <div className="p-3 bg-pink-100 rounded-xl">
                  <Sprout className="h-6 w-6 text-pink-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2 text-gray-900">Wegereinigung</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Reinigung von Wegen und Parkplätzen
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Gehwege kehren</li>
                  <li>• Parkplatzreinigung</li>
                  <li>• Hofflächenreinigung</li>
                  <li>• Unkrautbekämpfung</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4 p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-xl hover:border-pink-300 transition-all">
              <div className="flex-shrink-0">
                <div className="p-3 bg-pink-100 rounded-xl">
                  <Trash2 className="h-6 w-6 text-pink-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2 text-gray-900">Müllplatzbetreuung</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Müllplatz- und Containerbetreuung
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Müllplatz reinigen</li>
                  <li>• Container-Stellplätze</li>
                  <li>• Sperrmüll koordinieren</li>
                  <li>• Ordnung & Sauberkeit</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4 p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-xl hover:border-pink-300 transition-all md:col-span-2 lg:col-span-1">
              <div className="flex-shrink-0">
                <div className="p-3 bg-pink-100 rounded-xl">
                  <Leaf className="h-6 w-6 text-pink-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2 text-gray-900">Saisonale Pflege</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Saisonale Pflege das ganze Jahr
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Frühjahrspflege</li>
                  <li>• Sommerpflege</li>
                  <li>• Herbstpflege</li>
                  <li>• Wintervorbereitung</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Why Choose Us Section */}
      <WhyChooseUs 
        serviceName="Anlagenpflege in Kiel"
        serviceKeywords={['Grünpflege', 'Winterdienst', 'Gartenpflege']}
      />

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full mb-4 text-sm">
              Häufig gestellte Fragen
            </div>
            <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
              Ihre Fragen zur Anlagenpflege
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
                Bereit für perfekt gepflegte Außenanlagen?
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
                  Anlagenpflege Kiel anfragen
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
      <RelatedServices currentService="anlagenpflege" />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Anlagenpflege;