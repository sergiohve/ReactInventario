const comprasCtrl = {};

const Compra = require("../models/Compra");

//Traer todos los modulos
comprasCtrl.getCompras = async (req, res) => {
  const compras = await Compra.find();
  res.json(compras);
};

//Crear una nueva caja
comprasCtrl.createCompra = async (req, res) => {
  const { fecha, total, proveedor, usuario, descripcion } = req.body;
  const newCompra = new Compra({
    fecha: fecha,
    total: total,
    proveedor: proveedor,
    usuario: usuario,
    descripcion: descripcion
  });
  await newCompra.save();
  res.json({ message: "La compra ha sido creada" });
};

//Traer una sola caja
comprasCtrl.getCompra = async (req, res) => {
  const compra = await Compra.findById(req.params.id);
  res.json(compra);
};
//Eliminar una caja
comprasCtrl.deleteCompra = async (req, res) => {
  await Compra.findByIdAndDelete(req.params.id);
  res.json({ message: "La compra ha sido eliminada" });
};
//Actualizar una caja
comprasCtrl.updateCompra = async (req, res) => {
  const { fecha, total, proveedor, usuario, descripcion } = req.body;
  await Compra.findByIdAndUpdate(req.params.id, {
    fecha,
    total,
    proveedor,
    usuario,
    descripcion
  });
  res.json({ message: "La compra ha sido actualizada" });
};

module.exports = comprasCtrl;
