import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Building } from 'lucide-react';
import { experiences } from '../data/experience';

const ExperiencePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Experience | Rachit Garg';
    window.scrollTo(0, 0);
  }, []);

  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-[#050100] text-white font-sans relative overflow-hidden pt-24 pb-20 selection:bg-[#ff5e00]/30 selection:text-white">
      
      {/* Background Glows matching the theme */}
      <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_#612100_0%,_transparent_60%)] opacity-30 z-0 pointer-events-none fixed"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_#ff5e00_0%,_transparent_50%)] opacity-5 z-0 pointer-events-none fixed"></div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left mb-16"
        >
          <h2 className="text-[#ff5e00] font-semibold tracking-wider uppercase text-sm mb-3">Career Trajectory</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Experience.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl md:mx-0 mx-auto">
            A timeline of my professional roles, internships, and research positions in the tech industry.
          </p>
        </motion.div>

        {/* Left-Aligned Timeline Container */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12 pb-12"
        >
          {experiences.map((exp) => (
            <motion.div 
              key={exp.id}
              variants={fadeUp}
              className="relative pl-10 md:pl-12 group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[21px] top-6 w-10 h-10 bg-[#1a0c05] border border-white/20 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,94,0,0.1)] group-hover:border-[#ff5e00] group-hover:shadow-[0_0_20px_rgba(255,94,0,0.4)] transition-all duration-300 z-10">
                <Briefcase className={`w-4 h-4 ${exp.duration.toLowerCase().includes('present') ? 'text-[#ff5e00]' : 'text-gray-400 group-hover:text-[#ff5e00]'} transition-colors`} />
              </div>

              {/* Experience Card */}
              <div className="bg-[#1a0c05]/40 backdrop-blur-xl border border-white/5 rounded-3xl p-6 md:p-8 hover:border-[#ff5e00]/30 hover:bg-[#1a0c05]/60 transition-all duration-300 shadow-lg">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${
                    exp.duration.toLowerCase().includes('present') 
                    ? 'bg-[#ff5e00]/10 text-[#ff5e00] border-[#ff5e00]/20' 
                    : 'bg-white/5 text-gray-300 border-white/10'
                  }`}>
                    {exp.type}
                  </span>
                  
                  <div className="flex items-center text-gray-400 text-sm font-medium">
                    <Calendar className="w-4 h-4 mr-1.5" />
                    {exp.duration}
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-[#ff5e00] transition-colors">
                  {exp.role}
                </h3>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm text-gray-400 mb-6 font-medium">
                  <div className="flex items-center">
                    <Building className="w-4 h-4 mr-1.5 text-gray-500" />
                    {exp.company}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1.5 text-gray-500" />
                    {exp.location}
                  </div>
                </div>

                <ul className="text-gray-300 leading-relaxed mb-8 text-sm md:text-base list-disc list-inside space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="pl-2 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-[#ff5e00] before:rounded-full list-none">
                       {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="inline-block bg-white/5 border border-white/10 text-gray-300 text-xs font-medium px-3 py-1.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
          
          {experiences.length === 0 && (
            <div className="pl-10 text-gray-500 py-8">
              No experience records found.
            </div>
          )}
        </motion.div>
        
      </div>
    </div>
  );
};

export default ExperiencePage;
