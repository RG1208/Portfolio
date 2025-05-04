export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'languages' | 'tools' | 'frameworks';
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'JavaScript', level: 85, category: 'frontend' },
  { name: 'TypeScript', level: 80, category: 'frontend' },
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },
  { name: 'Material UI', level: 75, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Express.js', level: 80, category: 'backend' },
  { name: 'MongoDB', level: 75, category: 'backend' },
  { name: 'PostgreSQL', level: 70, category: 'backend' },
  { name: 'Firebase', level: 80, category: 'backend' },
  
  // Languages
  { name: 'Java', level: 85, category: 'languages' },
  { name: 'Python', level: 80, category: 'languages' },
  { name: 'C++', level: 75, category: 'languages' },
  { name: 'C', level: 70, category: 'languages' },
  
  // Tools
  { name: 'Git', level: 90, category: 'tools' },
  { name: 'Docker', level: 70, category: 'tools' },
  { name: 'VS Code', level: 95, category: 'tools' },
  { name: 'Figma', level: 65, category: 'tools' },
  
  // Frameworks
  { name: 'Next.js', level: 75, category: 'frameworks' },
  { name: 'Redux', level: 80, category: 'frameworks' },
  { name: 'Spring Boot', level: 65, category: 'frameworks' },
  { name: 'Jest', level: 70, category: 'frameworks' },
];