const express = require("express");
const controller = require("../../controllers/login");

const router = express.Router();

router.route("/").post(controller.login);

module.exports = router;
