import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Tickets.css";


import bgImage from "../components/pexels-cottonbro-10506366.jpg";

const Tickets = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [user, setUser] = useState({
    nome: "",
    cognome: "",
    email: "",
    cellulare: "",
    password: "",
  });
  const [registeredUser, setRegisteredUser] = useState(null);
  const [cart, setCart] = useState([]);

  const tickets = [
    { tipo: "Giorno 1 - 10/05/26", prezzo: 10 },
    { tipo: "Giorno 2 - 11/05/26", prezzo: 10 },
    { tipo: "Giorno 3 - 12/05/26", prezzo: 10 },
    { tipo: "Giorno 4 - 13/05/26", prezzo: 10 },
  ];

  const accrediti = [
    { tipo: "Singolo film", prezzo: 5 },
    { tipo: "2 Proiezioni", prezzo: 8 },
    { tipo: "10 Proiezioni", prezzo: 20 },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleRegister = async () => {
    try {
      const res = await axios.post("http://localhost:3001/api/users", user);
      setRegisteredUser(res.data.user);
      alert("Registrazione completata");
    } catch (error) {
      alert("Errore registrazione: " + (error.response?.data?.message || error.message));
    }
  };

  const addToCart = (item) => {
    if (!registeredUser) {
      alert("Per favore, registrati prima di aggiungere biglietti");
      return;
    }
    setCart([...cart, { ...item, quantità: 1 }]);
  };

  const handleSendOrder = async () => {
    try {
      await axios.post("http://localhost:3001/api/orders", {
        userEmail: registeredUser.email,
        items: cart,
      });
      alert("Ordine ricevuto nel backend");
      setCart([]);
    } catch (error) {
      alert("Errore invio ordine: " + (error.response?.data?.message || error.message));
    }
  };

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
                    <h1 className="main-title">BIGLIETTI</h1>
                </div>
            </div>

      <main className="content tickets-content">
        <section className="registrazione">
          <h2>Registrazione Utente</h2>
          <div className="form">
            <input
              placeholder="Nome"
              onChange={(e) => setUser({ ...user, nome: e.target.value })}
            />
            <input
              placeholder="Cognome"
              onChange={(e) => setUser({ ...user, cognome: e.target.value })}
            />
            <input
              placeholder="Email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <input
              placeholder="Cellulare"
              onChange={(e) => setUser({ ...user, cellulare: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <button onClick={handleRegister}>Invia Registrazione</button>
          </div>
        </section>

        <section className="prenotazione">
          <h2>Biglietti Giornalieri</h2>
          <div className="biglietti">
            {tickets.map((t, i) => (
              <div className="ticket" key={i}>
                {t.tipo} - €{t.prezzo}
                <button onClick={() => addToCart(t)}>+</button>
              </div>
            ))}
          </div>

          <h2>Accrediti</h2>
          <div className="biglietti">
            {accrediti.map((a, i) => (
              <div className="ticket" key={i}>
                {a.tipo} - €{a.prezzo}
                <button onClick={() => addToCart(a)}>+</button>
              </div>
            ))}
          </div>

          <h2>Carrello</h2>
          {cart.length === 0 ? (
            <p>Carrello vuoto</p>
          ) : (
            <ul>
              {cart.map((item, i) => (
                <li key={i}>
                  {item.tipo} - €{item.prezzo} (Quantità: {item.quantità})
                </li>
              ))}
            </ul>
          )}

          {cart.length > 0 && (
            <button className="checkout-btn" onClick={handleSendOrder}>
              Invia Ordine 🛒
            </button>
          )}
        </section>
      </main>
    </div>
  );
};

export default Tickets;
