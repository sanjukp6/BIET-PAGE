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
          <div className="flex items-center space-x-6">
            <span className="text-accent uppercase tracking-[0.3em] font-light text-xs">About The Institute</span>
            <div className="flex-1 h-[1px] bg-accent/30"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-heading leading-snug tracking-wide text-white">
            <span className="italic font-light">Excellence.</span><br/>
            Innovation.<br/>
            <span className="text-gray-400">Technology.</span>
          </h2>
          
          <p className="text-gray-400 text-base leading-loose font-light">
            Welcome to the Bapuji Institute of Engineering and Technology. 
            With an 'A' grade accreditation by NAAC, BIET stands as an autonomous, premier 
            institution in Davanagere. Join our vast community of students across core domains like 
            AI, Machine Learning, Data Science, and Engineering.
          </p>

          <div className="pt-8 flex justify-between border-t border-white/5">
            <div>
              <div className="text-3xl font-heading text-white mb-2">1979</div>
              <div className="text-[10px] text-accent uppercase tracking-[0.2em]">Established</div>
            </div>
            <div>
              <div className="text-3xl font-heading text-white mb-2">'A'</div>
              <div className="text-[10px] text-accent uppercase tracking-[0.2em]">NAAC Grade</div>
            </div>
            <div>
              <div className="text-3xl font-heading text-white mb-2">10+</div>
              <div className="text-[10px] text-accent uppercase tracking-[0.2em]">Domains</div>
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
            className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.1] hover:scale-105 transition-transform duration-[2s] ease-out"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default EventSection;
