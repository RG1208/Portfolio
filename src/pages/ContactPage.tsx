import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Send, ArrowUpRight } from 'lucide-react';
import { sendContactEmail } from '../lib/contactEmail';

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const ContactForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '', email: '', subject: '', message: '',
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    if (formErrors[name as keyof FormErrors]) setFormErrors({ ...formErrors, [name]: undefined });
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    if (!formValues.name.trim()) errors.name = 'Name is required';
    if (!formValues.email.trim()) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) errors.email = 'Valid email required';
    if (!formValues.subject.trim()) errors.subject = 'Subject is required';
    if (!formValues.message.trim()) errors.message = 'Message is required';
    else if (formValues.message.trim().length < 10) errors.message = 'Message too short';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitError('');

    try {
      await sendContactEmail({
        ...formValues,
        sourcePage: '/contact',
      });
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormValues({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setIsSubmitting(false);
      const message =
        error instanceof Error
          ? error.message
          : 'Failed to send message. Please try again.';

      setSubmitError(message);
    }
  };

  const inputClasses = (error?: string) => `w-full px-5 py-3.5 rounded-xl bg-white/5 border ${
    error ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[#ff5e00]/50'
  } text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#ff5e00]/50 transition-all duration-300`;

  return (
    <div className="bg-[#1a0c05]/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-10 shadow-lg h-full flex flex-col">
      <h3 className="text-2xl font-bold text-white mb-8 tracking-tight">Send a Message</h3>

      {submitSuccess && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 font-medium text-sm">
          Message sent successfully! I'll get back to you soon.
        </motion.div>
      )}

      {submitError && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 font-medium text-sm">
          {submitError}
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5 flex-grow flex flex-col">
        <div>
          <input type="text" id="name" name="name" value={formValues.name} onChange={handleChange} className={inputClasses(formErrors.name)} placeholder="Your Name" />
          {formErrors.name && <p className="mt-1.5 text-xs text-red-400 font-medium">{formErrors.name}</p>}
        </div>

        <div>
          <input type="email" id="email" name="email" value={formValues.email} onChange={handleChange} className={inputClasses(formErrors.email)} placeholder="Email Address" />
          {formErrors.email && <p className="mt-1.5 text-xs text-red-400 font-medium">{formErrors.email}</p>}
        </div>

        <div>
          <input type="text" id="subject" name="subject" value={formValues.subject} onChange={handleChange} className={inputClasses(formErrors.subject)} placeholder="Subject (e.g., Project Inquiry)" />
          {formErrors.subject && <p className="mt-1.5 text-xs text-red-400 font-medium">{formErrors.subject}</p>}
        </div>

        <div className="flex-grow">
          <textarea id="message" name="message" rows={6} value={formValues.message} onChange={handleChange} className={inputClasses(formErrors.message) + " resize-none h-full min-h-[150px]"} placeholder="How can I help you?"></textarea>
          {formErrors.message && <p className="mt-1.5 text-xs text-red-400 font-medium">{formErrors.message}</p>}
        </div>

        <button type="submit" disabled={isSubmitting} className="w-full mt-4 flex justify-center items-center px-6 py-4 bg-[#ff5e00] hover:bg-[#ff7320] text-white font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(255,94,0,0.3)] hover:shadow-[0_0_30px_rgba(255,94,0,0.5)] disabled:opacity-50 disabled:cursor-not-allowed group">
          {isSubmitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            <span className="flex items-center">
              Send Message
              <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
          )}
        </button>
      </form>
    </div>
  );
};

const SocialLinks: React.FC = () => {
  const links = [
    {
      id: 1,
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'rachitgarg1208@gmail.com',
      href: 'mailto:rachitgarg1208@gmail.com',
    },
    {
      id: 2,
      icon: <Linkedin className="h-5 w-5" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/rg1208',
      href: 'https://www.linkedin.com/in/rg1208/',
    },
    {
      id: 3,
      icon: <Github className="h-5 w-5" />,
      label: 'GitHub',
      value: 'github.com/RG1208',
      href: 'https://github.com/RG1208',
    },
    {
      id: 4,
      icon: <MapPin className="h-5 w-5" />,
      label: 'Location',
      value: 'Delhi, India',
      href: null,
    },
  ];

  return (
    <div className="bg-[#1a0c05]/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-10 shadow-lg h-full flex flex-col justify-center">
      <h3 className="text-2xl font-bold text-white mb-8 tracking-tight">Connect With Me</h3>

      <div className="space-y-4">
        {links.map((link) => {
          const content = (
            <div className={`flex items-center p-4 rounded-2xl border ${link.href ? 'border-white/5 bg-white/5 hover:border-[#ff5e00]/50 hover:bg-[#ff5e00]/5 cursor-pointer group' : 'border-transparent bg-transparent'} transition-all duration-300`}>
              <div className={`flex-shrink-0 mr-4 p-3 rounded-xl border border-white/10 ${link.href ? 'bg-white/5 group-hover:bg-[#ff5e00] group-hover:text-white group-hover:border-[#ff5e00]' : 'bg-white/5 text-gray-400'} transition-all duration-300`}>
                {link.icon}
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-500">
                  {link.label}
                </h4>
                <p className={`font-medium ${link.href ? 'text-gray-300 group-hover:text-white' : 'text-gray-300'} transition-colors`}>
                  {link.value}
                </p>
              </div>
              {link.href && (
                <ArrowUpRight className="w-5 h-5 text-gray-500 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-[#ff5e00] transition-all duration-300" />
              )}
            </div>
          );

          return link.href ? (
            <a key={link.id} href={link.href} target="_blank" rel="noopener noreferrer" className="block">
              {content}
            </a>
          ) : (
            <div key={link.id}>
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact | Rachit Garg';
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
          <h2 className="text-[#ff5e00] font-semibold tracking-wider uppercase text-sm mb-3">Reach Out</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Connect.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl md:mx-0 mx-auto">
            Have a question, a project idea, or just want to discuss AI trends? My inbox is always open.
          </p>
        </motion.div>
        
        {/* Contact Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch"
        >
          <SocialLinks />
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
