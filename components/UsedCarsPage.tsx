
import React from 'react';
import { MOCK_CARS } from '../constants';
import CarCard from './CarCard';
import { Car } from '../types';

interface UsedCarsPageProps {
    onCarSelect?: (car: Car) => void;
}

const UsedCarsPage: React.FC<UsedCarsPageProps> = ({ onCarSelect }) => {
    // Simulating "Used" cars by picking cars with mileage > 1000 or older than 2025
    const usedCars = MOCK_CARS.filter(car => car.mileage > 1000 || car.year < 2025);

    return (
        <div className="bg-white min-h-screen">

            {/* Compact Header */}
            <div className="bg-slate-900 pt-32 pb-12 md:pt-40 md:pb-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl md:text-5xl font-oswald font-bold text-white uppercase mb-2">
                        Certified Pre-Owned
                    </h1>
                    <p className="text-slate-400 text-sm md:text-base max-w-2xl font-light">
                        Meticulously inspected. reliable. ready for the road.
                    </p>
                </div>
            </div>

            {/* Inventory Section */}
            <section className="py-20 max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-slate-100 pb-8">
                    <div>
                        <h2 className="text-red-600 font-bold uppercase tracking-widest mb-1 text-sm">Pre-Owned Inventory</h2>
                        <h3 className="text-3xl md:text-4xl font-oswald font-bold text-slate-900 uppercase">Certified Vehicles</h3>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-6 py-3 bg-slate-900 text-white rounded-lg text-sm font-bold uppercase tracking-wider hover:bg-red-600 transition-colors">
                            Filter Inventory
                        </button>
                    </div>
                </div>

                {usedCars.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {usedCars.map(car => (
                            <div key={car.id} className="group relative bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500">
                                {/* Image Badge */}
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="bg-white/90 backdrop-blur text-slate-900 text-xs font-bold px-3 py-1.5 uppercase tracking-widest rounded-md shadow-sm">
                                        Certified
                                    </span>
                                </div>

                                {/* Car Image */}
                                <div className="h-64 overflow-hidden relative">
                                    <img
                                        src={car.image}
                                        alt={`${car.make} ${car.model}`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <p className="text-xs font-bold text-red-600 uppercase tracking-wider mb-1">{car.make}</p>
                                            <h3 className="text-xl font-oswald font-bold text-slate-900 uppercase">{car.model}</h3>
                                        </div>
                                        <p className="text-lg font-bold text-slate-900">${car.price.toLocaleString()}</p>
                                    </div>

                                    {/* Specs Grid */}
                                    <div className="grid grid-cols-2 gap-4 py-4 border-t border-slate-100">
                                        <div className="flex items-center gap-2 text-slate-500 text-xs uppercase font-medium">
                                            <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            {car.year}
                                        </div>
                                        <div className="flex items-center gap-2 text-slate-500 text-xs uppercase font-medium">
                                            <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                            {car.mileage.toLocaleString()} mi
                                        </div>
                                        <div className="flex items-center gap-2 text-slate-500 text-xs uppercase font-medium">
                                            <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                            {car.transmission}
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => onCarSelect?.(car)}
                                        className="w-full mt-4 bg-slate-50 text-slate-900 border border-slate-200 py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-slate-500 text-lg">No certified pre-owned vehicles available.</p>
                    </div>
                )}
            </section>


        </div>
    );
};

export default UsedCarsPage;
