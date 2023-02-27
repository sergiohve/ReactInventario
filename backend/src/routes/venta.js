const { Router } = require("express");
const router = Router();

const {
  createVenta,
  getVenta,
  deleteVenta,
  getVentas,
  updateVenta,
} = require("../controller/ventas.controller");

router.route("/").get(getVentas).post(createVenta);

router.route("/:id").get(getVenta).delete(deleteVenta).put(updateVenta);

module.exports = router;
