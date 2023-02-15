const usuarioCtrl = {};

const Usuario = require("../models/Usuario");

//Traer todos los usuarios
usuarioCtrl.getUsers = async (req, res) => {
  const usuarios = await Usuario.find()
  res.json(usuarios)
}

//Crear un nuevo usuario
usuarioCtrl.createUser = async (req, res) => {
  const { nombre, apellido, correo, telefono, edad } = req.body;
  const newUser = new Usuario({
    nombre: nombre,
    apellido: apellido,
    correo: correo,
    telefono: telefono,
    edad: edad,
  })
  await newUser.save();
  res.json({ message: "El usuario ha sido creado" })
}

//Traer un solo usuario
usuarioCtrl.getUsuario = async (req, res) => {
  const usuario = await Usuario.findById(req.params.id);
  res.json(usuario);
}
//Eliminar un usuario
usuarioCtrl.deleteUser = async (req, res) => {
  await Usuario.findByIdAndDelete(req.params.id);
  res.json({ message: "Usuario ha sido eliminado" });
}
//Actualizar un usuario
usuarioCtrl.updateUser = async (req, res) => {
    const { nombre, apellido, correo, telefono, edad } = req.body;
    await Usuario.findByIdAndUpdate(req.params.id, {
        nombre,
        apellido,
        edad,
        correo,
        telefono

    })
    res.json({message: "El usuario ha sido actualizado"})
}

module.exports = usuarioCtrl;