
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-red-600 flex items-center justify-center rounded-lg">
              <span className="text-white font-bold text-xl italic">V</span>
            </div>
            <span className="text-2xl font-oswald font-bold tracking-tighter text-white uppercase">JM AUTO</span>
          </div>
          <p className="mb-8 leading-relaxed">
            JM Auto is the leading destination for premium automobiles. Our commitment to quality and service sets us apart in the luxury market.
          </p>
          <div className="flex gap-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-10 h-10 bg-white/5 hover:bg-red-600 hover:text-white rounded-lg flex items-center justify-center transition-all cursor-pointer">
                <span className="text-sm">SM</span>
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-red-500 transition-colors">Our Inventory</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Special Offers</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Sell Your Car</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Car Finance</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">About Us</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Our Services</h4>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-red-500 transition-colors">Engine Repair</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Brake Maintenance</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Oil & Filters</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Body Shop</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Custom Tuning</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Newsletter</h4>
          <p className="mb-6">Subscribe to get the latest updates on new arrivals.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-white/5 border border-white/10 rounded-l-lg py-3 px-4 w-full focus:outline-none focus:ring-1 focus:ring-red-600"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 rounded-r-lg transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>&copy; 2024 JM Auto. All Rights Reserved.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
