import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const SocialLinks: React.FC = () => {
  const links = [
    {
      id: 1,
      icon: <Github className="h-6 w-6" />,
      label: 'GitHub',
      value: 'github.com/RG1208',
      href: 'https://github.com/RG1208',
      color: 'bg-gray-800 dark:bg-gray-700 text-white',
    },
    {
      id: 2,
      icon: <Linkedin className="h-6 w-6" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/rg1208',
      href: 'https://www.linkedin.com/in/rg1208/',
      color: 'bg-blue-600 text-white',
    },
    {
      id: 3,
      icon: <Mail className="h-6 w-6" />,
      label: 'Email',
      value: 'rachitgarg1208@gmail.com',
      href: 'mailto:rachitgarg1208@gmail.com',
      color: 'bg-red-500 text-white',
    },
    {
      id: 4,
      icon: <MapPin className="h-6 w-6" />,
      label: 'Location',
      value: 'Delhi, India',
      href: null,
      color: 'bg-orange-500 text-white',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 sm:p-8 h-full"
    >
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Connect With Me
      </h3>
      
      <div className="space-y-6">
        {links.map((link) => (
          <div key={link.id} className="flex items-start">
            <div className={`flex-shrink-0 mr-4 p-3 rounded-full ${link.color}`}>
              {link.icon}
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {link.label}
              </h4>
              {link.href ? (
                <a 
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium"
                >
                  {link.value}
                </a>
              ) : (
                <p className="text-gray-900 dark:text-white font-medium">
                  {link.value}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SocialLinks;