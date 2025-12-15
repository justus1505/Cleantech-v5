import { MessageSquare, FileText, CheckCircle, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Bedarfsermittlung',
    description: 'Wir analysieren Ihre spezifischen Anforderungen und erfassen alle relevanten Details vor Ort oder digital.',
    icon: MessageSquare,
    color: 'pink'
  },
  {
    number: '02',
    title: 'Angebotserstellung & Konzept',
    description: 'Sie erhalten ein transparentes, detailliertes Angebot mit maßgeschneidertem Service-Konzept.',
    icon: FileText,
    color: 'pink'
  },
  {
    number: '03',
    title: 'Inhaltliche Finalisierung',
    description: 'Gemeinsam besprechen wir alle Details und stimmen den Service-Umfang exakt auf Ihre Bedürfnisse ab.',
    icon: CheckCircle,
    color: 'pink'
  },
  {
    number: '04',
    title: 'Start der Arbeiten',
    description: 'Nach finaler Abstimmung starten wir zeitnah mit der professionellen Durchführung Ihrer Services.',
    icon: Rocket,
    color: 'pink'
  }
];

export function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full mb-4 text-sm">
            Unser Prozess
          </div>
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            Von der Anfrage zum Service
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Schnell, transparent und unkompliziert – Ihr neuer Service kann{' '}
            <span className="text-pink-600">bereits in wenigen Tagen</span> starten
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400" 
               style={{ width: 'calc(100% - 160px)', left: '80px' }}>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Step Card */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-pink-300 h-full">
                    {/* Icon Circle */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg mx-auto">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      {/* Step Number Badge */}
                      <div className="absolute -top-2 -right-2 w-10 h-10 bg-white border-2 border-pink-500 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-pink-600 text-sm">{step.number}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl text-gray-900 mb-3 text-center">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow Between Steps - Mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <ArrowRight className="h-6 w-6 text-pink-400 rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-pink-50 rounded-2xl p-8 border border-pink-200">
            <div className="text-left">
              <h3 className="text-2xl text-gray-900 mb-2">
                Bereit zu starten?
              </h3>
              <p className="text-gray-600">
                Kontaktieren Sie uns noch heute für ein unverbindliches Angebot
              </p>
            </div>
            <a href="#contact">
              <button className="bg-pink-500 text-white px-8 py-4 rounded-full hover:bg-pink-600 transition-all hover:shadow-lg flex items-center gap-2 shrink-0">
                Jetzt anfragen
                <ArrowRight className="h-5 w-5" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}