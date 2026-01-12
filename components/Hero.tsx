import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[500px] md:h-[750px] overflow-hidden">
      {/* Background Image - Switched to img tag for better aspect ratio control */}
      <img
        src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=1920"
        alt="Luxury Car Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Darker overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 md:bg-gradient-to-r md:from-slate-900/95 md:via-slate-900/60 md:to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 h-full flex flex-col justify-center text-center md:text-left pt-12 md:pt-0 pb-32 md:pb-0">
        <div className="max-w-2xl text-white">
          <div className="flex flex-col items-center md:items-start mb-2 md:mb-4">
            <h2 className="text-red-600 font-bold uppercase tracking-[0.2em] text-[10px] md:text-sm mb-2 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-red-600 hidden md:block"></span>
              <span className="w-4 h-[1px] bg-red-600 md:hidden"></span>
              Welcome to JM Auto
            </h2>
          </div>

          <h1 className="text-4xl md:text-8xl font-oswald font-bold leading-[1.1] mb-3 md:mb-6 uppercase tracking-tight">
            DRIVE YOUR <br />
            <span className="text-red-600">DREAM CAR</span> <br className="md:hidden" /> TODAY
          </h1>

          <p className="text-sm md:text-xl text-slate-300 mb-6 md:mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed font-light px-4 md:px-0">
            Discover our curated collection of luxury, performance, and family vehicles.
            Experience excellence in every mile.
          </p>

          <div className="grid grid-cols-2 gap-5 md:flex md:flex-row md:gap-4 w-full md:w-fit">
            <button className="bg-red-600 hover:bg-red-700 active:scale-95 text-white py-3 md:px-10 md:py-5 rounded-lg md:rounded-xl font-bold transition-all shadow-xl md:shadow-2xl shadow-red-600/30 flex items-center justify-center gap-2 uppercase tracking-widest text-[10px] md:text-base">
              Browse Inventory
            </button>
            <button className="bg-white/5 hover:bg-white/10 active:scale-95 backdrop-blur-md text-white border-2 border-white/20 py-3 md:px-10 md:py-5 rounded-lg md:rounded-xl font-bold transition-all flex items-center justify-center uppercase tracking-widest text-[10px] md:text-base">
              Test Drive
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
