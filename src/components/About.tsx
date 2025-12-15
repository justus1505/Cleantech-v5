import logo from 'figma:asset/dcb51d1a292ff54aef6e88b5901410915a0793c7.png';

export function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header with Logo */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <img 
              src={logo} 
              alt="CleanTech Smart Facility Service" 
              className="h-32 lg:h-40"
              loading="lazy"
            />
          </div>
          <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full mb-4 text-sm">
            Über uns
          </div>
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            Über CleanTech
          </h2>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Text Content */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
              <span className="text-pink-600 font-semibold">Cleantech wurde von uns als Immobilienunternehmer gegründet</span> – mit dem Anspruch, einen Facility Service zu schaffen, der Eigentümer, Verwaltungen und Bewohner gleichermaßen, nachhaltig zufriedenstellt.
            </p>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
              Wir gestalten einen Service, der diese klassischen Schwächen der Branche konsequent adressiert – <span className="font-semibold text-gray-900">strukturiert, verlässlich und vollständig digital</span>.
            </p>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
              Unser Fokus: <span className="text-pink-600 font-semibold">Qualität, die sichtbar ist</span>. Einsätze, die nachvollziehbar sind. Prozesse, die funktionieren.
            </p>
            <p className="text-lg lg:text-xl text-gray-900 font-semibold leading-relaxed">
              Cleantech steht für Facility Services, wie wir sie selbst als Eigentümer erwarten würden.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}