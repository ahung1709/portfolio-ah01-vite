import { useState, useEffect } from 'react';

import NavBar from './components/NavBar/NavBar';
import HeroSection from './sections/HeroSection/HeroSection';
import AboutSection from './sections/AboutSection/AboutSection';
import SkillsSection from './sections/SkillsSection/SkillsSection';
import ProjectsSection from './sections/ProjectsSection/ProjectsSection';
import ContactSection from './sections/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className='app-container'>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
