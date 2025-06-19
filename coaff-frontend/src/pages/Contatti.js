import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contatti.css';

import bgImage from "../components/pexels-cottonbro-10506366.jpg";

const Contatti = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="page-container">
      <nav className="navbar">
        <div className="logo">COAFF</div>

        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>HOME</Link></li>
          <li><Link to="/ChiSiamo" onClick={closeMenu}>CHI SIAMO</Link></li>
          <li><Link to="/Eventi" onClick={closeMenu}>EVENTI</Link></li>
          <li><Link to="/Festival" onClick={closeMenu}>FESTIVAL</Link></li>
          <li><Link to="/Tickets" onClick={closeMenu}>BIGLIETTI</Link></li>
          <li><Link to="/Contatti" onClick={closeMenu}>CONTATTI</Link></li>
        </ul>
      </nav>

      <div className="hero-content" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="title-group">
          <h1 className="main-title">CONTATTI</h1>
        </div>
      </div>

      <main className="content contact-info">
        <ul className="social-list">
          <li>
            <a href="https://boxd.it/e9ntP" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-letterboxd social-icon letterboxd"></i>
              <span className="social-text">Letterboxd Coaff</span>
            </a>
          </li>
          <li>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-instagram social-icon instagram"></i>
              <span className="social-text">@coafilmfestival</span>
            </a>
          </li>
          <li>
            <a href="https://open.spotify.com/user/31ksu5hrjk22ytfcstoxj6a4cwje?si=VQzkcn2DSx-8V0nUlLCA8Q&nd=1&dlsi=4e7bd8d7adbb45e7" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-spotify social-icon spotify"></i>
              <span className="social-text">COAFF</span>
            </a>
          </li>
          <li>
            <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-tiktok social-icon tiktok"></i>
              <span className="social-text">@coaffilmfest</span>
            </a>
          </li>
          <li>
            <a href="mailto:coafilmfestival@gmail.com" className="social-link">
              <i className="fas fa-envelope social-icon email"></i>
              <span className="social-text">coafilmfestival@gmail.com</span>
            </a>
          </li>
          <li>
            <a href="tel:+393924458617" className="social-link">
              <i className="fas fa-phone social-icon phone"></i>
              <span className="social-text">+39 392 445 8617</span>
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Contatti;
