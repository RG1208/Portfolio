import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../config/emailjs';

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
    
    // Clear error when field is being edited
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors({
        ...formErrors,
        [name]: undefined,
      });
    }
  };
  
  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    
    // Name validation
    if (!formValues.name.trim()) {
      errors.name = 'Name is required';
    }
    
    // Email validation
    if (!formValues.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    // Subject validation
    if (!formValues.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    // Message validation
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
      // Prepare template parameters
      const templateParams = {
        from_name: formValues.name,
        from_email: formValues.email,
        subject: formValues.subject,
        message: formValues.message,
        to_email: EMAILJS_CONFIG.toEmail,
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );

      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after successful submission
      setFormValues({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
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
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Send Me a Message
      </h3>
      
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
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Name
          </label>
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
          {formErrors.name && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{formErrors.name}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
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
          {formErrors.email && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{formErrors.email}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Subject
          </label>
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
          {formErrors.subject && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{formErrors.subject}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Message
          </label>
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
          {formErrors.message && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{formErrors.message}</p>
          )}
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

export default ContactForm;