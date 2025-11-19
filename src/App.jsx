import NavBar from './components/NavBar/NavBar';
import HeroSection from './sections/HeroSection/HeroSection';
import AboutSection from './sections/AboutSection/AboutSection';
import SkillsSection from './sections/SkillsSection/SkillsSection';
import ProjectsSection from './sections/ProjectsSection/ProjectsSection';
import ContactSection from './sections/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className='app-container'>
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <section id='contact'>
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
