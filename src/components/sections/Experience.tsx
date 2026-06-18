'use client';

import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer II',
      company: 'Dell Technologies',
      period: 'August 2023 - Present',
      achievements: [
        'Reduced bundle size by 27%',
        'Improved code coverage from 0% to 70%',
        'Fixed 160+ critical vulnerabilities',
        'Led Angular upgrades from v16 to v20',
        'Built AI-powered chatbot using OpenAI API',
        'Improved deployment reliability to 99%',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glassmorphism p-8 rounded-2xl border border-primary/20 hover:border-primary/40 smooth-transition card-hover"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{exp.title}</h3>
                  <p className="text-xl text-slate-300 mb-1">{exp.company}</p>
                  <p className="text-sm text-slate-400">{exp.period}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {exp.achievements.map((achievement, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-primary/5 smooth-transition"
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-300">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
