const express = require("express");
const {
  getUser,
  getAllUsers,
  createUser,
  deleteUser,
} = require("./../controllers/user");

const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);
router.route("/:username").get(getUser).delete(deleteUser);

module.exports = router;
