import React from 'react';
import { motion } from 'framer-motion';
import EducationCard from './EducationCard';
import { education } from '../../data/education';

const EducationSection: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Education
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey and qualifications.
          </p>
        </motion.div>
        
        <div className="space-y-12 ml-4">
          {education.map((edu, index) => (
            <EducationCard key={edu.id} education={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;