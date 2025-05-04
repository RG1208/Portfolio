import React, { useEffect } from 'react';
import AboutContent from '../components/about/AboutContent';

const AboutPage: React.FC = () => {
  useEffect(() => {
    // Update document title
    document.title = 'About | Portfolio';
  }, []);

  return (
    <div className="pt-16">
      <AboutContent />
    </div>
  );
};

export default AboutPage;