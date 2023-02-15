const { Router } = require("express");
const router = Router();

const {
  createModule,
  getmodules,
  deleteModulo,
  getModulo,
  updateModulo,
} = require("../controller/modules.controller");

router.route("/").get(getmodules).post(createModule);

router.route("/:id").get(getModulo).delete(deleteModulo).put(updateModulo);

module.exports = router;
