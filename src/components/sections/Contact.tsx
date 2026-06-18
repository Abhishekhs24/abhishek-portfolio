'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:abhishekhs242000@gmail.com?subject=Portfolio Contact - ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-transparent via-secondary/5 to-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-300">Let's discuss your next project or opportunity</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glassmorphism p-8 md:p-12 rounded-2xl border border-primary/20"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-card border border-primary/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-primary smooth-transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-card border border-primary/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-primary smooth-transition"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-dark-card border border-primary/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-primary smooth-transition resize-none"
                placeholder="Your message"
              />
            </div>
            <motion.button
              type="submit"
              className="w-full btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mt-12"
        >
          <a
            href="mailto:abhishekhs242000@gmail.com"
            className="glassmorphism p-6 rounded-xl border border-primary/20 hover:border-primary/40 smooth-transition card-hover text-center"
          >
            <p className="text-slate-400 mb-2">Email</p>
            <p className="text-xl font-semibold text-primary break-all">abhishekhs242000@gmail.com</p>
          </a>
          <a
            href="https://linkedin.com/in/abhishek-hs02370a223"
            target="_blank"
            rel="noopener noreferrer"
            className="glassmorphism p-6 rounded-xl border border-primary/20 hover:border-primary/40 smooth-transition card-hover text-center"
          >
            <p className="text-slate-400 mb-2">LinkedIn</p>
            <p className="text-xl font-semibold text-primary">Connect with me</p>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
