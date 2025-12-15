import { useState, useEffect } from 'react';
import { Cookie, X, Settings, Shield, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CookieBannerProps {
  onOpenSettings?: () => void;
}

export function CookieBanner({ onOpenSettings }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const navigate = useNavigate();
  
  const [preferences, setPreferences] = useState({
    necessary: true, // Immer aktiv
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Prüfen ob bereits eine Auswahl getroffen wurde
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Verzögerung für bessere UX
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  // Funktion zum Öffnen der Einstellungen von außen
  useEffect(() => {
    if (onOpenSettings) {
      (window as any).openCookieSettings = () => {
        setIsVisible(true);
        setShowSettings(true);
      };
    }
    return () => {
      if ((window as any).openCookieSettings) {
        delete (window as any).openCookieSettings;
      }
    };
  }, [onOpenSettings]);

  const handleAcceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setIsVisible(false);
  };

  const togglePreference = (key: 'analytics' | 'marketing') => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center pointer-events-none">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 pointer-events-auto ${
          showSettings ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={() => setShowSettings(false)}
      />

      {/* Banner */}
      <div className="relative w-full max-w-7xl mx-4 mb-4 lg:mb-6 pointer-events-auto">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          {!showSettings ? (
            // Hauptansicht
            <div className="p-6 lg:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-pink-100 rounded-xl">
                    <Cookie className="h-6 w-6 text-pink-600" />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl lg:text-2xl text-gray-900 mb-2">
                    Wir respektieren Ihre Privatsphäre
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm lg:text-base">
                    Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
                    Einige sind notwendig, während andere uns helfen, diese Website und Ihre Erfahrung zu verbessern.
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={handleAcceptAll}
                      className="px-6 py-3 bg-pink-600 text-white rounded-full font-semibold hover:bg-pink-700 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2"
                    >
                      <Check className="h-4 w-4" />
                      Alle akzeptieren
                    </button>
                    
                    <button
                      onClick={handleRejectAll}
                      className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full font-semibold hover:bg-gray-300 transition-colors"
                    >
                      Nur notwendige
                    </button>
                    
                    <button
                      onClick={() => setShowSettings(true)}
                      className="px-6 py-3 bg-white text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition-colors border border-gray-300 flex items-center gap-2"
                    >
                      <Settings className="h-4 w-4" />
                      Einstellungen
                    </button>
                  </div>
                  
                  <p className="text-xs text-gray-500 mt-4">
                    Weitere Informationen finden Sie in unserer{' '}
                    <button
                      onClick={() => {
                        navigate('/datenschutz');
                        setIsVisible(false);
                      }}
                      className="text-pink-600 hover:underline font-semibold"
                    >
                      Datenschutzerklärung
                    </button>
                  </p>
                </div>

                <button
                  onClick={handleRejectAll}
                  className="flex-shrink-0 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Schließen"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          ) : (
            // Erweiterte Einstellungen
            <div className="p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl lg:text-2xl text-gray-900 flex items-center gap-2">
                  <Settings className="h-6 w-6 text-pink-600" />
                  Cookie-Einstellungen
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                {/* Notwendige Cookies */}
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-gray-600" />
                      <span className="font-semibold text-gray-900">Notwendige Cookies</span>
                    </div>
                    <div className="px-3 py-1 bg-gray-300 text-gray-600 rounded-full text-sm font-semibold">
                      Immer aktiv
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 ml-8">
                    Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <Cookie className="h-5 w-5 text-pink-600" />
                      <span className="font-semibold text-gray-900">Analyse-Cookies</span>
                    </div>
                    <button
                      onClick={() => togglePreference('analytics')}
                      className={`relative w-12 h-6 rounded-full transition-colors ${
                        preferences.analytics ? 'bg-pink-600' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                          preferences.analytics ? 'translate-x-6' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">
                    Helfen uns zu verstehen, wie Besucher mit unserer Website interagieren (z.B. Google Analytics).
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <Cookie className="h-5 w-5 text-pink-600" />
                      <span className="font-semibold text-gray-900">Marketing-Cookies</span>
                    </div>
                    <button
                      onClick={() => togglePreference('marketing')}
                      className={`relative w-12 h-6 rounded-full transition-colors ${
                        preferences.marketing ? 'bg-pink-600' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                          preferences.marketing ? 'translate-x-6' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">
                    Werden verwendet, um Besuchern auf Webseiten zu folgen und relevante Anzeigen zu zeigen.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleSavePreferences}
                  className="px-6 py-3 bg-pink-600 text-white rounded-full font-semibold hover:bg-pink-700 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  <Check className="h-4 w-4" />
                  Auswahl speichern
                </button>
                
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full font-semibold hover:bg-gray-300 transition-colors"
                >
                  Alle akzeptieren
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}