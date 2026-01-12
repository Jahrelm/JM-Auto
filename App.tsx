

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FilterSystem from './components/FilterSystem';
import CarCard from './components/CarCard';
import ServicePage from './components/ServicePage';
import NewCarsPage from './components/NewCarsPage';
import UsedCarsPage from './components/UsedCarsPage';
import ContactPage from './components/ContactPage';
import CarDetailsPage from './components/CarDetailsPage';
import Footer from './components/Footer';
import { MOCK_CARS, TESTIMONIALS, BLOG_POSTS } from './constants';
import { Car, FilterState } from './types';

type View = 'home' | 'service' | 'new-cars' | 'used-cars' | 'contact';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [displayedCars, setDisplayedCars] = useState<Car[]>(MOCK_CARS);
  const [activeTab, setActiveTab] = useState<'Featured' | 'New' | 'Used'>('Featured');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const handleCarSelect = (car: Car) => {
    setSelectedCar(car);
    window.scrollTo(0, 0);
  };

  const handleBackToInventory = () => {
    setSelectedCar(null);
  };

  const handleNavigate = (view: View) => {
    setCurrentView(view);
    setSelectedCar(null); // Clear selected car when navigating
  };

  const handleFilterChange = (filters: FilterState) => {
    let filtered = [...MOCK_CARS];

    if (filters.make) {
      filtered = filtered.filter(car => car.make === filters.make);
    }
    if (filters.bodyType) {
      filtered = filtered.filter(car => car.bodyType === filters.bodyType);
    }
    if (filters.minYear) {
      filtered = filtered.filter(car => car.year >= parseInt(filters.minYear));
    }
    if (filters.maxPrice) {
      filtered = filtered.filter(car => car.price <= parseInt(filters.maxPrice));
    }

    setDisplayedCars(filtered);

    const resultsSection = document.getElementById('inventory-results');
    resultsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const resetFilters = () => {
    setDisplayedCars(MOCK_CARS);
  };

  const renderHome = () => (
    <>
      <Hero />

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-4 relative">
        <FilterSystem onFilterChange={handleFilterChange} />
      </section>

      {/* Inventory Results Section */}
      <section id="inventory-results" className="py-16 md:py-24 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-6 md:gap-8">
          <div>
            <h2 className="text-red-600 font-bold uppercase tracking-widest text-xs md:text-sm mb-2 md:mb-4 flex items-center gap-2">
              <span className="w-6 md:w-8 h-[2px] bg-red-600"></span>
              Top Quality Vehicles
            </h2>
            <h3 className="text-3xl md:text-4xl font-oswald font-bold text-slate-900 uppercase">
              {displayedCars.length === MOCK_CARS.length ? 'BROWSE OUR COLLECTION' : `RESULTS (${displayedCars.length})`}
            </h3>
          </div>

          <div className="flex bg-slate-100 p-1 rounded-xl w-full md:w-auto overflow-x-auto">
            {['Featured', 'New', 'Used'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`flex-1 md:flex-none px-4 md:px-8 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-bold transition-all whitespace-nowrap ${activeTab === tab
                  ? 'bg-white text-red-600 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {displayedCars.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {displayedCars.map(car => (
              <CarCard key={car.id} car={car} onViewDetails={handleCarSelect} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 md:py-20 bg-slate-50 rounded-2xl md:rounded-3xl border-2 border-dashed border-slate-200 px-4">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2 uppercase">No Matching Vehicles</h4>
            <p className="text-slate-500 text-sm md:text-base mb-6">We couldn't find anything matching those specific filters.</p>
            <button
              onClick={resetFilters}
              className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all text-sm uppercase tracking-wider"
            >
              Clear all filters
            </button>
          </div>
        )}

        <div className="mt-8 md:mt-10 text-center">
          <button className="w-full md:w-auto bg-slate-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 uppercase tracking-widest text-sm">
            Show More Vehicles
          </button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-50 pt-12 pb-16 md:pt-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-red-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-4">Core Values</h2>
            <h3 className="text-3xl md:text-4xl font-oswald font-bold text-slate-900 uppercase">WHY CHOOSE JM AUTO?</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            {[
              {
                title: 'Best Prices',
                desc: 'We offer competitive market pricing on all premium luxury vehicles with transparent valuations.',
                icon: (
                  <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: 'Easy Financing',
                desc: 'Our flexible financing options allow you to get behind the wheel faster with minimal paperwork.',
                icon: (
                  <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                )
              },
              {
                title: 'Certified Support',
                desc: 'All vehicles undergo a rigorous 150-point inspection and come with a comprehensive warranty.',
                icon: (
                  <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-slate-100 hover:-translate-y-2 transition-all">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-red-50 text-red-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews & Blog Section */}

    </>
  );

  const renderContent = () => {
    if (selectedCar) {
      return <CarDetailsPage car={selectedCar} onBack={handleBackToInventory} />;
    }

    switch (currentView) {
      case 'home':
        return renderHome();
      case 'service':
        return <ServicePage />;
      case 'new-cars':
        return <NewCarsPage onCarSelect={handleCarSelect} />;
      case 'used-cars':
        return <UsedCarsPage onCarSelect={handleCarSelect} />;
      case 'contact':
        return <ContactPage />;
      default:
        return renderHome();
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentView={currentView} onNavigate={handleNavigate} />

      <main className="flex-grow">
        {renderContent()}
      </main>

      <Footer />
    </div>
  );
};

export default App;
