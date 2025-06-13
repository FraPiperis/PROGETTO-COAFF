const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  biglietti: [
    {
      tipo: String,
      prezzo: Number,
      quantità: Number,
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);

