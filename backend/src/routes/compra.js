const { Router } = require("express");
const router = Router();

const {
  createCompra,
  getCompra,
  deleteCompra,
  getCompras,
  updateCompra,
} = require("../controller/compras.controller");

router.route("/").get(getCompras).post(createCompra);

router.route("/:id").get(getCompra).delete(deleteCompra).put(updateCompra);

module.exports = router;
