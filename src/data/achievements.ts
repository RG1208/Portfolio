export interface Achievement {
  id: number;
  title: string;
  event: string;
  date: string;
  description: string;
  imageUrl?: string;
  certificateUrl?: string;
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: '2nd Place - BizTech Ideathon',
    event: 'NDIM Business School Ideathon Competition',
    date: 'September 2025',
    description: 'Secured 2nd place among 300+ teams in a national-level ideathon by presenting an innovative business solution that combined technology and sustainability, demonstrating strong analytical and presentation skills.',
    imageUrl: 'https://res.cloudinary.com/dx2ttgkba/image/upload/v1757854370/WhatsApp_Image_2025-09-14_at_18.20.45_cubbxu.jpg',
    certificateUrl: 'https://res.cloudinary.com/dx2ttgkba/image/upload/v1757854370/WhatsApp_Image_2025-09-14_at_18.22.34_ecxefl.jpg',
  },

];
