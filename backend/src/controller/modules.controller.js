const modulesCtrl = {};

const Modulo = require("../models/Modulo");

//Traer todos los modulos
modulesCtrl.getmodules = async (req, res) => {
  const modules = await Modulo.find()
  res.json(modules)
}

//Crear un nuevo modulo
modulesCtrl.createModule = async (req, res) => {
  const { nombre, dibujo } = req.body;
  const newModule = new Modulo({
    nombre: nombre,
    dibujo: dibujo,
    link: link
  })
  await newModule.save();
  res.json({ message: "El modulo ha sido creado" })
}

//Traer un solo modulo
modulesCtrl.getModulo = async (req, res) => {
  const modulo = await Modulo.findById(req.params.id);
  res.json(modulo);
}
//Eliminar un modulo
modulesCtrl.deleteModulo = async (req, res) => {
  await Modulo.findByIdAndDelete(req.params.id);
  res.json({ message:"El modulo ha sido eliminado" });
}
//Actualizar un modulo
modulesCtrl.updateModulo = async (req, res) => {
    const { nombre, dibujo } = req.body;
    await Modulo.findByIdAndUpdate(req.params.id, {
        nombre,
        dibujo,
        link

    })
    res.json({message: "El modulo ha sido actualizado"})
}

module.exports = modulesCtrl;