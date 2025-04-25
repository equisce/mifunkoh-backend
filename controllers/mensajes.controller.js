const Mensaje = require('../models/Mensaje');

// POST /api/mensajes
const crearMensaje = async (req, res) => {
  try {
    console.log('Nuevo mensaje recibido:', req.body);
    const nuevoMensaje = new Mensaje(req.body);
    const mensajeGuardado = await nuevoMensaje.save();
    res.status(201).json(mensajeGuardado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al enviar el mensaje', error });
  }
};

// GET /api/mensajes
const obtenerMensajes = async (req, res) => {
  try {
    const mensajes = await Mensaje.find();
    res.status(200).json(mensajes);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al obtener los mensajes', error });
  }
};

module.exports = { crearMensaje, obtenerMensajes };
