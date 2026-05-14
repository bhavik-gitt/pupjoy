import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import About from './components/About';
import Footer from './components/Footer';
import BreedExplorer from './components/BreedExplorer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  let [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('lark');
      document.body.style.backgroundColor = '#121212';
      document.body.style.color = 'white';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  };

  return (
    <div className="app-shell d-flex flex-column min-vh-100">
      <Router>
        <div className="app-bg-layer" aria-hidden="true">
          <span className="bg-orb bg-orb-1"></span>
          <span className="bg-orb bg-orb-2"></span>
          <span className="bg-orb bg-orb-3"></span>
          <span className="bg-orb bg-orb-4"></span>
        </div>
        <Navbar Title="PupJoy" mode={mode} toggleMode={toggleMode} />
        <main className="app-main flex-grow-1">
          <Routes>
            <Route path="/" mode={mode} element={<Content />} />
            <Route path="/about" element={<About />} />
            <Route path="/explore" element={<BreedExplorer />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
