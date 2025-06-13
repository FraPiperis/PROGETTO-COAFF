const express = require("express");
const router = express.Router();
const Registration = require("../models/Registration");

// POST /api/register
router.post("/", async (req, res) => {
  try {
    const { nome, cognome, email, cellulare, password } = req.body;

    const existing = await Registration.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Utente già registrato" });
    }

    const newUser = new Registration({ nome, cognome, email, cellulare, password });
    await newUser.save();

    res.status(201).json({ message: "Registrazione riuscita", user: newUser });
  } catch (err) {
    res.status(500).json({ message: "Errore server", error: err.message });
  }
});

// GET /api/register
router.get("/", async (req, res) => {
  try {
    const users = await Registration.find({}, "-password"); // exclude password
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Errore server" });
  }
});

module.exports = router;


