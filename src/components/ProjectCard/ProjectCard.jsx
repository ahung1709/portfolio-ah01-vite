import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './ProjectCard.css';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className='project-card'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className='project-image-wrapper'>
        <img
          src={project.image}
          alt={project.title}
          className='project-image'
        />
      </div>

      <div className='project-content'>
        <h3>{project.title}</h3>
        <p className='project-description'>{project.description}</p>

        <div className='tech-list'>
          {project.tech.map((t, i) => (
            <span key={i} className='tech-item'>
              {t}
            </span>
          ))}
        </div>

        <div className='project-links'>
          {project.github && (
            <a href={project.github} target='_blank' rel='noopener noreferrer'>
              <FiGithub />
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target='_blank' rel='noopener noreferrer'>
              <FiExternalLink />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
