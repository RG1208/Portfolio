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
    field: 'Artificial Intelligence and Machine Learning',
    institution: 'Vivekananda Institute of Proffessional Studies (VIPS)',
    location: 'Delhi, India',
    duration: '2023 - 2027 (Expected)',
    gpa: '8.7/10',
    description: 'Focused on Web Development. Active member of the college Career Development Center.',
  },
  {
    id: 2,
    degree: 'Higher Secondary Certificate (Class XII)',
    field: 'Science with Information Practices',
    institution: 'Shiv Vani Model Sr. Sec. School',
    location: 'Delhi, India',
    duration: '2021 - 2023',
    gpa: '82%',
  },
  {
    id: 3,
    degree: 'Secondary School Certificate (Class X)',
    field: 'General Studies',
    institution: 'Shiv Vani Model Sr. Sec. School',
    location: 'Delhi, India',
    duration: '2020 - 2021',
    gpa: '92%',
  },
];