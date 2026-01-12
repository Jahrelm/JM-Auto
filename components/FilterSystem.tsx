
import React, { useState } from 'react';
import { FilterState } from '../types';

interface FilterSystemProps {
  onFilterChange: (filters: FilterState) => void;
}

const FilterSystem: React.FC<FilterSystemProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<FilterState>({
    make: '',
    model: '',
    minYear: '',
    maxPrice: '',
    bodyType: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange(filters);
  };

  const selectClasses = "w-full bg-slate-800 border border-slate-700 rounded-xl py-4 md:py-5 px-5 text-slate-200 appearance-none focus:outline-none focus:ring-2 focus:ring-red-600/40 focus:border-red-600 transition-all cursor-pointer text-sm font-medium";

  return (
    <div className="bg-[#121826] rounded-2xl md:rounded-3xl p-4 md:p-12 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden -mt-16 md:-mt-24 z-20 mx-3 md:mx-0 border border-white/5">
      {/* Dynamic Glow Effect */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-red-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative">
        <div className="mb-4 md:mb-10 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-oswald font-bold text-white mb-1 uppercase tracking-tight">FIND YOUR PERFECT RIDE</h2>
          <p className="text-slate-400 text-xs md:text-base font-light">Select your preferences to filter our premium inventory.</p>
        </div>

        <form onSubmit={handleSearch} className="grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-5">
          <div className="relative">
            <label className="block text-[10px] font-bold text-slate-500 mb-1 uppercase tracking-[0.1em] ml-1">Make</label>
            <select name="make" value={filters.make} onChange={handleChange} className="w-full bg-slate-800 border border-slate-700 rounded-lg py-2.5 md:py-5 px-3 md:px-5 text-slate-200 appearance-none focus:outline-none focus:ring-2 focus:ring-red-600/40 focus:border-red-600 transition-all cursor-pointer text-xs md:text-sm font-medium">
              <option value="" className="bg-[#121826]">All Makes</option>
              <option value="Porsche" className="bg-[#121826]">Porsche</option>
              <option value="Tesla" className="bg-[#121826]">Tesla</option>
              <option value="BMW" className="bg-[#121826]">BMW</option>
              <option value="Audi" className="bg-[#121826]">Audi</option>
              <option value="Land Rover" className="bg-[#121826]">Land Rover</option>
            </select>
          </div>

          <div className="relative">
            <label className="block text-[10px] font-bold text-slate-500 mb-1 uppercase tracking-[0.1em] ml-1">Body Type</label>
            <select name="bodyType" value={filters.bodyType} onChange={handleChange} className="w-full bg-slate-800 border border-slate-700 rounded-lg py-2.5 md:py-5 px-3 md:px-5 text-slate-200 appearance-none focus:outline-none focus:ring-2 focus:ring-red-600/40 focus:border-red-600 transition-all cursor-pointer text-xs md:text-sm font-medium">
              <option value="" className="bg-[#121826]">Any Body</option>
              <option value="Sedan" className="bg-[#121826]">Sedan</option>
              <option value="SUV" className="bg-[#121826]">SUV</option>
              <option value="Coupe" className="bg-[#121826]">Coupe</option>
              <option value="Truck" className="bg-[#121826]">Truck</option>
            </select>
          </div>

          <div className="relative">
            <label className="block text-[10px] font-bold text-slate-500 mb-1 uppercase tracking-[0.1em] ml-1">Min Year</label>
            <select name="minYear" value={filters.minYear} onChange={handleChange} className="w-full bg-slate-800 border border-slate-700 rounded-lg py-2.5 md:py-5 px-3 md:px-5 text-slate-200 appearance-none focus:outline-none focus:ring-2 focus:ring-red-600/40 focus:border-red-600 transition-all cursor-pointer text-xs md:text-sm font-medium">
              <option value="" className="bg-[#121826]">Any Year</option>
              <option value="2025" className="bg-[#121826]">2025</option>
              <option value="2024" className="bg-[#121826]">2024</option>
              <option value="2023" className="bg-[#121826]">2023</option>
            </select>
          </div>

          <div className="relative">
            <label className="block text-[10px] font-bold text-slate-500 mb-1 uppercase tracking-[0.1em] ml-1">Budget</label>
            <select name="maxPrice" value={filters.maxPrice} onChange={handleChange} className="w-full bg-slate-800 border border-slate-700 rounded-lg py-2.5 md:py-5 px-3 md:px-5 text-slate-200 appearance-none focus:outline-none focus:ring-2 focus:ring-red-600/40 focus:border-red-600 transition-all cursor-pointer text-xs md:text-sm font-medium">
              <option value="" className="bg-[#121826]">No Max</option>
              <option value="50000" className="bg-[#121826]">$50,000</option>
              <option value="75000" className="bg-[#121826]">$75,000</option>
              <option value="100000" className="bg-[#121826]">$100,000</option>
              <option value="150000" className="bg-[#121826]">$150,000</option>
            </select>
          </div>

          <div className="flex items-end col-span-2 lg:col-span-1">
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 active:scale-95 text-white rounded-lg md:rounded-xl font-bold transition-all shadow-xl shadow-red-600/20 flex items-center justify-center gap-3 py-3 md:py-0 md:h-[58px] uppercase tracking-widest text-xs md:text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search
            </button>
          </div>
        </form>

        <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between border-t border-slate-800 pt-8 gap-6">
          <div className="flex items-center gap-8 justify-center md:justify-start">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
              <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">24 Vehicles</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]"></span>
              <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">8 New In</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              setFilters({ make: '', model: '', minYear: '', maxPrice: '', bodyType: '' });
              onFilterChange({ make: '', model: '', minYear: '', maxPrice: '', bodyType: '' });
            }}
            className="text-slate-500 text-[10px] font-bold hover:text-red-500 uppercase tracking-[0.2em] transition-colors w-fit self-center md:self-auto"
          >
            Clear All Selections
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSystem;
