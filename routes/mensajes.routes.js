const express = require('express');
const { crearMensaje, obtenerMensajes } = require('../controllers/mensajes.controller');

const router = express.Router();

router.post('/', crearMensaje);  // POST /api/mensajes
router.get('/', obtenerMensajes); // GET /api/mensajes

module.exports = router;
