import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const navigate = useNavigate();

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

  const handleSeeMore = () => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {project.featured && (
          <div className="absolute top-4 right-4 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs font-medium px-2.5 py-1 rounded"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs font-medium px-2.5 py-1 rounded">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        <div className="flex space-x-3 items-center">
          <button
            onClick={handleSeeMore}
            className="ml-auto text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline"
          >
            See More →
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
