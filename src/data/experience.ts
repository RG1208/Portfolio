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
},
  {
    id: 2,
    role: 'AI Engineer Intern  (Team Lead) ',
    company: 'AI Grand Challenge',
    location: 'New Delhi, India',
    duration: 'Aug 2025 - Present',
    description: [
    'Participated in the AI Grand Challenge under Problem Statement PS-03 focused on satellite image intelligence for environmental and geospatial analysis',
    'Worked on designing ML pipelines for preprocessing high-resolution satellite images including noise removal, tiling, normalization, and geo-coordinate mapping',
    'Implemented deep learning models (CNNs/Transformers) for tasks such as land cover classification, anomaly detection, and feature segmentation',
    'Built an end-to-end workflow to detect patterns in satellite imagery such as urban expansion, vegetation change, and waterbody variations',
    'Integrated the ML outputs into an interactive web dashboard using React and Flask, enabling real-time visualization and analysis of satellite data',
    'Performed fine-tuning and hyperparameter optimization to improve model accuracy and robustness across diverse geographical regions',
    'Collaborated with teammates on dataset preparation, model experimentation, evaluation strategy, and final solution presentation'
   ],
    technologies: [
      'Python', 'PyTorch', 'Transformers', 'Scikit-Learn','Transfer Learning', 'Object Detection', 
      'NumPy', 'Pandas', 'Git'
    ]
}

];