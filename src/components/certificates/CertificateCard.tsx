import React from 'react';
import { motion } from 'framer-motion';
import { Certificate } from '../../data/certificates';
import { Award, Calendar, ExternalLink } from 'lucide-react';

interface CertificateCardProps {
  certificate: Certificate;
  index: number;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate, index }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
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
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300">
            <Award className="h-6 w-6" />
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            {certificate.title}
          </h3>
          <p className="text-primary-600 dark:text-primary-400 font-medium">
            {certificate.issuer}
          </p>
          
          <div className="mt-2 flex items-center text-sm text-gray-600 dark:text-gray-400">
            <Calendar className="h-4 w-4 mr-1" />
            {certificate.date}
          </div>
          
          <div className="mt-3 flex flex-wrap gap-2">
            {certificate.skills.map((skill) => (
              <span
                key={skill}
                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs font-medium px-2.5 py-1 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
          
          {certificate.url && (
            <div className="mt-4">
              <a
                href={certificate.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
              >
                View Certificate
                <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CertificateCard;