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
        <img src={ctaImg} alt="Campus" className="w-full h-full object-cover object-top" />
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
            <div className="text-accent tracking-[0.6em] uppercase text-[10px] mb-12 font-light shimmer-text">Admissions Open 2026</div>
            
            <h2 className="text-5xl md:text-8xl font-heading font-extralight uppercase leading-[1.1] mb-12 tracking-[0.15em] text-white flex flex-col items-center">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40 mb-4"
              >
                Begin Your
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="italic font-light text-accent/80 gold-glow px-4"
              >
                Journey.
              </motion.span>
            </h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.8 }}
              className="text-white/40 text-xs font-light tracking-[0.4em] uppercase leading-loose mb-16 max-w-2xl mx-auto"
            >
              Take the next step in shaping your future. Explore our campus, discover our programs, and join the legacy of excellence.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Magnetic>
                <a href="#apply" className="group relative inline-flex items-center justify-center px-16 py-5 border border-white/10 hover:border-accent/40 bg-white/[0.02] hover:bg-accent/5 backdrop-blur-sm transition-all duration-700 cursor-none">
                  <span className="relative uppercase tracking-[0.4em] text-[10px] flex items-center gap-6 text-white group-hover:text-accent font-light transition-colors duration-700">
                    Apply Now
                    <div className="w-8 h-[1px] bg-white/20 group-hover:bg-accent/40 group-hover:translate-x-4 transition-all duration-700"></div>
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
