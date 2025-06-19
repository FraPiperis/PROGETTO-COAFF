const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());


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

// Configura CORS esplicito per il dominio frontend
const corsOptions = {
  origin: 'https://coaf-grpm34v2r-frapiperis-projects.vercel.app/',  // Cambia con il tuo URL frontend corretto
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};


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
  console.log(`Server attivo su porta ${PORT}`);
});



