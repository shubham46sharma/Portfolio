import { motion } from 'framer-motion';
import { FaPlay, FaGithub, FaSignal } from 'react-icons/fa';

const projects = [
  {
    title: 'FastCare Platform',
    description: 'Healthcare Revolution Platform connecting patients with verified hospitals.',
    tags: ['Next.js', 'AI/ML'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Healthcare/Doctor
    liveUrl: 'https://fast-care-seven.vercel.app/',
    githubUrl: '#',
  },
  {
    title: 'Twitter Analytics',
    description: 'Real-time hashtag tracking with NLP-based sentiment analysis.',
    tags: ['Python', 'Flask'],
    image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Twitter/Social Media
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Wiki Search Engine',
    description: 'Search engine for Wikipedia with advanced query processing.',
    tags: ['Python', 'Scraping'],
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Books/Library/Search
    liveUrl: '#',
    githubUrl: 'https://github.com/shubham46sharma/WikiSearch',
  },
  {
    title: 'Daily Dose Blog',
    description: 'Modern React-based blogging application with CMS.',
    tags: ['React', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Reliable Blog/Laptop image
    liveUrl: '#',
    githubUrl: 'https://github.com/shubham46sharma/daily-dose-blog',
  },
  {
    title: 'RGB Color Picker',
    description: 'Interactive game to guess RGB color codes.',
    tags: ['JS', 'Game'],
    image: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Colorful/Abstract
    liveUrl: 'https://shubham46sharma.github.io/The-RGB-color-picker-game/',
    githubUrl: '#',
  },
];

const Projects = () => {
  const handleCardClick = (url: string) => {
    if (url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" className="py-6">
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-2xl font-bold text-white hover:underline cursor-pointer">Featured Projects</h2>
        <span className="text-xs font-bold text-[var(--color-text-secondary)] uppercase tracking-widest hover:text-white cursor-pointer">See All</span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.map((project, index) => {
          const mainLink = project.liveUrl !== '#' ? project.liveUrl : project.githubUrl;
          const isLive = project.liveUrl !== '#';

          return (
            <motion.div
              key={index}
              onClick={() => handleCardClick(mainLink)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#181818] p-4 rounded-md hover:bg-[#282828] transition-all duration-300 group cursor-pointer relative block"
            >
              <div className="relative aspect-square mb-4 shadow-lg rounded-md overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                
                {/* Live Badge */}
                {isLive && (
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1 shadow-md z-10">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    LIVE
                  </div>
                )}

                {/* Play Button Overlay */}
                <div className="absolute right-2 bottom-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-xl">
                   <div className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-black rounded-full p-3 shadow-lg hover:scale-105 transition-transform flex items-center justify-center">
                      <FaPlay size={20} className="ml-1" />
                   </div>
                </div>
              </div>

              <h3 className="font-bold text-white truncate mb-1">{project.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2 mb-3">{project.description}</p>
              
              <div className="flex gap-2 text-[var(--color-text-secondary)]">
                 {/* Only show secondary links if they differ from the main card link or for clarity */}
                 {project.liveUrl !== '#' && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-white flex items-center gap-1 text-xs"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaSignal /> Live
                    </a>
                 )}
                 {project.githubUrl !== '#' && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-white flex items-center gap-1 text-xs"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub /> Code
                    </a>
                 )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

