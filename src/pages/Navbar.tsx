import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Download, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Education', path: '/education' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 py-6 px-6 md:px-12 max-w-[1600px] mx-auto w-full">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-white tracking-tighter shrink-0 z-50">
          rachit.
        </div>

        {/* Desktop Navigation (Pill shape) */}
        <div className="hidden xl:flex items-center space-x-1 bg-white/5 border border-white/10 rounded-full px-2 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-[#ff5e00] bg-white/5'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4 z-50">
          <button className="hidden sm:flex items-center gap-2 border border-white/20 text-white px-5 py-2.5 rounded-full hover:bg-white/10 transition-colors text-sm font-medium shrink-0">
            <Download size={16} /> Download Resume
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Dropdown Menu */}
      <div
        className={`xl:hidden absolute top-full left-6 right-6 mt-2 rounded-2xl bg-[#1a1310]/95 backdrop-blur-xl border shadow-2xl overflow-hidden transition-all duration-300 ease-in-out origin-top ${
          isOpen
            ? 'max-h-[600px] opacity-100 border-white/10 scale-y-100'
            : 'max-h-0 opacity-0 border-transparent scale-y-95 pointer-events-none'
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              end
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? 'text-[#ff5e00] bg-[#ff5e00]/10 border border-[#ff5e00]/20'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          
          {/* Mobile Resume Button */}
          <button className="sm:hidden w-full mt-4 flex items-center justify-center gap-2 border border-white/20 text-white px-5 py-3 rounded-xl hover:bg-white/10 transition-colors font-medium">
            <Download size={18} /> Download Resume
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;