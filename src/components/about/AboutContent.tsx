import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Briefcase, Coffee, Code, Heart, Star, User } from 'lucide-react';
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
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              About Me
            </h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I'm a passionate Computer Science and Engineering student with a strong focus on developing innovative software solutions. My journey in technology began during my school days when I started coding simple games, which eventually grew into a deep interest in full-stack development and artificial intelligence.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Currently pursuing my B.Tech at IIT Delhi, I'm constantly exploring new technologies and working on projects that challenge me to expand my skills. I believe in the power of technology to solve real-world problems and create meaningful impact.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <BookOpen className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Education</h3>
                  <p className="text-gray-600 dark:text-gray-400">B.Tech in CSE from IIT Delhi</p>
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
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <Briefcase className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Experience</h3>
                  <p className="text-gray-600 dark:text-gray-400">3 internships & freelancing</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <Star className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Projects</h3>
                  <p className="text-gray-600 dark:text-gray-400">10+ completed projects</p>
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
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 rounded-full text-sm font-medium">
                Cloud Computing
              </span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                Open Source
              </span>
              <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300 rounded-full text-sm font-medium">
                IoT
              </span>
              <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300 rounded-full text-sm font-medium">
                Problem Solving
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
                <BookOpen className="h-3.5 w-3.5" />
                <span>Reading</span>
              </div>
              <div className="flex items-center space-x-1 px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded-full text-sm font-medium">
                <Heart className="h-3.5 w-3.5" />
                <span>Fitness</span>
              </div>
              <div className="flex items-center space-x-1 px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded-full text-sm font-medium">
                <User className="h-3.5 w-3.5" />
                <span>Volunteering</span>
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
        
        <motion.div
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
        </motion.div>
      </div>
    </section>
  );
};

export default AboutContent;