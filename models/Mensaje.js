const mongoose = require('mongoose');

const mensajeSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  mensaje: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const Mensaje = mongoose.model('Mensaje', mensajeSchema);
module.exports = Mensaje;
