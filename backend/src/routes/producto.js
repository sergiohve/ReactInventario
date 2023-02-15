const { Router } = require("express");
const router = Router();

const {
  createProduct,
  getProducts,
  deleteProduct,
  getProduct,
  updateProduct,
} = require("../controller/producto.controller");

router.route("/").get(getProducts).post(createProduct);

router.route("/:id").get(getProduct).delete(deleteProduct).put(updateProduct);

module.exports = router;
