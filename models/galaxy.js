var mongoose = require("mongoose");


var galaxySchema = new mongoose.Schema({
  name: { type: String, required: true }
})

var Galaxy = mongoose.model("Galaxy", galaxySchema);

module.exports = Galaxy