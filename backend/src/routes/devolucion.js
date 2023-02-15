const { Router } = require("express");
const router = Router();

const {
  createDevoluciones,
  getDevolucion,
  deleteDevolucion,
  getDevoluciones,
  updateDevolucion,
} = require("../controller/devoluciones.controller");

router.route("/").get(getDevoluciones).post(createDevoluciones);

router.route("/:id").get(getDevolucion).delete(deleteDevolucion).put(updateDevolucion);

module.exports = router;
