import { ArrowRight, Mail, Phone, Sparkles } from 'lucide-react';
import { useState, lazy, Suspense } from 'react';

// Lazy load wizard for better performance
const LeadQualificationWizard = lazy(() => import('./LeadQualificationWizard').then(module => ({ default: module.LeadQualificationWizard })));

export function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [showWizard, setShowWizard] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Erstelle mailto-Link mit Formulardaten
    const subject = `Anfrage: ${formData.service || 'Allgemeine Anfrage'}`;
    const body = `
Name: ${formData.name}
E-Mail: ${formData.email}
Telefon: ${formData.phone}
Service: ${formData.service}

Nachricht:
${formData.message}
    `.trim();
    
    const mailtoLink = `mailto:info@cleantech-services.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    // Zeige Bestätigung
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <LeadQualificationWizard 
          isOpen={showWizard} 
          onClose={() => setShowWizard(false)} 
        />
      </Suspense>

      <section id="contact" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-pink-500 via-pink-600 to-pink-700 rounded-3xl p-12 lg:p-16">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h2 className="text-4xl lg:text-5xl mb-6">
                  Bereit für professionellen Facility Service?
                </h2>
                <p className="text-xl text-pink-100 mb-8 leading-relaxed">
                  Kontaktieren Sie uns für ein unverbindliches Angebot für Ihre Wohnanlage oder Ihr Gewerbe. 
                  Wir beraten Sie gerne persönlich und finden die perfekte Lösung für Ihr Gebäudemanagement.
                </p>
                
                {/* Smart Qualification Button */}
                <button
                  onClick={() => setShowWizard(true)}
                  className="inline-flex items-center gap-3 bg-white text-pink-600 px-8 py-4 rounded-full hover:bg-gray-50 transition-all hover:shadow-xl mb-8"
                >
                  <Sparkles className="h-5 w-5" />
                  <span className="font-medium">Smart-Angebot in 2 Minuten</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-pink-100">Telefon</div>
                    <a href="tel:+4915233195642" className="text-lg hover:underline">+49 (0) 152 33 195642</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-pink-100">E-Mail</div>
                    <a href="mailto:info@cleantech-services.de" className="text-lg hover:underline">info@cleantech-services.de</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl text-gray-900 mb-6">
                Angebot anfragen
              </h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition"
                    placeholder="ihre@email.de"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition"
                    placeholder="+49"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Service
                  </label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                  >
                    <option>Service auswählen</option>
                    <option>Gebäudereinigung</option>
                    <option>Anlagenpflege</option>
                    <option>Rauchmelder Service</option>
                    <option>Mehrere Services</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Nachricht
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition resize-none"
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-pink-500 text-white py-4 rounded-full hover:bg-pink-600 transition-all hover:shadow-lg flex items-center justify-center gap-2"
                >
                  Angebot anfordern
                  <ArrowRight className="h-5 w-5" />
                </button>
                {submitted && (
                  <p className="text-sm text-green-500 mt-2">
                    Ihre Anfrage wurde erfolgreich gesendet!
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}