import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaClock, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const experience = [
  {
    role: 'Software Engineer',
    company: 'Palm Beach ACO',
    date: 'Jan 2023 - Present',
    duration: 'Present',
    description: [
      'Engineered a real-time monitoring dashboard using Azure Event Hub, .NET Core, and Angular, driving a 35% increase in user engagement.',
      'Introduced Redis caching to reduce latency, achieving up to 90% improvement in system performance.',
      'Upgraded Angular v5→v17 and modernized .NET Core APIs, improving build performance and system scalability by 25%.',
      'Revamped the Sidekick Chrome Extension from Manifest v2 to v3, resulting in 150% adoption growth.',
      'Redesigned authentication workflows (Azure AD B2B to B2C), cutting IT support tickets by 40%.',
      'Automated anomaly detection of ADT messages using n8n workflows, reducing operational overhead by 60%.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Informatica',
    date: 'June 2022 - Sept 2022',
    duration: '4 mos',
    description: [
      'Migrated frontend testing framework from Enzyme to React Testing Library.',
      'Designed and developed modular, reusable React components.',
      'Built automation tool to integrate third-party providers.',
    ],
  },
  {
    role: 'Full Stack Intern',
    company: 'Span Design Organization',
    date: 'Aug 2020 - May 2021',
    duration: '10 mos',
    description: [
      'Developed full-stack applications using React, Node.js, MongoDB, and SQL.',
      'Collaborated with UX designers to create modern interfaces.',
      'Integrated ID-pal for secure user authentication.',
    ],
  },
];

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-6">
      <div className="flex items-center justify-between mb-4 px-2">
         <h2 className="text-2xl font-bold text-white">Experience</h2>
      </div>

      <div className="bg-[#181818] bg-opacity-30 rounded-lg overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-12 gap-4 px-4 py-2 text-[var(--color-text-secondary)] text-sm uppercase border-b border-[#282828] font-medium tracking-wider">
          <div className="col-span-1 text-center">#</div>
          <div className="col-span-6 md:col-span-5">Title</div>
          <div className="col-span-3 md:col-span-4 hidden md:block">Company</div>
          <div className="col-span-4 md:col-span-2 text-right flex items-center justify-end gap-1"><FaClock /></div>
        </div>

        {/* Rows */}
        <div className="flex flex-col">
          {experience.map((job, index) => (
            <div key={index} className="group">
              <div 
                onClick={() => toggleExpand(index)}
                className={`grid grid-cols-12 gap-4 px-4 py-4 items-center hover:bg-[#282828] cursor-pointer transition-colors border-b border-transparent hover:border-[#282828] rounded-md ${expandedIndex === index ? 'bg-[#282828]' : ''}`}
              >
                <div className="col-span-1 text-center text-[var(--color-text-secondary)] group-hover:text-white transition-colors">
                  {index + 1}
                </div>
                <div className="col-span-6 md:col-span-5">
                  <div className="font-semibold text-white truncate">{job.role}</div>
                  <div className="md:hidden text-xs text-[var(--color-text-secondary)]">{job.company}</div>
                </div>
                <div className="col-span-3 md:col-span-4 hidden md:block text-[var(--color-text-secondary)] hover:text-white transition-colors">
                  {job.company}
                </div>
                <div className="col-span-4 md:col-span-2 text-right text-[var(--color-text-secondary)] text-sm flex items-center justify-end gap-2">
                  <span>{job.date}</span>
                  {expandedIndex === index ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                </div>
              </div>
              
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-[#202020]"
                  >
                    <div className="px-6 py-4 md:pl-16">
                      <ul className="list-disc space-y-2 text-[var(--color-text-secondary)] text-sm">
                        {job.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
