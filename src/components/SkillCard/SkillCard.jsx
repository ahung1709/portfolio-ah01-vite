import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import './SkillCard.css';

// eslint-disable-next-line no-unused-vars
const SkillCard = ({ label, icon: Icon }) => {
  return (
    <motion.div
      className='skill-card'
      whileHover={{ scale: 1.05, boxShadow: '0 0 12px rgba(255,255,255,0.35)' }}
      transition={{ type: 'spring', stiffness: 250 }}
    >
      <motion.div
        className='skill-icon-wrapper'
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Icon className='skill-icon' />
      </motion.div>

      <span>{label}</span>
    </motion.div>
  );
};

export default SkillCard;
