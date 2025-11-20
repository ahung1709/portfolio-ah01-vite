import React from 'react';
import { personalInfo } from '../../data/personalInfo';

import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-section'>
          <h3 className='footer-title'>AH</h3>
          <p className='footer-text'>
            © {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </p>
        </div>

        <div className='footer-section'>
          <h4 className='footer-heading'>Quick Links</h4>
          <ul>
            <li>
              <a href='#hero'>Home</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#projects'>Projects</a>
            </li>
            <li>
              <a href='#skills'>Skills</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>

        <div className='footer-section'>
          <h4 className='footer-heading'>Contact</h4>
          <p className='footer-text'>{personalInfo.city}</p>
          <p className='footer-text'>{personalInfo.email}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
