export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Software Development Intern',
    company: 'Tech Innovations Inc.',
    location: 'Bangalore, India',
    duration: 'May 2023 - July 2023',
    description: [
      'Developed and maintained front-end components for the company\'s flagship product using React and TypeScript',
      'Implemented responsive design principles for improved user experience across devices',
      'Collaborated with the back-end team to integrate APIs and optimize data flow',
      'Participated in daily stand-ups and bi-weekly sprint planning meetings',
    ],
    technologies: ['React', 'TypeScript', 'REST API', 'Git', 'Jira'],
  },
  {
    id: 2,
    role: 'Research Assistant',
    company: 'University AI Lab',
    location: 'Remote',
    duration: 'January 2023 - April 2023',
    description: [
      'Assisted in developing machine learning models for natural language processing tasks',
      'Collected and preprocessed training data for sentiment analysis algorithms',
      'Documented research findings and contributed to academic papers',
      'Presented research progress in weekly lab meetings',
    ],
    technologies: ['Python', 'TensorFlow', 'NLP', 'Jupyter Notebooks', 'PyTorch'],
  },
  {
    id: 3,
    role: 'Web Development Freelancer',
    company: 'Self-employed',
    location: 'Remote',
    duration: 'August 2022 - Present',
    description: [
      'Designed and developed responsive websites for small business clients',
      'Created custom solutions including e-commerce functionality and content management systems',
      'Provided ongoing maintenance and support for client websites',
      'Implemented SEO best practices to improve client site visibility',
    ],
    technologies: ['HTML/CSS', 'JavaScript', 'React', 'WordPress', 'Shopify'],
  },
];