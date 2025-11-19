import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id='about' className='about-section'>
      <motion.div
        className='about-content'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className='about-title'>About Me</h2>

        <p className='about-text'>
          I am Aaron, a software developer with a strong analytical foundation
          and a background in Computing Science. I enjoy building clean,
          intuitive user experiences and solving problems through
          well-structured, reliable code.
        </p>

        <p className='about-text'>
          After completing the Software Engineering Immersive program at General
          Assembly, I have been focused on full-stack development using modern
          tools such as React, Node.js, and APIs. I also bring years of
          experience from accounting and business environments, giving me a
          practical sense of problem-solving and teamwork.
        </p>

        <p className='about-text'>
          I am always exploring new technologies and expanding my skills across
          both frontend and backend development. I enjoy learning,
          experimenting, and building things that solve real problems, and I
          look forward to growing as a developer by taking on new challenges and
          opportunities.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
