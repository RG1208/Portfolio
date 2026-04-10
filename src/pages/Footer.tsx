import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050100] border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto py-8 px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm font-medium">
              © {currentYear} Rachit Garg. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/RG1208"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#ff5e00] transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/rg1208"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#ff5e00] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:rachitgarg1208@gmail.com"
              className="text-gray-500 hover:text-[#ff5e00] transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;