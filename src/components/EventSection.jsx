import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import eventImg from '../../unnamed (1).webp';

const EventSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative min-h-screen py-32 bg-background flex items-center">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        {/* Text Content */}
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-12 lg:col-span-5"
        >
          <div className="flex items-center gap-6">
            <span className="text-accent uppercase tracking-[0.6em] font-light text-[10px] whitespace-nowrap">The Institution</span>
            <div className="w-full h-[1px] bg-gradient-to-r from-accent/40 to-transparent"></div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-6xl md:text-7xl font-heading leading-[1.1] tracking-tight text-white mb-8">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="block italic font-light text-white/90"
              >
                Excellence.
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="block font-light"
              >
                Innovation.
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="block text-accent/80 gold-glow"
              >
                Technology.
              </motion.span>
            </h2>
            
            <p className="text-white/50 text-xs md:text-sm leading-loose font-light tracking-wide max-w-lg italic">
              A "Reputed Scientific Institute" recognized by NRCD, BIET is home to the AICTE IDEA Lab and the IBM Centre of Excellence. Join our legacy of innovation across core domains like AI, Data Science, and Engineering.
            </p>
          </div>

          <div className="pt-12 grid grid-cols-3 gap-8 border-t border-white/10">
            <div className="group">
              <div className="text-4xl font-heading text-white mb-2 group-hover:text-accent transition-colors duration-500 shimmer-text">1979</div>
              <div className="text-[9px] text-white/40 uppercase tracking-[0.3em] font-medium">Est.</div>
            </div>
            <div className="group">
              <div className="text-4xl font-heading text-white mb-2 group-hover:text-accent transition-colors duration-500 shimmer-text">A</div>
              <div className="text-[9px] text-white/40 uppercase tracking-[0.3em] font-medium">NAAC</div>
            </div>
            <div className="group">
              <div className="text-4xl font-heading text-white mb-2 group-hover:text-accent transition-colors duration-500 shimmer-text">10+</div>
              <div className="text-[9px] text-white/40 uppercase tracking-[0.3em] font-medium">Domains</div>
            </div>
          </div>
        </motion.div>

        {/* Cinematic Image / Visuals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
          transition={{ duration: 2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:col-span-7 aspect-[4/3] rounded-sm overflow-hidden border border-white/5"
        >
          <img 
            src={eventImg} 
            alt="BIET Campus Atmosphere"
            className="w-full h-full object-cover object-top filter brightness-[0.85] contrast-[1.1] hover:scale-105 transition-transform duration-[2s] ease-out"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default EventSection;
