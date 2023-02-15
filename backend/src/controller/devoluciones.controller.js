const devolucionesCtrl = {};

const Devoluciones = require("../models/Devoluciones");

//Traer todos los modulos
devolucionesCtrl.getDevoluciones = async (req, res) => {
  const devoluciones = await Devoluciones.find();
  res.json(devoluciones);
};

//Crear una nueva caja
devolucionesCtrl.createDevoluciones = async (req, res) => {
  const { fecha, tipo, producto, cantidad, precio, total, vendedor } = req.body;
  const newDevolucion = new Devoluciones({
    fecha: fecha,
    tipo: tipo,
    producto: producto,
    cantidad: cantidad,
    precio: precio,
    total: total,
    vendedor: vendedor
  });
  await newDevolucion.save();
  res.json({ message: "La devolución ha sido creada" });
};

//Traer una sola caja
devolucionesCtrl.getDevolucion = async (req, res) => {
  const devolucion = await Devoluciones.findById(req.params.id);
  res.json(devolucion);
};
//Eliminar una caja
devolucionesCtrl.deleteDevolucion = async (req, res) => {
  await Devoluciones.findByIdAndDelete(req.params.id);
  res.json({ message: "La devolución ha sido eliminada" });
};
//Actualizar una caja
devolucionesCtrl.updateDevolucion = async (req, res) => {
  const { fecha, tipo, producto, cantidad, precio, total, vendedor } = req.body;
  await Devoluciones.findByIdAndUpdate(req.params.id, {
    fecha,
    tipo,
    producto,
    cantidad,
    precio,
    total,
    vendedor
  });
  res.json({ message: "La devoluciones ha sido actualizada" });
};

module.exports = devolucionesCtrl;
