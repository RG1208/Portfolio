export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  keyFeatures?: string[];
}

export const projects: Project[] = [
  {
    id: "agri-oracle",
    title: 'Agri Oracle',
    description: 'AgriOracle is an intelligent agriculture assistant designed to empower farmers with AI-driven insights. The platform offers real-time crop disease detection, next crop recommendation, and smart agricultural advice using advanced machine learning models. Built with a modern MERN stack frontend and Flask-based AI APIs, AgriOracle bridges the gap between cutting-edge technology and practical farming needs. Its clean user interface ensures ease of use for all stakeholders—from farmers to researchers—while supporting sustainable and informed decision-making in agriculture.',
    technologies: ['React', 'Node.js', 'TypeScript', 'Flask', 'TensorFlow'],
    image: 'https://res.cloudinary.com/dx2ttgkba/image/upload/v1750420072/logo_cdmsqu.png',
    githubUrl: 'https://github.com/RG1208/AgriOracle',
    demoUrl: 'https://agrioracle.vercel.app/',
    featured: true,
    keyFeatures: [
      'Real-time crop disease detection using deep learning models',
      'AI-based next Crop Recommendation based on soil and previous crop data',
      'AI-based next Inter Cropping recommendations based on soil and primary crop data',
      'Flask-based modular ML API architecture',
      'User-friendly dashboard for visual insights',
      'End-to-end MERN stack with responsive design',
    ],
  },
  {
    id: "learnify",
    title: "Learnify",
    description: "Learnify is a robust and intuitive Learning Management System (LMS) tailored to simplify digital education for both teachers and students. The platform enables teachers to create courses, upload lectures, assign and review assignments, while students can view lectures and submit their work. Built with a React frontend and Flask backend, Learnify ensures secure access, smooth interaction, and clear user flows, making it ideal for institutions looking to digitize their learning ecosystem. The application emphasizes responsive design, JWT-based authentication, and efficient RESTful API integration.",
    technologies: ["React", "Flask", "JWT", "SQLAlchemy", "Tailwind CSS"],
    image: "https://res.cloudinary.com/dx2ttgkba/image/upload/v1752658510/LMS_klr5zz.png",
    githubUrl: "https://github.com/RG1208/Projects/tree/main/LMS", // Change to your actual repo if different
    demoUrl: "https://learnify-khaki-chi.vercel.app/",
    featured: true,
    keyFeatures: [
      "Role-based authentication system (Teacher & Student)",
      "Teacher dashboard to manage courses, lectures, and assignments",
      "Student dashboard to access lectures and submit assignments",
      "RESTful backend built with Flask and SQLAlchemy",
      "JWT-secured APIs with protected routes",
      "Fully responsive UI using Tailwind CSS and React",
    ],
  },
  {
  "id": "voice-for-the-weak",
  "title": "Voice for the Weak",
  "description": "Voice for the Weak is an innovative AI-powered platform designed to empower underprivileged and rural communities by providing easy access to legal assistance, government welfare schemes, and case analysis. The platform consists of three main verticals: a Government Scheme Recommender, BNS (Bharat Nyaya Sahayak) Section Analysis, and Case Win Probability Finder. It helps illiterate or semi-literate users by offering a multilingual voice interface along with a user-friendly web interface. Built using React for the frontend and Flask for the backend, the system is tailored to ensure accessibility, fast interaction, and secure data processing. The project emphasizes multilingual support, AI-driven recommendations, and real-time case analysis, helping bridge the digital divide for marginalized populations.",
  "technologies": ["React", "Flask", "Whisper NLP", "GPT Model", "Machine Learning", "PostgreSQL", "Tailwind CSS"],
  "image": "https://res.cloudinary.com/dx2ttgkba/image/upload/v1752658510/VoiceForWeak_xn5kfp.png",
  "githubUrl": "https://github.com/RG1208/VoiceForWeak",
  "demoUrl": "https://res.cloudinary.com/dx2ttgkba/video/upload/v1756573428/voice_1_zxvtku.mp4",
  "featured": true,
  "keyFeatures": [
    "Government Scheme Recommender: Personalized recommendations based on user profile",
    "BNS Section Analysis: Voice-powered legal advice to analyze and explain legal sections in simple terms",
    "Case Win Probability Finder: Predicts the likelihood of winning a legal case based on input data and historical judgments",
    "Multilingual interface supporting Hindi, English, and regional languages",
    "Voice-based interface for illiterate users powered by Whisper NLP and GPT",
    "Secure RESTful backend built with Flask and PostgreSQL",
    "Fully responsive and accessible frontend built with React and Tailwind CSS"
  ]
}
];