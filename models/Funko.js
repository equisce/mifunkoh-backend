import mongoose from 'mongoose'

// Prototipo de esquema de un Funko
const funkoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true, //obligatorio!!
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
    required: true, // le digo a Mongoose que esta prop. puede ser un array de strings
    trim: true
  },
  opiniones: {
    type: [String], // Para las opiniones de cada producto
    default: []
  }
}, {
  timestamps: true // añade createdAt y updatedAt automáticamente
})

// Exportamos el modelo Funko para usarlo en controladores
const Funko = mongoose.model('Funko', funkoSchema)
export default Funko
