"use client";

import React from 'react';

const CTA = () => {
  return (
    <section className="w-full py-32 bg-gaming-black text-gaming-white relative overflow-hidden flex flex-col items-center justify-center text-center border-t border-gaming-white/10">
      
      <div className="absolute inset-0 dither-bg opacity-5 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="inline-block mb-8 px-4 py-1 border border-gaming-white/20 rounded-full bg-gaming-white/5 backdrop-blur-sm">
          <span className="text-xs font-mono uppercase tracking-widest text-gaming-white/80">System Ready</span>
        </div>

        <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-8 leading-[0.8] mix-blend-difference">
          Initialize<br />Protocol
        </h2>
        
        <p className="text-xl md:text-2xl font-mono mb-12 max-w-2xl mx-auto opacity-60">
          Join the elite developers building the future of interactive entertainment.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button className="group relative px-12 py-6 bg-gaming-white text-gaming-black text-xl font-bold uppercase tracking-widest overflow-hidden transition-transform hover:scale-105 active:scale-95">
            <span className="relative z-10">Start Project</span>
            <div className="absolute inset-0 bg-gaming-brown transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay bg-noise" />
          </button>
          
          <button className="px-12 py-6 border border-gaming-white/20 text-gaming-white text-xl font-bold uppercase tracking-widest hover:bg-gaming-white/5 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-10" 
           style={{ backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    </section>
  );
};

export default CTA;
