import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <div className="text-2xl font-bold font-heading tracking-widest uppercase mb-2">
            BIET<span className="text-accent"> DVG</span>
          </div>
          <p className="text-gray-500 text-sm font-light uppercase tracking-wider">
            Bapuji Institute of Engineering and Technology
          </p>
        </div>

        <div className="flex space-x-8 text-sm uppercase tracking-widest text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
        
      </div>
      <div className="mt-12 text-center text-xs text-gray-600 uppercase tracking-widest border-t border-white/5 pt-8 max-w-7xl mx-auto px-6">
        &copy; {new Date().getFullYear()} Bapuji Educational Association. All rights reserved. Built for BIET Davanagere.
      </div>
    </footer>
  );
};

export default Footer;
