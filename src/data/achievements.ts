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
    title: 'Patent Published - Vehicle Impact Detection System',
    event: 'Indian Patent Office',
    date: '2026',
    description: 'Published a patent titled "Vehicle Impact Detection and Emergency Response Device", focusing on real-time accident detection, automated emergency alert generation, and rapid response coordination. The system also integrates blockchain-based mechanisms for secure and tamper-proof incident data recording, enhancing reliability and transparency in emergency situations.',
    imageUrl: 'https://drive.google.com/file/d/19CH-w1kE5bA57HY7Jmch1xNmDS8LvTEr/view?usp=sharing',
    certificateUrl: 'https://drive.google.com/file/d/19CH-w1kE5bA57HY7Jmch1xNmDS8LvTEr/view?usp=sharing',
  },
  {
    id: 2,
    title: '2nd Place - BizTech Ideathon',
    event: 'NDIM Business School Ideathon Competition',
    date: 'September 2025',
    description: 'Secured 2nd place among 300+ teams in a national-level ideathon by presenting an innovative business solution that combined technology and sustainability, demonstrating strong analytical and presentation skills.',
    imageUrl: 'https://res.cloudinary.com/dx2ttgkba/image/upload/v1757854370/WhatsApp_Image_2025-09-14_at_18.20.45_cubbxu.jpg',
    certificateUrl: 'https://res.cloudinary.com/dx2ttgkba/image/upload/v1757854370/WhatsApp_Image_2025-09-14_at_18.22.34_ecxefl.jpg',
  },
  {
    id: 3,
    title: '4th Place - IILM Ideathon 2025',
    event: 'IILM University Gurugram',
    date: 'November 2025',
    description: 'Secured 4th place among 50+ teams in a university-level ideathon (Robotics & Automation) at IILM University. Recognized for presenting an innovative, sustainable idea that integrated technology and strong analytical ability.',
    imageUrl: 'https://res.cloudinary.com/dx2ttgkba/image/upload/v1763664118/IILM_Stage_h8cbhf.jpg',
    certificateUrl: 'https://res.cloudinary.com/dx2ttgkba/image/upload/v1763664118/IILM_Certificate_kvtktl.jpg',
  },

];
