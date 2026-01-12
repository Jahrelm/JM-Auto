
import React from 'react';
import { MOCK_CARS } from '../constants';
import CarCard from './CarCard';
import { Car } from '../types';

interface NewCarsPageProps {
  onCarSelect?: (car: Car) => void;
}

const NewCarsPage: React.FC<NewCarsPageProps> = ({ onCarSelect }) => {
  // Filter for 2024/2025 models
  const newCars = MOCK_CARS.filter(car => car.year >= 2024);

  return (
    <div className="bg-white">
      {/* Cinematic Hero Section - Redesigned */}
      <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=1920"
          alt="2025 Model Reveal"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Subtle cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1218] via-transparent to-transparent opacity-90"></div>

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-16 lg:p-24 flex items-end">
          <div className="max-w-4xl relative z-10 animate-fadeInUp">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-white text-black text-xs font-bold px-4 py-1.5 uppercase tracking-widest rounded-sm">Just Arrived</span>
              <span className="text-white/80 text-xs font-medium uppercase tracking-[0.2em]">The 2025 Series</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-oswald font-bold text-white mb-8 uppercase leading-[0.9] tracking-tighter">
              Defining the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-100">Next Era</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-5">
              <button className="bg-white text-black px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-sm hover:bg-slate-200 transition-colors">
                View All Models
              </button>
              <button className="px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-sm text-white border border-white/30 hover:bg-white/10 transition-colors backdrop-blur-sm">
                Book a Test Drive
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured New Car */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-600/10 rounded-full blur-3xl"></div>
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
                  alt="Featured Porsche"
                  className="w-full h-auto hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-2xl z-20 hidden md:block border border-slate-100">
                <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-1">Top Performance Pick</p>
                <p className="text-3xl font-oswald font-bold text-slate-900 mb-1">Porsche 911 GT3</p>
                <p className="text-slate-500 font-medium">Starting at <span className="text-slate-900 font-bold">$182,900</span></p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-red-600 font-bold uppercase tracking-widest mb-4">Spotlight</h3>
              <h4 className="text-4xl md:text-5xl font-oswald font-bold text-slate-900 mb-6 uppercase leading-tight">EXCELLENCE WITHOUT COMPROMISE</h4>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                The newest 2025 models have arrived at JM Auto. Featuring next-generation aerodynamics,
                enhanced AI-driven safety systems, and the most luxurious interiors ever crafted. Experience the peak of engineering.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="border-l-4 border-red-600 pl-6">
                  <p className="text-3xl font-oswald font-bold text-slate-900 uppercase">0-60 MPH</p>
                  <p className="text-slate-500 font-medium">In under 3.2 seconds</p>
                </div>
                <div className="border-l-4 border-red-600 pl-6">
                  <p className="text-3xl font-oswald font-bold text-slate-900 uppercase">500+ HP</p>
                  <p className="text-slate-500 font-medium">Pure performance</p>
                </div>
              </div>
              <button className="bg-slate-900 text-white px-10 py-5 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center gap-3 shadow-xl shadow-slate-900/20 uppercase tracking-widest">
                Configure Yours
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* New Inventory Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-red-600 font-bold uppercase tracking-widest mb-2">Showroom Inventory</h2>
            <h3 className="text-5xl font-oswald font-bold text-slate-900 uppercase">IN STOCK NOW</h3>
            <p className="text-slate-500 mt-4 text-lg">Explore our current inventory of brand new vehicles, ready for immediate delivery to your driveway.</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-white border border-slate-200 text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-slate-50 transition-all text-sm uppercase tracking-wider">
              Filter Brands
            </button>
            <button className="bg-white border border-slate-200 text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-slate-50 transition-all text-sm uppercase tracking-wider">
              Price High-Low
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {newCars.map(car => (
            <CarCard key={car.id} car={car} onViewDetails={onCarSelect} />
          ))}
        </div>
      </section>


    </div>
  );
};

export default NewCarsPage;
