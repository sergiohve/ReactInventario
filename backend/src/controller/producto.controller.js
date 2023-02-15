const productoCtrl = {};

const Producto = require("../models/Producto");

//Traer todos los productos
productoCtrl.getProducts = async (req, res) => {
  const usuarios = await Producto.find()
  res.json(usuarios)
}

//Crear un nuevo producto
productoCtrl.createProduct = async (req, res) => {
  const { nombre, precio, cantidad } = req.body;
  const newProduct = new Producto({
    nombre: nombre,
    precio: precio,
    cantidad: cantidad
  })
  await newProduct.save();
  res.json({ message: "El producto ha sido creado" })
}

//Traer un solo modulo
productoCtrl.getProduct = async (req, res) => {
  const producto = await Producto.findById(req.params.id);
  res.json(producto);
}
//Eliminar un modulo
productoCtrl.deleteProduct = async (req, res) => {
  await Producto.findByIdAndDelete(req.params.id);
  res.json({ message: "Producto ha sido eliminado" });
}
//Actualizar un modulo
productoCtrl.updateProduct = async (req, res) => {
    const { nombre, precio, cantidad } = req.body;
    await Producto.findByIdAndUpdate(req.params.id, {
        nombre,
        precio,
        cantidad
 })
    res.json({message: "El producto ha sido actualizado"})
}

module.exports = productoCtrl;