import { motion } from 'framer-motion';
import { FaJava, FaPython, FaJs, FaAngular, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaCode, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiDotnet, SiMongodb, SiSpringboot, SiPostgresql, SiKubernetes } from 'react-icons/si';
import { DiMsqlServer } from "react-icons/di";

const skills = [
  { name: 'Java', icon: <FaJava />, color: '#f89820' },
  { name: 'Python', icon: <FaPython />, color: '#3776ab' },
  { name: 'C# / .NET', icon: <SiDotnet />, color: '#512bd4' },
  { name: 'JavaScript', icon: <FaJs />, color: '#f7df1e' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178c6' },
  { name: 'Angular', icon: <FaAngular />, color: '#dd0031' },
  { name: 'React', icon: <FaReact />, color: '#61dafb' },
  { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6db33f' },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
  { name: 'Azure', icon: <FaCode />, color: '#0078d4' },
  { name: 'Docker', icon: <FaDocker />, color: '#2496ed' },
  { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326ce5' },
  { name: 'SQL Server', icon: <DiMsqlServer />, color: '#cc2927' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248' },
  { name: 'Git', icon: <FaGitAlt />, color: '#f05032' },
  { name: 'Figma', icon: <FaFigma />, color: '#f24e1e' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-6">
      <h2 className="text-2xl font-bold text-white mb-6">Skills & Technologies</h2>
      
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-4 py-2 bg-[#282828] hover:bg-[#333] rounded-full cursor-pointer transition-colors"
          >
            <span style={{ color: skill.color }} className="text-lg">{skill.icon}</span>
            <span className="font-medium text-sm text-white">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
