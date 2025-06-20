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
    technologies: ['React', 'Node.js', 'TypeScript','Flask', 'TensorFlow'],
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
];