export interface Education {
  id: number;
  degree: string;
  field: string;
  institution: string;
  location: string;
  duration: string;
  gpa: string;
  description?: string;
}

export const education: Education[] = [
  {
    id: 1,
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science and Engineering',
    institution: 'Indian Institute of Technology',
    location: 'Delhi, India',
    duration: '2021 - 2025 (Expected)',
    gpa: '8.7/10',
    description: 'Focused on AI/ML, Web Development, and Data Structures & Algorithms. Active member of the college coding club and technical society.',
  },
  {
    id: 2,
    degree: 'Higher Secondary Certificate (Class XII)',
    field: 'Science with Computer Science',
    institution: 'Delhi Public School',
    location: 'Bangalore, India',
    duration: '2019 - 2021',
    gpa: '94.8%',
  },
  {
    id: 3,
    degree: 'Secondary School Certificate (Class X)',
    field: 'General Studies',
    institution: 'Delhi Public School',
    location: 'Bangalore, India',
    duration: '2017 - 2019',
    gpa: '95.2%',
  },
];