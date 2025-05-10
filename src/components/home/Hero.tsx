import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <motion.div 
      className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-medium text-primary-600 dark:text-primary-400">
                Hello, I am
              </h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
                Rachit Garg
              </h1>
              <h3 className="text-xl sm:text-2xl font-medium text-gray-600 dark:text-gray-300">
                B.Tech in Artificial Intelligence and Machine Learning
              </h3>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-lg">
                VIPS, Delhi
              </p>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-lg">
                Passionate developer with a focus on creating innovative solutions. I specialize in full-stack development and machine learning applications.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/projects"
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg inline-flex items-center transition-colors duration-200"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/contact"
                className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-medium rounded-lg transition-colors duration-200"
              >
                Contact Me
              </Link>
            </div>
            
            <div className="flex space-x-4">
              <a
                href="https://github.com/RG1208"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 dark:bg-gray-700 text-white rounded-full hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/rg1208"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:rachitgarg1208@gmail.com"
                className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl blur opacity-20 dark:opacity-40"></div>
              <div className="relative overflow-hidden rounded-2xl border-2 border-gray-200 dark:border-gray-700 shadow-xl bg-white dark:bg-gray-800">
                <img
                  src="src/Images/RachitGarg.jpg"
                  alt="Rachit Garg"
                  className="w-full h-80 object-cover object-center sm:h-96"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;