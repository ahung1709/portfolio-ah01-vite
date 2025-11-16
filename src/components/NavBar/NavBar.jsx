import React from 'react';

import './NavBar.css';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>MyLogo</div>
      <div className='nav-links'>
        <a href='#hero'>Home</a>
        <a href='#about'>About</a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
      </div>
    </nav>
  );
};

export default NavBar;
