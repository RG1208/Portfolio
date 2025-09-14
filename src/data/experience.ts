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
    role: 'AI Engineer Intern',
    company: 'SysTools',
    location: 'New Delhi, India',
    duration: 'July 2025 - July 2025',
    description: [
      'Worked on the development and enhancement of the "Voice For The Weak" platform aimed at empowering underserved and illiterate populations in rural India',
      'Built and maintained front-end components using React, with a focus on multilingual support and voice interaction',
      'Integrated machine learning models for Government Scheme Recommender, BNS (Bharatiya Nyaya Sanhita) Voice Assistant, and Case Win Probability Finder',
      'Collaborated with back-end team (Flask) to design APIs and ensure seamless communication between ML models and web interface',
      'Ensured the platform supports voice & text-based interaction for intuitive and easy access by illiterate users',
      'Participated in agile development processes including sprint planning, code reviews, and daily stand-ups'
    ],
    technologies: ['React', 'Flask', 'Tailwind CSS', 'Python', 'Sentence Transformers', 'WeasyPrint', 'PyTorch', 'REST API', 'Git']
}
];