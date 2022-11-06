const mongoose = require("mongoose");

const recepcionistaEsquema = new mongoose.Schema({
  usuario: {
    type: String,
    require: [true, "el usuario es requerido"],
  },
  contraseña: {
    type: String,
    require: [true, "la  es requerida"],
  },
  nombre: {
    type: String,
    require: [true, "el Nombre  es requerido"],
  },
  apellido: {
    type: String,
    require: [true, "el Apellido  es requerido"],
  },
});

module.exports = mongoose.model("Recepcionista", recepcionistaEsquema);
