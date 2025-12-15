import { Shield, Clock, Users, Award, Leaf, HeadphonesIcon } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Versichert & Zertifiziert',
    description: 'Vollumfängliche Versicherung und alle notwendigen Zertifizierungen für Ihre Sicherheit.'
  },
  {
    icon: Clock,
    title: '24/7 Erreichbarkeit',
    description: 'Rund um die Uhr für Sie da – auch bei Notfällen und dringenden Anfragen.'
  },
  {
    icon: Users,
    title: 'Geschultes Personal',
    description: 'Professionell ausgebildete Mitarbeiter mit langjähriger Erfahrung.'
  },
  {
    icon: Award,
    title: 'Qualitätsgarantie',
    description: 'Höchste Qualitätsstandards und regelmäßige Qualitätskontrollen.'
  },
  {
    icon: Leaf,
    title: 'Umweltfreundlich',
    description: 'Nachhaltige Reinigungsmittel und umweltschonende Verfahren.'
  },
  {
    icon: HeadphonesIcon,
    title: 'Persönlicher Support',
    description: 'Ihr fester Ansprechpartner für alle Fragen und Anliegen.'
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full mb-4 text-sm">
            Warum amplius Cleantech?
          </div>
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            Ihr regionaler Partner vor Ort
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Was uns als Facility-Dienstleister für Mehrfamilienhäuser auszeichnet
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex gap-4 p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-xl hover:border-pink-300 transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="p-3 bg-pink-100 rounded-xl">
                    <Icon className="h-6 w-6 text-pink-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-pink-500 to-pink-600 rounded-3xl p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl mb-2">15+</div>
              <div className="text-pink-100">Jahre Erfahrung</div>
            </div>
            <div>
              <div className="text-4xl mb-2">500+</div>
              <div className="text-pink-100">Aktive Kunden</div>
            </div>
            <div>
              <div className="text-4xl mb-2">50+</div>
              <div className="text-pink-100">Mitarbeiter</div>
            </div>
            <div>
              <div className="text-4xl mb-2">10k+</div>
              <div className="text-pink-100">Services pro Jahr</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}