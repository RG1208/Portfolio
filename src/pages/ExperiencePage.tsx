import React, { useEffect } from 'react';
import ExperienceSection from '../components/experience/ExperienceSection';

const ExperiencePage: React.FC = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Experience | Portfolio';
  }, []);

  return (
    <div className="pt-16">
      <ExperienceSection />
    </div>
  );
};

export default ExperiencePage;