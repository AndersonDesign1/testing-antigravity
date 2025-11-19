"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const fullText = "> INITIATING NEURAL LINK... > LOADING ASSETS... [100%] > OPTIMIZING SHADERS... > CONNECTING TO SERVER...";

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) index = 0;
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gaming-black text-gaming-white border-b-2 border-gaming-white/10 pt-36">
      {/* Background Dither & Noise */}
      <div className="absolute inset-0 dither-bg pointer-events-none z-0" />
      <div className="absolute inset-0 dither-overlay z-0" />

      {/* Main Content */}
      <div className="z-10 flex flex-col items-center text-center max-w-7xl px-4 w-full relative">
        
        {/* Decorative Top Bar */}
        <div className="absolute -top-32 left-0 w-full h-px bg-gradient-to-r from-transparent via-gaming-white/30 to-transparent" />

        <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-2 uppercase dither-text relative z-20 mix-blend-difference"
            style={{ transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)` }}>
          Neural<br />Nexus
        </h1>
        
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px w-12 bg-gaming-white/50"></div>
          <p className="text-sm md:text-base font-mono tracking-[0.2em] text-gaming-white/60 uppercase">
            Architecting the Infinite
          </p>
          <div className="h-px w-12 bg-gaming-white/50"></div>
        </div>

        {/* Visual Integration with Parallax */}
        <div className="relative w-full max-w-4xl h-[400px] md:h-[500px] mb-12 border border-gaming-white/10 bg-gaming-black/80 overflow-hidden group"
             style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}>
          <Image 
            src="/hero-visual.png" 
            alt="AI Coding Visualization" 
            fill
            className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 grayscale hover:grayscale-0"
          />
          
          {/* Overlay UI Elements */}
          <div className="absolute top-4 left-4 font-mono text-xs text-gaming-white/70">
            SYS.STATUS: ONLINE<br/>
            LATENCY: 0.02MS
          </div>
          <div className="absolute bottom-4 right-4 font-mono text-xs text-gaming-white/70 text-right">
             RENDERING CORE<br/>
             V.2.0.45
          </div>
          
          {/* Scanning Line Animation */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gaming-white/20 animate-[scan_4s_linear_infinite]" />
        </div>
        
        <div className="flex gap-0 border border-gaming-white/20">
          <button className="px-10 py-5 bg-gaming-white text-gaming-black font-bold text-sm tracking-widest hover:bg-gaming-brown hover:text-gaming-white transition-colors duration-200 uppercase">
            Initialize
          </button>
          <button className="px-10 py-5 bg-transparent text-gaming-white font-bold text-sm tracking-widest hover:bg-gaming-white hover:text-gaming-black transition-colors duration-200 border-l border-gaming-white/20 uppercase">
            Documentation
          </button>
        </div>
      </div>
      
      {/* Bottom Ticker with Typing Effect */}
      <div className="absolute bottom-0 w-full py-2 border-t border-gaming-white/10 bg-gaming-black/80 backdrop-blur text-center overflow-hidden">
        <p className="font-mono text-[10px] tracking-[0.3em] text-gaming-white/30 whitespace-nowrap">
          {typedText} <span className="animate-pulse">_</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
