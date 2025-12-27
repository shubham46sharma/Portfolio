import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-6">
      <h2 className="text-2xl font-bold text-white mb-4">About</h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-[var(--color-text-secondary)] text-lg leading-relaxed max-w-4xl"
      >
        <p className="mb-4">
          I'm a results-driven Software Engineer with a Master's in Computer Science from UC Riverside, specializing in building high-performance, scalable systems. 
          Currently at Palm Beach ACO, I architect cloud-native healthcare solutions that have driven a <strong className="text-white">35% increase in user engagement</strong> and cut operational overhead by <strong className="text-white">60%</strong> through intelligent automation.
        </p>
        <p className="mb-4">
          My expertise spans the full stack—from modernizing legacy .NET/Angular monoliths to microservices, to deploying AI-driven pipelines on Azure. 
          Whether it's optimizing API latency by <strong className="text-white">90%</strong> with Redis or leading a platform migration that boosted efficiency by <strong className="text-white">45%</strong>, I thrive on solving complex engineering challenges that deliver measurable business impact.
        </p>
        <p>
          I am passionate about cloud architecture, data engineering, and creating intuitive user experiences that empower impactful decision-making.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
