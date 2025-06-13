import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tickets from './pages/Tickets';
import ChiSiamo from './pages/ChiSiamo';
import Eventi from './pages/Eventi';
import Festival from './pages/Festival';
import Contatti from './pages/Contatti';
import Home from './pages/Home'; // Assicurati di avere anche questa pagina
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ChiSiamo" element={<ChiSiamo />} />
        <Route path="/Eventi" element={<Eventi />} />
        <Route path="/Festival" element={<Festival />} />
        <Route path="/Tickets" element={<Tickets />} />
        <Route path="/Contatti" element={<Contatti />} />
      </Routes>
    </Router>
  );
}

export default App;
