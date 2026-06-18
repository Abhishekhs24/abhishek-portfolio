'use client';

import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'AI Workflow Assistant',
      description: 'An intelligent workflow automation system powered by OpenAI API that streamlines template creation and improves user engagement.',
      tech: ['Angular', 'NgRx', 'RxJS', 'OpenAI API', 'Node.js'],
      impact: ['60% faster template creation', '40% increased engagement'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Enterprise Communication Platform',
      description: 'A real-time communication platform built with WebSocket technology for enterprise-scale messaging and collaboration.',
      tech: ['Angular', 'WebSocket', 'Docker', 'Node.js'],
      impact: ['35% faster API response', '50% faster deployment'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Security and Quality Initiative',
      description: 'Comprehensive security and code quality improvement initiative using GitLab CI/CD, SonarQube, and Snyk tools.',
      tech: ['GitLab CI/CD', 'SonarQube', 'Snyk', 'Angular'],
      impact: ['160+ vulnerabilities fixed', '99% CI reliability'],
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-transparent via-secondary/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-2xl opacity-0 group-hover:opacity-100 smooth-transition blur`}></div>

              <div className="relative glassmorphism p-8 rounded-2xl border border-primary/20 h-full flex flex-col">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} mb-6`}></div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary smooth-transition">
                  {project.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 border border-primary/30 text-primary rounded-full hover:bg-primary/20 smooth-transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-2 border-t border-primary/20 pt-4">
                  {project.impact.map((imp, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-slate-300">
                      <span className="text-primary font-bold">→</span>
                      <span>{imp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
