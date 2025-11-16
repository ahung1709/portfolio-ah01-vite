import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

import './ContactSection.css';

const ContactSection = () => {
  return (
    <div className='contact-wrapper'>
      <h2 className='contact-title'>Contact</h2>

      <p className='contact-text'>
        Feel free to reach out for opportunities, collaborations, or questions!
      </p>

      <div className='contact-icons'>
        <a
          href='mailto:your-email@example.com'
          className='contact-icon'
          aria-label='Email'
        >
          <FaEnvelope />
        </a>

        <a
          href='https://www.linkedin.com/in/yourlinkedin'
          target='_blank'
          rel='noopener noreferrer'
          className='contact-icon'
          aria-label='LinkedIn'
        >
          <FaGithub />
        </a>

        <a
          href='https://www.linkedin.com/in/yourlinkedin'
          target='_blank'
          rel='noopener noreferrer'
          className='contact-icon'
          aria-label='LinkedIn'
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
