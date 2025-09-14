import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Achievement } from '../../data/achievements';
import { Calendar, Trophy, Image, ExternalLink, X } from 'lucide-react';

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement, index }) => {
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>('');

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

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setShowImageModal(true);
  };

  const closeModal = () => {
    setShowImageModal(false);
    setSelectedImage('');
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
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent-100 dark:bg-accent-900 text-accent-600 dark:text-accent-300">
            <Trophy className="h-6 w-6" />
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            {achievement.title}
          </h3>
          <p className="text-accent-600 dark:text-accent-400 font-medium">
            {achievement.event}
          </p>
          
          <div className="mt-2 flex items-center text-sm text-gray-600 dark:text-gray-400">
            <Calendar className="h-4 w-4 mr-1" />
            {achievement.date}
          </div>
          
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            {achievement.description}
          </p>

          {/* Image and Certificate Links */}
          {(achievement.imageUrl || achievement.certificateUrl) && (
            <div className="mt-4 flex flex-wrap gap-2">
              {achievement.imageUrl && (
                <button
                  onClick={() => handleImageClick(achievement.imageUrl!)}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors duration-200"
                >
                  <Image className="h-4 w-4 mr-2" />
                  View Image
                </button>
              )}
              {achievement.certificateUrl && (
                <a
                  href={achievement.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors duration-200"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Certificate
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Image Modal */}
      {showImageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative max-w-4xl max-h-[90vh] p-4">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 z-10 p-2 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-colors duration-200"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={selectedImage}
              alt="Achievement"
              className="max-w-full max-h-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default AchievementCard;
