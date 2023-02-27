const estadosCtrl = {};

const Estado = require("../models/Estado");

//Traer todos los modulos
estadosCtrl.getEstados = async (req, res) => {
  const estados = await Estado.find();
  res.json(estados);
};
estadosCtrl.createEstado = async (req, res) => {
    const { estado } = req.body;
    const newEstado = new Estado({
     estado
    })
    await newEstado.save();
    res.json({ message: "El estado ha sido creado" })
  }
module.exports = estadosCtrl;
