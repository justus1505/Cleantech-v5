import { useState } from 'react';
import { X, Bell, ArrowRight } from 'lucide-react';

export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-24 lg:top-28 left-0 right-0 z-50 bg-gradient-to-r from-pink-600 to-pink-500 text-white shadow-lg">
      <div className="mx-auto max-w-7xl px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <Bell className="h-5 w-5 animate-pulse flex-shrink-0" />
            <p className="text-sm md:text-base">
              <span className="font-bold">Rauchmelder-Wechselperiode 2026/2027:</span>
              <span className="ml-2">Wir machen ein Angebot mit 24 Monaten Vorlauf – Sichern Sie sich jetzt den besten Service zum günstigsten Preis!</span>
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <a href="#contact">
              <button className="hidden md:flex items-center gap-2 bg-white text-pink-600 px-4 py-2 rounded-full hover:bg-pink-50 transition-all font-medium text-sm">
                Jetzt Angebot sichern
                <ArrowRight className="h-4 w-4" />
              </button>
            </a>
            <button 
              onClick={() => setIsVisible(false)}
              className="p-1 hover:bg-white/20 rounded-full transition-colors flex-shrink-0"
              aria-label="Banner schließen"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}