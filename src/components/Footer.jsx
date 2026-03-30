import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <div className="text-xl font-heading tracking-[0.4em] font-light uppercase mb-2 text-white">
            BIET<span className="text-accent shimmer-text ml-2">DVG</span>
          </div>
          <p className="text-white/30 text-[9px] font-light uppercase tracking-[0.3em]">
            Bapuji Institute of Engineering and Technology
          </p>
        </div>

        <div className="flex space-x-12 text-[10px] uppercase tracking-[0.4em] text-white/40 font-light">
          <a href="#" className="hover:text-accent transition-colors duration-500">Instagram</a>
          <a href="#" className="hover:text-accent transition-colors duration-500">X (Twitter)</a>
          <a href="#" className="hover:text-accent transition-colors duration-500">LinkedIn</a>
        </div>
        
      </div>
      <div className="mt-16 text-center text-[8px] text-white/20 uppercase tracking-[0.5em] border-t border-white/5 pt-12 max-w-7xl mx-auto px-6 font-light">
        &copy; {new Date().getFullYear()} Bapuji Educational Association. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
