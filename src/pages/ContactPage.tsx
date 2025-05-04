import React, { useEffect } from 'react';
import ContactForm from '../components/contact/ContactForm';
import SocialLinks from '../components/contact/SocialLinks';

const ContactPage: React.FC = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Contact | Portfolio';
  }, []);

  return (
    <div className="pt-16 py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to contact me using the form below or through my social media profiles.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContactForm />
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;