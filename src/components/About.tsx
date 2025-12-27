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
          I'm a passionate Software Engineer with a Master's in Computer Science from the University of California, Riverside. 
          Currently working at Palm Beach Accountable Care Organization, I specialize in building scalable healthcare solutions and leading complex system migrations.
        </p>
        <p className="mb-4">
          With expertise in full-stack development including .NET Core, Angular, React, Node.js, Azure, and AI/ML, I've engineered solutions that drive real business impact.
          I thrive on transforming complex challenges into elegant, scalable solutions that make a difference in people's lives.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
