const mongoose = require("mongoose");

const PictureSchema = new mongoose.Schema({
  email: { type: String },
  image: { type: String }
});

module.exports = mongoose.model("Picture", PictureSchema);
