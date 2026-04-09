import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { experiences, Experience } from '../data/experience';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
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
      {index < 2 && (
        <div className="hidden md:block absolute top-7 left-1/2 w-px h-full bg-gray-300 dark:bg-gray-700 -z-10"></div>
      )}

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {experience.role}
          </h3>
          <h4 className="text-lg font-medium text-primary-600 dark:text-primary-400">
            {experience.company}
          </h4>

          <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {experience.duration}
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              {experience.location}
            </div>
          </div>
        </div>

        <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
          {experience.description.map((item, i) => (
            <li key={i} className="flex items-start">
              <span className="mr-2 text-primary-600 dark:text-primary-400">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Technologies:
          </h5>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs font-medium px-2.5 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ExperiencePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Experience | Portfolio';
  }, []);

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
              Work Experience
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Professional experiences that have shaped my skills and knowledge in the field.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;
