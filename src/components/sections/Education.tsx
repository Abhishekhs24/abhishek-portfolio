'use client';

import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      school: 'Malnad College of Engineering',
      degree: 'B.Tech Information Science and Engineering',
      year: 'Graduated 2022',
      icon: '🎓',
    },
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          {education.map((edu, index) => (
            <div
              key={index}
              className="glassmorphism p-8 rounded-2xl border border-primary/20 hover:border-primary/40 smooth-transition card-hover"
            >
              <div className="flex items-start space-x-6">
                <div className="text-5xl">{edu.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-2">{edu.school}</h3>
                  <p className="text-xl text-slate-300 mb-2">{edu.degree}</p>
                  <p className="text-sm text-slate-400">{edu.year}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
