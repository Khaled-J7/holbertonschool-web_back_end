const express = require('express');

const app = express();
const port = 7865;

// Add middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Cart endpoint with regex validation for ID
app.get('/cart/:id(\\d+)', (req, res) => {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

// Available payments endpoint
app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

// Login endpoint
app.post('/login', (req, res) => {
  const { userName } = req.body;
  
  // Check if userName is provided
  if (!userName) {
    return res.status(400).send('userName is required');
  }
  
  res.send(`Welcome ${userName}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
