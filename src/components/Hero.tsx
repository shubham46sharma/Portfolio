import { motion } from 'framer-motion';
import { FaCheckCircle, FaPlay, FaFileDownload } from 'react-icons/fa';
import profilePic from '../assets/Shubham/05E8345D-7A65-4614-9CBF-E454E0C27589_1_105_c.jpeg';

const Hero = () => {
  return (
    <section id="home" className="relative pt-20 pb-10 px-6 md:px-8 bg-gradient-to-b from-[#4d4d4d] via-[#2a2a2a] to-[var(--color-surface)]">
      <div className="flex flex-col md:flex-row items-end gap-6 md:gap-8">
        <motion.img 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          src={profilePic}
          alt="Shubham Sharma" 
          className="w-40 h-40 md:w-60 md:h-60 rounded-full shadow-2xl object-cover"
        />
        
        <div className="flex flex-col gap-2 mb-2 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-sm md:text-base"
          >
            <FaCheckCircle className="text-blue-400 bg-white rounded-full" />
            <span className="uppercase tracking-wider font-bold">Verified Developer</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-8xl font-black tracking-tight leading-none"
          >
            Shubham Sharma
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-[var(--color-text-secondary)] mt-2 font-medium text-lg md:text-xl"
          >
            Software Engineer • Full Stack Developer • AI Enthusiast
          </motion.p>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex items-center gap-4 mt-8"
      >
        <a href="#projects" className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-black font-bold rounded-full p-4 md:px-8 md:py-3 flex items-center gap-2 transform hover:scale-105 transition-all">
          <FaPlay className="text-lg" />
          <span className="hidden md:inline">VIEW WORK</span>
        </a>
        
        <a href="resume.pdf" target="_blank" rel="noopener noreferrer" className="border border-[var(--color-text-secondary)] hover:border-white text-white font-bold rounded-full px-6 py-2 md:py-3 transition-colors uppercase text-sm tracking-wider bg-transparent flex items-center gap-2">
           <FaFileDownload size={16} />
           Resume
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
