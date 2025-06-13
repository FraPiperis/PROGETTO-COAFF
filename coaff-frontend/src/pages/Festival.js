import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Festival.css";

import bgImage from "../components/pexels-cottonbro-10506366.jpg";

const Festival = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const filmInConcorso = [
    {
      titolo: "THE RED ISLAND",
      descrizione:
        "Un adolescente affronta una difficile realtà in Madagascar, esplorando famiglia e identità.",
      locandina: "./red island.jpg",
    },
    {
      titolo: "AFTERSUN",
      descrizione:
        "Un padre e una figlia condividono momenti preziosi in una vacanza estiva in Turchia.",
      locandina: "./aftersun.webp",
    },
    {
      titolo: "WAR PONY",
      descrizione:
        "Due ragazzi nativi americani navigano tra cultura, famiglia e difficoltà contemporanee.",
      locandina: "./war pony.png",
    },
    {
      titolo: "THE FABELMANS",
      descrizione:
        "Un ragazzo scopre la sua passione per il cinema e affronta le sfide della famiglia.",
      locandina: "./the fabelmans.jpg",
    },
    {
      titolo: "WHEN YOU FINISH SAVING THE WORLD",
      descrizione:
        "Una madre e un figlio si confrontano sulle loro ambizioni e i sogni da realizzare.",
      locandina: "./when-you-finish-saving-the-world.jpg",
    },
    {
      titolo: "BELFAST",
      descrizione:
        "La crescita di un bambino durante i turbolenti anni '60 nella città di Belfast.",
      locandina: "./Belfast.jpg",
    },
    {
      titolo: "DRIVEWAYS",
      descrizione:
        "Due outsider formano un legame inaspettato durante una tranquilla estate in campagna.",
      locandina: "./driveways.jpg",
    },
    {
      titolo: "HONEY BOY",
      descrizione:
        "Un giovane attore affronta il passato complicato con il padre mentre cresce sotto i riflettori.",
      locandina: "./honey boy.jpg",
    },
    {
      titolo: "TEEN SPIRIT",
      descrizione:
        "Una giovane cantante lotta per la fama e la propria identità in un talent show competitivo.",
      locandina: "./teen spirit.jpg",
    },
    {
      titolo: "ALPHA",
      descrizione:
        "Un giovane cacciatore preistorico affronta la sopravvivenza e l'amicizia in un mondo ostile.",
      locandina: "./alpha.webp",
    },
    {
      titolo: "MID90s",
      descrizione:
        "L’adolescenza a Los Angeles negli anni '90, tra skate, amicizie e ribellioni.",
      locandina: "./mid90.jpg",
    },
    {
      titolo: "MUD",
      descrizione:
        "Due ragazzi scoprono un uomo in fuga e vivono un’avventura di crescita sul Mississippi.",
      locandina: "mud.jpg",
    },
  ];

  // Dati per il carosello Y2K (10 card)
  const y2kFilms = [
    { titolo: "Y tu mamà también", regista: "A. Cuaròn", data: "2001", locandina: "./y tu.jpeg" },
    { titolo: "Little Miss Sunshine", regista: "J. Dayton e V. Faris", data: "2006", locandina: "./little.jpeg" },
    { titolo: "My Name is Tanino", regista: "P. Virzì", data: "2002", locandina: "./my name is tanino.jpg" },
    { titolo: "Spirited Away", regista: "H. Miyazaki", data: "2001", locandina: "./spirited away.jpeg" },
    { titolo: "Mean Girls", regista: "M. Waters", data: "2004", locandina: "./mean girls.webp" },
    { titolo: "Persepolis", regista: "V. Paronnaud e M. Satrapi", data: "2007", locandina: "./persepolis.jpeg" },
    { titolo: "Legally Blonde", regista: "R. Luketic", data: "2001", locandina: "./legally blonde.jpeg" },
    { titolo: "Yi Yi", regista: "E. Yang", data: "2000", locandina: "./yi yi.jpeg" },
    { titolo: "Charlie's Angels", regista: "McG", data: "2000", locandina: "./Charlies Angels.jpeg" },
    { titolo: "Freaky Friday", regista: "M. Waters", data: "2003", locandina: "./freaky.jpeg" },
  ];

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
          <li>
            <Link to="/" onClick={closeMenu}>HOME</Link>
          </li>
          <li>
            <Link to="/ChiSiamo" onClick={closeMenu}>CHI SIAMO</Link>
          </li>
          <li>
            <Link to="/Eventi" onClick={closeMenu}>EVENTI</Link>
          </li>
          <li>
            <Link to="/Festival" onClick={closeMenu} className="active">FESTIVAL</Link>
          </li>
          <li>
            <Link to="/Tickets" onClick={closeMenu}>BIGLIETTI</Link>
          </li>
          <li>
            <Link to="/Contatti" onClick={closeMenu}>CONTATTI</Link>
          </li>
        </ul>
      </nav>

      <div className="hero-content" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="title-group">
          <h1 className="main-title">FESTIVAL</h1>
          <h3>Dal 10 al 13 Maggio 2026 presso gli ambienti del Cinema Lumierè di Bologna</h3>
        </div>
      </div>

      <main className="content festival-content">
        {/* Film in concorso */}
        <section className="film-in-concorso" style={{ marginTop: "60px" }}>
          <h2>FILM IN CONCORSO</h2>
          <div className="film-list">
            {filmInConcorso.map((film, i) => (
              <div className="film-card" key={i}>
                <img src={film.locandina} alt={`Locandina ${film.titolo}`} />
                <h3>{film.titolo}</h3>
                <p>{film.descrizione}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sezione Y2K */}
        <section className="y2k-section">
          <h2>SEZIONE Y2K</h2>
          <p>
            Una selezione speciale di film che esplorano la cultura, la musica e lo stile degli anni
            2000, celebrando l'estetica Y2K in tutte le sue forme.
          </p>

          {/* Carosello orizzontale */}
          <div className="y2k-carousel">
            {y2kFilms.map((film, i) => (
              <div className="y2k-card" key={i}>
                <img src={film.locandina} alt={`Locandina ${film.titolo}`} />
                <h4>{film.titolo}</h4>
                <p>{film.regista}</p>
                <p>{film.data}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Masterclass */}
        <section className="masterclass-section">
          <section className="masterclass-section">
            <h2>MASTERCLASS</h2>
            <p>
             Workshop e incontri con registi, attori e professionisti del settore per approfondire
             temi legati al cinema e alla produzione audiovisiva.
            </p>
            <div className="masterclass-card">
              <img src="./cinema.png" alt="Masterclass" />
              <p>Scopri le nostre Masterclass esclusive con ospiti internazionali.</p>
           </div>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Festival;
