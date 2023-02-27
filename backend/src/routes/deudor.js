const { Router } = require("express");
const router = Router();

const {
  createDeudor,
  getDeudor,
  deleteDeudor,
  getDeudores,
  updateDeudor,
} = require("../controller/deudores.controller");

router.route("/").get(getDeudores).post(createDeudor);

router.route("/:id").get(getDeudor).delete(deleteDeudor).put(updateDeudor);

module.exports = router;
