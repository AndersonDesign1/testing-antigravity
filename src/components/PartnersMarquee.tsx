import React from 'react';
import Image from 'next/image';

const PartnersMarquee = () => {
  return (
    <section className="w-full py-12 border-y border-gaming-white/10 bg-gaming-black overflow-hidden relative">
      
      <div className="max-w-7xl mx-auto px-4 mb-8 flex items-center gap-4">
        <div className="h-px flex-1 bg-gaming-white/10" />
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-gaming-white/40">Trusted By Industry Leaders</span>
        <div className="h-px flex-1 bg-gaming-white/10" />
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 px-8">
          {/* Repeated logos for infinite scroll effect */}
          {[...Array(10)].map((_, i) => (
            <div key={i} className="relative w-32 h-12 opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale">
               {/* Using the sprite sheet as a background or individual images if we had them. 
                   For now, using the sprite sheet in a container with object-fit/position tricks or just repeating the image for effect.
                   Since it's a single generated image, we'll display it repeatedly.
               */}
               <Image 
                 src="/partner-logos.png" 
                 alt="Partner Logo" 
                 fill
                 className="object-contain"
               />
            </div>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 px-8">
           {[...Array(10)].map((_, i) => (
            <div key={`clone-${i}`} className="relative w-32 h-12 opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale">
               <Image 
                 src="/partner-logos.png" 
                 alt="Partner Logo" 
                 fill
                 className="object-contain"
               />
            </div>
          ))}
        </div>
      </div>
      
      {/* Gradient Fade Edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gaming-black to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gaming-black to-transparent z-10" />

    </section>
  );
};

export default PartnersMarquee;
