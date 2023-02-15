const { Router } = require("express");
const router = Router();

const {
  createProveedor,
  getProveedores,
  deleteProveedor,
  getProveedor,
  updateProveedor,
} = require("../controller/proveedores.controller");

router.route("/").get(getProveedores).post(createProveedor);

router.route("/:id").get(getProveedor).delete(deleteProveedor).put(updateProveedor);

module.exports = router;
