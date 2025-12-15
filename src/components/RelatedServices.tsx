import { useNavigate } from 'react-router-dom';
import { Building2, Leaf, Bell, Wrench, ArrowRight } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: any;
  path: string;
  keywords: string;
}

interface RelatedServicesProps {
  currentService: 'reinigung' | 'anlagenpflege' | 'rauchmelder' | 'wartung';
}

export function RelatedServices({ currentService }: RelatedServicesProps) {
  const navigate = useNavigate();

  const allServices: Record<string, Service> = {
    reinigung: {
      title: 'Gebäudereinigung Kiel',
      description: 'Professionelle Treppenhausreinigung und Unterhaltsreinigung für Mehrfamilienhäuser',
      icon: Building2,
      path: '/reinigung',
      keywords: 'Treppenhausreinigung • Büroreinigung • Glasreinigung'
    },
    anlagenpflege: {
      title: 'Anlagenpflege Kiel',
      description: 'Grünpflege, Winterdienst und Außenanlagenpflege für Ihre Immobilie',
      icon: Leaf,
      path: '/anlagenpflege',
      keywords: 'Winterdienst • Grünpflege • Gartenpflege'
    },
    rauchmelder: {
      title: 'Rauchmelder Service Kiel',
      description: 'Installation, Wartung und Austausch nach DIN 14676 - gesetzeskonform',
      icon: Bell,
      path: '/rauchmelder',
      keywords: 'DIN 14676 • Installation • Wartung'
    },
    wartung: {
      title: 'Wartung & Reparatur Kiel',
      description: 'Hausmeisterservice und technische Wartung für Wohn- und Gewerbeimmobilien',
      icon: Wrench,
      path: '/wartung',
      keywords: 'Hausmeisterservice • Kleinreparaturen • Objektbetreuung'
    }
  };

  // Filter out current service
  const relatedServices = Object.entries(allServices)
    .filter(([key]) => key !== currentService)
    .map(([_, service]) => service);

  return (
    <section className="py-20 bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full mb-4 text-sm">
            Weitere Services
          </div>
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            Unsere weiteren Facility Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Komplettlösungen für Ihre Immobilie - alles aus einer Hand
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {relatedServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-pink-300 hover:shadow-xl transition-all cursor-pointer"
                onClick={() => navigate(service.path)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-pink-100 rounded-xl group-hover:bg-pink-500 transition-colors">
                    <Icon className="h-6 w-6 text-pink-600 group-hover:text-white transition-colors" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-pink-600 group-hover:translate-x-1 transition-all" />
                </div>
                
                <h3 className="text-xl mb-3 text-gray-900 group-hover:text-pink-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="text-sm text-gray-500 border-t border-gray-200 pt-4">
                  {service.keywords}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 transition-colors"
          >
            <span>Alle Services ansehen</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
