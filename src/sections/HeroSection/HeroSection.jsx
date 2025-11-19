import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id='hero' className='hero-section'>
      {/* Background gradient */}
      <div className='hero-gradient'></div>

      <motion.div
        className='hero-content'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className='hero-title'>Hi, I'm Aaron</h1>

        <h2 className='hero-subtitle'>Full Stack Developer</h2>

        <p className='hero-text'>
          I build clean, efficient, and user-focused web applications. I enjoy
          turning ideas into practical, modern digital experiences.
        </p>

        <div className='hero-buttons'>
          <a href='#projects' className='hero-btn primary'>
            View Projects
          </a>
          <a href='#contact' className='hero-btn secondary'>
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
