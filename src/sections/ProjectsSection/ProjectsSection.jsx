import React from 'react';
import { projectsData } from '../../data/projectsData';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import './ProjectsSection.css';

const ProjectsSection = () => {
  return (
    <section id='projects' className='projects-section'>
      <motion.h2
        className='projects-title'
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <div className='projects-grid'>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
