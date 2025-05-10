export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Agri Oracle',
    description: 'AgriOracle is a smart agriculture platform that integrates modern AI/ML models with a user-friendly web interface. It helps farmers and stakeholders by providing features like crop disease detection, Next crop Recommendation, and intelligent insights through a MERN stack application connected with Flask-based AI APIs.',
    technologies: ['React', 'Node.js', 'TypeScript','Flask', 'TensorFlow'],
    image: 'https://res.cloudinary.com/dx2ttgkba/image/upload/v1746891561/AgriOracle_IMG_kg9qjf.jpg',
    githubUrl: 'https://github.com/RG1208/AgriOracle',
    // demoUrl: 'https://demo.example.com',
    featured: true,
  },
];