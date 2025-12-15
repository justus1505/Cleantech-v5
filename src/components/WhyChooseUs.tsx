import { CheckCircle2, Smartphone, Euro, Clock, MapPin } from 'lucide-react';

interface WhyChooseUsProps {
  serviceName: string;
  serviceKeywords: string[];
}

export function WhyChooseUs({ serviceName, serviceKeywords }: WhyChooseUsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: USPs */}
          <div>
            <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full mb-4 text-sm">
              Ihre Vorteile
            </div>
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-6">
              Warum amplius Cleantech für {serviceName}?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Als regionaler Facility-Dienstleister in Kiel kombinieren wir moderne Technologie 
              mit persönlichem Service. Wir sind Ihr zuverlässiger Partner für {serviceKeywords.join(', ')}.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="p-2 bg-pink-100 rounded-lg">
                    <Smartphone className="h-5 w-5 text-pink-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg mb-1 text-gray-900">Digitale Dokumentation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Fotodokumentation, Zeiterfassung und transparente Berichte für jede durchgeführte Leistung. 
                    Volle Kontrolle und Nachvollziehbarkeit für Hausverwaltungen.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="p-2 bg-pink-100 rounded-lg">
                    <Euro className="h-5 w-5 text-pink-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg mb-1 text-gray-900">Transparente Preise</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Klare Festpreise ohne versteckte Kosten. Sie wissen genau, was Sie bezahlen. 
                    Kostenlose Besichtigung und individuelle Angebotserstellung.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="p-2 bg-pink-100 rounded-lg">
                    <Clock className="h-5 w-5 text-pink-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg mb-1 text-gray-900">24/7 Erreichbarkeit</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Notfall-Hotline für dringende Anfragen. Schnelle Reaktionszeiten bei Wartungsfällen 
                    und flexiblen Terminvereinbarungen.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="p-2 bg-pink-100 rounded-lg">
                    <MapPin className="h-5 w-5 text-pink-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg mb-1 text-gray-900">Regionaler Service in Kiel</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Kurze Wege, schnelle Reaktionszeiten. Wir sind Ihr lokaler Partner mit tiefem 
                    Verständnis für die Anforderungen in Kiel und Umgebung.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Process Steps */}
          <div className="bg-gradient-to-br from-pink-50 to-white rounded-3xl p-8 lg:p-10 border border-pink-100">
            <h3 className="text-2xl text-gray-900 mb-8">So einfach geht's</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center">
                    1
                  </div>
                </div>
                <div>
                  <h4 className="text-lg mb-1 text-gray-900">Anfrage stellen</h4>
                  <p className="text-gray-600">
                    Kontaktieren Sie uns telefonisch oder per E-Mail. Wir besprechen Ihre Anforderungen.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center">
                    2
                  </div>
                </div>
                <div>
                  <h4 className="text-lg mb-1 text-gray-900">Kostenlose Besichtigung</h4>
                  <p className="text-gray-600">
                    Wir besichtigen Ihr Objekt vor Ort und erstellen ein individuelles Angebot.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center">
                    3
                  </div>
                </div>
                <div>
                  <h4 className="text-lg mb-1 text-gray-900">Angebot & Auftrag</h4>
                  <p className="text-gray-600">
                    Sie erhalten ein transparentes Angebot. Bei Zusage starten wir zeitnah.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center">
                    4
                  </div>
                </div>
                <div>
                  <h4 className="text-lg mb-1 text-gray-900">Zuverlässige Ausführung</h4>
                  <p className="text-gray-600">
                    Professionelle Durchführung mit digitaler Dokumentation und Qualitätskontrolle.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white rounded-xl border border-pink-200">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-pink-600 flex-shrink-0" />
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-gray-900">Kostenlose Erstberatung:</span> Keine Anfahrtskosten im Raum Kiel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
