// Importamos las librerías
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import uploadRoutes from './routes/upload.routes.js'


// Hacemos la conexión a la base de datos
import conectarDB from './database.js'

// Importamos las rutas de los funkos
import funkoRoutes from './routes/funkos.routes.js'

// Importamos las rutas del mensaje del formulario

import mensajesRoutes from './routes/mensajes.routes.js';


// Cargamos variables de entorno (.env)
dotenv.config()

// Iniciamos Express
const app = express()

// Conectamos a MongoDB
conectarDB()

// Middleware para leer JSON y permitir CORS
app.use(express.json())
app.use(cors())

// Ruta para subir imágenes
app.use('/api/upload', uploadRoutes)

// Hacemos pública la carpeta uploads
app.use('/uploads', express.static('uploads'))

// Prefijo para las rutas de nuestra API (funkos)
app.use('/api/funkos', funkoRoutes)

//Prefijo para las rutas de nuestra API (mensajes)
app.use('/api/mensajes', mensajesRoutes);

// Puerto de escucha (4000 por defecto)
const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
