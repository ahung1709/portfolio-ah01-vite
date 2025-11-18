import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import './SkillCategoryCard.css';

// eslint-disable-next-line no-unused-vars
const SkillCategoryCard = ({ title, icon: Icon, children }) => {
  return (
    <motion.div
      className='skill-category-card'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className='category-header'>
        <motion.div
          className='category-icon-wrapper'
          whileHover={{ scale: 1.15, rotate: 3 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <Icon className='category-icon' />
        </motion.div>
        <h3 className='category-title'>{title}</h3>
      </div>

      <div className='category-skills'>{children}</div>
    </motion.div>
  );
};

export default SkillCategoryCard;
