import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
// Assuming projects data is imported correctly
import { projects, Project } from '../data/projects';

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
      className="bg-[#1a0c05]/40 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden hover:border-[#ff5e00]/30 transition-all duration-300 group shadow-lg flex flex-col h-full"
    >
      <div className="relative h-56 overflow-hidden">
        {/* Dark gradient overlay for smooth blending */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050100] to-transparent z-10 opacity-80"></div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {project.featured && (
          <div className="absolute top-4 right-4 z-20 bg-[#ff5e00] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(255,94,0,0.4)]">
            Featured
          </div>
        )}
      </div>

      <div className="p-8 flex flex-col flex-grow relative z-20 -mt-6">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#ff5e00] transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-400 mb-6 line-clamp-3 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Technologies Grid */}
        <div className="mb-8 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="inline-block bg-white/5 border border-white/10 text-gray-300 text-xs font-medium px-3 py-1.5 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="inline-block bg-white/5 border border-white/10 text-[#ff5e00] text-xs font-medium px-3 py-1.5 rounded-full">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Action Button */}
        <button
          onClick={handleSeeMore}
          className="mt-auto w-full py-3.5 rounded-xl border border-white/10 text-white font-medium hover:bg-[#ff5e00] hover:border-[#ff5e00] transition-all duration-300 flex items-center justify-center group/btn"
        >
          View Case Study 
          <ArrowRight className="ml-2 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};

const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  useEffect(() => {
    document.title = 'Projects | Rachit Garg';
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((project) => project.featured);

  return (
    <div className="min-h-screen bg-[#050100] text-white font-sans relative overflow-hidden pt-24 pb-20 selection:bg-[#ff5e00]/30 selection:text-white">
      
      {/* Background Glow matching the theme */}
      <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_#612100_0%,_transparent_60%)] opacity-30 z-0 pointer-events-none fixed"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#ff5e00] font-semibold tracking-wider uppercase text-sm mb-3">Portfolio Showcase</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Selected Works.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A deep dive into the architectures, algorithms, and interfaces I've built during my academic journey and independent research.
          </p>
        </motion.div>

        {/* Filter Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 flex justify-center"
        >
          <div className="inline-flex bg-white/5 border border-white/10 p-1.5 rounded-full backdrop-blur-md">
            <button
              onClick={() => setFilter('all')}
              className={`px-8 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                filter === 'all'
                  ? 'bg-[#ff5e00] text-white shadow-[0_0_15px_rgba(255,94,0,0.4)]'
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-8 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                filter === 'featured'
                  ? 'bg-[#ff5e00] text-white shadow-[0_0_15px_rgba(255,94,0,0.4)]'
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              Featured Works
            </button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
          
          {filteredProjects.length === 0 && (
            <div className="col-span-full text-center py-12 text-gray-500">
              No projects found for this filter.
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;