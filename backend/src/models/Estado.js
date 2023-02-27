const { Schema, model } = require("mongoose");

const estadoSchema = new Schema(
  {
    estado: String
  },
  {
    timestamps: true,
  }
);

module.exports = model("Estado", estadoSchema);
