const express = require("express");
const controller=require("../../controllers/reserva");

const router =express.Router();

router.route("/").get(controller.getReservas);

router.route("/:reservaId").get(controller.getReservaById);

router.route("/").post(controller.addReserva);

router.route("/:reservaId").delete(controller.deleteReservaById);

router.route("/:reservaId").put(controller.updateReservaById);


module.exports = router;