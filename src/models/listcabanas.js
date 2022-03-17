const mongoose = require("mongoose");


const listcabanasSchema = new mongoose.Schema({
    Nombre: String,
    Capacidad: Number,
    Precio:Number,
    Ubicacion:String
});

module.exports = mongoose.model("ListadoCabanas", listcabanasSchema);