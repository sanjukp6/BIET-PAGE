import React from 'react';
import { motion } from 'framer-motion';

const departments = [
  { name: "Computer Science & Engg.", intake: 240, accent: true, tags: ["NBA Accredited", "IBM CoE"] },
  { name: "Information Science & Engg.", intake: 180, tags: ["NBA Accredited"] },
  { name: "Electronics & Communication", intake: 120, tags: ["NBA Accredited"] },
  { name: "Artificial Intelligence & ML", intake: 120, accent: true, tags: ["Emerging Tech"] },
  { name: "Civil Engineering", intake: 60, tags: ["NBA Accredited"] },
  { name: "Mechanical Engineering", intake: 60, tags: ["NBA Accredited"] },
  { name: "Electrical & Electronics", intake: 60, tags: ["NBA Accredited"] },
  { name: "Computer Science (Data Science)", intake: 60, tags: ["Specialized"] },
  { name: "Textile Technology", intake: 40, tags: ["Niche", "Legacy"] },
  { name: "Postgraduate (MBA / MCA)", intake: "120+", tags: ["Professional"] },
];

const DepartmentsGrid = () => {
  return (
    <section id="departments" className="py-32 bg-[#08080A]">
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
              Academic <span className="italic text-accent/80 font-extralight italic">Portfolio</span>
            </h2>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-accent/30"></div>
          </div>
          <p className="text-white/40 text-[10px] font-light tracking-[0.6em] uppercase max-w-2xl mx-auto">
            Explore our diverse ranges of engineering and postgraduate excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-white/5 border border-white/5 overflow-hidden">
          {departments.map((dept, index) => (
            <motion.div 
              key={dept.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="group p-12 bg-black hover:bg-white/[0.02] flex flex-col justify-between transition-all duration-700 relative overflow-hidden"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <span className={`text-[9px] uppercase tracking-[0.3em] font-medium ${dept.accent ? 'text-accent' : 'text-white/30'}`}>
                    Intake: {dept.intake}
                  </span>
                  <div className="flex gap-2">
                    {dept.tags.map(tag => (
                      <span key={tag} className="text-[7px] border border-white/10 px-2 py-1 uppercase tracking-widest text-white/40 group-hover:border-accent/30 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-heading font-light text-white tracking-[0.1em] leading-snug group-hover:text-accent transition-colors duration-500 uppercase">
                  {dept.name}
                </h3>
              </div>
              <div className="mt-12 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                <div className="w-8 h-[1px] bg-accent/40"></div>
                <span className="text-[8px] uppercase tracking-[0.4em] text-accent font-light">Explore Dept.</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsGrid;
