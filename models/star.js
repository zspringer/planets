var mongoose = require("mongoose");


var starSchema = new mongoose.Schema({
  name: {type: String, required:true}
})

var Star = mongoose.model("Star", starSchema);