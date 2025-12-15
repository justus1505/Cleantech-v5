import { FileCheck, Euro, Clock, MapPin, Sparkles, Shield, Zap, Award } from 'lucide-react';

const benefits = [
  { icon: FileCheck, text: 'Digitale Dokumentation' },
  { icon: Euro, text: 'Transparente Preise' },
  { icon: Clock, text: '24/7 Verfügbarkeit' },
  { icon: MapPin, text: 'Regionaler Service' },
  { icon: Sparkles, text: 'Professionelle Qualität' },
  { icon: Shield, text: 'Zuverlässig & Sicher' },
  { icon: Zap, text: 'Schnelle Reaktionszeit' },
  { icon: Award, text: 'Zertifizierte Experten' },
];

export function ScrollingBanner() {
  // Duplicate benefits for seamless loop
  const duplicatedBenefits = [...benefits, ...benefits, ...benefits];

  return (
    <div className="relative bg-pink-500 py-6 overflow-hidden">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-pink-500 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-pink-500 to-transparent z-10"></div>
      
      {/* Scrolling content */}
      <div className="flex gap-12 animate-scroll whitespace-nowrap">
        {duplicatedBenefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <div key={index} className="flex items-center gap-3 text-white">
              <Icon className="h-6 w-6 shrink-0" />
              <span className="font-semibold text-lg">{benefit.text}</span>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll 25s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
