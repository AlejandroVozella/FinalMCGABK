const express=require("express");
const router =require("./routers");
const mongoose=require("mongoose");
const cors = require("cors");
require("dotenv/config");


//const port =3000

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

//CORS 
app.use("/",cors());

app.use ("/",router);

app.get("/",(req,res)=>{
    res.send("Servidor OK");
});

app.listen (port , ()=>{

    console.log ("Server corriendo en puerto:${port}");

});


// mongoose.connect(
//     process.env.DB_CONNECTION,
//     {
//         useUnifiedTopology:true,
//         useNewUrParser:true

//     }
// ), (req,res)=>{
//     console.log("Conectado a la Base de Datos");
// };

mongoose.connect("mongodb+srv://alejandrovozella:jose1529@cluster0.yiwqj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then((result) => {
     console.log("Conexion exitosa con la base de datos");
     }).catch((error) => {
    console.log(`Error en la conexion, error:  ${error}`);
    });






