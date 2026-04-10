export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  url?: string;
  skills: string[];
}

export const certificates: Certificate[] = [
   {
    id: 1,
    title: 'RAG',
    issuer: 'Udemy',
    date: 'March 2026',
    url: 'https://ude.my/UC-3e07e074-f575-47e9-8f8d-d2c5074e17c2',
    skills: ['GenAI','RAG','Docker','Git','LangChain','LangGraph','Python', 'FastAPI'],
  },
  {
    id: 2,
    title: ' FullStack Generative AI',
    issuer: 'Udemy',
    date: 'October 2025',
    url: 'https://ude.my/UC-f3a652da-ef86-4d16-a60f-31b9f33902ca',
    skills: ['GenAI','RAG','Docker','Git','LangChain','LangGraph','Python', 'FastAPI', 'Web Development'],
  },
  {
    id: 3,
    title: 'React Js',
    issuer: 'Udemy',
    date: 'May 2025',
    url: 'https://ude.my/UC-603065b3-b944-4379-a226-92cd32d68fa3',
    skills: ['React', 'JavaScript', 'Frontend Development', 'Web Development'],
  },
  {
    id: 4,
    title: 'Flask',
    issuer: 'Udemy',
    date: 'May 2025',
    url: 'https://ude.my/UC-65d86d71-3c6a-49ec-9e24-c16f3f97e168',
    skills: ['Flask','Docker','Python', 'Backend Development', 'Web Development'],
  },
  
];
