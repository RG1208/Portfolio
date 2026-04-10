import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, ShieldCheck } from 'lucide-react';
// Assuming certificates data is imported correctly
import { certificates, Certificate } from '../data/certificates';

interface CertificateCardProps {
  certificate: Certificate;
  index: number;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate, index }) => {
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
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff5e00]/5 rounded-full blur-3xl group-hover:bg-[#ff5e00]/10 transition-colors pointer-events-none"></div>

      <div className="flex items-start mb-6">
        <div className="flex-shrink-0 mr-5">
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-[#ff5e00] group-hover:border-[#ff5e00]/40 group-hover:shadow-[0_0_15px_rgba(255,94,0,0.2)] group-hover:scale-110 transition-all duration-300">
            <Award className="h-6 w-6" />
          </div>
        </div>

        <div className="flex-1 pt-1">
          <h3 className="text-xl font-bold text-white leading-tight mb-2 group-hover:text-[#ff5e00] transition-colors">
            {certificate.title}
          </h3>
          <div className="flex items-center text-gray-300 font-medium text-sm md:text-base">
            <ShieldCheck className="w-4 h-4 mr-1.5 text-[#ff5e00]/80" />
            {certificate.issuer}
          </div>
        </div>
      </div>

      <div className="flex-grow">
        <div className="flex items-center text-sm font-medium text-gray-400 mb-6 bg-white/5 w-fit px-3 py-1.5 rounded-md border border-white/5">
          <Calendar className="h-4 w-4 mr-2 text-gray-500" />
          Issued: {certificate.date}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {certificate.skills.map((skill) => (
            <span
              key={skill}
              className="bg-white/5 border border-white/10 text-gray-300 text-xs font-medium px-3 py-1.5 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {certificate.url && (
        <div className="pt-4 border-t border-white/5 mt-auto">
          <a
            href={certificate.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-[#ff5e00] transition-colors duration-200 group/link"
          >
            Verify Credential
            <ExternalLink className="ml-1.5 h-4 w-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      )}
    </motion.div>
  );
};

const CertificatesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Certifications | Rachit Garg';
    window.scrollTo(0, 0);
  }, []);

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
          <h2 className="text-[#ff5e00] font-semibold tracking-wider uppercase text-sm mb-3">Continuous Learning</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
            Certifications <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500"></span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl md:mx-0 mx-auto">
            Professional credentials, licenses, and notable milestones that highlight my technical expertise and ongoing development.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {certificates.map((certificate, index) => (
            <CertificateCard key={certificate.id} certificate={certificate} index={index} />
          ))}

          {certificates.length === 0 && (
            <div className="col-span-full py-12 text-gray-500 font-medium">
              No certifications listed yet.
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default CertificatesPage;