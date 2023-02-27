const { Schema, model } = require("mongoose");

const deudorSchema = new Schema(
  {
    fecha: String,
    nombre_deudor: String,
    deuda: String,
    usuario: String,
    descripcion: String
  },
  {
    timestamps: true,
  }
);

module.exports = model("Deudor", deudorSchema);
