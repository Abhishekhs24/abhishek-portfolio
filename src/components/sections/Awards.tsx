'use client';

import { motion } from 'framer-motion';

const Awards = () => {
  const awards = [
    {
      title: 'Inspire Award',
      organization: 'Dell Technologies',
      description: 'Recognition for outstanding contribution to enterprise projects and team leadership.',
      icon: '🏆',
    },
    {
      title: 'Communications Coach Recognition',
      organization: 'Dell Technologies',
      description: 'Recognized for excellent communication skills and mentoring capabilities.',
      icon: '🎓',
    },
  ];

  return (
    <section id="awards" className="py-20 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Awards & <span className="bg-gradient-text">Recognition</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glassmorphism p-8 rounded-2xl border border-primary/20 hover:border-primary/40 smooth-transition card-hover"
            >
              <div className="flex items-start space-x-6">
                <div className="text-4xl">{award.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-1">{award.title}</h3>
                  <p className="text-slate-400 text-sm mb-3">{award.organization}</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{award.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
