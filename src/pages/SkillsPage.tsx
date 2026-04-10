import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// Assuming skills data is imported correctly
import { skills, Skill } from '../data/skills';

type SkillCategory = 'all' | 'frontend' | 'backend' | 'languages' | 'tools' | 'frameworks';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const getSkillLevelLabel = (level: number): string => {
  if (level >= 90) return 'Expert';
  if (level >= 75) return 'Advanced';
  if (level >= 60) return 'Intermediate';
  if (level >= 40) return 'Basic';
  return 'Beginner';
};

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
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
      className="bg-[#1a0c05]/40 backdrop-blur-xl border border-white/5 p-6 rounded-2xl hover:border-[#ff5e00]/30 hover:bg-[#1a0c05]/60 transition-all duration-300 group shadow-lg"
    >
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-white group-hover:text-[#ff5e00] transition-colors">
            {skill.name}
          </h3>
          <span className="text-[#ff5e00] text-sm font-bold bg-[#ff5e00]/10 px-2.5 py-1 rounded-md border border-[#ff5e00]/20">
            {skill.level}%
          </span>
        </div>

        {/* Progress Bar Track */}
        <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden border border-white/5">
          {/* Animated Fill */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 + (index * 0.05), ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-[#ff5e00] to-[#ffaa00] rounded-full relative"
          >
            {/* Glow effect on the tip of the progress bar */}
            <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/30 blur-[2px] rounded-full"></div>
          </motion.div>
        </div>

        <div className="text-xs text-gray-500 text-right uppercase tracking-wider font-semibold">
          {getSkillLevelLabel(skill.level)}
        </div>
      </div>
    </motion.div>
  );
};

const SkillsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

  useEffect(() => {
    document.title = 'Skills | Rachit Garg';
    window.scrollTo(0, 0);
  }, []);

  const categories: { value: SkillCategory; label: string }[] = [
    { value: 'all', label: 'All Skills' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'languages', label: 'Languages' },
    { value: 'tools', label: 'Tools' },
  ];

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#050100] text-white font-sans relative overflow-hidden pt-24 pb-20 selection:bg-[#ff5e00]/30 selection:text-white">
      
      {/* Background Glow matching the theme */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-[radial-gradient(ellipse_at_center,_#612100_0%,_transparent_70%)] opacity-40 z-0 pointer-events-none fixed"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#ff5e00] font-semibold tracking-wider uppercase text-sm mb-3">Technical Arsenal</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Skills.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of the programming languages, frameworks, and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Filter Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 flex justify-center"
        >
          <div className="flex flex-wrap justify-center gap-3 bg-white/5 border border-white/10 p-2 rounded-3xl backdrop-blur-md">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.value
                    ? 'bg-[#ff5e00] text-white shadow-[0_0_15px_rgba(255,94,0,0.4)]'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
          
          {filteredSkills.length === 0 && (
            <div className="col-span-full text-center py-12 text-gray-500">
              No skills found for this category.
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsPage;