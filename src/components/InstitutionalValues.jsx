import React from 'react';
import { motion } from 'framer-motion';

const InstitutionalValues = () => {
  return (
    <section id="values" className="relative py-32 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-24 lg:gap-32">
        {/* Vision Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-12"
        >
          <div className="flex items-center gap-6">
            <span className="text-accent uppercase tracking-[0.6em] font-light text-[10px] whitespace-nowrap">The Vision</span>
            <div className="w-full h-[1px] bg-gradient-to-r from-accent/40 to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-light leading-tight tracking-wide text-white">
            To be a centre of <span className="italic text-accent/80 font-extralight">Excellence</span> recognized nationally and internationally.
          </h2>
          <p className="text-white/40 text-sm font-light tracking-widest leading-[2] uppercase">
            Distinctive areas of engineering education and research, based on a culture of innovation and invention.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-12"
        >
          <div className="flex items-center gap-6">
            <span className="text-accent uppercase tracking-[0.6em] font-light text-[10px] whitespace-nowrap">The Mission</span>
            <div className="w-full h-[1px] bg-gradient-to-r from-accent/40 to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-light leading-tight tracking-wide text-white">
            Empowering students to be <span className="italic text-accent/80 font-extralight">Successful</span> in their chosen field.
          </h2>
          <p className="text-white/40 text-sm font-light tracking-widest leading-[2] uppercase">
            Inculcating positive approach, leadership qualities and ethical values through broad-based engineering education.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InstitutionalValues;
