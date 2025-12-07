import React from "react";
import Image from "next/image";

const BentoCard = ({
  title,
  description,
  imageSrc,
  className,
  children,
}: {
  title: string;
  description: string;
  imageSrc?: string;
  className?: string;
  children?: React.ReactNode;
}) => (
  <div
    className={`relative border border-gaming-white/20 bg-gaming-black p-0 flex flex-col justify-end overflow-hidden group transition-all duration-500 hover:border-gaming-white/60 ${className}`}
  >
    {/* Background Image */}
    {imageSrc && (
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gaming-black via-gaming-black/50 to-transparent" />
      </div>
    )}

    {/* Dither Overlay */}
    <div className="absolute inset-0 dither-bg opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />

    {/* Content */}
    <div className="z-10 relative p-8 border-t border-gaming-white/10 bg-gaming-black/40 backdrop-blur-sm translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
      <h3 className="text-3xl font-black mb-2 uppercase tracking-tighter text-gaming-white">
        {title}
      </h3>
      <p className="font-mono text-xs tracking-widest text-gaming-white/70 uppercase border-l-2 border-gaming-brown pl-3">
        {description}
      </p>
      {children}
    </div>
  </div>
);

const BentoGrid = () => {
  return (
    <section className="w-full py-32 px-4 bg-gaming-black text-gaming-white relative">
      <div className="max-w-7xl mx-auto mb-12 border-b border-gaming-white/20 pb-4 flex justify-between items-end">
        <h2 className="text-sm font-mono tracking-[0.3em] opacity-50">
          CORE MODULES
        </h2>
        <div className="text-xs font-mono opacity-30">SYS.READY</div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-1 h-auto md:h-[800px]">
        {/* Large Card */}
        <BentoCard
          title="AI Core"
          description="Procedural Generation Engine"
          imageSrc="/bento-ai-core.png"
          className="md:col-span-2 md:row-span-2 min-h-[400px]"
        />

        {/* Small Card 1 */}
        <BentoCard
          title="Velocity"
          description="Zero-Latency Inference"
          imageSrc="/bento-speed.png"
          className="md:col-span-1 md:row-span-1 min-h-[300px]"
        />

        {/* Small Card 2 */}
        <BentoCard
          title="Scale"
          description="Infinite World Building"
          imageSrc="/bento-scale.png"
          className="md:col-span-1 md:row-span-1 min-h-[300px]"
        />
      </div>
    </section>
  );
};

export default BentoGrid;
