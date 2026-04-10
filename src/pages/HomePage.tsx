import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Send, Briefcase } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { projects, Project } from '../data/projects';

const EMAILJS_CONFIG = {
  serviceId: 'service_55ra9qo',
  templateId: 'template_pnhmxop',
  publicKey: 'awBV_hFwy-y6eH96-',
  toEmail: 'rachitgarg1208@gmail.com',
};

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

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const navigate = useNavigate();

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const openProjectDetail = () => {
    navigate(`/projects/${project.id}`);
  };

  const handleCardKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openProjectDetail();
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      onClick={openProjectDetail}
      onKeyDown={handleCardKeyDown}
      role="link"
      tabIndex={0}
      aria-label={`Open project ${project.title}`}
      className="bg-[#1a1310]/60 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-[#ff5e00]/30 transition-all duration-300 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5e00]"
    >
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#050100] to-transparent z-10 opacity-60"></div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {project.featured && (
          <div className="absolute top-4 right-4 z-20 bg-[#ff5e00] text-white text-xs font-bold px-3 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>

      <div className="p-6 relative z-20">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#ff5e00] transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-400 mb-4 line-clamp-3 text-sm">
          {project.description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="inline-block bg-white/5 border border-white/10 text-gray-300 text-xs font-medium px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div
          className="w-full py-3 rounded-xl border border-white/10 text-white font-medium group-hover:bg-[#ff5e00] group-hover:border-[#ff5e00] transition-all duration-300 flex items-center justify-center"
          aria-hidden="true"
        >
          View Details <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </div>
    </motion.div>
  );
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
      await emailjs.send(
        EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId,
        {
          from_name: formValues.name, from_email: formValues.email,
          subject: formValues.subject, message: formValues.message,
          to_email: EMAILJS_CONFIG.toEmail,
        },
        EMAILJS_CONFIG.publicKey
      );
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormValues({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setIsSubmitting(false);
      setSubmitError('Failed to send message. Please try again.');
    }
  };

  const inputClasses = (error?: string) => `w-full px-4 py-3 rounded-xl bg-white/5 border ${
    error ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#ff5e00]'
  } text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#ff5e00] transition-colors`;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-[#1a1310]/40 backdrop-blur-md border border-white/5 rounded-3xl p-8"
    >
      <h3 className="text-2xl font-bold text-white mb-8">Send Me a Message</h3>

      {submitSuccess && <div className="mb-6 p-4 rounded-xl bg-green-500/20 text-green-400 border border-green-500/30">Message sent successfully!</div>}
      {submitError && <div className="mb-6 p-4 rounded-xl bg-red-500/20 text-red-400 border border-red-500/30">{submitError}</div>}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <input type="text" name="name" value={formValues.name} onChange={handleChange} className={inputClasses(formErrors.name)} placeholder="Your Name" />
          {formErrors.name && <p className="mt-1 text-sm text-red-400">{formErrors.name}</p>}
        </div>
        <div>
          <input type="email" name="email" value={formValues.email} onChange={handleChange} className={inputClasses(formErrors.email)} placeholder="Email Address" />
          {formErrors.email && <p className="mt-1 text-sm text-red-400">{formErrors.email}</p>}
        </div>
        <div>
          <input type="text" name="subject" value={formValues.subject} onChange={handleChange} className={inputClasses(formErrors.subject)} placeholder="Subject" />
          {formErrors.subject && <p className="mt-1 text-sm text-red-400">{formErrors.subject}</p>}
        </div>
        <div>
          <textarea name="message" rows={5} value={formValues.message} onChange={handleChange} className={inputClasses(formErrors.message)} placeholder="Your Message..."></textarea>
          {formErrors.message && <p className="mt-1 text-sm text-red-400">{formErrors.message}</p>}
        </div>
        <button type="submit" disabled={isSubmitting} className="w-full flex justify-center items-center px-6 py-4 bg-[#ff5e00] hover:bg-[#ff7320] text-white font-medium rounded-xl transition-colors disabled:opacity-50">
          {isSubmitting ? 'Sending...' : <><Send className="mr-2 h-5 w-5" /> Send Message</>}
        </button>
      </form>
    </motion.div>
  );
};

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 pb-0 px-6 md:px-12 bg-[#050100] overflow-hidden font-sans">
      
      {/* Background Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,_#612100_0%,_#290c00_40%,_#050100_80%)] opacity-100 z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
        
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 lg:pb-32"
        >
          <div className="space-y-2">
            <h1 className="text-xl md:text-2xl text-gray-300 font-medium">
              Hey, I am <span className="text-[#ff5e00] font-semibold">Rachit Garg</span>
            </h1>
            <h2 className="text-5xl sm:text-7xl md:text-[4.5rem] lg:text-[5.5rem] font-bold text-white leading-[1.1] tracking-tight">
              Full Stack GenAI <br className="hidden md:block"/> Developer
            </h2>
            <p className="text-gray-400 text-lg max-w-md pt-4 leading-relaxed">
              B.Tech student at VIPS. Specializing in crafting intelligent full-stack applications, AI models, and dynamic digital experiences.
            </p>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-[#ff5e00] hover:bg-[#ff7320] text-white font-medium rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(255,94,0,0.3)] hover:shadow-[0_0_30px_rgba(255,94,0,0.5)]"
            >
              Hire me
            </Link>
            <Link
              to="/projects"
              className="p-3.5 border border-white/20 text-white rounded-full hover:bg-white/10 hover:border-white/40 transition-colors"
              aria-label="View Portfolio"
            >
              <Briefcase className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>

        {/* Right Column - Vertically centered caricature */}
        <div className="relative h-full flex items-center justify-center min-h-[500px] lg:min-h-[700px]">

          {/* Main Caricature Image - Enlarged and Bottomed */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 w-[350px] sm:w-[450px] lg:w-[580px] h-auto aspect-square"
          >
            <div className="w-full h-full rounded-full border-b-0 bg-gradient-to-b from-[#1a0c05] to-transparent overflow-hidden flex items-end">
               <img
                  src="https://res.cloudinary.com/dx2ttgkba/image/upload/v1775812702/Rachit_Carricature_fcaza8.png"
                  alt="Rachit Garg"
                  className="w-full h-[110%] object-cover object-top opacity-100"
                />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  const featuredProjects = projects.filter((project) => project.featured);

  useEffect(() => {
    document.title = 'Rachit Garg | Portfolio';
  }, []);

  return (
    <div className="bg-[#050100] min-h-screen text-white font-sans selection:bg-[#ff5e00]/30 selection:text-white">
      <HeroSection />
      
      {/* Skills Section */}
      <div id="skills" className="py-24 border-t border-white/5 relative bg-[#050100]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Featured Expertise
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Core technologies and domains I specialize in
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-[#1a1310]/40 backdrop-blur-sm p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors group">
              <div className="w-14 h-14 bg-[#ff5e00]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#ff5e00]/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#ff5e00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Full-Stack Engineering</h3>
              <p className="text-gray-400 leading-relaxed">
                Building scalable end-to-end web applications using React, Node.js, and FastAPI, with a focus on clean architecture, performance, and real-world usability.
              </p>
            </div>

            <div className="bg-[#1a1310]/40 backdrop-blur-sm p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors group">
              <div className="w-14 h-14 bg-[#ff5e00]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#ff5e00]/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#ff5e00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 3v2.25M14.25 3v2.25M4.5 8.25h15M6.75 6h10.5a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 17.25v-9A2.25 2.25 0 016.75 6zm3.75 5.25h3m-3 3h3" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">GenAI & Agentic AI</h3>
              <p className="text-gray-400 leading-relaxed">
                Developing intelligent systems using LLMs, RAG pipelines, and agent-based workflows with LangChain and LangGraph for automation and decision-making.
              </p>
            </div>

            <div className="bg-[#1a1310]/40 backdrop-blur-sm p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors group">
              <div className="w-14 h-14 bg-[#ff5e00]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#ff5e00]/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#ff5e00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999A5.002 5.002 0 006 9.5 4.5 4.5 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">System Design & Deployment</h3>
              <p className="text-gray-400 leading-relaxed">
                Designing and deploying production-ready systems using Docker, APIs, and cloud platforms with a focus on scalability, reliability, and performance.
              </p>
            </div>

            <div className="bg-[#1a1310]/40 backdrop-blur-sm p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors group">
              <div className="w-14 h-14 bg-[#ff5e00]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#ff5e00]/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#ff5e00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">AI & IoT Systems</h3>
              <p className="text-gray-400 leading-relaxed">
                Building real-time intelligent systems by integrating IoT hardware (ESP32, sensors) with AI models for automation and real-world problem solving.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Projects Section */}
      <section id="experience" className="py-24 relative overflow-hidden bg-[#050100]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff5e00]/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Selected Works</h2>
              <p className="text-gray-400 max-w-xl">
                A showcase of my recent academic projects, hackathon builds, and personal explorations in code.
              </p>
            </div>

            <div className="inline-flex bg-[#ff5e00]/10 border border-[#ff5e00]/30 px-5 py-2 rounded-full text-sm font-medium text-[#ffb38a]">
              Featured Projects
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <div id="connect" className="py-24 border-t border-white/5 bg-[#050100]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">Let's Connect</h2>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Whether you have a project in mind, want to discuss AI trends, or just want to say hi, my inbox is open.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <a href="mailto:rachitgarg1208@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#ff5e00]/50 transition-colors group">
                  <div className="p-3 bg-white/10 rounded-xl group-hover:bg-[#ff5e00] transition-colors"><Mail className="h-6 w-6" /></div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Email</p>
                    <p className="text-white font-medium">rachitgarg1208@gmail.com</p>
                  </div>
                </a>
                
                <a href="https://linkedin.com/in/rg1208" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#ff5e00]/50 transition-colors group">
                  <div className="p-3 bg-white/10 rounded-xl group-hover:bg-[#ff5e00] transition-colors"><Linkedin className="h-6 w-6" /></div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">LinkedIn</p>
                    <p className="text-white font-medium">linkedin.com/in/rg1208</p>
                  </div>
                </a>

                <a href="https://github.com/RG1208" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#ff5e00]/50 transition-colors group">
                  <div className="p-3 bg-white/10 rounded-xl group-hover:bg-[#ff5e00] transition-colors"><Github className="h-6 w-6" /></div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">GitHub</p>
                    <p className="text-white font-medium">github.com/RG1208</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
