"use client";

import React, { useState } from 'react';
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor, ChevronDown } from "lucide-react";

const Navbar = () => {
  const { setTheme, theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-gaming-white/10 bg-gaming-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo Area */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-gaming-white animate-pulse" />
          <span className="font-black tracking-tighter text-lg uppercase text-gaming-white">Neural Nexus</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Mission', 'Technology', 'Studios', 'Careers'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-xs font-mono uppercase tracking-widest text-gaming-white/80 hover:text-gaming-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gaming-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* System Status / CTA / Theme Toggle */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex flex-col items-end text-[10px] font-mono text-gaming-white/70 leading-tight">
            <span>SYS.STATUS: OPTIMAL</span>
            <span>SERVER: LAGOS-01</span>
          </div>
          
          <div className="relative">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 p-2 border border-gaming-white/10 hover:bg-gaming-white/10 transition-colors bg-gaming-white/5 min-w-[80px] justify-between"
            >
              {theme === 'light' && <Sun size={14} />}
              {theme === 'dark' && <Moon size={14} />}
              {theme === 'system' && <Monitor size={14} />}
              <span className="text-[10px] font-mono uppercase">{theme}</span>
              <ChevronDown size={10} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
              <div className="absolute top-full right-0 mt-2 w-32 bg-gaming-black/90 backdrop-blur-md border border-gaming-white/10 flex flex-col shadow-xl z-50">
                <button onClick={() => { setTheme("light"); setIsOpen(false); }} className="flex items-center gap-2 px-4 py-2 hover:bg-gaming-white/10 text-xs text-left text-gaming-white/80 hover:text-gaming-white">
                  <Sun size={12} /> Light
                </button>
                <button onClick={() => { setTheme("dark"); setIsOpen(false); }} className="flex items-center gap-2 px-4 py-2 hover:bg-gaming-white/10 text-xs text-left text-gaming-white/80 hover:text-gaming-white">
                  <Moon size={12} /> Dark
                </button>
                <button onClick={() => { setTheme("system"); setIsOpen(false); }} className="flex items-center gap-2 px-4 py-2 hover:bg-gaming-white/10 text-xs text-left text-gaming-white/80 hover:text-gaming-white">
                  <Monitor size={12} /> System
                </button>
              </div>
            )}
          </div>

          <button className="px-6 py-2 bg-gaming-white text-gaming-black text-xs font-bold uppercase tracking-widest hover:bg-gaming-brown hover:text-gaming-white transition-colors">
            Connect
          </button>
        </div>
      </div>
      
      {/* Decorative Scanline */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gaming-white/20 to-transparent" />
    </nav>
  );
};

export default Navbar;
