const { Router } = require("express");
const router = Router();

const {
  createUser,
  getUsers,
  deleteUser,
  getUsuario,
  updateUser,
} = require("../controller/usuario.controller");

router.route("/").get(getUsers).post(createUser);

router.route("/:id").get(getUsuario).delete(deleteUser).put(updateUser);

module.exports = router;
