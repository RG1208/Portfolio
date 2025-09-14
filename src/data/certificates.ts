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
