import { useState, useEffect } from 'react';
import { Bell, Shield, CheckCircle, ArrowRight, Zap, Target } from 'lucide-react';
import smokeDetectorImg from 'figma:asset/e5e0e628e8e1eb60e93b4177294950eae4ce25db.png';

const bannerContent = [
  {
    icon: Zap,
    badge: 'Smart & Effizient',
    title: '360° Rauchmelder Service. Installation & Wartung',
    subtitle: 'Schneller • Kosteneffizienter • Besser • Smart • Kundenorientiert • 100% Ergebnis',
    features: [
      'DIN 14676 konform',
      'Digitale Dokumentation',
      'Festpreisgarantie',
      'Zertifizierte Fachkräfte',
      '24/7 Verfügbarkeit',
      '100% Qualitätsgarantie'
    ],
    ctaText: 'Jetzt Termin vereinbaren',
    bgGradient: 'from-pink-500 to-pink-600',
    statsLabel: 'Garantie',
    statsValue: '100%'
  },
  {
    icon: Zap,
    badge: 'Smart & Effizient',
    title: '360° Rauchmelder Service. Installation & Wartung',
    subtitle: 'Schneller • Kosteneffizienter • Besser • Smart • Kundenorientiert • 100% Ergebnis',
    features: [
      'DIN 14676 konform',
      'Digitale Dokumentation',
      'Festpreisgarantie',
      'Zertifizierte Fachkräfte',
      '24/7 Verfügbarkeit',
      '100% Qualitätsgarantie'
    ],
    ctaText: 'Jetzt Termin vereinbaren',
    bgGradient: 'from-gray-800 to-gray-900',
    statsLabel: 'Garantie',
    statsValue: '100%'
  }
];

export function PromoBanner() {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerContent.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const current = bannerContent[currentBanner];
  const Icon = current.icon;

  return (
    <section className="py-12 lg:py-16 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative">
          {bannerContent.map((content, index) => (
            <div
              key={index}
              className={`transition-opacity duration-1000 ${
                index === currentBanner ? 'opacity-100' : 'opacity-0 absolute inset-0'
              }`}
            >
              <div className={`relative bg-gradient-to-r ${content.bgGradient} rounded-3xl overflow-hidden shadow-2xl`}>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
                
                <div className="relative grid lg:grid-cols-2 gap-8 items-center p-6 lg:p-12">
                  {/* Left Side - Content */}
                  <div>
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 lg:mb-6">
                      <Icon className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
                      <span className="text-white font-semibold text-sm lg:text-base">{content.badge}</span>
                    </div>
                    
                    <h2 className="text-2xl lg:text-4xl text-white mb-4 leading-tight">
                      {content.title}
                    </h2>

                    <div className="grid grid-cols-2 gap-3 lg:gap-4 mb-6 lg:mb-8">
                      {content.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 lg:h-5 lg:w-5 text-white flex-shrink-0" />
                          <span className="text-white font-medium text-sm lg:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button className="bg-white text-pink-600 px-6 py-3 lg:px-8 lg:py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group text-sm lg:text-base">
                      {content.ctaText}
                      <ArrowRight className="h-4 w-4 lg:h-5 lg:w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Right Side - Visual Element */}
                  <div className="relative hidden lg:block">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl transform rotate-3"></div>
                    <div className="relative bg-white/20 backdrop-blur-sm rounded-2xl overflow-hidden transform -rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl animate-pulse">
                      <img 
                        src={smokeDetectorImg} 
                        alt="Rauchmelder Service" 
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Gütesiegel Badge */}
                      <div className="absolute top-6 right-6 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full p-6 shadow-2xl border-4 border-white transform hover:scale-110 transition-transform">
                        <div className="text-center">
                          <Shield className="h-8 w-8 text-white mx-auto mb-1" />
                          <div className="text-white font-bold text-xs leading-tight">DIN 14676</div>
                          <div className="text-white text-[10px] font-semibold">ZERTIFIZIERT</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Indicators */}
                <div className="absolute bottom-4 lg:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 lg:gap-3">
                  {bannerContent.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentBanner(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentBanner 
                          ? 'w-8 lg:w-12 bg-white' 
                          : 'w-2 bg-white/40 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}