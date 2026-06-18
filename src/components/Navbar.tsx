'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Awards', href: '#awards' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glassmorphism border-b border-dark-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.a
            href="#"
            className="flex items-center space-x-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">A</div>
            <span className="hidden sm:block font-bold text-lg bg-gradient-text">Abhishek</span>
          </motion.a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-primary smooth-transition relative group"
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full smooth-transition"></span>
              </motion.a>
            ))}
          </div>

          <motion.a
            href="#contact"
            className="hidden sm:block btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col space-y-1.5 group"
            whileTap={{ scale: 0.95 }}
          >
            <span className={`w-6 h-0.5 bg-primary smooth-transition ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-primary smooth-transition ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-primary smooth-transition ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </motion.button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pb-4 space-y-2"
          >
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-slate-300 hover:text-primary hover:bg-primary/10 rounded-lg smooth-transition"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
