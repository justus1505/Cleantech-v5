import { Sparkles, Leaf, ShieldCheck, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import cleaningImg from '@assets/service-reinigung.png';
import facilityImg from '@assets/service-anlagenpflege.png';
import smokeDetectorImg from '@assets/service-rauchmelder.png';
import maintenanceImg from '@assets/service-wartung.png';

const services = [
  {
    icon: Sparkles,
    title: 'Treppenhausreinigung',
    image: cleaningImg,
    link: '/reinigung',
    features: [
      'Unterhaltsreinigung für Treppenhäuser in Mehrfamilienhäusern',
      'Professionelle Büro- und Gewerbereinigung',
      'Bauendreinigung nach DIN-Vorgaben',
      'Glasreinigung für streifenfreien Durchblick',
      'Sonderreinigungen für Hausverwaltungen'
    ]
  },
  {
    icon: Leaf,
    title: 'Außenanlagenpflege',
    image: facilityImg,
    link: '/anlagenpflege',
    features: [
      'Grünpflege für Wohnanlagen',
      'Zuverlässiger Winterdienst mit Streupflicht',
      'Reinigung von Wegen und Parkplätzen',
      'Saisonale Pflege das ganze Jahr',
      'Müllplatz- und Containerbetreuung'
    ]
  },
  {
    icon: ShieldCheck,
    title: 'Rauchmelder Service',
    image: smokeDetectorImg,
    link: '/rauchmelder',
    features: [
      'Q-zertifizierte Rauchmelder für Mehrfamilienhäuser',
      'Fachgerechte Montage nach DIN 14676',
      'Jährliche Wartung & Ferninspektion (AES-128)',
      'Digitale Dokumentation für Vermieter',
      'Austausch defekter Geräte inklusive'
    ]
  },
  {
    icon: Home,
    title: 'Hausmeisterservice',
    image: maintenanceImg,
    link: '/wartung',
    features: [
      'Technischer Hausmeisterservice für Wohnanlagen',
      'Schnelle Kleinreparaturen im Gebäude',
      'Maler- und Renovierungsarbeiten',
      'Koordination externer Fachhandwerker',
      'Regelmäßige Sichtkontrollen & Wartung'
    ]
  }
];

export function Services() {
  const navigate = useNavigate();
  
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full mb-4 text-sm">
            Unsere Services
          </div>
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            Alles aus einer Hand
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Umfassende Dienstleistungen für Ihr Gebäude- und Facility-Management
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                onClick={() => navigate(service.link)}
                className="group relative bg-white rounded-2xl border border-gray-200 hover:border-pink-300 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden cursor-pointer"
              >
                {/* Flip Card Container */}
                <div className="relative h-48 [perspective:1000px]">
                  <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    
                    {/* Front: Image */}
                    <div className="absolute inset-0 [backface-visibility:hidden]">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      {/* Soft Icon Overlay on Image */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="inline-flex p-4 bg-white/30 backdrop-blur-sm rounded-2xl border border-white/30">
                          <Icon className="h-12 w-12 text-white opacity-70" strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Back: Icon on Pink Background */}
                    <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-4">
                        <Icon className="h-16 w-16 text-white" strokeWidth={1.5} />
                      </div>
                    </div>
                    
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl mb-4 text-gray-900 text-center">
                    {service.title}
                  </h3>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700 min-h-[3rem]">
                        <div className="h-1.5 w-1.5 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button 
                    className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition-all hover:shadow-lg"
                  >
                    Mehr erfahren
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
