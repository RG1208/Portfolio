import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import ProjectsSection from '../components/projects/ProjectsSection';
import ContactForm from '../components/contact/ContactForm';
import SocialLinks from '../components/contact/SocialLinks';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Rachit Garg';
  }, []);

  return (
    <div>
      <Hero />
      
      <div className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Featured Skills
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are some of my top technical skills and expertise areas
            </p>
          </div>
          
          <div className="flex justify-center px-4 py-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    
    {/* Web Development Card */}
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center">
      <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        Web Development
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
        Building responsive, accessible, and performant web applications using modern frameworks and technologies.
      </p>
    </div>

    {/* IoT Card */}
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center">
      <div className="w-16 h-16 bg-secondary-100 dark:bg-secondary-900 rounded-full flex items-center justify-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary-600 dark:text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        IoT
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
        Designing and deploying IoT solutions using Raspberry Pi for real-time data acquisition, sensor integration, and edge computing applications.
      </p>
    </div>

  </div>
</div>

        </div>
      </div>
      
      <ProjectsSection />
      
      <div className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Get In Touch
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to contact me!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactForm />
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;