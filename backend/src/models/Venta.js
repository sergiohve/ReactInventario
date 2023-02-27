const { Schema, model } = require("mongoose");

const ventaSchema = new Schema(
  {
    codigo: String,
    precio: Number,
    cantidad: Number,
    metodo_pago: String,
    fecha: String,
    cliente: String,
    vendedor: String,
    total: Number,
    estado: String,
    descripcion: String,
    totalbs: String
  },
  {
    timestamps: true,
  }
);

module.exports = model("Venta", ventaSchema);
