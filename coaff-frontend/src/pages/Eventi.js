import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Eventi.css";

import bgImage from "../components/pexels-cottonbro-10506366.jpg";

const Eventi = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="page-container">
      <nav className="navbar">
        <div className="logo">COAFF</div>

        <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
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
          <h1 className="main-title">EVENTI</h1>
        </div>
      </div>

      <main className="eventi-content">
        <section className="about-section-glass">
          <h2>Concerti Live 🎸</h2>
          <p>
            Vivi l’energia di un concerto dal vivo con giovani band emergenti! 🎶✨
            Un’esplosione di musica, luci e adrenalina per chi ama le emozioni forti!
          </p>
          <img src="/concerti.png" alt="Concerto Live" className="evento-img" />
        </section>

        <section className="about-section-glass">
          <h2>Aperitivi🍹</h2>
          <p>
            Un momento di relax tra un film e l’altro 🧡🥂
            Cocktail, stuzzichini e chiacchiere con altri appassionati di cinema!
          </p>
          <img src="/aperitivi.png" alt="Aperitivo" className="evento-img" />
        </section>

        <section className="about-section-glass">
          <h2>Q&A con regista 🎥</h2>
          <p>
            Incontra i registi protagonisti del festival 🎬🗣️
            Un’occasione unica per porre domande e scoprire i retroscena dei film!
          </p>
          <img src="/registi.png" alt="Q&A" className="evento-img" />
        </section>

        <section className="about-section-glass">
          <h2>Gara Corti 🏆</h2>
          <p>
            I migliori cortometraggi si sfidano per il premio finale! 📽️🔥
            Vota il tuo corto preferito e sostieni i giovani registi!
          </p>
          <img src="/corti.png" alt="Gara Corti" className="evento-img" />
        </section>
      </main>
    </div>
  );
};

export default Eventi;
