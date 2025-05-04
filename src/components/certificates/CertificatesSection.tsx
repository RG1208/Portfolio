import React from 'react';
import { motion } from 'framer-motion';
import CertificateCard from './CertificateCard';
import { certificates } from '../../data/certificates';
import AchievementCard from './AchievementCard';
import { achievements } from '../../data/certificates';

const CertificatesSection: React.FC = () => {
  return (
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
            Certificates & Achievements
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications and notable achievements that highlight my expertise and recognition.
          </p>
        </motion.div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((certificate, index) => (
              <CertificateCard key={certificate.id} certificate={certificate} index={index} />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <AchievementCard key={achievement.id} achievement={achievement} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;