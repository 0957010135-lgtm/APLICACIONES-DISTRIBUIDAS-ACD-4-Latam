const express = require('express');
const vuelosRoutes = require('./routes/vuelos.routes');

const app = express();

app.use(express.json());

// 🔹 Todas las rutas de vuelos bajo /api
app.use('/api', vuelosRoutes);

// Ruta base
app.get('/', (req, res) => {
  res.send('API de vuelos Latam funcionando ✅');
});

module.exports = app;
