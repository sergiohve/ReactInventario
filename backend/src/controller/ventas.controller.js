const ventasCtrl = {};

const Venta = require("../models/Venta");

//Traer todos los modulos
ventasCtrl.getVentas = async (req, res) => {
  const ventas = await Venta.find();
  res.json(ventas);
};

//Crear una nueva caja
ventasCtrl.createVenta = async (req, res) => {
  const {
    codigo,
    precio,
    cantidad,
    metodo_pago,
    fecha,
    cliente,
    vendedor,
    total,
    totalbs,
    estado, 
    descripcion
  } = req.body;
  const newVenta = new Venta({
    codigo: codigo,
    precio: precio,
    cantidad: cantidad,
    metodo_pago: metodo_pago,
    fecha: fecha,
    cliente: cliente,
    vendedor: vendedor,
    total: total,
    totalbs: totalbs,
    estado: estado,
    descripcion: descripcion
  });
  await newVenta.save();
  res.json({ message: "La venta ha sido creada" });
};

//Traer una sola caja
ventasCtrl.getVenta = async (req, res) => {
  const venta = await Venta.findById(req.params.id);
  res.json(venta);
};
//Eliminar una caja
ventasCtrl.deleteVenta = async (req, res) => {
  await Venta.findByIdAndDelete(req.params.id);
  res.json({ message: "La venta ha sido eliminada" });
};
//Actualizar una caja
ventasCtrl.updateVenta = async (req, res) => {
  const {
    codigo,
    precio,
    cantidad,
    metodo_pago,
    fecha,
    cliente,
    vendedor,
    total,
    totalbs,
    estado,
    descripcion
    
  } = req.body;
  await Venta.findByIdAndUpdate(req.params.id, {
    codigo,
    precio,
    cantidad,
    metodo_pago,
    fecha,
    cliente,
    vendedor,
    total,
    totalbs,
    estado,
    descripcion
  });
  res.json({ message: "La venta ha sido actualizada" });
};

module.exports = ventasCtrl;
