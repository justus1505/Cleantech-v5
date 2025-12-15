import { ArrowLeft } from 'lucide-react';

interface DatenschutzProps {
  onBack: () => void;
}

export function Datenschutz({ onBack }: DatenschutzProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 lg:px-8 bg-white border-b border-gray-200 shadow-sm">
        <div className="mx-auto max-w-4xl">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Zurück zur Startseite
          </button>
        </div>
      </nav>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 pt-32 pb-16 lg:px-8">
        <h1 className="text-4xl lg:text-5xl mb-8 text-gray-900">Datenschutzerklärung</h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl text-gray-900 mb-4">1. Datenschutz auf einen Blick</h2>
            
            <h3 className="text-xl text-gray-900 mb-3 mt-6">Allgemeine Hinweise</h3>
            <p className="text-gray-700 leading-relaxed">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
              persönlich identifiziert werden können.
            </p>
            
            <h3 className="text-xl text-gray-900 mb-3 mt-6">Datenerfassung auf dieser Website</h3>
            <p className="text-gray-700 leading-relaxed">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
              können Sie dem Impressum dieser Website entnehmen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-gray-900 mb-4">2. Verantwortliche Stelle</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="text-gray-700 leading-relaxed">
              amplius Cleantech UG (haftungsbeschränkt)<br />
              Strandstraße 55<br />
              24229 Strande<br />
              Deutschland<br />
              <br />
              Telefon: <a href="tel:+4915233195642" className="text-pink-600 hover:underline">+49 152 33 91 56 42</a><br />
              E-Mail: <a href="mailto:info@cleantech-services.de" className="text-pink-600 hover:underline">info@cleantech-services.de</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-gray-900 mb-4">3. Datenerfassung auf dieser Website</h2>
            
            <h3 className="text-xl text-gray-900 mb-3 mt-6">a) Kontaktformular</h3>
            <p className="text-gray-700 leading-relaxed">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
              inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall 
              von Anschlussfragen bei uns gespeichert.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO
            </p>
            
            <h3 className="text-xl text-gray-900 mb-3 mt-6">b) Kontaktaufnahme per E-Mail oder Telefon</h3>
            <p className="text-gray-700 leading-relaxed">
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus 
              hervorgehenden personenbezogenen Daten zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-gray-900 mb-4">4. Analyse-Tools und Cookies</h2>
            
            <h3 className="text-xl text-gray-900 mb-3 mt-6">Cookiebot</h3>
            <p className="text-gray-700 leading-relaxed">
              Diese Website nutzt den Cookie-Consent-Dienst Cookiebot, um Ihre Einwilligungen zur Speicherung 
              bestimmter Cookies auf Ihrem Endgerät einzuholen.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. c DSGVO
            </p>
            
            <h3 className="text-xl text-gray-900 mb-3 mt-6">Google Analytics 4</h3>
            <p className="text-gray-700 leading-relaxed">
              Diese Website nutzt Google Analytics 4, einen Webanalysedienst der Google Ireland Limited. Google 
              Analytics verwendet Cookies, die eine Analyse Ihrer Benutzung der Website ermöglichen.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Die IP-Adresse wird vor der Speicherung anonymisiert. Die erhobenen Informationen können an Server 
              der Google LLC in den USA übertragen werden.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-gray-900 mb-4">5. Hosting</h2>
            <p className="text-gray-700 leading-relaxed">
              Diese Website wird bei GoDaddy gehostet. Personenbezogene Daten, die auf dieser Website erfasst werden, 
              werden auf den Servern des Hosters verarbeitet.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Es kann nicht ausgeschlossen werden, dass eine Datenübermittlung in die USA erfolgt. Die Übermittlung 
              erfolgt auf Grundlage von Standardvertragsklauseln der EU-Kommission.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-gray-900 mb-4">6. Externe Dienste</h2>
            
            <h3 className="text-xl text-gray-900 mb-3 mt-6">Google Maps</h3>
            <p className="text-gray-700 leading-relaxed">
              Diese Website nutzt Google Maps zur Darstellung interaktiver Karten. Dabei kann Google Kenntnis 
              über Ihre IP-Adresse erhalten.
            </p>
            
            <h3 className="text-xl text-gray-900 mb-3 mt-6">YouTube</h3>
            <p className="text-gray-700 leading-relaxed">
              Auf dieser Website sind Videos der Plattform YouTube eingebunden. Betreiber ist die Google Ireland Limited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-gray-900 mb-4">7. Social Media</h2>
            <p className="text-gray-700 leading-relaxed">
              Auf dieser Website befinden sich lediglich Verlinkungen zu unseren Profilen bei Instagram, LinkedIn 
              und Facebook. Es findet keine automatische Datenübertragung an die Plattformbetreiber statt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-gray-900 mb-4">8. Ihre Rechte</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung 
              sowie auf Datenübertragbarkeit Ihrer personenbezogenen Daten.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Zudem haben Sie ein Beschwerderecht bei der zuständigen Aufsichtsbehörde.
            </p>
            
            <h3 className="text-xl text-gray-900 mb-3 mt-6">Auskunftsrecht</h3>
            <p className="text-gray-700 leading-relaxed">
              Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden 
              und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend 
              den gesetzlichen Vorgaben.
            </p>
            
            <h3 className="text-xl text-gray-900 mb-3 mt-6">Recht auf Berichtigung</h3>
            <p className="text-gray-700 leading-relaxed">
              Sie haben entsprechend den gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie betreffenden 
              Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.
            </p>
            
            <h3 className="text-xl text-gray-900 mb-3 mt-6">Recht auf Löschung</h3>
            <p className="text-gray-700 leading-relaxed">
              Sie haben das Recht, entsprechend den gesetzlichen Vorgaben zu verlangen, dass Sie betreffende Daten 
              unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine Einschränkung 
              der Verarbeitung der Daten zu verlangen.
            </p>
            
            <h3 className="text-xl text-gray-900 mb-3 mt-6">Recht auf Datenübertragbarkeit</h3>
            <p className="text-gray-700 leading-relaxed">
              Sie haben das Recht, Sie betreffende Daten, die Sie uns bereitgestellt haben, entsprechend den 
              gesetzlichen Vorgaben in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder 
              die Übermittlung an einen anderen Verantwortlichen zu fordern.
            </p>
            
            <h3 className="text-xl text-gray-900 mb-3 mt-6">Beschwerderecht bei Aufsichtsbehörde</h3>
            <p className="text-gray-700 leading-relaxed">
              Sie haben ferner nach Maßgabe der gesetzlichen Vorgaben das Recht, eine Beschwerde bei der zuständigen 
              Aufsichtsbehörde einzureichen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-gray-900 mb-4">9. Widerruf Ihrer Einwilligung</h2>
            <p className="text-gray-700 leading-relaxed">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können 
              eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf 
              erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-gray-900 mb-4">10. SSL- bzw. TLS-Verschlüsselung</h2>
            <p className="text-gray-700 leading-relaxed">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine 
              SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile 
              des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Datenschutz;