import React, { useEffect } from 'react';
import ProjectsSection from '../components/projects/ProjectsSection';

const ProjectsPage: React.FC = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Projects | Portfolio';
  }, []);

  return (
    <div className="pt-16">
      <ProjectsSection />
    </div>
  );
};

export default ProjectsPage;