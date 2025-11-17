import NavBar from './components/NavBar/NavBar';
import ProjectsSection from './sections/ProjectsSection/ProjectsSection';
import ContactSection from './sections/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className='app-container'>
      <NavBar />
      <main>
        <section id='hero'>...</section>
        <section id='about'>...</section>
        <section id='skills'>...</section>
        <section id='projects'>
          <ProjectsSection />
        </section>
        <section id='contact'>
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
