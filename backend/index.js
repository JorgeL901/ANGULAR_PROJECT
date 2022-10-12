var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose =require("mongoose");
var port = 3000;
var cors = require("cors");
//conexion con Mongo
mongoose.connect("mongodb+srv://jorge901:Naruto901@cluster0.cs7i4cn.mongodb.net/BD_control_gastos?retryWrites=true&w=majority")
.then(function(bd){
    //que sucede si todo solo sale bien es decir se conecta la base de datos
        console.log("Se conecto a la base de datos "+ bd );
    })
    .catch(function(err){
        //que sucede si no se conecta
        console.log(err);
    });

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors())

//var mov = require('/models/movimientos');
const Movimiento = require("./models/movimientos");



app.get('/obtener_movimiento', async function(req,res){
  var m = await Movimiento.find();
  res.send(m)
})

app.get('/obtener_grafica', async function(req,res){
  var g = await Movimiento.find().select({"concepto":1 ,"monto":1 , "_id":0});
  console.log(g)
  res.send(g)
})

app.post('/crear_movimiento', async function(req,res){
  var datos = req.body;
    console.log(datos)
    var m = new Movimiento(datos);
    await m.save();
    res.send({mensaje :"Movimiento guardado"})

})



app.delete('/eliminar_movimiento/:id',async function(req,res){
  var id_mov = req.params.id;
  await Movimiento.findByIdAndRemove(id_mov);
  res.send({mensaje : "Eliminado Correctamente"})
})

app.listen(port,function(){
  console.log("Servidor iniciando en el puerto" + port)
})
