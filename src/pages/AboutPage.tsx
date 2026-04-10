import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Briefcase, Award, Cpu, Code, Layers, FileText } from 'lucide-react';

// --- Data Definitions ---
const timelineData = [
  {
    id: 1,
    year: '2022 - Present',
    title: 'B.Tech in AI & Machine Learning',
    organization: 'Vivekananda Institute of Professional Studies (VIPS)',
    description: 'Currently in my 6th semester. Focusing on advanced computational models, generative AI, and full-stack development.',
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    id: 2,
    year: '2025 - 2026',
    title: 'ResQBridge & SIDD Development',
    organization: 'Independent Project',
    description: 'Engineered a comprehensive IoT + Web ecosystem for real-time vehicle accident detection (not just potholes), integrating ESP32, GSM modules, and AI-driven triage.',
    icon: <Cpu className="w-5 h-5" />,
  },
  {
    id: 3,
    year: 'Early 2026',
    title: 'Patent Application Submitted',
    organization: 'Innovation & Research',
    description: 'Claimed a "Vehicle Impact Detection and Emergency Response Device" featuring multi-modal sensors and blockchain-based immutable evidence storage.',
    icon: <FileText className="w-5 h-5" />,
  },
  {
    id: 4,
    year: 'Ongoing',
    title: 'Civic Intelligence & DisciPlan',
    organization: 'Full-Stack Builds',
    description: 'Building RAG-based chatbots for information forensics and developing clean, futuristic productivity applications inspired by Notion and Stripe.',
    icon: <Layers className="w-5 h-5" />,
  },
];

const coreValues = [
  {
    title: 'Generative AI & LLMs',
    description: 'Passionate about integrating LangChain, RAG architectures, and computer vision models (like YOLOv11) into practical web applications.',
    icon: <Code className="text-[#ff5e00] w-8 h-8 mb-4" />
  },
  {
    title: 'IoT & Embedded Systems',
    description: 'Bridging the physical and digital worlds using microcontrollers, sensors, and real-time data pipelines for safety and monitoring.',
    icon: <Cpu className="text-[#ff5e00] w-8 h-8 mb-4" />
  },
  {
    title: 'Clean, Futuristic Design',
    description: 'Prioritizing minimal, highly intuitive UI/UX aesthetics inspired by industry leaders to make complex AI tools accessible.',
    icon: <Layers className="text-[#ff5e00] w-8 h-8 mb-4" />
  }
];

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Me | Rachit Garg';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050100] text-white font-sans relative overflow-hidden pt-24 pb-20 selection:bg-[#ff5e00]/30 selection:text-white">
      
      {/* Background Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,_#612100_0%,_#290c00_40%,_#050100_80%)] opacity-80 z-0 pointer-events-none fixed"></div>
      
      {/* Orbital Rings Background */}
      <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] border-[0.5px] border-white/5 rounded-full pointer-events-none z-0 hidden lg:block"></div>
      <div className="absolute top-[-10%] right-[-20%] w-[1200px] h-[1200px] border-[0.5px] border-white/5 rounded-full pointer-events-none z-0 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left mb-16 lg:mb-24"
        >
          <h2 className="text-[#ff5e00] font-semibold tracking-wider uppercase text-sm mb-3">Discover My Journey</h2>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            Behind the <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Code.</span>
          </h1>
        </motion.div>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Image Container with Glow */}
            <div className="relative z-10 rounded-3xl p-2 bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_50px_rgba(255,94,0,0.1)]">
              <img 
                src="https://res.cloudinary.com/dx2ttgkba/image/upload/v1746891560/RachitGarg_jidjc1.jpg" 
                alt="Rachit Garg" 
                className="w-full h-auto rounded-2xl object-cover aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#ff5e00]/20 blur-3xl rounded-full"></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-7 space-y-6 text-gray-300 text-lg leading-relaxed"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Hello, I'm Rachit.</h3>
            <p>
              I am a Full Stack Developer and innovator currently pursuing my B.Tech in Artificial Intelligence and Machine Learning at VIPS, Delhi. I specialize in building end-to-end systems, integrating backend engineering, Generative AI, and scalable deployments to create intelligent, real-world solutions.
            </p>

            <p>
              My passion lies in solving impactful real-world problems through technology. I focus on developing AI-powered applications using RAG pipelines, LLMs, and modern full-stack technologies, with an emphasis on scalability, performance, and practical usability.
            </p>

            <p>
              I enjoy working at the intersection of software engineering and AI, with hands-on experience in GenAI, Agentic AI systems, and modern development practices. When I'm not building applications using Python, React, or FastAPI, I am exploring new AI architectures and designing systems that can scale efficiently in real-world environments.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <span className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:border-[#ff5e00]/50 transition-colors">Python & JS/TS</span>
              <span className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:border-[#ff5e00]/50 transition-colors">React & Node.js</span>
              <span className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:border-[#ff5e00]/50 transition-colors">IoT (ESP32)</span>
              <span className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:border-[#ff5e00]/50 transition-colors">LangChain & RAG</span>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;