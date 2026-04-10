import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Github, Globe, 
  Zap, Shield, Layers, Code, Database, Box 
} from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    // Scroll to top when loading the detail page
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050100] flex flex-col items-center justify-center text-white">
        <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
        <button
          onClick={() => navigate('/projects')}
          className="px-6 py-3 bg-[#ff5e00] hover:bg-[#ff7320] text-white font-medium rounded-full transition-all duration-300"
        >
          Return to Projects
        </button>
      </div>
    );
  }

  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Rotating icons for feature cards
  const featureIcons = [Zap, Shield, Layers, Code, Database, Box];

  return (
    <div className="min-h-screen bg-[#050100] text-white font-sans relative overflow-hidden pt-24 pb-20 selection:bg-[#ff5e00]/30 selection:text-white">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_#612100_0%,_transparent_60%)] opacity-30 z-0 pointer-events-none fixed"></div>
      <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_#ff5e00_0%,_transparent_50%)] opacity-10 z-0 pointer-events-none fixed"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Navigation */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-10"
        >
          <Link
            to="/projects"
            className="inline-flex items-center text-gray-400 hover:text-[#ff5e00] transition-colors font-medium group text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="bg-[#1a0c05]/40 backdrop-blur-xl border border-white/5 rounded-[2rem] overflow-hidden shadow-2xl"
        >
          {/* Hero Image Section */}
          <motion.div variants={fadeUp} className="relative w-full h-[35vh] min-h-[250px] max-h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a0c05] via-[#1a0c05]/40 to-transparent z-10"></div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            {project.featured && (
              <div className="absolute top-6 right-6 z-20 bg-[#ff5e00] text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(255,94,0,0.4)]">
                Featured
              </div>
            )}
          </motion.div>

          {/* Content Section */}
          <div className="p-8 md:p-12 relative z-20 -mt-16">
            
            <motion.div variants={fadeUp} className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 drop-shadow-lg">
                  {project.title}
                </h1>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block bg-white/5 border border-white/10 text-gray-300 text-sm font-medium px-4 py-1.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-4 shrink-0">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 bg-[#1a0c05] border border-white/10 text-gray-300 rounded-full hover:text-white hover:border-[#ff5e00]/50 transition-all duration-300 shadow-lg"
                    aria-label="View Source Code"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3.5 bg-[#ff5e00] text-white font-semibold rounded-full shadow-[0_0_20px_rgba(255,94,0,0.3)] hover:shadow-[0_0_30px_rgba(255,94,0,0.5)] hover:bg-[#ff7320] transition-all duration-300"
                  >
                    <Globe className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-12 pt-10 border-t border-white/5">
              
              {/* Main Description */}
              <motion.div variants={fadeUp} className="lg:w-5/12 space-y-6">
                <h2 className="text-2xl font-bold text-white tracking-tight">Overview</h2>
                <div className="text-base text-gray-400 leading-relaxed space-y-4">
                  {project.description.split('\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </motion.div>

              {/* Key Features Grid */}
              <motion.div variants={fadeUp} className="lg:w-7/12">
                {project.keyFeatures && project.keyFeatures.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold text-white tracking-tight mb-6">Key Features</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {project.keyFeatures.map((feature, index) => {
                        const IconComponent = featureIcons[index % featureIcons.length];
                        
                        return (
                          <div 
                            key={index} 
                            className="bg-[#1a0c05]/60 backdrop-blur-md border border-white/5 rounded-2xl p-6 hover:bg-white/5 hover:border-[#ff5e00]/30 transition-all duration-300 flex flex-col group"
                          >
                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                              <IconComponent className="w-5 h-5 text-[#ff5e00]" />
                            </div>
                            <span className="text-sm text-gray-300 leading-relaxed">
                              {feature}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </motion.div>

            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ProjectDetailPage;