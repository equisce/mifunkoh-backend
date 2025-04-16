import express from 'express'
import multer from 'multer'
import path from 'path'

const router = express.Router()

// Configuración del almacenamiento
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/') // Carpeta donde se guardarán mis imagenes
  },
  filename(req, file, cb) {
    const ext = path.extname(file.originalname)
    cb(null, `${Date.now()}${ext}`) // nombre con timestamp
  }
})

// Middleware multer
const upload = multer({ storage })

// Ruta para subir mis imágenes
router.post('/', upload.single('imagen'), (req, res) => {
  res.json({ url: `/uploads/${req.file.filename}` })
})

export default router
