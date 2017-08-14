var mongoose = require("mongoose");


var moonSchema = new mongoose.Schema({
  name: {type: String, required:true}
})

var Moon = mongoose.model("Moon", moonSchema);