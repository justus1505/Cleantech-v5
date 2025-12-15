import { useState } from 'react';
import { X, ChevronRight, ChevronLeft, Sparkles, Leaf, Bell, Wrench, Building2, Briefcase, Home, Check, Calendar, Mail, Phone, User, MapPin, CheckSquare } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface WizardProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: 'reinigung' | 'anlagenpflege' | 'rauchmelder' | 'wartung';
}

export function LeadQualificationWizard({ isOpen, onClose, preselectedService }: WizardProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    services: preselectedService ? [preselectedService] : [] as string[], // Changed to array
    objectType: '',
    units: '',
    floors: '',
    area: '',
    frequency: '',
    additionalServices: [] as string[],
    startDate: '',
    name: '',
    company: '',
    email: '',
    phone: '',
    postalCode: '',
    message: ''
  });

  const totalSteps = 5;

  const services = [
    { id: 'reinigung', name: 'Reinigung', icon: Sparkles, color: 'pink' },
    { id: 'anlagenpflege', name: 'Anlagenpflege', icon: Leaf, color: 'green' },
    { id: 'rauchmelder', name: 'Rauchmelder Service', icon: Bell, color: 'orange' },
    { id: 'wartung', name: 'Wartung & Reparatur', icon: Wrench, color: 'blue' }
  ];

  const objectTypes = [
    { id: 'mehrfamilienhaus', name: 'Mehrfamilienhaus', description: '3+ Wohneinheiten', icon: Building2 },
    { id: 'buero', name: 'Büro/Gewerbe', description: 'Gewerbeflächen', icon: Briefcase },
    { id: 'privat', name: 'Privat', description: 'Einfamilienhaus', icon: Home }
  ];

  // Dynamic frequencies based on selected services
  const getFrequenciesForServices = () => {
    const hasRauchmelder = formData.services.includes('rauchmelder');
    const hasWartung = formData.services.includes('wartung');
    const hasReinigung = formData.services.includes('reinigung');
    const hasAnlagenpflege = formData.services.includes('anlagenpflege');

    // If ONLY Rauchmelder is selected, show annual options
    if (hasRauchmelder && formData.services.length === 1) {
      return [
        { id: 'yearly', name: 'Jährlich', description: 'Gesetzlich vorgeschrieben' },
        { id: 'onetime', name: 'Einmalig', description: 'Erstinstallation/Prüfung' }
      ];
    }

    // If Rauchmelder + other services, show combined options
    if (hasRauchmelder && formData.services.length > 1) {
      return [
        { id: 'weekly', name: 'Wöchentlich', description: 'Regelmäßige Betreuung (ohne Rauchmelder)' },
        { id: 'biweekly', name: '2x pro Woche', description: 'Intensive Betreuung (ohne Rauchmelder)' },
        { id: 'monthly', name: 'Monatlich', description: 'Basis-Betreuung (ohne Rauchmelder)' },
        { id: 'yearly', name: 'Jährlich', description: 'Nur Rauchmelder-Wartung' },
        { id: 'onetime', name: 'Einmalig', description: 'Einzelleistung' }
      ];
    }

    // Default for Reinigung, Anlagenpflege, Wartung
    return [
      { id: 'weekly', name: 'Wöchentlich', description: 'Regelmäßige Betreuung' },
      { id: 'biweekly', name: '2x pro Woche', description: 'Intensive Betreuung' },
      { id: 'monthly', name: 'Monatlich', description: 'Basis-Betreuung' },
      { id: 'onetime', name: 'Einmalig', description: 'Einzelleistung' }
    ];
  };

  const additionalServicesOptions = {
    reinigung: ['Winterdienst', 'Fensterreinigung', 'Grundreinigung', 'Sonderreinigung'],
    anlagenpflege: ['Heckenschnitt', 'Rasenmähen', 'Unkrautbekämpfung', 'Pflanzenpflege'],
    rauchmelder: ['Wartungsvertrag', 'Dokumentation', 'Neuinstallation'],
    wartung: ['Notdienst 24/7', 'Kleinreparaturen', 'Malerarbeiten', 'Koordination Handwerker']
  };

  if (!isOpen) return null;

  const handleNext = () => {
    // Validation
    if (currentStep === 1 && !formData.services.length) {
      toast.error('Bitte wählen Sie einen Service aus');
      return;
    }
    if (currentStep === 2 && !formData.objectType) {
      toast.error('Bitte wählen Sie einen Objekttyp aus');
      return;
    }
    if (currentStep === 3) {
      if (formData.objectType === 'mehrfamilienhaus' && !formData.units) {
        toast.error('Bitte geben Sie die Anzahl der Wohneinheiten an');
        return;
      }
      if (formData.objectType === 'buero' && !formData.area) {
        toast.error('Bitte geben Sie die Fläche in m² an');
        return;
      }
    }
    if (currentStep === 4 && !formData.frequency) {
      toast.error('Bitte wählen Sie eine Häufigkeit aus');
      return;
    }
    if (currentStep === 5) {
      if (!formData.name || !formData.email || !formData.phone || !formData.postalCode) {
        toast.error('Bitte füllen Sie alle Pflichtfelder aus');
        return;
      }
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        toast.error('Bitte geben Sie eine gültige E-Mail-Adresse ein');
        return;
      }
      handleSubmit();
      return;
    }

    setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = () => {
    // Here you would normally send to backend
    console.log('Form submitted:', formData);
    
    toast.success('Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.', {
      duration: 5000
    });

    // Close wizard after short delay
    setTimeout(() => {
      onClose();
      // Reset form
      setCurrentStep(1);
      setFormData({
        services: [],
        objectType: '',
        units: '',
        floors: '',
        area: '',
        frequency: '',
        additionalServices: [],
        startDate: '',
        name: '',
        company: '',
        email: '',
        phone: '',
        postalCode: '',
        message: ''
      });
    }, 2000);
  };

  const toggleAdditionalService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(service)
        ? prev.additionalServices.filter(s => s !== service)
        : [...prev.additionalServices, service]
    }));
  };

  // Get combined additional services based on selected services
  const getCombinedAdditionalServices = () => {
    const combined: string[] = [];
    formData.services.forEach(serviceId => {
      const options = additionalServicesOptions[serviceId as keyof typeof additionalServicesOptions];
      if (options) {
        options.forEach(option => {
          if (!combined.includes(option)) {
            combined.push(option);
          }
        });
      }
    });
    return combined;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-3xl z-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl lg:text-3xl text-gray-900">
              Angebot anfordern
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div key={index} className="flex-1">
                <div className={`h-2 rounded-full transition-all duration-300 ${
                  index + 1 <= currentStep ? 'bg-pink-500' : 'bg-gray-200'
                }`}></div>
              </div>
            ))}
          </div>
          <div className="mt-2 text-sm text-gray-600 text-center">
            Schritt {currentStep} von {totalSteps}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 lg:p-8">
          {/* Step 1: Service Selection */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl lg:text-3xl text-gray-900 mb-2">
                  Welchen Service benötigen Sie?
                </h3>
                <p className="text-gray-600 mb-4">
                  Wählen Sie einen oder mehrere Services aus
                </p>
                
                {/* Quick Select: Alle Services */}
                <button
                  onClick={() => {
                    const allServiceIds = services.map(s => s.id);
                    setFormData(prev => ({ 
                      ...prev, 
                      services: formData.services.length === services.length ? [] : allServiceIds 
                    }));
                  }}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 transition-all ${
                    formData.services.length === services.length
                      ? 'border-pink-500 bg-pink-50 text-pink-700'
                      : 'border-gray-300 text-gray-700 hover:border-pink-300 hover:bg-pink-50'
                  }`}
                >
                  <CheckSquare className="h-5 w-5" />
                  {formData.services.length === services.length ? 'Alle abwählen' : 'Alle Services auswählen'}
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service) => {
                  const Icon = service.icon;
                  const isSelected = formData.services.includes(service.id);
                  return (
                    <button
                      key={service.id}
                      onClick={() => setFormData(prev => ({ 
                        ...prev, 
                        services: isSelected 
                          ? prev.services.filter(s => s !== service.id) 
                          : [...prev.services, service.id] 
                      }))}
                      className={`p-6 rounded-2xl border-2 transition-all text-left hover:shadow-lg ${
                        isSelected
                          ? 'border-pink-500 bg-pink-50'
                          : 'border-gray-200 hover:border-pink-300'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${
                          isSelected ? 'bg-pink-100' : 'bg-gray-100'
                        }`}>
                          <Icon className={`h-6 w-6 ${
                            isSelected ? 'text-pink-600' : 'text-gray-600'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="text-lg text-gray-900">{service.name}</h4>
                            {isSelected && (
                              <Check className="h-5 w-5 text-pink-600" />
                            )}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Selection Counter */}
              {formData.services.length > 0 && (
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full">
                    <Check className="h-4 w-4" />
                    <span className="text-sm">
                      {formData.services.length} Service{formData.services.length > 1 ? 's' : ''} ausgewählt
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 2: Object Type */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl lg:text-3xl text-gray-900 mb-2">
                  Was für ein Objekt möchten Sie betreuen lassen?
                </h3>
                <p className="text-gray-600">
                  Wählen Sie den passenden Objekttyp
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {objectTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setFormData(prev => ({ ...prev, objectType: type.id }))}
                      className={`p-6 rounded-2xl border-2 transition-all hover:shadow-lg ${
                        formData.objectType === type.id
                          ? 'border-pink-500 bg-pink-50'
                          : 'border-gray-200 hover:border-pink-300'
                      }`}
                    >
                      <div className="text-center">
                        <div className={`mx-auto w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${
                          formData.objectType === type.id ? 'bg-pink-100' : 'bg-gray-100'
                        }`}>
                          <Icon className={`h-8 w-8 ${
                            formData.objectType === type.id ? 'text-pink-600' : 'text-gray-600'
                          }`} />
                        </div>
                        <h4 className="text-lg text-gray-900 mb-1">{type.name}</h4>
                        <p className="text-sm text-gray-600">{type.description}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 3: Object Details */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl lg:text-3xl text-gray-900 mb-2">
                  Details zum Objekt
                </h3>
                <p className="text-gray-600">
                  Helfen Sie uns, Ihr Angebot zu optimieren
                </p>
              </div>

              <div className="max-w-2xl mx-auto space-y-4">
                {formData.objectType === 'mehrfamilienhaus' && (
                  <>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        Anzahl Wohneinheiten <span className="text-pink-600">*</span>
                      </label>
                      <input
                        type="number"
                        min="1"
                        value={formData.units}
                        onChange={(e) => setFormData(prev => ({ ...prev, units: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                        placeholder="z.B. 12 (auch 100+ möglich)"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        Anzahl Etagen/Stockwerke
                      </label>
                      <input
                        type="number"
                        min="1"
                        value={formData.floors}
                        onChange={(e) => setFormData(prev => ({ ...prev, floors: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                        placeholder="z.B. 4"
                      />
                    </div>
                  </>
                )}

                {formData.objectType === 'buero' && (
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Fläche in m² <span className="text-pink-600">*</span>
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={formData.area}
                      onChange={(e) => setFormData(prev => ({ ...prev, area: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                      placeholder="z.B. 250"
                    />
                  </div>
                )}

                {formData.objectType === 'privat' && (
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Wohnfläche in m²
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={formData.area}
                      onChange={(e) => setFormData(prev => ({ ...prev, area: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                      placeholder="z.B. 150"
                    />
                  </div>
                )}

                <div className="bg-pink-50 border border-pink-200 rounded-xl p-4 mt-6">
                  <p className="text-sm text-pink-800">
                    💡 <strong>Tipp:</strong> Je genauer Ihre Angaben, desto präziser können wir Ihr individuelles Angebot erstellen.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Frequency & Additional Services */}
          {currentStep === 4 && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl lg:text-3xl text-gray-900 mb-2">
                  Leistungsumfang festlegen
                </h3>
                <p className="text-gray-600">
                  Wie oft benötigen Sie unsere Leistung?
                </p>
              </div>

              {/* Frequency Selection */}
              <div>
                <label className="block text-sm text-gray-700 mb-3">
                  Gewünschte Häufigkeit <span className="text-pink-600">*</span>
                </label>
                
                {/* Info Banner for mixed services */}
                {formData.services.includes('rauchmelder') && formData.services.length > 1 && (
                  <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4">
                    <p className="text-sm text-orange-800">
                      ℹ️ <strong>Hinweis:</strong> Rauchmelder-Wartung erfolgt immer jährlich (gesetzlich vorgeschrieben). Die Häufigkeit bezieht sich auf Ihre anderen ausgewählten Services.
                    </p>
                  </div>
                )}
                
                <div className="grid md:grid-cols-2 gap-3">
                  {getFrequenciesForServices().map((freq) => (
                    <button
                      key={freq.id}
                      onClick={() => setFormData(prev => ({ ...prev, frequency: freq.id }))}
                      className={`p-4 rounded-xl border-2 transition-all text-left hover:shadow-md ${
                        formData.frequency === freq.id
                          ? 'border-pink-500 bg-pink-50'
                          : 'border-gray-200 hover:border-pink-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-base text-gray-900 mb-1">{freq.name}</h4>
                          <p className="text-sm text-gray-600">{freq.description}</p>
                        </div>
                        {formData.frequency === freq.id && (
                          <Check className="h-5 w-5 text-pink-600 flex-shrink-0 ml-2" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Additional Services */}
              <div>
                <label className="block text-sm text-gray-700 mb-3">
                  Zusatzleistungen (optional)
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {getCombinedAdditionalServices().map((service) => (
                    <button
                      key={service}
                      onClick={() => toggleAdditionalService(service)}
                      className={`p-4 rounded-xl border-2 transition-all text-left hover:shadow-md ${
                        formData.additionalServices.includes(service)
                          ? 'border-pink-500 bg-pink-50'
                          : 'border-gray-200 hover:border-pink-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-gray-900">{service}</span>
                        {formData.additionalServices.includes(service) && (
                          <Check className="h-5 w-5 text-pink-600 flex-shrink-0 ml-2" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Start Date */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Gewünschter Starttermin
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData(prev => ({ ...prev, startDate: e.target.value }))}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Contact Information */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl lg:text-3xl text-gray-900 mb-2">
                  Fast geschafft!
                </h3>
                <p className="text-gray-600">
                  Wie können wir Sie erreichen?
                </p>
              </div>

              <div className="max-w-2xl mx-auto space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Ihr Name <span className="text-pink-600">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                        placeholder="Max Mustermann"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Firma (optional)
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                        placeholder="Mustermann GmbH"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    E-Mail <span className="text-pink-600">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                      placeholder="max@beispiel.de"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Telefon <span className="text-pink-600">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                        placeholder="0152 12345678"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      PLZ <span className="text-pink-600">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        value={formData.postalCode}
                        onChange={(e) => setFormData(prev => ({ ...prev, postalCode: e.target.value }))}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                        placeholder="24103"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Nachricht (optional)
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all resize-none"
                    placeholder="Weitere Informationen oder spezielle Wünsche..."
                  />
                </div>

                <div className="bg-pink-50 border border-pink-200 rounded-xl p-4 mt-6">
                  <p className="text-sm text-pink-800">
                    ✅ <strong>Datenschutz:</strong> Ihre Daten werden vertraulich behandelt und ausschließlich zur Angebotserstellung verwendet.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-6 rounded-b-3xl">
          <div className="flex items-center justify-between gap-4">
            {currentStep > 1 ? (
              <button
                onClick={handleBack}
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition-colors text-gray-700"
              >
                <ChevronLeft className="h-5 w-5" />
                Zurück
              </button>
            ) : (
              <div></div>
            )}

            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-8 py-3 rounded-xl bg-pink-500 text-white hover:bg-pink-600 transition-colors ml-auto"
            >
              {currentStep === totalSteps ? (
                <>
                  Angebot anfordern
                  <Check className="h-5 w-5" />
                </>
              ) : (
                <>
                  Weiter
                  <ChevronRight className="h-5 w-5" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}