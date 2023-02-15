const { Schema, model } = require("mongoose");

const devolucionesSchema = new Schema(
  {
    fecha: String,
    tipo: String,
    producto: String, 
    cantidad: Number,
    precio: Number,
    total: Number,
    vendedor: String
  },
  {
    timestamps: true,
  }
);

module.exports = model("Devolucion", devolucionesSchema);
