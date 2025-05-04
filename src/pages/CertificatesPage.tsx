import React, { useEffect } from 'react';
import CertificatesSection from '../components/certificates/CertificatesSection';

const CertificatesPage: React.FC = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Certificates & Achievements | Portfolio';
  }, []);

  return (
    <div className="pt-16">
      <CertificatesSection />
    </div>
  );
};

export default CertificatesPage;