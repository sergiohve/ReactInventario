const cierreventasCtrl = {};

const Cierreventa = require("../models/Cierreventa");

//Traer todos los modulos
cierreventasCtrl.getCierreventas = async (req, res) => {
  const cierreventas = await Cierreventa.find();
  res.json(cierreventas);
};

//Crear un nuevo cierre
cierreventasCtrl.createCierreventa = async (req, res) => {
  const { cierreventa, dolarhoy, fecha } = req.body;
  const newCierreventa = new Cierreventa({
    cierreventa: cierreventa,
    dolarhoy: dolarhoy,
    fecha: fecha
  });
  await newCierreventa.save();
  res.json({ message: "El cierre de venta ha sido creado" });
};

//Traer un solo Cierreventa
cierreventasCtrl.getCierreventa = async (req, res) => {
  const cierreventa = await Cierreventa.findById(req.params.id);
  res.json(cierreventa);
};
//Eliminar un Cierreventa
cierreventasCtrl.deleteCierreventa = async (req, res) => {
  await Cierreventa.findByIdAndDelete(req.params.id);
  res.json({ message: "El cierre ha sido eliminado" });
};
//Actualizar un Cierreventa
cierreventasCtrl.updateCierreventa = async (req, res) => {
  const { cierreventa, dolarhoy, fecha } = req.body;
  await Cierreventa.findByIdAndUpdate(req.params.id, {
    cierreventa,
    dolarhoy,
    fecha
    
  });
  res.json({ message: "El cierre ha sido actualizado" });
};

module.exports = cierreventasCtrl;
