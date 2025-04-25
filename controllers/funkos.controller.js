const Funko = require('../models/Funko');

// GET /api/funkos - Obtener todos los funkos (con filtro opcional por categoría)
const obtenerFunkos = async (req, res) => {
  try {
    const { categoria } = req.query;
    const query = categoria ? { categoria } : {};
    const funkos = await Funko.find(query);
    res.json(funkos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los Funkos' });
  }
};

// GET /api/funkos/:id - Obtener un funko por ID
const obtenerFunko = async (req, res) => {
  try {
    const funko = await Funko.findById(req.params.id);
    if (!funko) return res.status(404).json({ mensaje: 'Funko no encontrado' });
    res.json(funko);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al buscar el Funko' });
  }
};

// POST /api/funkos - Crear un nuevo funko
const crearFunko = async (req, res) => {
  try {
    const nuevoFunko = new Funko(req.body);
    const funkoGuardado = await nuevoFunko.save();
    res.status(201).json(funkoGuardado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear el Funko', error });
  }
};

// PUT /api/funkos/:id - Actualizar un funko
const actualizarFunko = async (req, res) => {
  try {
    const funkoActualizado = await Funko.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!funkoActualizado) return res.status(404).json({ mensaje: 'Funko no encontrado' });
    res.json(funkoActualizado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar el Funko' });
  }
};

// DELETE /api/funkos/:id - Eliminar un funko
const eliminarFunko = async (req, res) => {
  try {
    const funkoEliminado = await Funko.findByIdAndDelete(req.params.id);
    if (!funkoEliminado) return res.status(404).json({ mensaje: 'Funko no encontrado' });
    res.json({ mensaje: 'Funko eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el Funko' });
  }
};

module.exports = {
  obtenerFunkos,
  obtenerFunko,
  crearFunko,
  actualizarFunko,
  eliminarFunko
};
