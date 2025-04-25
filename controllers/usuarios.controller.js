const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Generar token
const generarToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '7d'
  });
};

// Registro de usuario
exports.registro = async (req, res) => {
  const { nombre, email, password } = req.body;
  try {
    const existe = await User.findOne({ email });
    if (existe) return res.status(400).json({ mensaje: 'El usuario ya existe' });

    const nuevoUsuario = new User({ nombre, email, password });
    await nuevoUsuario.save();

    res.status(201).json({ token: generarToken(nuevoUsuario), usuario: { nombre, email } });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al registrar', error });
  }
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const usuario = await User.findOne({ email });
    if (!usuario) return res.status(404).json({ mensaje: 'Usuario no encontrado' });

    const esValido = await usuario.compararPassword(password);
    if (!esValido) return res.status(401).json({ mensaje: 'Contraseña incorrecta' });

    res.status(200).json({
      token: generarToken(usuario),
      usuario: { nombre: usuario.nombre, email: usuario.email }
    });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al iniciar sesión', error });
  }
};
