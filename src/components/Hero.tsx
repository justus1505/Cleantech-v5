import { useState, useEffect, lazy, Suspense } from 'react';
import { ArrowRight, Sparkles, Leaf, ShieldCheck, Home, Zap } from 'lucide-react';
import { AnnouncementBanner } from './AnnouncementBanner';
import logo from 'figma:asset/dcb51d1a292ff54aef6e88b5901410915a0793c7.png';
import cleaningImg from 'figma:asset/dd94190b4bdb5216d98939f3b6db7a91474fbe48.png';
import facilityImg from 'figma:asset/59b9b2391260f1cd5b6613f9280a9e16e429125c.png';
import smokeDetectorImg from 'figma:asset/e5e0e628e8e1eb60e93b4177294950eae4ce25db.png';
import maintenanceImg from 'figma:asset/4025f99136ffd5ef97de51d0aa6dd294dfd06af9.png';

// Lazy load wizard for better performance
const LeadQualificationWizard = lazy(() => import('./LeadQualificationWizard').then(module => ({ default: module.LeadQualificationWizard })));

const slides = [
  {
    image: cleaningImg,
    title: 'Gebäudereinigung',
    alt: 'Gebäudereinigung für Mehrfamilienhäuser in Kiel',
  },
  {
    image: facilityImg,
    title: 'Anlagenpflege',
    alt: 'Facility Management für Mehrfamilienhäuser in Kiel',
  },
  {
    image: smokeDetectorImg,
    title: 'Rauchmelder Service',
    alt: 'Rauchmelder Service für Mehrfamilienhäuser in Kiel',
  },
  {
    image: maintenanceImg,
    title: 'Wartung und Reparatur',
    alt: 'Wartung und Reparatur für Mehrfamilienhäuser in Kiel',
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showWizard, setShowWizard] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <LeadQualificationWizard 
          isOpen={showWizard} 
          onClose={() => setShowWizard(false)} 
        />
      </Suspense>

      <div className="relative bg-white">
        {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[60] px-6 py-1 lg:px-8 bg-white border-b border-gray-200 shadow-sm">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="CleanTech Smart Facility Service" 
              className="h-20 lg:h-24 scale-150 transition-all duration-300 hover:scale-[1.65] hover:drop-shadow-lg cursor-pointer"
              fetchpriority="high"
            />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-600 hover:text-pink-600 transition-colors">
              Leistungen
            </a>
            <a href="#features" className="text-gray-600 hover:text-pink-600 transition-colors">
              Vorteile
            </a>
            <a href="#contact" className="text-gray-600 hover:text-pink-600 transition-colors">
              Kontakt
            </a>
            <a href="#contact">
              <button className="bg-pink-500 text-white px-6 py-2.5 rounded-full hover:bg-pink-600 transition-colors">
                Angebot anfragen
              </button>
            </a>
          </div>
        </div>
      </nav>

      {/* Announcement Banner */}
      <AnnouncementBanner />
      
      {/* Hero Content */}
      <div className="mx-auto max-w-7xl px-6 pt-56 lg:pt-60 pb-12 lg:pb-16 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Content */}
          <div>
            <h1 className="text-5xl lg:text-6xl mb-6 text-gray-900 leading-tight tracking-tight font-bold">
              Cleantech Services ist Ihr regionaler Partner für <span className="text-pink-500">Facility Management</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Wir betreuen Mehrfamilienhäuser, Wohnanlagen und Gewerbeimmobilien mit Gebäudereinigung, Hausmeisterservice und Anlagenpflege.
            </p>
            
            {/* Unsere Leistungen */}
            <div className="space-y-3 mb-12">
              <button 
                onClick={() => setCurrentSlide(0)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all ${
                  currentSlide === 0 
                    ? 'bg-pink-500 text-white shadow-lg' 
                    : 'bg-gray-50 hover:bg-pink-50 text-gray-700 hover:text-pink-600'
                }`}
              >
                <div className={`p-2 rounded-lg ${
                  currentSlide === 0 ? 'bg-white/20' : 'bg-pink-100'
                }`}>
                  <Sparkles className={`h-6 w-6 ${
                    currentSlide === 0 ? 'text-white' : 'text-pink-600'
                  }`} />
                </div>
                <span className="text-lg">Gebäudereinigung</span>
              </button>
              
              <button 
                onClick={() => setCurrentSlide(1)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all ${
                  currentSlide === 1 
                    ? 'bg-pink-500 text-white shadow-lg' 
                    : 'bg-gray-50 hover:bg-pink-50 text-gray-700 hover:text-pink-600'
                }`}
              >
                <div className={`p-2 rounded-lg ${
                  currentSlide === 1 ? 'bg-white/20' : 'bg-pink-100'
                }`}>
                  <Leaf className={`h-6 w-6 ${
                    currentSlide === 1 ? 'text-white' : 'text-pink-600'
                  }`} />
                </div>
                <span className="text-lg">Anlagenpflege</span>
              </button>
              
              <button 
                onClick={() => setCurrentSlide(2)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all ${
                  currentSlide === 2 
                    ? 'bg-pink-500 text-white shadow-lg' 
                    : 'bg-gray-50 hover:bg-pink-50 text-gray-700 hover:text-pink-600'
                }`}
              >
                <div className={`p-2 rounded-lg ${
                  currentSlide === 2 ? 'bg-white/20' : 'bg-pink-100'
                }`}>
                  <ShieldCheck className={`h-6 w-6 ${
                    currentSlide === 2 ? 'text-white' : 'text-pink-600'
                  }`} />
                </div>
                <span className="text-lg">Rauchmelder Service</span>
              </button>
              
              <button 
                onClick={() => setCurrentSlide(3)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all ${
                  currentSlide === 3 
                    ? 'bg-pink-500 text-white shadow-lg' 
                    : 'bg-gray-50 hover:bg-pink-50 text-gray-700 hover:text-pink-600'
                }`}
              >
                <div className={`p-2 rounded-lg ${
                  currentSlide === 3 ? 'bg-white/20' : 'bg-pink-100'
                }`}>
                  <Home className={`h-6 w-6 ${
                    currentSlide === 3 ? 'text-white' : 'text-pink-600'
                  }`} />
                </div>
                <span className="text-lg">Wartung und Reparatur</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setShowWizard(true)}
                className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-full hover:from-pink-600 hover:to-pink-700 transition-all hover:shadow-xl flex items-center justify-center gap-2 w-full sm:w-auto group"
              >
                <Zap className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Smart-Angebot in 2 Min
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="#services">
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-pink-500 hover:text-pink-600 transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
                  Unsere Services
                </button>
              </a>
            </div>
          </div>

          {/* Right Side - Clean Slideshow */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full min-h-[600px]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img 
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  fetchpriority={index === 0 ? 'high' : 'low'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Simple Slide Title */}
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-2xl text-white">{slide.title}</h3>
                </div>
              </div>
            ))}

            {/* Clean Slide Indicators */}
            <div className="absolute bottom-8 right-8 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide 
                      ? 'w-8 bg-white' 
                      : 'w-2 bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}