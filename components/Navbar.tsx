
import React, { useState } from 'react';


interface NavbarProps {
  onNavigate: (view: 'home' | 'service' | 'new-cars' | 'used-cars' | 'contact') => void;
  currentView: 'home' | 'service' | 'new-cars' | 'used-cars' | 'contact';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (view: 'home' | 'service' | 'new-cars' | 'used-cars' | 'contact') => {
    onNavigate(view);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const linkClass = (view: 'home' | 'service' | 'new-cars' | 'used-cars' | 'contact') =>
    `font-bold uppercase tracking-widest text-xs transition-colors cursor-pointer ${currentView === view ? 'text-red-600' : 'text-slate-900 hover:text-red-600'
    }`;

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between h-16 md:h-20 items-center">
          {/* Logo Section */}
          <div
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-red-600 flex items-center justify-center rounded-lg shadow-lg group-hover:bg-red-700 transition-colors">
              <span className="text-white font-oswald font-bold text-2xl italic">JM</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl md:text-2xl font-oswald font-bold tracking-tighter text-slate-900 uppercase">JM AUTO</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-10 items-center">
            <span onClick={() => handleNav('home')} className={linkClass('home')}>Home</span>
            <span onClick={() => handleNav('new-cars')} className={linkClass('new-cars')}>New Cars</span>
            <span onClick={() => handleNav('used-cars')} className={linkClass('used-cars')}>Used Cars</span>
            <span onClick={() => handleNav('service')} className={linkClass('service')}>Service</span>
            <span onClick={() => handleNav('contact')} className={linkClass('contact')}>Contact</span>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 p-2 hover:bg-slate-50 rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t px-4 pt-4 pb-8 space-y-2 shadow-xl animate-fadeIn">
          <span onClick={() => handleNav('home')} className="block px-4 py-3 text-slate-900 font-bold uppercase tracking-widest text-sm hover:bg-slate-50 rounded-lg transition-all">Home</span>
          <span onClick={() => handleNav('new-cars')} className="block px-4 py-3 text-slate-900 font-bold uppercase tracking-widest text-sm hover:bg-slate-50 rounded-lg transition-all">New Cars</span>
          <span onClick={() => handleNav('used-cars')} className="block px-4 py-3 text-slate-900 font-bold uppercase tracking-widest text-sm hover:bg-slate-50 rounded-lg transition-all">Used Cars</span>
          <span className="block px-4 py-3 text-slate-900 font-bold uppercase tracking-widest text-sm hover:bg-slate-50 rounded-lg transition-all">Finance</span>
          <span onClick={() => handleNav('service')} className="block px-4 py-3 text-slate-900 font-bold uppercase tracking-widest text-sm hover:bg-slate-50 rounded-lg transition-all">Service</span>
          <span onClick={() => handleNav('contact')} className="block px-4 py-3 text-slate-900 font-bold uppercase tracking-widest text-sm hover:bg-slate-50 rounded-lg transition-all">Contact</span>
          <div className="pt-4 px-4">
            <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm shadow-lg">Login / Sign Up</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
