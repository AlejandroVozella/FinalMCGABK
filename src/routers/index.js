const express = require("express");

const cabanas = require("./cabanas");
const clientes= require("./clientes");
const recepcionistas=require("./recepcionistas");
const reservas =require("./reservas");
const login =require("./login");

const router =express.Router();

router.use ("/cabanas",cabanas);
router.use ("/clientes",clientes);
router.use ("/recepcionistas",recepcionistas);
router.use ("/reservas",reservas);
router.use ("/login",login);

module.exports=router;