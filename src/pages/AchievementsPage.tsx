import React, { useEffect } from 'react';
import AchievementsSection from '../components/achievements/AchievementsSection';

const AchievementsPage: React.FC = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Achievements | Portfolio';
  }, []);

  return (
    <div className="pt-16">
      <AchievementsSection />
    </div>
  );
};

export default AchievementsPage;
