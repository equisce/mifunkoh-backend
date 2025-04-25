// Importamos las librerías
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Importamos rutas y conexión
const conectarDB = require('./database');
const uploadRoutes = require('./routes/upload.routes');
const funkoRoutes = require('./routes/funkos.routes');
const mensajesRoutes = require('./routes/mensajes.routes');
const usuariosRoutes = require('./routes/usuarios.routes'); // LOGIN

// Cargamos variables de entorno (.env)
dotenv.config();

// Iniciamos Express
const app = express();

// Conectamos a MongoDB
conectarDB();

// Middleware para leer JSON y permitir CORS
app.use(express.json());
app.use(cors());

// Rutas API
app.use('/api/upload', uploadRoutes);
app.use('/uploads', express.static('uploads'));
app.use('/api/funkos', funkoRoutes);
app.use('/api/mensajes', mensajesRoutes);
app.use('/api/usuarios', usuariosRoutes); // LOGIN

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡MiFunk-oh! backend desplegado correctamente');
});

// Puerto
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
