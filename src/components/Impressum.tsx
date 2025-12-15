import { ArrowLeft } from 'lucide-react';

interface ImpressumProps {
  onBack: () => void;
}

export function Impressum({ onBack }: ImpressumProps) {
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
        <h1 className="text-4xl lg:text-5xl mb-8 text-gray-900">Impressum</h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl text-gray-900 mb-4">Angaben gemäß § 5 TMG / § 18 Abs. 2 MStV</h2>
            <p className="text-gray-700 leading-relaxed">
              amplius Cleantech UG (haftungsbeschränkt)<br />
              Strandstraße 55<br />
              24229 Strande<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-gray-900 mb-4">Vertreten durch</h2>
            <p className="text-gray-700 leading-relaxed">
              Geschäftsführer: Justus Schmid
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-gray-900 mb-4">Kontakt</h2>
            <p className="text-gray-700 leading-relaxed">
              Telefon: <a href="tel:+4915233195642" className="text-pink-600 hover:underline">+49 152 33 91 56 42</a><br />
              E-Mail: <a href="mailto:info@cleantech-services.de" className="text-pink-600 hover:underline">info@cleantech-services.de</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-gray-900 mb-4">Registereintrag</h2>
            <p className="text-gray-700 leading-relaxed">
              Eingetragen im Handelsregister<br />
              Registergericht: Kiel<br />
              Registernummer: HRB 27148 KI
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-gray-900 mb-4">Umsatzsteuer-ID</h2>
            <p className="text-gray-700 leading-relaxed">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE369361874
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-gray-900 mb-4">Zuständige Kammer</h2>
            <p className="text-gray-700 leading-relaxed">
              Industrie- und Handelskammer zu Kiel
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-gray-900 mb-4">Tätigkeitsbereiche</h2>
            <p className="text-gray-700 leading-relaxed">
              Unterhaltsreinigung, Anlagenpflege, Hausmeisterservice, Rauchmelder-Service
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-gray-900 mb-4">Haftungsausschluss</h2>
            
            <h3 className="text-xl text-gray-900 mb-3 mt-6">Haftung für Inhalte</h3>
            <p className="text-gray-700 leading-relaxed">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
              zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            
            <h3 className="text-xl text-gray-900 mb-3 mt-6">Haftung für Links</h3>
            <p className="text-gray-700 leading-relaxed">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
            
            <h3 className="text-xl text-gray-900 mb-3 mt-6">Urheberrecht</h3>
            <p className="text-gray-700 leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Impressum;