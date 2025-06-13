const express = require('express');
const router = express.Router();
const User = require('../models/User'); // modello mongoose

// Salva nuovo utente (registrazione)
router.post('/', async (req, res) => {
  try {
    const { email } = req.body;
    // Controlla se l'utente esiste già
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Utente già registrato con questa email' });
    }
    const user = await User.create(req.body);
    res.status(201).json({ message: 'Utente registrato con successo', user });
  } catch (err) {
    res.status(500).json({ message: 'Errore salvataggio utente' });
  }
});

// Restituisce tutti gli utenti
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Errore recupero utenti' });
  }
});

module.exports = router;