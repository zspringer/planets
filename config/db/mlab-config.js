var mongoose = require("mongoose");
var connection = mongoose.connection;
mongoose.connect("mongodb://student:student@ds013414.mlab.com:13414/planets", {
  server:{socketOptions:{keepAlive:300000, connectTimeoutMS:30000}},
  replset:{socketOptions:{keepAlive:300000, connectTimeoutMS:30000}}
})

connection.on('error',(err)=>{
  console.log("mlab Error: ", err)
})

connection.once('open', ()=>{
  console.log("connected to Mlab baby")
})

