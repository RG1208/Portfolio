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
    title: '2nd Place - BizTech Ideathon',
    event: 'NDIM Business School Ideathon Competition',
    date: 'September 2025',
    description: 'Secured 2nd place among 300+ teams in a national-level ideathon by presenting an innovative business solution that combined technology and sustainability, demonstrating strong analytical and presentation skills.',
  },

];
