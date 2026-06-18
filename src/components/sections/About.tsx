'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glassmorphism p-8 rounded-2xl border border-primary/20">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                I'm a Software Engineer II at Dell Technologies with a passion for building scalable enterprise applications and AI-powered experiences. With 3+ years of professional experience, I've developed expertise in modern web technologies and architectural patterns.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                My journey involves working with Angular, TypeScript, Node.js, and exploring cutting-edge technologies like AI and machine learning. I'm committed to writing clean, maintainable code and continuously learning new technologies to stay at the forefront of web development.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { label: 'Years Experience', value: '3+' },
              { label: 'Projects Completed', value: '20+' },
              { label: 'Technologies', value: '15+' },
              { label: 'Code Coverage', value: '70%' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="glassmorphism p-6 rounded-xl border border-primary/20 text-center"
                whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(99, 102, 241, 0.2)' }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-text mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
