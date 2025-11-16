import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className='app-container'>
      <NavBar />
      <main>
        <section id='hero'>...</section>
        <section id='about'>...</section>
        <section id='projects'>...</section>
        <section id='skills'>...</section>
        <section id='contact'>...</section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
