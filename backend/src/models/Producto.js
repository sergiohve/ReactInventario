const { Schema, model } = require("mongoose");

const productoSchema = new Schema(
  {
    nombre: String,
    precio: Number,
    cantidad: Number
  },
  {
    timestamps: true
  }
);

module.exports = model("Producto", productoSchema)