import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
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

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {project.featured && (
          <div className="absolute top-4 right-4 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs font-medium px-2.5 py-1 rounded"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs font-medium px-2.5 py-1 rounded">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        <div className="flex space-x-3 items-center">
          <button
            onClick={() => navigate(`/projects/${project.id}`)}
            className="ml-auto text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline"
          >
            See More →
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ContactForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    if (formErrors[name as keyof FormErrors]) {
      setFormErrors({
        ...formErrors,
        [name]: undefined,
      });
    }
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};

    if (!formValues.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formValues.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formValues.subject.trim()) {
      errors.subject = 'Subject is required';
    }

    if (!formValues.message.trim()) {
      errors.message = 'Message is required';
    } else if (formValues.message.trim().length < 10) {
      errors.message = 'Message should be at least 10 characters';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const templateParams = {
        from_name: formValues.name,
        from_email: formValues.email,
        subject: formValues.subject,
        message: formValues.message,
        to_email: EMAILJS_CONFIG.toEmail,
      };

      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );

      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormValues({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setIsSubmitting(false);
      setSubmitError('Failed to send message. Please try again or contact me directly at rachitgarg1208@gmail.com');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 sm:p-8"
    >
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>

      {submitSuccess && (
        <div className="mb-6 p-4 rounded-lg bg-green-50 dark:bg-green-900 text-green-800 dark:text-green-200">
          Thank you for your message! I'll get back to you as soon as possible.
        </div>
      )}

      {submitError && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 dark:bg-red-900 text-red-800 dark:text-red-200">
          {submitError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${
              formErrors.name
                ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                : 'border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500'
            } rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
            placeholder="Your name"
          />
          {formErrors.name && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{formErrors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${
              formErrors.email
                ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                : 'border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500'
            } rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
            placeholder="your.email@example.com"
          />
          {formErrors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{formErrors.email}</p>}
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formValues.subject}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${
              formErrors.subject
                ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                : 'border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500'
            } rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
            placeholder="What is this regarding?"
          />
          {formErrors.subject && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{formErrors.subject}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formValues.message}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${
              formErrors.message
                ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                : 'border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500'
            } rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
            placeholder="Your message..."
          ></textarea>
          {formErrors.message && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{formErrors.message}</p>}
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200 disabled:bg-primary-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

const SocialLinks: React.FC = () => {
  const links = [
    {
      id: 1,
      icon: <Github className="h-6 w-6" />,
      label: 'GitHub',
      value: 'github.com/RG1208',
      href: 'https://github.com/RG1208',
      color: 'bg-gray-800 dark:bg-gray-700 text-white',
    },
    {
      id: 2,
      icon: <Linkedin className="h-6 w-6" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/rg1208',
      href: 'https://www.linkedin.com/in/rg1208/',
      color: 'bg-blue-600 text-white',
    },
    {
      id: 3,
      icon: <Mail className="h-6 w-6" />,
      label: 'Email',
      value: 'rachitgarg1208@gmail.com',
      href: 'mailto:rachitgarg1208@gmail.com',
      color: 'bg-red-500 text-white',
    },
    {
      id: 4,
      icon: <MapPin className="h-6 w-6" />,
      label: 'Location',
      value: 'Delhi, India',
      href: null,
      color: 'bg-orange-500 text-white',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 sm:p-8 h-full"
    >
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Connect With Me</h3>

      <div className="space-y-6">
        {links.map((link) => (
          <div key={link.id} className="flex items-start">
            <div className={`flex-shrink-0 mr-4 p-3 rounded-full ${link.color}`}>{link.icon}</div>
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{link.label}</h4>
              {link.href ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium"
                >
                  {link.value}
                </a>
              ) : (
                <p className="text-gray-900 dark:text-white font-medium">{link.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const HeroSection: React.FC = () => {
  return (
    <motion.div
      className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-medium text-primary-600 dark:text-primary-400">Hello, I am</h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">Rachit Garg</h1>
              <h3 className="text-xl sm:text-2xl font-medium text-gray-600 dark:text-gray-300">
                B.Tech in Artificial Intelligence and Machine Learning
              </h3>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-lg">VIPS, Delhi</p>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-lg">
                Passionate developer with a focus on creating innovative solutions. I specialize in full-stack development and machine learning applications.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg inline-flex items-center transition-colors duration-200"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-medium rounded-lg transition-colors duration-200"
              >
                Contact Me
              </Link>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://github.com/RG1208"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 dark:bg-gray-700 text-white rounded-full hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/rg1208"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:rachitgarg1208@gmail.com"
                className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl blur opacity-20 dark:opacity-40"></div>
              <div className="relative overflow-hidden rounded-2xl border-2 border-gray-200 dark:border-gray-700 shadow-xl bg-white dark:bg-gray-800">
                <img
                  src="https://res.cloudinary.com/dx2ttgkba/image/upload/v1746891560/RachitGarg_jidjc1.jpg"
                  alt="Rachit Garg"
                  className="w-full h-80 object-cover object-center sm:h-96"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const HomePage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  useEffect(() => {
    document.title = 'Rachit Garg';
  }, []);

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((project) => project.featured);

  return (
    <div>
      <HeroSection />
      
      <div className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Featured Skills
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are some of my top technical skills and expertise areas
            </p>
          </div>
          
          <div className="flex justify-center px-4 py-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    
    {/* Web Development Card */}
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center">
      <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        Web Development
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
        Building responsive, accessible, and performant web applications using modern frameworks and technologies.
      </p>
    </div>

    {/* IoT Card */}
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center">
      <div className="w-16 h-16 bg-secondary-100 dark:bg-secondary-900 rounded-full flex items-center justify-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary-600 dark:text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        IoT
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
        Designing and deploying IoT solutions using Raspberry Pi for real-time data acquisition, sensor integration, and edge computing applications.
      </p>
    </div>

  </div>
</div>

        </div>
      </div>
      
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Projects</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are some of the projects I've worked on during my academic journey and personal exploration.
            </p>
          </motion.div>

          <div className="mb-8 flex justify-center">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                  filter === 'all'
                    ? 'bg-primary-600 dark:bg-primary-500 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setFilter('featured')}
                className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                  filter === 'featured'
                    ? 'bg-primary-600 dark:bg-primary-500 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                Featured
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      <div className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Get In Touch
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to contact me!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactForm />
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
