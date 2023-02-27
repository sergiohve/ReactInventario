const { Schema, model } = require("mongoose");

const cierreventaSchema = new Schema(
  {
    cierreventa: Boolean,
    dolarhoy: Number,
    fecha: String
  },
  {
    timestamps: true,
  }
);

module.exports = model("Cierreventa", cierreventaSchema);
