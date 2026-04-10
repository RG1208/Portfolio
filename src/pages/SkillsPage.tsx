import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { skills, Skill } from '../data/skills';

type SkillCategory =
  | 'all'
  | 'frontend'
  | 'languages'
  | 'backend'
  | 'ai'
  | 'database'
  | 'devops'
  | 'iot'
  | 'tools';

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

const getTierBadgeClasses = (level: number): string => {
  if (level >= 90) return 'bg-[#ff5e00]/20 text-[#ffd8bf] border-[#ff5e00]/40';
  if (level >= 75) return 'bg-amber-500/15 text-amber-200 border-amber-400/40';
  if (level >= 60) return 'bg-sky-500/15 text-sky-200 border-sky-400/40';
  if (level >= 40) return 'bg-emerald-500/15 text-emerald-200 border-emerald-400/40';
  return 'bg-gray-500/15 text-gray-200 border-gray-400/40';
};

const getCategoryLabel = (category: Skill['category']): string => {
  switch (category) {
    case 'frontend':
      return 'Frontend';
    case 'languages':
      return 'Languages';
    case 'backend':
      return 'Backend';
    case 'ai':
      return 'AI / GenAI';
    case 'database':
      return 'Database';
    case 'devops':
      return 'DevOps';
    case 'iot':
      return 'IoT';
    case 'tools':
      return 'Tools';
    case 'frameworks':
      return 'Frameworks';
    default:
      return 'Skill';
  }
};

const getCategoryBadgeClasses = (category: Skill['category']): string => {
  switch (category) {
    case 'frontend':
      return 'bg-pink-500/15 text-pink-200 border-pink-400/30';
    case 'languages':
      return 'bg-indigo-500/15 text-indigo-200 border-indigo-400/30';
    case 'backend':
      return 'bg-cyan-500/15 text-cyan-200 border-cyan-400/30';
    case 'ai':
      return 'bg-violet-500/15 text-violet-200 border-violet-400/30';
    case 'database':
      return 'bg-teal-500/15 text-teal-200 border-teal-400/30';
    case 'devops':
      return 'bg-blue-500/15 text-blue-200 border-blue-400/30';
    case 'iot':
      return 'bg-lime-500/15 text-lime-200 border-lime-400/30';
    case 'tools':
      return 'bg-orange-500/15 text-orange-200 border-orange-400/30';
    case 'frameworks':
      return 'bg-fuchsia-500/15 text-fuchsia-200 border-fuchsia-400/30';
    default:
      return 'bg-white/10 text-gray-200 border-white/20';
  }
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
      className="relative overflow-hidden bg-[#1a0c05]/40 backdrop-blur-xl border border-white/5 p-6 rounded-2xl hover:border-[#ff5e00]/30 hover:bg-[#1a0c05]/60 transition-all duration-300 group shadow-lg"
    >
      <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#ff5e00]/10 blur-3xl rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-white group-hover:text-[#ff5e00] transition-colors leading-tight">
            {skill.name}
          </h3>
          <span
            className={`text-xs font-semibold px-3 py-1.5 rounded-full border whitespace-nowrap ${getTierBadgeClasses(
              skill.level
            )}`}
          >
            {getSkillLevelLabel(skill.level)}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`text-xs font-medium px-3 py-1.5 rounded-full border ${getCategoryBadgeClasses(
              skill.category
            )}`}
          >
            {getCategoryLabel(skill.category)}
          </span>
          <span className="text-xs font-medium px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-gray-300">
            Hands-on
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const SkillsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    useState<SkillCategory>('all');

  useEffect(() => {
    document.title = 'Skills | Rachit Garg';
    window.scrollTo(0, 0);
  }, []);

  const categories: { value: SkillCategory; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'ai', label: '🧠 AI / GenAI' },
    { value: 'backend', label: '⚙️ Backend' },
    { value: 'frontend', label: '🎨 Frontend' },
    { value: 'languages', label: '💻 Languages' },
    { value: 'database', label: '🗄️ Databases' },
    { value: 'devops', label: '☁️ DevOps & Cloud' },
    { value: 'iot', label: '🔌 IoT' },
    { value: 'tools', label: '🛠️ Tools' },
  ];

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#050100] text-white font-sans relative overflow-hidden pt-24 pb-20 selection:bg-[#ff5e00]/30 selection:text-white">
      
      {/* Background Glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-[radial-gradient(ellipse_at_center,_#612100_0%,_transparent_70%)] opacity-40 z-0 pointer-events-none fixed"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#ff5e00] font-semibold tracking-wider uppercase text-sm mb-3">
            Technical Arsenal
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Skills.
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I use to build scalable, intelligent systems.
          </p>
        </motion.div>

        {/* Filter */}
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
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
