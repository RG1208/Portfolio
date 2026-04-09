import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { skills, Skill } from '../data/skills';

type SkillCategory = 'all' | 'frontend' | 'backend' | 'languages' | 'tools' | 'frameworks';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
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
      className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="space-y-2">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          {skill.name}
        </h3>

        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
          <div
            className={`h-2.5 rounded-full ${getColorClass(skill.level)}`}
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>

        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
          <span>{getSkillLevelLabel(skill.level)}</span>
          <span>{skill.level}%</span>
        </div>
      </div>
    </motion.div>
  );
};

const getColorClass = (level: number): string => {
  if (level >= 90) return 'bg-green-600 dark:bg-green-500';
  if (level >= 75) return 'bg-blue-600 dark:bg-blue-500';
  if (level >= 60) return 'bg-primary-600 dark:bg-primary-500';
  if (level >= 40) return 'bg-orange-500 dark:bg-orange-400';
  return 'bg-red-500 dark:bg-red-400';
};

const getSkillLevelLabel = (level: number): string => {
  if (level >= 90) return 'Expert';
  if (level >= 75) return 'Advanced';
  if (level >= 60) return 'Intermediate';
  if (level >= 40) return 'Basic';
  return 'Beginner';
};

const SkillsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

  useEffect(() => {
    document.title = 'Skills | Portfolio';
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
    <div className="pt-16">
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              My Skills
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I've acquired a diverse range of technical skills throughout my academic journey and practical experience.
            </p>
          </motion.div>

          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setActiveCategory(category.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    activeCategory === category.value
                      ? 'bg-primary-600 dark:bg-primary-500 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;
