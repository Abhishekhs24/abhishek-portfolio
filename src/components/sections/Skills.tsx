'use client';

import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'HTML', 'CSS', 'SCSS'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'MongoDB'],
    },
    {
      category: 'DevOps',
      skills: ['Docker', 'GitLab CI/CD', 'Linux'],
    },
    {
      category: 'Security',
      skills: ['OWASP', 'JWT', 'SonarQube', 'Snyk'],
    },
    {
      category: 'AI',
      skills: ['OpenAI API', 'Agentic AI'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glassmorphism p-6 rounded-xl border border-primary/20 hover:border-primary/40 smooth-transition card-hover"
            >
              <h3 className="text-lg font-bold text-primary mb-4 text-center">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center space-x-2 p-2 rounded hover:bg-primary/5 smooth-transition"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-2 h-2 bg-gradient-primary rounded-full"></span>
                    <span className="text-sm text-slate-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
