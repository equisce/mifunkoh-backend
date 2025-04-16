import express from 'express'
import {
  obtenerFunkos,
  obtenerFunko,
  crearFunko,
  actualizarFunko,
  eliminarFunko
} from '../controllers/funkos.controller.js'

const router = express.Router()

// Ruta para obtener todos los funkos y filtrar por categoría
router.get('/', obtenerFunkos)        

// Crear un nuevo funko
router.post('/', crearFunko)        

// Obtener, actualizar o eliminar un funko por ID
router.route('/:id')
  .get(obtenerFunko)                 
  .put(actualizarFunko)              
  .delete(eliminarFunko)             

export default router
