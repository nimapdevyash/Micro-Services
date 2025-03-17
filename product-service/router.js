const express = require("express");
const {
  getAllProductOfOwner,
  createProduct,
  deleteProduct,
  getProduct,
} = require("./controller");

const router = express.Router();

router.route("/").get(getProduct).post(createProduct).delete(deleteProduct);
router.route("/all").get(getAllProductOfOwner);

module.exports = router;
