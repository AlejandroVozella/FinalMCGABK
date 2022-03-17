const express =require("express");
const controladora=require("../../controllers/cabana");
const router =express.Router();

router.get("/", controladora.getCabanas);
router.post("/", controladora.addCabana);
router.get("/:id", controladora.getCabanaById);
router.delete("/:id", controladora.deleteCabanaById);
router.put("/:id", controladora.updateCabanaById);

module.exports=router;