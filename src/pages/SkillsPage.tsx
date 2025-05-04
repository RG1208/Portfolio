import React, { useEffect } from 'react';
import SkillsSection from '../components/skills/SkillsSection';

const SkillsPage: React.FC = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Skills | Portfolio';
  }, []);

  return (
    <div className="pt-16">
      <SkillsSection />
    </div>
  );
};

export default SkillsPage;