import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../../data/skills';

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

// Helper functions
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

export default SkillCard;