export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'languages' | 'tools' | 'frameworks' | 'ai' | 'database' | 'devops' | 'iot';
}

export const skills: Skill[] = [

// Frontend
{ name: 'React.js', level: 85, category: 'frontend' },
{ name: 'Tailwind CSS', level: 90, category: 'frontend' },

// Languages
{ name: 'JavaScript', level: 90, category: 'languages' },
{ name: 'Python', level: 90, category: 'languages' },

// Backend
{ name: 'Node.js', level: 85, category: 'backend' },
{ name: 'FastAPI', level: 85, category: 'backend' },
{ name: 'Express.js', level: 80, category: 'backend' },
{ name: 'REST APIs', level: 90, category: 'backend' },
// { name: 'Microservices', level: 75, category: 'backend' },

// AI / GenAI
{ name: 'LLMs', level: 85, category: 'ai' },
{ name: 'LangChain', level: 85, category: 'ai' },
{ name: 'LangGraph', level: 75, category: 'ai' },
{ name: 'LangSmith', level: 75, category: 'ai' },
{ name: 'RAG Pipelines', level: 85, category: 'ai' },
{ name: 'Prompt Engineering', level: 85, category: 'ai' },
{ name: 'Vector DB (FAISS)', level: 80, category: 'ai' },

// Databases
{ name: 'MongoDB', level: 80, category: 'database' },
{ name: 'MySQL', level: 75, category: 'database' },
{ name: 'PostgreSQL', level: 75, category: 'database' },
{ name: 'Redis', level: 70, category: 'database' },

// DevOps & Cloud
{ name: 'Docker', level: 75, category: 'devops' },
{ name: 'Kubernetes', level: 65, category: 'devops' },
{ name: 'CI/CD (GitHub Actions)', level: 70, category: 'devops' },
{ name: 'Cloudflare', level: 70, category: 'devops' },
{ name: 'Caddy', level: 65, category: 'devops' },
{ name: 'Nginx', level: 65, category: 'devops' },

// IoT
{ name: 'Raspberry Pi', level: 80, category: 'iot' },
{ name: 'ESP32', level: 75, category: 'iot' },
{ name: 'Sensor Integration', level: 80, category: 'iot' },

// Tools
{ name: 'Git', level: 90, category: 'tools' },
{ name: 'GitHub', level: 90, category: 'tools' },
{ name: 'Postman', level: 85, category: 'tools' },
{ name: 'Vercel', level: 85, category: 'tools' },
{ name: 'Render', level: 80, category: 'tools' },
{ name: 'NeonDB', level: 70, category: 'tools' },
  
  // Frameworks
  // { name: 'Next.js', level: 75, category: 'frameworks' },
  // { name: 'Redux', level: 80, category: 'frameworks' },
  // { name: 'Spring Boot', level: 65, category: 'frameworks' },
  // { name: 'Jest', level: 70, category: 'frameworks' },
];
