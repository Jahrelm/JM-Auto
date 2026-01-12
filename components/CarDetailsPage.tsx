
import React from 'react';
import { Car } from '../types';

interface CarDetailsPageProps {
    car: Car;
    onBack: () => void;
}

const CarDetailsPage: React.FC<CarDetailsPageProps> = ({ car, onBack }) => {
    return (
        <div className="bg-white min-h-screen pt-20 pb-32">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-slate-500 hover:text-red-600 transition-colors mb-6 font-bold uppercase tracking-widest text-xs"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Inventory
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Image Section */}
                    <div className="space-y-4">
                        <div className="h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl relative">
                            <img
                                src={car.image}
                                alt={`${car.make} ${car.model}`}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 left-4">
                                <span className="bg-red-600 text-white text-xs font-bold px-4 py-1.5 uppercase tracking-widest rounded-full shadow-lg">In Stock</span>
                            </div>
                        </div>
                        {/* Thumbnail Placeholders (Simulated) */}
                        <div className="grid grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className={`aspect-video rounded-xl overflow-hidden cursor-pointer border-2 ${i === 1 ? 'border-red-600' : 'border-transparent'}`}>
                                    <img src={car.image} className="w-full h-full object-cover hover:scale-110 transition-transform" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="lg:py-8">
                        <div className="mb-6">
                            <h2 className="text-red-600 font-bold uppercase tracking-widest mb-2">{car.year} {car.make}</h2>
                            <h1 className="text-4xl md:text-5xl font-oswald font-bold text-slate-900 uppercase mb-4">{car.model}</h1>
                            <p className="text-3xl font-bold text-slate-900">${car.price.toLocaleString()}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 bg-slate-50 p-6 rounded-2xl mb-8 border border-slate-100">
                            <div>
                                <span className="block text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Mileage</span>
                                <span className="block text-lg font-bold text-slate-900">{car.mileage.toLocaleString()} mi</span>
                            </div>
                            <div>
                                <span className="block text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Transmission</span>
                                <span className="block text-lg font-bold text-slate-900">{car.transmission}</span>
                            </div>
                            <div>
                                <span className="block text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Fuel Type</span>
                                <span className="block text-lg font-bold text-slate-900">{car.fuelType}</span>
                            </div>
                            <div>
                                <span className="block text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Body Style</span>
                                <span className="block text-lg font-bold text-slate-900">{car.bodyType}</span>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="font-oswald font-bold text-xl uppercase mb-4">Key Features</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {car.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-slate-600">
                                        <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fixed Bottom Action Bar */}
            <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 p-4 md:p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-40 animate-slideUp">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="hidden md:block">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{car.year} {car.make} {car.model}</p>
                        <p className="text-2xl font-oswald font-bold text-slate-900">${car.price.toLocaleString()}</p>
                    </div>
                    <div className="flex w-full md:w-auto gap-3">
                        <button className="flex-1 md:flex-none px-6 md:px-8 py-3 bg-white border-2 border-slate-900 text-slate-900 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-slate-50 transition-colors">
                            Test Drive
                        </button>
                        <button className="flex-1 md:flex-none px-6 md:px-8 py-3 bg-red-600 text-white rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20">
                            Start Purchase
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetailsPage;
