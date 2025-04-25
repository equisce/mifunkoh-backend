const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

// Configuración del almacenamiento
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/'); // Carpeta donde se guardarán las imágenes
  },
  filename(req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}${ext}`); // nombre con timestamp
  }
});

// Middleware multer
const upload = multer({ storage });

// Ruta para subir imágenes
router.post('/', upload.single('imagen'), (req, res) => {
  res.json({ url: `/uploads/${req.file.filename}` });
});

module.exports = router;
