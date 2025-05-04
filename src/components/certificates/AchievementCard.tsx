import React from 'react';
import { motion } from 'framer-motion';
import { Achievement } from '../../data/certificates';
import { Calendar, Trophy } from 'lucide-react';

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement, index }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
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
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent-100 dark:bg-accent-900 text-accent-600 dark:text-accent-300">
            <Trophy className="h-6 w-6" />
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            {achievement.title}
          </h3>
          <p className="text-accent-600 dark:text-accent-400 font-medium">
            {achievement.event}
          </p>
          
          <div className="mt-2 flex items-center text-sm text-gray-600 dark:text-gray-400">
            <Calendar className="h-4 w-4 mr-1" />
            {achievement.date}
          </div>
          
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            {achievement.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AchievementCard;