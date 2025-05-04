import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Coffee, Code, Heart, Tv } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutContent: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
            >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl blur opacity-20 dark:opacity-40"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-gray-800">
              <img
                src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="About Me"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
<div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              About Me
            </h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Hi, I’m Rachit — a passionate B.Tech student specializing in AI & ML, with a deep love for full-stack web development and problem-solving through code. I thrive on building intuitive, impactful web applications using modern technologies like React.js, Express.js, and MongoDB. My journey has been fueled by curiosity, a drive to learn, and a desire to contribute meaningfully to tech-driven solutions that make a difference.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300">
              Beyond technical skills, I value collaboration, continuous learning, and adaptability. Whether it's contributing to hackathons, leading student projects, or freelancing, I bring energy, responsibility, and a growth mindset to everything I do. I'm currently exploring the intersections of AI, IoT, and web technologies — and I’m always open to new challenges and opportunities to grow.
            </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <BookOpen className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Education</h3>
                  <p className="text-gray-600 dark:text-gray-400">B.Tech in AIML from VIPS Delhi</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <Code className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Programming</h3>
                  <p className="text-gray-600 dark:text-gray-400">5+ programming languages</p>
                </div>
              </div>
              
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8">
              My Interests
            </h3>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 rounded-full text-sm font-medium">
                Web Development
              </span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                Artificial Intelligence
              </span>
              <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300 rounded-full text-sm font-medium">
                Machine Learning
              </span>
              <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300 rounded-full text-sm font-medium">
                IOT
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8">
              Personal Hobbies
            </h3>
            
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center space-x-1 px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded-full text-sm font-medium">
                <Coffee className="h-3.5 w-3.5" />
                <span>Coffee</span>
              </div>
              <div className="flex items-center space-x-1 px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded-full text-sm font-medium">
                <Tv className="h-3.5 w-3.5" />
                <span>Watching Movies</span>
              </div>
              <div className="flex items-center space-x-1 px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded-full text-sm font-medium">
                <Heart className="h-3.5 w-3.5" />
                <span>Listening Music</span>
              </div>
            </div>
            
            <div className="pt-4">
              <Link 
                to="/contact"
                className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
              >
                Get in touch
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Career Goals
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Short Term
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-primary-600 dark:text-primary-400">•</span>
                  <span>Secure a challenging internship in a tech company</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary-600 dark:text-primary-400">•</span>
                  <span>Master full-stack web development technologies</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary-600 dark:text-primary-400">•</span>
                  <span>Contribute to open-source projects</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary-600 dark:text-primary-400">•</span>
                  <span>Build a professional network in the industry</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Mid Term
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-primary-600 dark:text-primary-400">•</span>
                  <span>Join a leading tech company as a software engineer</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary-600 dark:text-primary-400">•</span>
                  <span>Specialize in AI/ML or cloud computing</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary-600 dark:text-primary-400">•</span>
                  <span>Lead development of impactful projects</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary-600 dark:text-primary-400">•</span>
                  <span>Pursue advanced certifications in my field</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Long Term
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-primary-600 dark:text-primary-400">•</span>
                  <span>Found a tech startup focused on innovative solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary-600 dark:text-primary-400">•</span>
                  <span>Mentor aspiring developers and tech enthusiasts</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary-600 dark:text-primary-400">•</span>
                  <span>Contribute to tech education and accessibility</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary-600 dark:text-primary-400">•</span>
                  <span>Develop technology for social impact</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default AboutContent;