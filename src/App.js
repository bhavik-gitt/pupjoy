import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import About from './components/About';
import Footer from './components/Footer';
import BreedExplorer from './components/BreedExplorer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  let [mode,setMode] = useState('light');
  const toggleMode = () => {
  if (mode === 'light') {
    setMode('lark');
    document.body.style.backgroundColor = '#121212'; // Dark mode background
    document.body.style.color = 'white';
  } else {
    setMode('light');
    document.body.style.backgroundColor = 'white'; // Light mode background
    document.body.style.color = 'black';
  }
};

  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <Navbar Title="PupJoy" mode={mode} toggleMode={toggleMode} />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" mode={mode} element={<Content />} />
            <Route path="/about" element={<About />} />
            <Route path="/explore" element={<BreedExplorer />} /> 
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
