import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Make sure to import the CSS above

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Achievements from './pages/Achievements'; 

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Your glassy navbar */}
        <Navbar />
        
        <main style={{ paddingTop: '80px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience/>} />
            <Route path="/achievements" element={<Achievements />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}


export default App;