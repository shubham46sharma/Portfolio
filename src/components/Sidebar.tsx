import { FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const navLinks = [
    { href: '#home', label: 'Home', icon: <FaHome size={24} /> },
    { href: '#about', label: 'About', icon: <FaUser size={20} /> },
    { href: '#skills', label: 'Skills', icon: <FaCode size={20} /> },
    { href: '#projects', label: 'Projects', icon: <FaCode size={20} /> }, // Using generic code icon for projects too if specific one not preferred, or change to Folder
    { href: '#experience', label: 'Experience', icon: <FaBriefcase size={20} /> },
    { href: '#contact', label: 'Contact', icon: <FaEnvelope size={20} /> },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-black h-screen fixed left-0 top-0 pt-6 px-4 pb-4 z-50">
        <div className="mb-8 px-4">
          <h1 className="text-white text-2xl font-bold tracking-tight">Portfolio<span className="text-[var(--color-primary)]">.</span></h1>
        </div>
        
        <nav className="flex-1 space-y-2">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="flex items-center space-x-4 text-[var(--color-text-secondary)] hover:text-white transition-colors duration-200 px-4 py-3 rounded-md hover:bg-[var(--color-surface-hover)] font-medium group"
            >
              <span className="group-hover:text-[var(--color-text-primary)] transition-colors">{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        <div className="mt-auto px-4">
          <a href="resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-[var(--color-text-secondary)] hover:text-white transition-colors duration-200 py-3 font-medium group">
             <FaFileAlt size={20} className="group-hover:text-[var(--color-text-primary)]" />
             <span>Resume</span>
          </a>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black to-[var(--color-surface)] h-16 flex justify-around items-center z-50 px-2 backdrop-blur-lg border-t border-[var(--color-surface-hover)]">
        {navLinks.map((link) => (
          <a 
            key={link.href} 
            href={link.href} 
            className="flex flex-col items-center justify-center text-[var(--color-text-secondary)] hover:text-white w-full h-full"
          >
            <motion.div whileTap={{ scale: 0.9 }}>
              {link.icon}
            </motion.div>
            <span className="text-[10px] mt-1">{link.label}</span>
          </a>
        ))}
      </nav>
    </>
  );
};

export default Sidebar;
