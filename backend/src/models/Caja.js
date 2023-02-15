const { Schema, model } = require("mongoose");

const cajaSchema = new Schema(
  {
    numero_caja: Number,
    codigo: String,
    efectivo: Number, 
    estado: String
  },
  {
    timestamps: true,
  }
);

module.exports = model("Caja", cajaSchema);
