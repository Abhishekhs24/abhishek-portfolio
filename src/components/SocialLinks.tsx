'use client';

import { motion } from 'framer-motion';

const SocialLinks = () => {
  const socials = [
    {
      name: 'LinkedIn',
      icon: 'in',
      url: 'https://linkedin.com/in/abhishek-hs02370a223',
    },
    {
      name: 'GitHub',
      icon: 'gh',
      url: 'https://github.com/Abhishekhs24',
    },
    {
      name: 'Email',
      icon: '✉',
      url: 'mailto:abhishekhs242000@gmail.com',
    },
  ];

  return (
    <div className="flex justify-center items-center gap-6">
      {socials.map((social, index) => (
        <motion.a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full glassmorphism border border-primary/30 text-primary hover:border-primary hover:bg-primary/10 smooth-transition"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          title={social.name}
        >
          {social.icon === 'in' && '💼'}
          {social.icon === 'gh' && '🐙'}
          {social.icon === '✉' && '✉️'}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
