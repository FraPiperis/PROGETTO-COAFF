const express = require('express');
const router = express.Router();
const User = require('../models/User'); // modello mongoose

// Salva nuovo utente
router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json({ user });
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