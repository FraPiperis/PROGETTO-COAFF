const express = require('express');
const router = express.Router();

const User = require('../models/User');
const Order = require('../models/Order');

// Registrazione nuovo utente
router.post('/register', async (req, res) => {
  try {
    const { nome, cognome, email, cellulare, password } = req.body;

    if (!nome || !cognome || !email || !password) {
      return res.status(400).json({ message: 'Compila tutti i campi obbligatori' });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'Email già registrata' });
    }

    const newUser = new User({ nome, cognome, email, cellulare, password });
    await newUser.save();

    res.status(201).json({ message: 'Utente registrato', user: {
      id: newUser._id,
      nome: newUser.nome,
      cognome: newUser.cognome,
      email: newUser.email,
      cellulare: newUser.cellulare
    }});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Errore registrazione utente', error });
  }
});

// Get tutti gli utenti (per admin dashboard)
router.get('/users', async (req, res) => {
  try {
    const users = await User.find().select('-password'); // non mandare la password
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Errore nel recupero utenti' });
  }
});

// Get tutti gli ordini (per admin dashboard)
router.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find().populate('user', 'nome email'); 
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Errore nel recupero ordini' });
  }
});

module.exports = router;
