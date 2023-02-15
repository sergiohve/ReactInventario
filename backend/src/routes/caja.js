const { Router } = require("express");
const router = Router();

const {
  createCaja,
  getcajas,
  deleteCaja,
  getCaja,
  updateCaja,
} = require("../controller/cajas.controller");

router.route("/").get(getcajas).post(createCaja);

router.route("/:id").get(getCaja).delete(deleteCaja).put(updateCaja);

module.exports = router;
