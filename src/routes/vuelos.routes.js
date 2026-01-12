const express = require('express');
const router = express.Router();
const vuelosController = require('../controllers/vuelos.controller');

// Endpoint: GET /api/vuelos?aerolinea=LATAM
router.get('/vuelos', vuelosController.obtenerVuelos);

module.exports = router; // 🔹 Muy importante exportar router
