const mongoose = require('mongoose');

// Prototipo de esquema de un Funko
const funkoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  descripcion: {
    type: String,
    trim: true
  },
  precio: {
    type: Number,
    required: true
  },
  imagen: {
    type: String,
    required: true
  },
  categoria: {
    type: [String],
    required: true,
    trim: true
  },
  opiniones: {
    type: [String],
    default: []
  }
}, {
  timestamps: true
});

// Exportamos el modelo Funko
const Funko = mongoose.model('Funko', funkoSchema);
module.exports = Funko;
