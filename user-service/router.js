const express = require("express");
const { getUser, createUser, deleteUser } = require("./controller");

const router = express.Router();

router.route("/").get(getUser).post(createUser).delete(deleteUser);

module.exports = router;
