import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap, MapPin, Building, Award } from 'lucide-react';
// Assuming education data is imported correctly
import { education, Education } from '../data/education';

interface EducationCardProps {
  education: Education;
  index: number;
}

const EducationCard: React.FC<EducationCardProps> = ({ education, index }) => {
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut"
      },
    }),
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      className="relative pl-10 md:pl-12 group"
    >
      {/* Timeline Dot */}
      <div className="absolute -left-[21px] top-6 w-10 h-10 bg-[#1a0c05] border border-white/20 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,94,0,0.1)] group-hover:border-[#ff5e00] group-hover:shadow-[0_0_20px_rgba(255,94,0,0.4)] transition-all duration-300 z-10">
        <GraduationCap className="w-4 h-4 text-gray-400 group-hover:text-[#ff5e00] transition-colors" />
      </div>

      {/* Education Glass Card */}
      <div className="bg-[#1a0c05]/40 backdrop-blur-xl border border-white/5 rounded-3xl p-6 md:p-8 hover:border-[#ff5e00]/30 hover:bg-[#1a0c05]/60 transition-all duration-300 shadow-lg group-hover:-translate-y-1">
        
        {/* Top Meta Data: Duration & Location */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
          <div className="flex items-center text-[#ff5e00] text-sm font-bold bg-[#ff5e00]/10 px-3 py-1 rounded-full border border-[#ff5e00]/20 w-fit">
            <Calendar className="w-4 h-4 mr-1.5" />
            {education.duration}
          </div>
          
          <div className="flex items-center text-gray-400 text-sm font-medium">
            <MapPin className="w-4 h-4 mr-1.5" />
            {education.location}
          </div>
        </div>

        {/* Core Details */}
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-[#ff5e00] transition-colors">
          {education.degree}
        </h3>
        <h4 className="text-lg font-medium text-gray-300 mb-4">
          {education.field}
        </h4>
        
        <div className="flex items-center text-gray-400 text-sm md:text-base mb-6 font-medium">
          <Building className="w-5 h-5 mr-2 text-[#ff5e00]/70" />
          {education.institution}
        </div>

        {/* Description (if exists) */}
        {education.description && (
          <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base border-t border-white/5 pt-4">
            {education.description}
          </p>
        )}

        {/* GPA / Score Badge */}
        {education.gpa && (
          <div className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-white shadow-inner">
            <Award className="w-4 h-4 mr-2 text-[#ffaa00]" />
            <span className="text-gray-400 mr-2">GPA / Score:</span> 
            <span className="font-bold text-[#ffaa00]">{education.gpa}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const EducationPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Education | Rachit Garg';
    window.scrollTo(0, 0);
  }, []);

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
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
          <h2 className="text-[#ff5e00] font-semibold tracking-wider uppercase text-sm mb-3">Academic Background</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Education.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl md:mx-0 mx-auto">
            A look into my academic journey, degrees, and the institutions that have shaped my technical foundation.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12 pb-12"
        >
          {education.map((edu, index) => (
            <EducationCard key={edu.id} education={edu} index={index} />
          ))}
          
          {education.length === 0 && (
            <div className="pl-10 text-gray-500 py-8">
              No educational records found.
            </div>
          )}
        </motion.div>
        
      </div>
    </div>
  );
};

export default EducationPage;