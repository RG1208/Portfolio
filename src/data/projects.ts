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
    title: 'E-Learning Platform',
    description: 'A comprehensive e-learning platform with course management, video lectures, quizzes, and progress tracking. Features include user authentication, payment integration, and responsive design.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Material UI', 'Firebase'],
    image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.example.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Smart Home IoT Dashboard',
    description: 'An IoT dashboard for smart home devices with real-time monitoring, device control, and automation rules. Includes data visualization and mobile responsiveness.',
    technologies: ['React', 'TypeScript', 'WebSockets', 'Chart.js', 'Node.js', 'MQTT'],
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.example.com',
    featured: true,
  },
  {
    id: 3,
    title: 'AI Image Recognition App',
    description: 'A mobile app for real-time image recognition using machine learning. Can identify objects, scenes, and text from camera input or gallery images.',
    technologies: ['TensorFlow.js', 'React Native', 'Expo', 'Firebase ML', 'Node.js'],
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 4,
    title: 'Inventory Management System',
    description: 'A full-stack inventory management system for small businesses with barcode scanning, stock tracking, and sales reporting.',
    technologies: ['React', 'Redux', 'Node.js', 'PostgreSQL', 'Express', 'Chart.js'],
    image: 'https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.example.com',
    featured: true,
  },
  {
    id: 5,
    title: 'Blockchain Voting System',
    description: 'A secure voting system using blockchain technology for transparency and security. Features include voter verification and real-time results.',
    technologies: ['Solidity', 'Ethereum', 'Web3.js', 'React', 'Node.js'],
    image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 6,
    title: 'Health Tracking Mobile App',
    description: 'A health and fitness tracking mobile application with workout routines, nutrition logging, and progress analytics.',
    technologies: ['React Native', 'Redux', 'Firebase', 'Chart.js', 'Node.js'],
    image: 'https://images.pexels.com/photos/3927417/pexels-photo-3927417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.example.com',
    featured: false,
  },
];