const { Schema, model } = require("mongoose");

const proveedorSchema = new Schema(
  {
    nombre: String,
    telefono: Number,
    email: String, 
    estado: String
  },
  {
    timestamps: true,
  }
);

module.exports = model("Proveedor", proveedorSchema);
