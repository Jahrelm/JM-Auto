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
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/50 to-slate-900/90 md:bg-gradient-to-r md:from-slate-900/95 md:via-slate-900/60 md:to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 h-full flex flex-col justify-center items-center text-center pt-20">
        <div className="max-w-4xl text-white flex flex-col items-center">
          <div className="mb-6 animate-fadeInDown">

          </div>

          <h1 className="text-4xl md:text-8xl lg:text-8xl font-oswald font-bold leading-[0.9] mb-4 md:mb-8 uppercase tracking-tighter animate-fadeInUp">
            Drive <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-slate-400">Legendary</span>
          </h1>

          <p className="text-xs md:text-xl text-slate-300 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed font-light px-4 animate-fadeInUp delay-100">
            jm auto defines the pinnacle of automotive excellence.
            curating the world's most exceptional vehicles for the discerning driver.
          </p>

          <div className="flex flex-row gap-3 w-full justify-center animate-fadeInUp delay-200">
            <button className="bg-red-600 text-white px-5 py-3 md:px-10 md:py-4 rounded-full font-bold uppercase tracking-widest text-[10px] md:text-sm hover:bg-red-700 transition-all shadow-xl shadow-red-600/20 hover:scale-105 active:scale-95 whitespace-nowrap">
              View Inventory
            </button>
            <button className="bg-transparent border border-white/30 text-white px-5 py-3 md:px-10 md:py-4 rounded-full font-bold uppercase tracking-widest text-[10px] md:text-sm hover:bg-white hover:text-slate-900 transition-all hover:scale-105 active:scale-95 backdrop-blur-sm whitespace-nowrap">
              Book Experience
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
