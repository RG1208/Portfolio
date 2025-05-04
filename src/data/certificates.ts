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
    title: 'Full Stack Web Development',
    issuer: 'Udemy',
    date: 'December 2022',
    url: 'https://udemy.com',
    skills: ['React', 'Node.js', 'MongoDB', 'Express.js'],
  },
  {
    id: 2,
    title: 'Machine Learning Specialization',
    issuer: 'Coursera - Stanford University',
    date: 'April 2023',
    url: 'https://coursera.org',
    skills: ['Python', 'Machine Learning', 'Deep Learning', 'Data Analysis'],
  },
  {
    id: 3,
    title: 'Cloud Computing Fundamentals',
    issuer: 'AWS',
    date: 'August 2023',
    url: 'https://aws.amazon.com',
    skills: ['AWS', 'Cloud Architecture', 'Serverless', 'DevOps'],
  },
  {
    id: 4,
    title: 'Data Structures and Algorithms',
    issuer: 'HackerRank',
    date: 'June 2022',
    url: 'https://hackerrank.com',
    skills: ['Data Structures', 'Algorithms', 'Problem Solving', 'Java'],
  },
  {
    id: 5,
    title: 'UI/UX Design Fundamentals',
    issuer: 'Google',
    date: 'February 2023',
    url: 'https://design.google',
    skills: ['UI Design', 'UX Research', 'Figma', 'Design Thinking'],
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