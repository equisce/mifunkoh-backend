import mongoose from 'mongoose'

// Nos conectamos a MongoDB usando la URI del .env
const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Conectado a MongoDB correctamente')
  } catch (error) {
    console.error('Error de conexion a MongoDB:', error)
    process.exit(1) // Salimos del proceso si falla
  }
}

export default conectarDB
