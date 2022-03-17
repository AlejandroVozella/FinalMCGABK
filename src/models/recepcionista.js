const mongoose = require("mongoose");

const recepcionistaEsquema = new mongoose.Schema({
    usuario: {
        type: String,
        require : [true,"el usuario es requerido"],

    },
    password : {
        type: String,
        require : [true,"la  es requerida"],
        
    },
    Nombre : {
        type: String,
        require : [true,"el Nombre  es requerido"],
        
    },
    Apellido : {
        type: String,
        require : [true,"el Apellido  es requerido"],
        
    },
});

module.exports=mongoose.model("Recepcionista",recepcionistaEsquema);