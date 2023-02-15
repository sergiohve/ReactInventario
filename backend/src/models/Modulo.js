const { Schema, model } = require("mongoose");

const moduloSchema = new Schema(
  {
    nombre: String,
    dibujo: String,
    link: String
  },
  {
    timestamps: true,
  }
);

module.exports = model("Modulo", moduloSchema);
