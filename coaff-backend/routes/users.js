const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Salva nuovo utente (registrazione)
router.post('/', async (req, res) => {
  try {
    const { nome, cognome, email, cellulare, password } = req.body;

    // Controlla se l'utente esiste già
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Utente già registrato con questa email' });
    }

    // Crea nuovo utente
    const user = new User({ nome, cognome, email, cellulare, password });
    await user.save();

    // Rimuovi la password dalla risposta per sicurezza
    const userResponse = {
      _id: user._id,
      nome: user.nome,
      cognome: user.cognome,
      email: user.email,
      cellulare: user.cellulare,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };

    res.status(201).json({ message: 'Utente registrato con successo', user: userResponse });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Errore salvataggio utente' });
  }
});

// Restituisce tutti gli utenti (senza password)
router.get('/', async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Errore recupero utenti' });
  }
});

module.exports = router;
