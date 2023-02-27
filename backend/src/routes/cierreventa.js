const { Router } = require("express");
const router = Router();

const {
  createCierreventa,
  getCierreventa,
  deleteCierreventa,
  getCierreventas,
  updateCierreventa,
} = require("../controller/cierreventas.controller");

router.route("/").get(getCierreventas).post(createCierreventa);

router.route("/:id").get(getCierreventa).delete(deleteCierreventa).put(updateCierreventa);

module.exports = router;
