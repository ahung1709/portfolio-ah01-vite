import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FiGithub, FiCloud, FiExternalLink } from 'react-icons/fi';
import './ProjectCard.css';

const ProjectCard = ({ project, index }) => {
  const TECH_LABELS = {
    frontend: 'Frontend',
    backend: 'Backend',
    tooling: 'Tooling & Dev Experience',
    cloud: 'Cloud & Infrastructure',
    services: 'Services & Platforms',
  };

  const getRepoIcon = (label) => {
    if (label === 'Serverless') return <FiCloud />;
    return <FiGithub />;
  };

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

        <div className='tech-groups'>
          {Object.entries(project.tech).map(([category, techs]) => (
            <div key={category} className='tech-group'>
              <h4 className='tech-group-title'>
                {TECH_LABELS[category] || category}
              </h4>

              <div className='tech-list'>
                {techs.map((tech, i) => (
                  <span key={i} className='tech-item'>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className='project-links'>
          {Array.isArray(project.github) &&
            project.github.map((repo, i) => (
              <a
                key={i}
                href={repo.url}
                target='_blank'
                rel='noopener noreferrer'
                title={repo.label}
                className='project-link-item'
              >
                {getRepoIcon(repo.label)}
                {project.github.length > 1 && <span>{repo.label}</span>}
              </a>
            ))}
          {project.demo && (
            <a
              href={project.demo}
              target='_blank'
              rel='noopener noreferrer'
              title='Demo'
            >
              <FiExternalLink />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
