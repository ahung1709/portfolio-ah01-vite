import React from 'react';
import { personalInfo } from '../../data/personalInfo';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ContactForm from '../../components/ContactForm/ContactForm';

import './ContactSection.css';

const ContactSection = () => {
  return (
    <section id='contact' className='contact-section'>
      <div className='contact-wrapper'>
        <h2 className='contact-title'>Contact</h2>

        <p className='contact-text'>
          Feel free to reach out for opportunities, collaborations, or
          questions!
        </p>

        <div className='contact-icons'>
          <a
            href={`mailto:${personalInfo.email}`}
            className='contact-icon'
            aria-label='Email'
          >
            <FaEnvelope />
          </a>

          <a
            href={personalInfo.github}
            target='_blank'
            rel='noopener noreferrer'
            className='contact-icon'
            aria-label='LinkedIn'
          >
            <FaGithub />
          </a>

          <a
            href={personalInfo.linkedin}
            target='_blank'
            rel='noopener noreferrer'
            className='contact-icon'
            aria-label='LinkedIn'
          >
            <FaLinkedin />
          </a>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
