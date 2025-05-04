import React, { useEffect } from 'react';
import EducationSection from '../components/education/EducationSection';

const EducationPage: React.FC = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Education | Portfolio';
  }, []);

  return (
    <div className="pt-16">
      <EducationSection />
    </div>
  );
};

export default EducationPage;