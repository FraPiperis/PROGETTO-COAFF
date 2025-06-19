import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ChiSiamo.css';
import bgImage from "../components/pexels-cottonbro-10506366.jpg";
import teamImage from "../components/sfondo-festival.png"; // Assicurati che esista l’immagine

const ChiSiamo = () => {
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
        <h1 className="main-title">CHI SIAMO</h1>
      </div>

      <main className="chi-siamo-content">
        {/* Prima card con immagine + testo */}
        <section className="about-section-glass with-image">
          <div className="image-container">
            <img src={teamImage} alt="Team COAFF" />
          </div>
          <div className="text-container">
            <p>
              Il Coming of Age Film Festival nasce con l’intento di celebrare il cinema di formazione in tutte le sue sfumature.
              La nostra missione è dare spazio a nuove voci del panorama cinematografico e promuovere un dialogo autentico 
              tra generazioni attraverso il potere del racconto audiovisivo.
            </p>
            <p>
              Il festival è organizzato da un team di appassionati di cinema e creativi che credono nella forza delle storie 
              per crescere, comprendere e connettersi. Offriamo proiezioni, incontri con autori, workshop e momenti di confronto 
              per un pubblico eterogeneo e curioso.
            </p>
            <p>
              Unisciti a noi per vivere un'esperienza culturale unica, dove ogni film è un viaggio e ogni spettatore un protagonista.
            </p>
          </div>
        </section>

        {/* Seconda card: PROGRAMMA */}
        <section className="about-section-glass">
          <h2>PROGRAMMA</h2>
          <p>
            Il programma si suddivide in due sezioni cinematografiche con l’attribuzione dei seguenti premi:
          </p>
          <p>
            <strong>Concorso lungometraggi coming of age</strong>: film di fiction e documentari incentrati sul tema del coming of age (durata minima 60 minuti). Premio della Giuria Giovani, scelta tra gli studenti dell’università di Bologna.
          </p>
          <p>
            <strong>Retrospettiva “Y2K”</strong>: film di fiction e documentari incentrati sul coming of age usciti tra il 1 gennaio 2000 e il 31 dicembre 2009 (durata minima 60 minuti). Premio del pubblico.
          </p>
        </section>
      </main>
    </div>
  );
};

export default ChiSiamo;
