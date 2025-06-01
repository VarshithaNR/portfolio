import React from 'react';
import './App.css';

import About from './components/About';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Activities from './components/Activities';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Varshitha N R</h1>
        <p>Computer Science Engineer | Web Developer | Tech Enthusiast</p>
      </header>

      <main>
        <About />
        <Education />
        <Certifications />
        <Projects />
        <Skills />
        <Activities />
        <Contact />
      </main>

      <footer className="footer">
        <p>© 2025 Varshitha N R | <a href="https://github.com/VarshithaNR" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://linkedin.com/in/varshitha-n-r" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      </footer>
    </div>
  );
}

export default App;
