
import React from 'react';
import { Car } from '../types';

interface CarCardProps {
  car: Car;
  onViewDetails?: (car: Car) => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, onViewDetails }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
      <div className="relative h-56 overflow-hidden">
        <img
          src={car.image}
          alt={`${car.make} ${car.model}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">NEW</span>
          <span className="bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">{car.year}</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
              {car.make} {car.model}
            </h3>
            <p className="text-slate-500 text-sm">{car.bodyType} • {car.fuelType}</p>
          </div>
          <span className="text-2xl font-oswald font-bold text-slate-900">
            ${car.price.toLocaleString()}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 my-4 py-4 border-y border-slate-50">
          <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            {car.transmission}
          </div>
          <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            {car.mileage.toLocaleString()} mi
          </div>
        </div>

        <button
          onClick={() => onViewDetails?.(car)}
          className="w-full bg-slate-50 hover:bg-slate-100 text-slate-900 font-bold py-3 rounded-xl transition-all border border-slate-200"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default CarCard;
