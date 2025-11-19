import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-gaming-white bg-gaming-black text-gaming-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold uppercase tracking-widest">Neural Nexus</h2>
          <p className="text-xs font-mono mt-1 opacity-60">© 2025 LAGOS, NIGERIA</p>
        </div>
        <div className="flex gap-6 font-mono text-sm">
          <a href="#" className="hover:underline decoration-2 underline-offset-4">TWITTER</a>
          <a href="#" className="hover:underline decoration-2 underline-offset-4">INSTAGRAM</a>
          <a href="#" className="hover:underline decoration-2 underline-offset-4">LINKEDIN</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
