import express from 'express';
import products from './models/products.json';
const PORT = 3100;

const app = express();

app.get('/products', (req, res) => {
  res.status(200).send(products);
});

app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});