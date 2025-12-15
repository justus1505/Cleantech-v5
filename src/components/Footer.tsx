import { Sparkles, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '@assets/logo.png';

interface FooterProps {
  onImpressumClick: () => void;
  onDatenschutzClick: () => void;
  onCookieSettingsClick?: () => void;
}

export function Footer({ onImpressumClick, onDatenschutzClick, onCookieSettingsClick }: FooterProps) {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src={logo} 
                alt="CleanTech Logo" 
                className="h-16 scale-150 brightness-0 invert"
                loading="lazy"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Ihr professioneller Partner für Gebäudereinigung, Anlagenpflege und 
              Rauchmelder Service. Qualität, auf die Sie sich verlassen können.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">Leistungen</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => navigate('/reinigung')} className="hover:text-white transition-colors text-left">Gebäudereinigung</button>
              </li>
              <li>
                <button onClick={() => navigate('/anlagenpflege')} className="hover:text-white transition-colors text-left">Anlagenpflege</button>
              </li>
              <li>
                <button onClick={() => navigate('/rauchmelder')} className="hover:text-white transition-colors text-left">Rauchmelder Service</button>
              </li>
              <li>
                <button onClick={() => navigate('/wartung')} className="hover:text-white transition-colors text-left">Wartung & Reparatur</button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white mb-4">Unternehmen</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors">Über uns</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Karriere</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Kontakt</a>
              </li>
              <li>
                <button onClick={onImpressumClick} className="hover:text-white transition-colors text-left">Impressum</button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 amplius Cleantech UG (haftungsbeschränkt). Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-sm">
            <button onClick={onDatenschutzClick} className="hover:text-white transition-colors">Datenschutz</button>
            <button onClick={onCookieSettingsClick} className="hover:text-white transition-colors">Cookie-Einstellungen</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
