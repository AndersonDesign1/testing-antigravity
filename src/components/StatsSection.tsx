"use client";

import React from 'react';
import Image from 'next/image';

const BentoStatCard = ({ label, value, trend, colSpan = 1 }: { label: string, value: string, trend: string, colSpan?: number }) => (
  <div className={`relative border border-gaming-white/10 bg-gaming-black/80 p-6 flex flex-col justify-between group overflow-hidden hover:border-gaming-white/40 transition-colors ${colSpan === 2 ? 'md:col-span-2' : ''}`}>
    
    {/* Hover Noise Overlay */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none dither-bg" />
    
    <div className="relative z-10">
      <div className="text-xs font-mono text-gaming-white/70 uppercase tracking-widest mb-2">{label}</div>
      <div className="text-4xl md:text-5xl font-black text-gaming-white dither-text">{value}</div>
    </div>
    
    <div className="relative z-10 mt-4 flex items-center gap-2 text-xs font-mono text-gaming-white/80">
      <span className="w-1.5 h-1.5 bg-gaming-white rounded-none animate-pulse" />
      {trend}
    </div>

    {/* Decorative Corner */}
    <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gaming-white/40 group-hover:border-gaming-white/80 transition-colors" />
  </div>
);

const StatsSection = () => {
  return (
    <section className="w-full py-24 border-y border-gaming-white/10 bg-gaming-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
              System<br />Metrics
            </h2>
            <p className="font-mono text-sm text-gaming-white/60 max-w-md">
              Real-time telemetry from our global neural network infrastructure.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Large Card */}
          <div className="md:col-span-2 md:row-span-2 relative border border-gaming-white/10 bg-gaming-black/50 backdrop-blur-sm p-8 group overflow-hidden">
             <div className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity duration-500">
                <Image src="/data-viz.png" alt="Data Viz" fill className="object-cover grayscale contrast-125" />
             </div>
             <div className="relative z-10 h-full flex flex-col justify-end">
               <div className="text-xs font-mono text-gaming-white/60 uppercase tracking-widest mb-2">Total Compute Power</div>
               <div className="text-6xl md:text-8xl font-black text-gaming-white dither-text">84.2 PF</div>
               <div className="text-sm font-mono text-gaming-white/40 mt-2">PetaFLOPS Available</div>
             </div>
          </div>

          <BentoStatCard label="Active Nodes" value="8,492" trend="+12% this week" />
          <BentoStatCard label="Inference Speed" value="0.02ms" trend="Optimal" />
          <BentoStatCard label="Daily Users" value="2.4M" trend="+5% today" colSpan={2} />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
