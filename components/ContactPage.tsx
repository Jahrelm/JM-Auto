
import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Split Layout Container */}
            <div className="flex flex-col lg:flex-row min-h-screen">

                {/* Visual Side (Left) - Fixed on Desktop */}
                <div className="lg:w-5/12 relative h-[400px] lg:h-auto bg-slate-900 overflow-hidden group">
                    <img
                        src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1200"
                        alt="Contact Us"
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-900"></div>

                    <div className="relative z-10 p-12 h-full flex flex-col justify-end text-white">
                        <div className="mb-6">
                            <div className="w-12 h-1 bg-red-600 mb-6"></div>
                            <h1 className="text-5xl lg:text-7xl font-oswald font-bold leading-none mb-4 uppercase tracking-tighter">
                                Get In <br />Touch
                            </h1>
                        </div>

                        <p className="text-slate-300 text-lg max-w-md font-light mb-12 leading-relaxed border-l border-slate-700 pl-6">
                            Ready to experience the exceptional? Our dedicated concierge team is standing by to refine your journey.
                        </p>

                        <div className="space-y-8 border-t border-slate-800 pt-8">
                            <div>
                                <h3 className="text-2xl font-oswald font-bold uppercase">JM Auto HQ</h3>
                            </div>
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-2">Direct Line</h3>
                                <p className="text-2xl font-oswald font-bold uppercase">(800) JM-AUTO</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Interaction Side (Right) - Scrollable */}
                <div className="lg:w-7/12 bg-white flex flex-col justify-center p-8 md:p-16 lg:p-24">
                    <div className="max-w-xl w-full mx-auto">
                        <div className="mb-12">
                            <h2 className="text-sm font-bold text-red-600 uppercase tracking-widest mb-3">Concierge Service</h2>
                            <h3 className="text-4xl font-oswald font-bold text-slate-900 uppercase">Send a Message</h3>
                        </div>

                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="group relative">
                                    <input
                                        type="text"
                                        required
                                        className="peer w-full bg-transparent border-b-2 border-slate-200 py-3 outline-none focus:border-red-600 transition-colors text-slate-900 placeholder-transparent"
                                        placeholder="Name"
                                    />
                                    <label className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-widest text-slate-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-red-600">
                                        First Name
                                    </label>
                                </div>
                                <div className="group relative">
                                    <input
                                        type="text"
                                        required
                                        className="peer w-full bg-transparent border-b-2 border-slate-200 py-3 outline-none focus:border-red-600 transition-colors text-slate-900 placeholder-transparent"
                                        placeholder="Last Name"
                                    />
                                    <label className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-widest text-slate-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-red-600">
                                        Last Name
                                    </label>
                                </div>
                            </div>

                            <div className="group relative">
                                <input
                                    type="email"
                                    required
                                    className="peer w-full bg-transparent border-b-2 border-slate-200 py-3 outline-none focus:border-red-600 transition-colors text-slate-900 placeholder-transparent"
                                    placeholder="Email"
                                />
                                <label className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-widest text-slate-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-red-600">
                                    Email Address
                                </label>
                            </div>

                            <div className="group relative">
                                <select className="w-full bg-transparent border-b-2 border-slate-200 py-3 outline-none focus:border-red-600 transition-colors text-slate-900 appearance-none rounded-none cursor-pointer">
                                    <option>Purchase a Vehicle</option>
                                    <option>Schedule Service</option>
                                    <option>Test Drive</option>
                                    <option>Partner With Us</option>
                                </select>
                                <label className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-widest text-slate-500">
                                    Department
                                </label>
                                <div className="absolute right-0 top-4 pointer-events-none">
                                    <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                </div>
                            </div>

                            <div className="group relative">
                                <textarea
                                    rows={3}
                                    required
                                    className="peer w-full bg-transparent border-b-2 border-slate-200 py-3 outline-none focus:border-red-600 transition-colors text-slate-900 placeholder-transparent resize-none"
                                    placeholder="Message"
                                ></textarea>
                                <label className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-widest text-slate-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-red-600">
                                    Your Message
                                </label>
                            </div>

                            <div className="pt-6">
                                <button type="submit" className="bg-slate-900 text-white px-10 py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-red-600 transition-all w-full md:w-auto shadow-xl shadow-slate-900/10 hover:shadow-red-600/30 text-sm flex items-center justify-center gap-2">
                                    Send Message
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
