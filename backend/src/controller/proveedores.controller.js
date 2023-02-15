const proveedoresCtrl = {};

const Proveedor = require("../models/Proveedor");

//Traer todos los modulos
proveedoresCtrl.getProveedores = async (req, res) => {
  const proveedor = await Proveedor.find();
  res.json(proveedor);
};

//Crear una nueva caja
proveedoresCtrl.createProveedor = async (req, res) => {
  const { nombre, telefono, email, estado } = req.body;
  const newProveedor = new Proveedor({
    nombre: nombre,
    telefono: telefono,
    email: email,
    estado: estado,
  });
  await newProveedor.save();
  res.json({ message: "El proveedor ha sido nombrado" });
};

//Traer una sola caja
proveedoresCtrl.getProveedor = async (req, res) => {
  const proveedor = await Proveedor.findById(req.params.id);
  res.json(proveedor);
};
//Eliminar una caja
proveedoresCtrl.deleteProveedor = async (req, res) => {
  await Proveedor.findByIdAndDelete(req.params.id);
  res.json({ message: "El proveedor ha sido eliminado" });
};
//Actualizar una caja
proveedoresCtrl.updateProveedor = async (req, res) => {
  const { nombre, telefono, email, estado } = req.body;
  await Proveedor.findByIdAndUpdate(req.params.id, {
    nombre,
    telefono,
    email,
    estado,
  });
  res.json({ message: "La información del proveedor ha sido actualizada" });
};

module.exports = proveedoresCtrl;
