const express = require("express");
const {
  getAllProductOfOwner,
  createProduct,
  deleteProduct,
  getProduct,
  getAllProducts,
} = require("./../controllers/product");

const router = express.Router();

router.route("/").get(getAllProducts).post(createProduct);
router.route("/:id").get(getProduct).delete(deleteProduct);
router.route("/user/:username").get(getAllProductOfOwner);

module.exports = router;
