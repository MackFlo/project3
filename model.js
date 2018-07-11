const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ZillowSchema = new Schema({
  name: {
    type: String
  },
  url: {
    type: String
  },
  price: {
    type: Number
  }
});

const Zillow = mongoose.model("Zillow", ZillowSchema);
module.exports = Zillow;