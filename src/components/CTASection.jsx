import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ctaImg from '../../2020-11-04.webp';
import Magnetic from './Magnetic';

// Helper component for staggered text reveals
const StaggeredText = ({ text, className }) => {
  const words = text.split(" ");
  return (
    <h2 className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-2 mr-4">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {word === "Journey." ? <span className="italic text-gray-400">{word}</span> : word}
          </motion.span>
        </span>
      ))}
    </h2>
  );
};

const CTASection = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0.5, 1], ['-10%', '10%']);

  return (
    <section id="admissions" className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image / Pattern */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-cover bg-center opacity-20 filter grayscale"
      >
        <img src={ctaImg} alt="Campus" className="w-full h-full object-cover" />
      </motion.div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent"></div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <div className="text-accent tracking-[0.3em] uppercase text-xs mb-8 font-light">Admissions Open 2026</div>
          
          <StaggeredText text="Begin Your Journey." className="text-5xl md:text-7xl font-heading font-normal uppercase leading-tight mb-8 tracking-[0.1em] text-white flex flex-wrap justify-center" />
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="text-gray-400 font-light tracking-wider leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            Take the next step in shaping your future. Explore our campus, discover our programs, and join the legacy of excellence at BIET Davanagere.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Magnetic>
              <a href="#apply" className="group relative inline-flex items-center justify-center px-12 py-4 bg-transparent border border-accent/50 overflow-hidden hover:border-accent transition-colors duration-700 cursor-none">
                <span className="absolute inset-0 w-full h-full bg-accent opacity-0 group-hover:opacity-10 transition-opacity duration-700"></span>
                <span className="relative uppercase tracking-[0.2em] text-xs flex items-center gap-4 text-accent font-light">
                  Apply Now
                  <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
