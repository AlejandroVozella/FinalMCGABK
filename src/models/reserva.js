const mongoose = require("mongoose");


const reservaEsquema = new mongoose.Schema({

    Reserva: {
        type: Number,
        require : [true,"el campo Reserva es requerido"],

    },
    fechaInicio : {
        type: Date,
        require : [true,"el campo Fecha Inicio  es requerido"],
        
    },
    fechaFin : {
        type: Date,
        require : [true,"el campo Fecha Fin  es requerido"],
        
    },
    cliente : {
        type: String,
        require : [true,"el Campo Cliente es requerido"],
        
    },
    
    
});

module.exports = mongoose.model("Reserva", reservaEsquema);