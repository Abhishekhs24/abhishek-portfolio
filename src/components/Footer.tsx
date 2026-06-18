'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-card border-t border-dark-border py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="text-center md:text-left">
            <p className="text-slate-400">© {currentYear} Abhishek HS. All rights reserved.</p>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="https://linkedin.com/in/abhishek-hs02370a223"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary smooth-transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Abhishekhs24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary smooth-transition"
            >
              GitHub
            </a>
            <a
              href="mailto:abhishekhs242000@gmail.com"
              className="text-slate-400 hover:text-primary smooth-transition"
            >
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
