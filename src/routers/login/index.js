const express = require("express");
const controller=require("../../controllers/login");

const router =express.Router();

router.route("/").get(controller.login);




module.exports = router;