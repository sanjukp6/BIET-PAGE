import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled ? 'py-4 glass-panel border-b border-white/10 shadow-xl shadow-black/80' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Integration */}
        <div className="flex items-center gap-5">
          <img 
            src="/logo.png" 
            alt="BIET Logo" 
            className="h-14 w-auto object-contain brightness-0 invert opacity-90 transition-all duration-500" 
            onError={(e) => e.target.style.display='none'} 
          />
          <div className="text-xl md:text-2xl font-heading tracking-[0.2em] font-light uppercase mt-1 text-white">
            BIET<span className="text-accent italic ml-2 font-normal">DVG</span>
          </div>
        </div>

        <div className="hidden md:flex space-x-10">
          {['Academics', 'Admissions', 'Campus Life'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-accent transition-colors duration-500 font-light"
            >
              {item}
            </a>
          ))}
        </div>

        <Magnetic>
          <button className="px-8 py-3 rounded-sm bg-transparent border border-white/20 hover:border-accent hover:text-accent transition-all duration-500 text-xs tracking-[0.2em] uppercase font-light text-white group cursor-none">
            <span className="group-hover:opacity-100 opacity-80 transition-opacity">Apply Now</span>
          </button>
        </Magnetic>
      </div>
    </motion.nav>
  );
};

export default Navbar;
