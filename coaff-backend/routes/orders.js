const express = require('express');
const router = express.Router();

let orders = []; // In memoria

router.post('/', (req, res) => {
  const order = req.body;
  orders.push(order);
  res.json({ order });
});

router.get('/', (req, res) => {
  res.json(orders);
});

module.exports = router;