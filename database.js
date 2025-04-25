const mongoose = require('mongoose');

// Nos conectamos a MongoDB usando la URI del .env
const conectarDB = async () => {
  try {
    console.log('Conectando a Mongo con URI:', process.env.MONGODB_URI);
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Conectado a MongoDB correctamente')
  } catch (error) {
    console.error('Error de conexion a MongoDB:', error)
    process.exit(1) // Salimos del proceso si falla
  }
}

module.exports = conectarDB;

