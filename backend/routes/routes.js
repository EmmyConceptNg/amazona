import express from 'express';
const app = express();
import data from '../data.js';

function routes() {
  app.get('/api/products', (req, res) => {
    res.send(data.products);
  });
}

export default routes;
