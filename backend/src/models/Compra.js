const { Schema, model } = require("mongoose");

const compraSchema = new Schema(
  {
    fecha: String,
    total: Number,
    proveedor: String,
    usuario: String,
    descripcion: String
  },
  {
    timestamps: true,
  }
);

module.exports = model("Compra", compraSchema);
