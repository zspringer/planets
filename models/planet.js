var mongoose = require("mongoose");


var planetSchema = new mongoose.Schema({
  name: {type: String, required:true}
})

var Planet = mongoose.model("Planet", planetSchema);