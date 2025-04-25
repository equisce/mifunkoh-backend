const express = require('express');
const router = express.Router();
const { registro, login } = require('../controllers/usuarios.controller');

router.post('/registro', registro);
router.post('/login', login);

module.exports = router;
