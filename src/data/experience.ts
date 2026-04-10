export interface Experience {
  id: number;
  type: string;
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
    type: 'Hybrid',
    role: 'Full Stack GenAI Engineer',
    company: 'Systools Software Pvt. Ltd.',
    location: 'New Delhi, India',
    duration: 'Jan 2026 – Present',
    description: [
      'Designed and implemented a RAG-based conversational AI system using LangChain and FAISS for fast, context-aware responses',
      'Built LLM-powered applications using custom datasets and vector databases, improving response relevance and retrieval accuracy',
      'Developed scalable backend services using FastAPI and Docker with modular architecture and optimized API performance',
      'Integrated frontend interfaces and database systems to deliver complete end-to-end GenAI solutions'
    ],
    technologies: ['LangChain', 'FAISS', 'FastAPI', 'Docker', 'LLMs', 'RAG', 'Python', 'React', 'MySQL', 'Git']
  },

  {
    id: 2,
    type: 'Hybrid',
    role: 'AI Engineer Intern (Team Lead)',
    company: 'Cybersics',
    location: 'New Delhi, India',
    duration: 'Aug 2025 – Oct - 2025',
    description: [
      'Led development of ML pipelines for preprocessing and analyzing high-resolution satellite imagery',
      'Implemented deep learning models (CNNs/Transformers) for classification, anomaly detection, and segmentation tasks',
      'Built end-to-end workflows for detecting patterns such as land-use changes and environmental variations',
      'Integrated model outputs into a web dashboard for real-time visualization and analysis'
    ],
    technologies: ['Python', 'PyTorch', 'Transformers', 'Scikit-learn', 'Computer Vision', 'Git']
  },

  {
    id: 3,
    type: 'Full-Time',
    role: 'AI Engineer Intern',
    company: 'Systools Software Pvt. Ltd.',
    location: 'New Delhi, India',
    duration: 'July 2025',
    description: [
      'Developed features for an AI-driven platform enabling voice-based access to government services',
      'Built responsive UI components using React with multilingual and voice interaction support',
      'Integrated ML models via REST APIs for recommendation systems and conversational assistants',
      'Collaborated with backend services to ensure seamless communication between ML models and user interface'
    ],
    technologies: ['React', 'Flask', 'Python', 'Tailwind CSS', 'PyTorch', 'REST API', 'Git']
  }
];
