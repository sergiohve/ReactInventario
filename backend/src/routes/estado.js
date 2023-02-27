const { Router } = require("express");
const router = Router();

const { getEstados, createEstado } = require("../controller/estado.controller");

router.route("/").get(getEstados).post(createEstado);

module.exports = router;
