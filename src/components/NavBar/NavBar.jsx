import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Overlay (click to close) */}
      {menuOpen && <div className='overlay' onClick={closeMenu}></div>}

      <nav className='navbar'>
        <div className='logo'>AH</div>

        {/* Menu links */}
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href='#hero'>Home</a>
          <a href='#about'>About</a>
          <a href='#projects'>Projects</a>
          <a href='#skills'>Skills</a>
          <a href='#contact'>Contact</a>
        </div>

        {/* Animated hamburger */}
        <div
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
