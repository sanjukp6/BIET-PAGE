import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, Microscope, Briefcase } from 'lucide-react';

const academicsData = [
  {
    icon: <BookOpen className="w-8 h-8 text-accent" strokeWidth={1} />,
    title: "Undergraduate Programs",
    desc: "B.E. across high-demand disciplines including AI & ML, Computer Science, and Core Engg."
  },
  {
    icon: <Microscope className="w-8 h-8 text-accent" strokeWidth={1} />,
    title: "Postgraduate & Research",
    desc: "Advancing knowledge through M.Tech, MBA, MCA and deeply integrated Research Centers."
  },
  {
    icon: <Briefcase className="w-8 h-8 text-accent" strokeWidth={1} />,
    title: "Placements & Training",
    desc: "Robust industry ties ensuring excellent career launchpads for the BIET alumni network."
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
          className="mb-24 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-normal tracking-[0.1em] mb-6 text-white">
            Academic <span className="italic text-gray-400">Excellence</span>
          </h2>
          <div className="w-16 h-[1px] bg-accent/50 mx-auto"></div>
        </motion.div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {academicsData.map((highlight, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group p-10 glass-panel rounded-sm hover:-translate-y-2 border border-white/5 hover:border-accent/30 hover:bg-white/[0.02] transition-all duration-700 cursor-pointer relative"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-8 p-0 inline-block transform group-hover:scale-110 transition-transform duration-700 ease-out">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-heading tracking-[0.1em] text-white mb-4 group-hover:text-accent transition-colors duration-500 uppercase">
                  {highlight.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
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
