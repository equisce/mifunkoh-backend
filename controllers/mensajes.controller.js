import Mensaje from '../models/Mensaje.js';

// POST / API / mensajes
export const crearMensaje = async (req, res) => {
  try {
    console.log('Nuevo mensaje recibido:', req.body);
    const nuevoMensaje = new Mensaje(req.body);
    const mensajeGuardado = await nuevoMensaje.save();
    res.status(201).json(mensajeGuardado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al enviar el mensaje', error });
  }
};
