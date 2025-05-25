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
    title: 'React Js',
    issuer: 'Udemy',
    date: 'May 2025',
    url: 'https://res.cloudinary.com/dx2ttgkba/image/upload/v1748178762/ReactJs_qtuug9.png',
    skills: ['React', 'JavaScript', 'Frontend Development', 'Web Development'],
  },
  {
    id: 2,
    title: 'Flask',
    issuer: 'Udemy',
    date: 'May 2025',
    url: 'https://res.cloudinary.com/dx2ttgkba/image/upload/v1748178762/Flask_yeojjq.png',
    skills: ['Flask','Docker','Python', 'Backend Development', 'Web Development'],
  },
];

export interface Achievement {
  id: number;
  title: string;
  event: string;
  date: string;
  description: string;
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: '1st Place - Hackathon 2023',
    event: 'TechFest College Hackathon',
    date: 'October 2023',
    description: 'Developed an AI-powered crop disease detection application using image recognition technology.',
  },
  {
    id: 2,
    title: '2nd Place - Coding Competition',
    event: 'CodeNation Collegiate Challenge',
    date: 'March 2023',
    description: 'Solved complex algorithmic problems under time constraints, competing against 200+ teams.',
  },
  {
    id: 3,
    title: 'Winner - Best Technical Paper',
    event: 'International Technology Conference',
    date: 'July 2023',
    description: 'Published and presented a paper on "Optimizing Machine Learning Models for Edge Computing Devices".',
  },
  {
    id: 4,
    title: 'Open Source Contributor',
    event: 'Hacktoberfest 2022',
    date: 'October 2022',
    description: 'Contributed to multiple open-source projects, with 5+ accepted pull requests during Hacktoberfest.',
  },
];