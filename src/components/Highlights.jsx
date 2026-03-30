import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, Microscope, Briefcase } from 'lucide-react';

const academicsData = [
  {
    icon: <BookOpen className="w-8 h-8 text-accent" strokeWidth={1} />,
    title: "Academic Excellence",
    desc: "NAAC 'A' Grade accredited with multiple NBA-accredited engineering departments."
  },
  {
    icon: <Microscope className="w-8 h-8 text-accent" strokeWidth={1} />,
    title: "Research Powerhouse",
    desc: "Over 625+ sanctioned projects and ₹4.5 Crores in research grants since inception."
  },
  {
    icon: <Microscope className="w-8 h-8 text-accent" strokeWidth={1} />,
    title: "Innovation Hub",
    desc: "Home to the AICTE IDEA Lab and the IBM Centre of Excellence for advanced tech."
  },
  {
    icon: <Briefcase className="w-8 h-8 text-accent" strokeWidth={1} />,
    title: "Career & Legacy",
    desc: "45+ years of excellence with robust industry ties and an elite global alumni network."
  }
];

const Highlights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="academics" className="py-32 bg-background relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32 text-center"
        >
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-accent/30"></div>
            <h2 className="text-4xl md:text-5xl font-heading font-light tracking-[0.2em] text-white uppercase">
              Academic <span className="italic text-accent/80 font-extralight">Excellence</span>
            </h2>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-accent/30"></div>
          </div>
          <div className="w-[4px] h-[4px] rounded-full bg-accent/40 mx-auto shadow-[0_0_10px_rgba(197,160,89,0.5)]"></div>
        </motion.div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {academicsData.map((highlight, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group p-12 glass-panel rounded-sm hover:-translate-y-3 border border-white/5 hover:border-accent/40 hover:bg-white/[0.03] transition-all duration-700 cursor-none relative overflow-hidden"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-10 transform group-hover:scale-110 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100">
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-heading tracking-[0.2em] text-white mb-6 group-hover:text-accent transition-colors duration-500 uppercase font-light">
                  {highlight.title}
                </h3>
                <p className="text-white/40 text-xs leading-[1.8] font-light tracking-widest uppercase">
                  {highlight.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Highlights;
