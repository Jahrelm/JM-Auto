
import React, { useState } from 'react';

const ServicePage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const services = [
    {
      title: 'Engine Diagnostics',
      description: 'Advanced computer diagnostics to identify and resolve performance issues accurately.',
      icon: '⚙️'
    },
    {
      title: 'Oil & Filter Change',
      description: 'Premium synthetic oil and OEM filter replacements to keep your engine running smooth.',
      icon: '🛢️'
    },
    {
      title: 'Brake Specialist',
      description: 'Complete brake pad, rotor, and fluid services using high-performance components.',
      icon: '🛑'
    },
    {
      title: 'Transmission Care',
      description: 'Full transmission flushes and repairs for seamless gear shifts and longevity.',
      icon: '🔄'
    },
    {
      title: 'Tire & Alignment',
      description: 'Precision laser alignment and premium tire balancing for a perfect ride.',
      icon: '🚗'
    },
    {
      title: 'Electrical Systems',
      description: 'Expert repair of complex luxury vehicle electronics and battery systems.',
      icon: '⚡'
    }
  ];

  return (
    <div className="bg-white">
      {/* Service Hero */}
      <section className="relative h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=1920')` }}
        >
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center text-white">
          <h1 className="text-5xl font-oswald font-bold mb-4 uppercase">Expert Service & Maintenance</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Keep your luxury vehicle performing at its peak with our factory-certified technicians and state-of-the-art facility.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-red-600 font-bold uppercase tracking-widest mb-2">Our Expertise</h2>
          <h3 className="text-4xl font-oswald font-bold text-slate-900">PREMIUM CARE FOR PREMIUM CARS</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="p-8 border border-slate-100 rounded-3xl hover:shadow-xl transition-all group hover:-translate-y-1">
              <div className="text-4xl mb-6">{service.icon}</div>
              <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-red-600 transition-colors">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Appointment Booking */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 text-white">
            <h2 className="text-red-600 font-bold uppercase tracking-widest mb-4">Book Online</h2>
            <h3 className="text-5xl font-oswald font-bold mb-8">SCHEDULE YOUR APPOINTMENT</h3>
            <p className="text-slate-400 text-lg mb-8">
              Skip the wait. Schedule your service online and our team will have everything ready for your arrival.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-red-500">
                  📞
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Service Hotline</p>
                  <p className="text-xl font-bold">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-red-500">
                  📍
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Our Location</p>
                  <p className="text-xl font-bold">123 Luxury Way, Beverly Hills</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="bg-white p-10 rounded-3xl shadow-2xl">
              {formSubmitted ? (
                <div className="text-center py-10 animate-fadeIn">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h4>
                  <p className="text-slate-500">A service advisor will contact you shortly to confirm your slot.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-tighter">Full Name</label>
                      <input type="text" required className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-600 outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-tighter">Phone Number</label>
                      <input type="tel" required className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-600 outline-none transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-tighter">Vehicle Model</label>
                    <input type="text" required placeholder="e.g. 2024 Porsche 911" className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-600 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-tighter">Service Required</label>
                    <select className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-600 outline-none transition-all appearance-none cursor-pointer">
                      <option>Oil & Filter Change</option>
                      <option>Brake Service</option>
                      <option>Tire Rotation</option>
                      <option>Engine Diagnostic</option>
                      <option>Other / Multiple</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all shadow-xl shadow-red-600/20 uppercase tracking-widest">
                    Request Appointment
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 max-w-4xl mx-auto px-4">
        <h3 className="text-3xl font-oswald font-bold text-slate-900 mb-12 text-center uppercase">Common Questions</h3>
        <div className="space-y-6">
          {[
            { q: "Do you use OEM parts?", a: "Yes, we exclusively use Original Equipment Manufacturer (OEM) parts for all repairs and maintenance to ensure your vehicle remains within factory specifications." },
            { q: "How long does a standard oil change take?", a: "Most oil and filter services are completed within 45 to 60 minutes. You can relax in our luxury lounge while you wait." },
            { q: "Do you offer loaner vehicles?", a: "Yes, for any service taking longer than 4 hours, we provide complimentary luxury loaner vehicles upon request (subject to availability)." }
          ].map((item, i) => (
            <div key={i} className="border-b border-slate-100 pb-6">
              <h5 className="text-lg font-bold text-slate-900 mb-2">{item.q}</h5>
              <p className="text-slate-600">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
