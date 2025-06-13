const express = require('express');
const cors = require('cors');
const app = express();

const usersRoutes = require('./routes/users');
const ordersRoutes = require('./routes/orders');
const adminRoutes = require('./routes/admin');

// Connessione a MongoDB
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connesso!'))
.catch(err => console.error('Errore connessione MongoDB:', err));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // static files (es: dashboard.html)

// Route root di test
app.get('/', (req, res) => {
  res.send('Coaff Backend attivo!');
});

// Rotte API
app.use('/api/users', usersRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/admin', adminRoutes);

// Gestione error 404 per API non trovate
app.use((req, res) => {
  res.status(404).json({ message: 'Endpoint non trovato' });
});

// Avvio server (IMPORTANTE: usa la porta di Render)
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server attivo su https://progetto-coaff.onrender.com/api/users:${PORT}`);
});
