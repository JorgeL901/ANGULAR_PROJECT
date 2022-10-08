var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Movimiento = new Schema({
  fecha: String,
  concepto: String,
  monto: Number,
  categoria : String

})


module.exports=mongoose.model("Movimientos",Movimiento)
