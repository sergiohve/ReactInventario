const deudoresCtrl = {};

const Deudor = require("../models/Deudor");

//Traer todos los modulos
deudoresCtrl.getDeudores = async (req, res) => {
  const deudor = await Deudor.find();
  res.json(deudor);
};

//Crear una nueva caja
deudoresCtrl.createDeudor = async (req, res) => {
  const { fecha, nombre_deudor, deuda, usuario, descripcion } = req.body;
  const newDeudor = new Deudor({
    fecha: fecha,
    nombre_deudor: nombre_deudor,
    deuda: deuda,
    usuario: usuario,
    descripcion: descripcion
  });
  await newDeudor.save();
  res.json({ message: "La deuda ha sido creada" });
};

//Traer una sola caja
deudoresCtrl.getDeudor = async (req, res) => {
  const deudor = await Deudor.findById(req.params.id);
  res.json(deudor);
};
//Eliminar una caja
deudoresCtrl.deleteDeudor= async (req, res) => {
  await Deudor.findByIdAndDelete(req.params.id);
  res.json({ message: "La deuda ha sido eliminada" });
};
//Actualizar una caja
deudoresCtrl.updateDeudor = async (req, res) => {
  const { fecha, nombre_deudor, deuda, usuario, descripcion } = req.body;
  await Deudor.findByIdAndUpdate(req.params.id, {
    fecha,
    nombre_deudor,
    deuda,
    usuario,
    descripcion
  });
  res.json({ message: "La deuda ha sido actualizada" });
};

module.exports = deudoresCtrl;
