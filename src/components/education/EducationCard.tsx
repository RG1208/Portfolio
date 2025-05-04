import React from 'react';
import { motion } from 'framer-motion';
import { Education } from '../../data/education';
import { Calendar, GraduationCap, MapPin } from 'lucide-react';

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
      className="relative"
    >
      {/* Line */}
      {index < 2 && (
        <div className="hidden md:block absolute top-7 left-7 w-px h-full bg-gray-300 dark:bg-gray-700 -z-10"></div>
      )}
      
      <div className="flex">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 border-4 border-white dark:border-gray-900 z-10">
            <GraduationCap className="h-6 w-6" />
          </div>
        </div>
        
        <div className="ml-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <div className="mb-2">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {education.degree}
              </h3>
              <h4 className="text-lg font-medium text-primary-600 dark:text-primary-400">
                {education.field}
              </h4>
              <h5 className="text-base text-gray-800 dark:text-gray-300">
                {education.institution}
              </h5>
              
              <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {education.duration}
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {education.location}
                </div>
              </div>
              
              <div className="mt-2 flex items-center text-sm font-medium text-green-600 dark:text-green-400">
                GPA/Percentage: {education.gpa}
              </div>
            </div>
            
            {education.description && (
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                {education.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EducationCard;