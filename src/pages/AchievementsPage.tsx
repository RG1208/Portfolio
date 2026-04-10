import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Trophy, Image as ImageIcon, ExternalLink, X, Star } from 'lucide-react';
// Assuming achievements data is imported correctly
import { achievements, Achievement } from '../data/achievements';

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
  onImageClick: (url: string) => void;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement, index, onImageClick }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
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
      className="bg-[#1a0c05]/40 backdrop-blur-xl border border-white/5 p-6 md:p-8 rounded-3xl hover:border-[#ff5e00]/30 hover:bg-[#1a0c05]/60 transition-all duration-300 shadow-lg group flex flex-col h-full relative overflow-hidden"
    >
      {/* Subtle background glow effect on hover */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#ff5e00]/5 rounded-full blur-3xl group-hover:bg-[#ff5e00]/10 transition-colors pointer-events-none"></div>

      <div className="flex items-start mb-6">
        <div className="flex-shrink-0 mr-5">
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-[#ffaa00] group-hover:border-[#ffaa00]/40 group-hover:shadow-[0_0_15px_rgba(255,170,0,0.2)] group-hover:scale-110 transition-all duration-300">
            <Trophy className="h-6 w-6" />
          </div>
        </div>

        <div className="flex-1 pt-1">
          <h3 className="text-xl font-bold text-white leading-tight mb-2 group-hover:text-[#ffaa00] transition-colors">
            {achievement.title}
          </h3>
          <div className="flex items-center text-gray-300 font-medium text-sm md:text-base">
            <Star className="w-4 h-4 mr-1.5 text-[#ffaa00]/80" />
            {achievement.event}
          </div>
        </div>
      </div>

      <div className="flex-grow">
        <div className="flex items-center text-sm font-medium text-gray-400 mb-6 bg-white/5 w-fit px-3 py-1.5 rounded-md border border-white/5">
          <Calendar className="h-4 w-4 mr-2 text-gray-500" />
          {achievement.date}
        </div>

        <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-6">
          {achievement.description}
        </p>
      </div>

      {/* Action Buttons */}
      {(achievement.imageUrl || achievement.certificateUrl) && (
        <div className="pt-6 border-t border-white/5 mt-auto flex flex-wrap gap-3">
          {achievement.imageUrl && (
            <button
              onClick={() => onImageClick(achievement.imageUrl!)}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-[#ff5e00] hover:border-[#ff5e00] transition-all duration-300 shadow-sm"
            >
              <ImageIcon className="h-4 w-4 mr-2" />
              View Image
            </button>
          )}
          {achievement.certificateUrl && (
            <a
              href={achievement.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300 group/link shadow-sm"
            >
              <ExternalLink className="h-4 w-4 mr-2 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
              View Proof
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
};

const AchievementsPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Achievements | Rachit Garg';
    window.scrollTo(0, 0);
  }, []);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    if (selectedImage) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-[#050100] text-white font-sans relative overflow-hidden pt-24 pb-20 selection:bg-[#ff5e00]/30 selection:text-white">
      
      {/* Background Glows matching the theme */}
      <div className="absolute top-[-10%] left-[-5%] w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_#612100_0%,_transparent_60%)] opacity-30 z-0 pointer-events-none fixed"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_#ff5e00_0%,_transparent_50%)] opacity-5 z-0 pointer-events-none fixed"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left mb-16"
        >
          <h2 className="text-[#ff5e00] font-semibold tracking-wider uppercase text-sm mb-3">Milestones & Awards</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
            Notable <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Achievements.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl md:mx-0 mx-auto">
            A collection of hackathon wins, recognitions, and competitive milestones that showcase my dedication to excellence.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard 
              key={achievement.id} 
              achievement={achievement} 
              index={index} 
              onImageClick={(url) => setSelectedImage(url)}
            />
          ))}

          {achievements.length === 0 && (
            <div className="col-span-full py-12 text-gray-500 font-medium">
              No achievements listed yet.
            </div>
          )}
        </div>
      </div>

      {/* Global Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050100]/90 backdrop-blur-md p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-10 p-3 text-white bg-white/10 rounded-full hover:bg-[#ff5e00] transition-colors duration-300"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(255,94,0,0.15)] border border-white/10"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            >
              <img
                src={selectedImage}
                alt="Achievement Showcase"
                className="w-auto h-auto max-w-full max-h-[85vh] object-contain bg-[#1a0c05]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
};

export default AchievementsPage;